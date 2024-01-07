import { TFirebaseThink } from "@/types/think";

const ThinkContent: React.FC<{ data: TFirebaseThink | null }> = ({ data }) => {
  if (!data) {
    return (
      <div className="w-full max-w-[760px] h-[440px] m-auto mt-16 py-5 font-writer text-dark-400 dark:text-white px-2 md:px-0">
        <span className="text-love-600">[!] --</span> this think is not
        existed...
      </div>
    );
  }

  if (data.challengeCode) {
    return (
      <div className="w-full max-w-[760px] h-[440px] m-auto mt-16 py-5 font-writer text-dark-400 dark:text-white px-2 md:px-0">
        <span className="text-love-600">[!] --</span> this think is in{" "}
        <span className="underline">PRIVATE</span> mode, input{" "}
        <span className="underline">pass-code</span> to read...
      </div>
    );
  }

  return (
    <div
      className="w-full max-w-[760px] m-auto mt-16 py-5 font-writer text-dark-400 dark:text-white px-2 md:px-0"
      dangerouslySetInnerHTML={{ __html: data.content }}
    />
  );
};

export default ThinkContent;
