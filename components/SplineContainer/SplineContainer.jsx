"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Application } from "@splinetool/runtime";

export default function SplineContainer() {
  const animation = useAnimation();
  const avatar = useRef();

  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(null);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    const canvas = document.getElementById("spline");
    const spline = new Application(canvas);
    spline
      .load("https://prod.spline.design/T7YOHVWBaA8AOKAk/scene.splinecode")
      .then(() => {
        const avatarObject = spline.findObjectById(
          "6fde2716-a9fb-415f-a17a-74540842d2ba"
        );
        avatar.current = avatarObject;
        avatar.current.position.x = 400;
        avatar.current.position.y = -800;
        avatar.current.position.z = -40;
        avatar.current.scale.x = 3;
        avatar.current.scale.y = 3;
        avatar.current.scale.z = 3;
        avatar.current.rotation.x = 0;
        avatar.current.rotation.y = 0;
        avatar.current.rotation.z = 0;
      });
  }, []);

  useEffect(() => {
    const updateAvatarPosition = () => {
      if (avatar.current) {
        switch (pathname) {
          case "/about":
            avatar.current.position.x = 0;
            avatar.current.position.y = -1300;
            avatar.current.position.z = -40;
            avatar.current.scale.x = 3.5;
            avatar.current.scale.y = 3.5;
            avatar.current.scale.z = 3.5;
            avatar.current.rotation.x = 0;
            avatar.current.rotation.y = 1.5;
            avatar.current.rotation.z = 0;
            break;
          case "/skills":
            avatar.current.position.x = -450;
            avatar.current.position.y = -2100;
            avatar.current.position.z = -40;
            avatar.current.scale.x = 6;
            avatar.current.scale.y = 6;
            avatar.current.scale.z = 6;
            avatar.current.rotation.x = -0.2;
            avatar.current.rotation.y = 0.25;
            avatar.current.rotation.z = -0.05;
            break;
          case "/work":
          case "/projects":
          case "/contact":
            avatar.current.position.x = 0;
            avatar.current.position.y = -1000;
            avatar.current.position.z = -40;
            avatar.current.scale.x = 3.5;
            avatar.current.scale.y = 3.5;
            avatar.current.scale.z = 3.5;
            avatar.current.rotation.x = 0;
            avatar.current.rotation.y = 1.5;
            avatar.current.rotation.z = 0;
            break;
          default:
            avatar.current.position.x = 400;
            avatar.current.position.y = -800;
            avatar.current.position.z = -40;
            avatar.current.scale.x = 3;
            avatar.current.scale.y = 3;
            avatar.current.scale.z = 3;
            avatar.current.rotation.x = 0;
            avatar.current.rotation.y = 0;
            avatar.current.rotation.z = 0;
        }
      }
    };
    if (lastPath !== pathname) {
      setLastPath(pathname);
      animation.start("hidden");
      setTimeout(() => {
        animation.start("visible");
      }, 1000);
      setTimeout(() => {
        updateAvatarPosition();
      }, 500);
    }
  }, [pathname, animation, lastPath]);

  return (
    <motion.div
      animate={animation}
      variants={variants}
      className="absolute top-0 h-full w-full -z-5"
    >
      <canvas id="spline" />
    </motion.div>
  );
}
