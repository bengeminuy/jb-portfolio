import Link from "next/link";
import "../../styles/action_buttons.css";

export default function About() {
  return (
    <main className="flex flex-col gap-4 2xl:pt-32 xl:pt-28 xl:pr-16 2xl:pr-0 w-full max-w-screen-2xl items-end">
      <h1 className="2xl:text-8xl xl:text-6xl leading-normal font-bold w-max opacity-80">
        ABOUT
        <span className="2xl:text-4xl xl:text-3xl align-top pl-2">01</span>
      </h1>
      <div className="flex flex-col p-8 pr-0 w-2/3 max-w-2/3 gap-4 2xl:text-2xl xl:text-l">
        <p className="indent-12 text-justify ">
          {"Hello there! I'm John Bengemin Uy, a passionate "}
          <span className="text-custom_accent font-bold">
            full-stack developer
          </span>
          {" based in the Philippines. I earned my "}
          <span className="text-custom_accent font-bold">
            Bachelor of Science degree in Computer Science
          </span>
          {
            " from the University of the Philippines and have accumulated six years of industry experience."
          }
        </p>
        <p className="indent-12 text-justify">
          {
            "My journey into programming began over a decade ago during high school, igniting a passion to enhance lives through innovative applications. I specialize in creating web applications using "
          }
          <span className="text-custom_accent font-bold">Next.js / React</span>
          {" for frontend development, "}
          <span className="text-custom_accent font-bold">
            Express / Node.js
          </span>
          {
            " for backend functionality, Firebase for the NoSQL database, and GitHub for collaborative development."
          }
        </p>
        <p className="indent-12 text-justify">
          {
            "While I'm adaptable across various programming languages and platforms, my expertise lies in crafting intuitive "
          }
          <span className="text-custom_accent font-bold">web apps</span>
          {
            ". Explore my website or download my resume for a comprehensive overview of my skills and past projects. I look forward to the opportunity to collaborate on something extraordinary with you!"
          }
        </p>
      </div>
      <div className="flex flex-row z-1 gap-12 justify-end">
        <Link className="action-btn" href="/skills">
          Check my skills
        </Link>
        <button className="action-btn">Download my resume</button>
      </div>
    </main>
  );
}
