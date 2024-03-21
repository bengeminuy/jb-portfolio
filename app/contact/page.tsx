import Icon from "@mdi/react";
import { mdiFacebook, mdiGithub, mdiLinkedin } from "@mdi/js";
import Link from "next/link";

import "../../styles/hover_glow.css";
import "../../styles/action_buttons.css";

export default function Contact() {
  return (
    <main className="flex flex-col gap-4 2xl:pt-32 xl:pt-28 xl:pr-16 2xl:pr-0 w-full max-w-screen-2xl items-end">
      <h1 className="2xl:text-8xl xl:text-6xl leading-normal font-bold w-max opacity-50">
        CONTACT
        <span className="2xl:text-4xl xl:text-3xl align-top pl-2">05</span>
      </h1>
      <div className="flex flex-row pt-6 pb-6 w-3/5 border bg-custom_accent2 border-gray-600 rounded-lg shadow hvr-glow">
        <form
          id="contact-form"
          className="flex flex-col gap-2 w-3/5 pl-8 pr-8 z-30 items-end"
        >
          <h2 className="text-2xl font-bold w-full pt-2">SEND ME A MESSAGE</h2>
          <label className="pt-2 w-full" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded text-black p-1 z-30 w-full"
            required
          />
          <label className="pt-2 w-full" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            className="rounded resize-none text-black p-1 z-20 w-full"
            required
          />
          <div className="pt-4 pb-3 pr-2">
            <button className="action-btn2">Send</button>
          </div>
        </form>
        <div className="border rounded-lg border-custom_black h-full" />
        <div className="flex gap-1 flex-col z-10 pl-8 pr-4 w-2/5 items-center ">
          <h2 className="text-2xl font-bold w-full pt-2">EMAIL</h2>
          <p className="w-full">{"bengeminuy@gmail.com"}</p>
          <h2 className="text-2xl pt-8 font-bold w-full">SOCIALS</h2>
          <div className="flex flex-row w-full pt-2 justify-center pb-2">
            <Link className="z-10" href={"/"}>
              <Icon path={mdiFacebook} size={2} />
            </Link>
            <Link className="z-10" href={"/"}>
              <Icon path={mdiLinkedin} size={2} />
            </Link>
            <Link className="z-10" href={"/"}>
              <Icon path={mdiGithub} size={2} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
