import { OrbitControls } from "@react-three/drei";
import { AvatarMobile } from "./AvatarMobile";

export const CharacterMobile = (props) => {
  const { section, menuOpened } = props;
  return (
    <>
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      ></OrbitControls>
      <AvatarMobile
        animation={
          section === 0
            ? "Waving"
            : section === 1
            ? "PointingDown"
            : section === 2
            ? "Victory"
            : "Salute"
        }
      />

      <ambientLight intensity={1.0}></ambientLight>
    </>
  );
};
