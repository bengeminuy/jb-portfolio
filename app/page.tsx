import Link from "next/link";
import "../styles/action_buttons.css";
import "../styles/animated_text.css";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 2xl:p-16 2xl:pt-40 xl:p-16 xl:pt-8 w-full max-w-screen-2xl">
      <hgroup className="flex flex-col justify-between">
        <h1 className="text-left text-7xl leading-normal font-bold">{`HI, I'M BENGEMIN!`}</h1>
        <div className="animated-text">
          <h2 className="text-left text-5xl leading-normal font-semibold">
            YOUR <span></span>
          </h2>
        </div>
        <h2 className="text-left text-5xl font-semibold">
          FULLSTACK DEVELOPER
        </h2>
        <h3 className="text-left text-xl pt-8">
          {`>>> `}Let me turn your{" "}
          <span className="text-custom_accent">ideas</span> into a{" "}
          <span className="text-custom_accent">reality</span>.
        </h3>
      </hgroup>
      <div className="flex flex-row z-1 gap-12">
        <Link className="action-btn" href="/about">
          Get to Know Me
        </Link>
        <Link className="action-btn" href="/contact">
          Contact Me
        </Link>
      </div>
    </main>
  );
}
