import SkillCard from "@/components/SkillCard/SkillCard";
import Next from "../../public/images/skills/logo_nextjs.png";
import Mongo from "../../public/images/skills/logo_mongodb.png";
import Flutter from "../../public/images/skills/logo_flutter.png";
import Git from "../../public/images/skills/logo_git.png";
import Tailwind from "../../public/images/skills/logo_tailwind.png";
import Typescript from "../../public/images/skills/logo_typescript.png";
import Express from "../../public/images/skills/logo_expressjs.png";
import Svelte from "../../public/images/skills/logo_svelte.png";
import Github from "../../public/images/skills/logo_github.png";
import Python from "../../public/images/skills/logo_python.png";
import Java from "../../public/images/skills/logo_java.png";
import Redux from "../../public/images/skills/logo_redux.png";
import CPlusPlus from "../../public/images/skills/logo_c++.png";
import JQuery from "../../public/images/skills/logo_jquery.png";
import Php from "../../public/images/skills/logo_php.png";

export default function SubSkills() {
  const skills = [
    {
      image: Next,
      altText: "next logo",
      cardText: "NextJS",
    },
    {
      image: Mongo,
      altText: "mongo logo",
      cardText: "MongoDB",
    },
    {
      image: Flutter,
      altText: "flutter logo",
      cardText: "Flutter",
    },
    {
      image: Git,
      altText: "git logo",
      cardText: "Git",
    },
    {
      image: Tailwind,
      altText: "tailwind logo",
      cardText: "Tailwind",
    },
    {
      image: Github,
      altText: "github logo",
      cardText: "Github",
    },
    {
      image: Typescript,
      altText: "typescript logo",
      cardText: "Typescript",
    },
    {
      image: Express,
      altText: "express logo",
      cardText: "Express",
    },
    {
      image: Svelte,
      altText: "svelte logo",
      cardText: "Svelte",
    },
    {
      image: Python,
      altText: "python logo",
      cardText: "Python",
    },
    {
      image: Java,
      altText: "java logo",
      cardText: "Java",
    },
    {
      image: Redux,
      altText: "redux logo",
      cardText: "Redux",
    },
    {
      image: CPlusPlus,
      altText: "c++ logo",
      cardText: "C++",
    },
    {
      image: JQuery,
      altText: "jquery logo",
      cardText: "JQuery",
    },
    {
      image: Php,
      altText: "php logo",
      cardText: "Php",
    },
  ];
  return (
    <>
      {skills.map((currentSkill) => (
        <SkillCard
          key={currentSkill.altText}
          image={currentSkill.image}
          altText={currentSkill.altText}
          cardText={currentSkill.cardText}
        />
      ))}
    </>
  );
}
