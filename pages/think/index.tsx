import ThinkContent from "@/components/think/content";
import ThinkHeader from "@/components/think/header";
import { TFirebaseThink } from "@/types/think";
import Head from "next/head";

export default function Thinks() {
  return (
    <>
      <Head>
        <title>nqh · think</title>
      </Head>
      <ThinkHeader title="read my thinks" />
      <ThinkContent data={{ challengeCode: "1" } as TFirebaseThink} />
    </>
  );
}
