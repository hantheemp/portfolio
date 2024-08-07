import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useEffect } from "react";

export const Character = (props) => {
  const { section, isMobile } = props;

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      ></OrbitControls>
      <Avatar
        animation={
          section === 0
            ? "Waving"
            : section === 1
            ? "Pointing"
            : section === 2
            ? "Victory"
            : "Salute"
        }
        isMobile={isMobile}
      />

      <ambientLight intensity={1.3}></ambientLight>
    </>
  );
};
