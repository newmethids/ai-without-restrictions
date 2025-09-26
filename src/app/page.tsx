import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className={"font-black text-6xl"}>AI Without Restrictions</h1>
      <ol>
        <li>Spicygen</li>
        <li>Promptchan</li>
        <li>AiAllure</li>
        <li>Ourdream</li>
        <li>Sugarlab</li>
        <li>Lovescape</li>
        <li>DreamCompanion</li>
      </ol>
    </div>
  );
}
