import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className={"font-black text-6xl"}>AI Without Restrictions</h1>
      <h2>Open source directory of unrestricted ai tools. Github <a className={"underline"} target={"_blank"} href={"https://github.com/newmethids/ai-without-restrictions"}>here</a></h2>
      <ol>
        <li>Spicygen</li>
        <li>Promptchan</li>
        <li>AiAllure</li>
        <li>Ourdream</li>
        <li>Sugarlab</li>
        <li>Lovescape</li>
        <li>DreamCompanion</li>
        <li>GirlfriendGPT</li>
        <li>CandyAI</li>
      </ol>
    </div>
  );
}
