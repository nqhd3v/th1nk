import ThinkContent from "@/components/think/content";
import ThinkHeader from "@/components/think/header";
import { generateCodes, isChallengeCodeOK } from "@/helper/zalo-code";
import { getThinkById } from "@/services/server/firebase/think";
import { TServerSideContext } from "@/types";
import { TFirebaseThink } from "@/types/think";
import Head from "next/head";

interface IThinkReadProps {
  data: TFirebaseThink | null;
}

export default function ThinkRead({ data }: IThinkReadProps) {
  return (
    <>
      <Head>
        <title>{data?.title || "nqh · think"}</title>
      </Head>
      <ThinkHeader title={data?.title} />
      <ThinkContent data={data} />
    </>
  );
}

export const getServerSideProps = async ({
  params: { think: thinkId },
  query: { code },
}: TServerSideContext): Promise<{
  props: IThinkReadProps;
}> => {
  const think = await getThinkById(thinkId);
  const isPassChallenge =
    !!code &&
    !!think &&
    !!think.challengeCode &&
    isChallengeCodeOK(code, think.challengeCode);

  console.log(generateCodes());
  return {
    props: {
      data: think
        ? {
            ...think,
            challengeCode:
              think.challengeCode && isPassChallenge
                ? ""
                : think.challengeCode || "",
          }
        : null,
    },
  };
};
