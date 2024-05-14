import Link from "next/link";

import "../../styles/action_buttons.css";

import MainSkills from "./MainSkills";
import SubSkills from "./SubSkills";

export default function Skills() {
  return (
    <main className="flex flex-col gap-2 2xl:pt-32 xl:pt-28 xl:pr-16 2xl:pr-0 w-full max-w-screen-2xl items-center">
      <h1 className="2xl:text-8xl xl:text-6xl leading-normal font-bold w-5/6 opacity-80">
        SKILLS
        <span className="2xl:text-4xl xl:text-3xl align-top pl-2">02</span>
      </h1>
      <div className="flex py-2 px-4 pr-0 w-5/6 max-w-5/6 gap-4 2xl:text-2xl xl:text-l">
        <div className="flex flex-col w-2/5 max-w-2/5 items-end">
          <h2 className="font-bold 2xl:text-4xl xl:text-3xl pb-2">MAIN</h2>
          <div className="flex w-full flex-wrap p-2 gap-2 justify-end">
            <MainSkills />
          </div>
        </div>
        <div className="inline-block h-full w-0.5 self-stretch bg-neutral-100 opacity-80" />
        <div className="flex flex-col w-3/5 max-w-3/5">
          <h2 className="font-bold 2xl:text-4xl xl:text-3xl pb-2">
            SUB
            <span className="2xl:text-2xl xl:text-xl align-middle pl-2 font-extralight">
              {"*sorted by expertise"}
            </span>
          </h2>
          <div className="flex w-full flex-wrap p-2 gap-2 justify-start">
            <SubSkills />
          </div>
        </div>
      </div>
      <div className="flex flex-row z-1 gap-12 w-full justify-end xl:pt-4 2xl:pt-8">
        <Link className="action-btn" href="/work">
          Check my work history
        </Link>
        <Link className="action-btn" href="/projects">
          Check my projects
        </Link>
      </div>
    </main>
  );
}
