import { Sites } from "./sites";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className={"font-black text-6xl text-center"}>AI Without Restrictions</h1>
      <h2 className={"text-center"}>Open source directory of unrestricted ai tools. Github <a className={"underline"} target={"_blank"} href={"https://github.com/newmethids/ai-without-restrictions"}>here</a></h2>
      <Sites />
    </div>
  );
}
