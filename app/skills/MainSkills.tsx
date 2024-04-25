import SkillCard from "@/components/SkillCard/SkillCard";
import HTML_Logo from "../../public/images/skills/logo_html.png";
import CSS_Logo from "../../public/images/skills/logo_css.png";
import JS_Logo from "../../public/images/skills/logo_javascript.png";
import React_Logo from "../../public/images/skills/logo_react.png";
import Node_Logo from "../../public/images/skills/logo_nodejs.png";
import Firebase_Logo from "../../public/images/skills/logo_firebase.png";

export default function MainSkills() {
  const skills = [
    {
      image: HTML_Logo,
      altText: "html logo",
      cardText: "HTML",
    },
    {
      image: CSS_Logo,
      altText: "css logo",
      cardText: "CSS",
    },
    {
      image: JS_Logo,
      altText: "js logo",
      cardText: "Javascript",
    },
    {
      image: React_Logo,
      altText: "react logo",
      cardText: "React",
    },
    {
      image: Node_Logo,
      altText: "node logo",
      cardText: "NodeJS",
    },
    {
      image: Firebase_Logo,
      altText: "firebase logo",
      cardText: "Firebase",
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
