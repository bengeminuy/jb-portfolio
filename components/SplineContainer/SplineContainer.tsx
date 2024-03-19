"use client";

interface SplineObject {
  name: string;
  id: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
}

const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function SplineContainer() {
  const avatar = useRef<SplineObject | null>();
  const [formerPath, setFormerPath] = useState("");
  const pathname = usePathname();

  function onLoad(spline: any) {
    const avatarObject = spline.findObjectById(
      "6fde2716-a9fb-415f-a17a-74540842d2ba"
    ) as SplineObject;
    avatar.current = avatarObject;
  }

  useEffect(() => {
    if (formerPath !== pathname) {
      console.log(`Changed formerPath from ${formerPath} to ${pathname}`);
      setFormerPath(pathname);
    }
  }, [formerPath, pathname]);

  return (
    <div className="absolute top-0 h-full w-full">
      <Spline
        scene="https://prod.spline.design/T7YOHVWBaA8AOKAk/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
