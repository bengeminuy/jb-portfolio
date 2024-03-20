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
import Loading from "../Loading/Loading";

export default function SplineContainer() {
  const avatar = useRef<SplineObject | null>();
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  function onLoad(spline: any) {
    const avatarObject = spline.findObjectById(
      "6fde2716-a9fb-415f-a17a-74540842d2ba"
    ) as SplineObject;
    avatar.current = avatarObject;
    if (avatar.current) {
      setLoaded(true);
    }
  }

  useEffect(() => {
    if (avatar.current) {
      if (pathname === "/") {
        avatar.current.position.x = 400;
        avatar.current.position.y = -800;
        avatar.current.position.z = -40;
        avatar.current.scale.x = 3;
        avatar.current.scale.y = 3;
        avatar.current.scale.z = 3;
        avatar.current.rotation.x = 0;
        avatar.current.rotation.y = 0;
        avatar.current.rotation.z = 0;
      } else if (pathname === "/about") {
        avatar.current.position.x = 0;
        avatar.current.position.y = -2350;
        avatar.current.position.z = -40;
        avatar.current.scale.x = 7;
        avatar.current.scale.y = 7;
        avatar.current.scale.z = 7;
        avatar.current.rotation.x = -0.2;
        avatar.current.rotation.y = 0.25;
        avatar.current.rotation.z = -0.05;
      }
    }
  }, [loaded, pathname]);

  return (
    <div className="absolute top-0 h-full w-full -z-5">
      {!loaded && <Loading />}
      <Spline
        scene="https://prod.spline.design/T7YOHVWBaA8AOKAk/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
