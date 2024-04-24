"use client";

interface SplineObject {
  name: string;
  id: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    x: number;
    y: number;
    z: number;
  };
  scale: {
    x: number;
    y: number;
    z: number;
  };
}

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion, useAnimation } from "framer-motion";
import Loading from "../Loading/Loading";

export default function SplineContainer() {
  const animation = useAnimation();
  const avatar = useRef<SplineObject | null>();

  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isChangingRoute, setIsChangingRoute] = useState(false);
  const [lastPath, setLastPath] = useState<String | null>(null);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  function onLoad(spline: any) {
    console.log("Loaded");
    const avatarObject = spline.findObjectById(
      "6fde2716-a9fb-415f-a17a-74540842d2ba"
    ) as SplineObject;
    avatar.current = avatarObject;
    if (avatar.current) {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    const updateAvatarPosition = () => {
      console.log("updating position");
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
            avatar.current.position.x = 0;
            avatar.current.position.y = -2350;
            avatar.current.position.z = -40;
            avatar.current.scale.x = 7;
            avatar.current.scale.y = 7;
            avatar.current.scale.z = 7;
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
            console.log("default position");
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
      setIsChangingRoute(true);
      setTimeout(() => {
        updateAvatarPosition();
      }, 500);
    }

    if (isChangingRoute) {
      animation.start("hidden");
      setTimeout(() => {
        animation.start("visible");
        setIsChangingRoute(false);
      }, 1000);
    }
  }, [isLoaded, pathname, isChangingRoute, animation, lastPath]);

  return (
    <motion.div
      animate={animation}
      variants={variants}
      className="absolute top-0 h-full w-full -z-5"
    >
      {!isLoaded && <Loading />}
      <Spline
        scene="https://prod.spline.design/T7YOHVWBaA8AOKAk/scene.splinecode"
        onLoad={onLoad}
      />
    </motion.div>
  );
}
