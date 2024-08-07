import React, { useEffect, useRef } from "react";
import { useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function Avatar(props) {
  const { animation, isMobile } = props;
  const position = isMobile ? [0, -1.0, -1] : [-0.45, -1.3, 0];
  const { animations: pointingAnimation } = isMobile
    ? useFBX("animations/PointingDown.fbx")
    : useFBX("animations/Pointing.fbx");
  const rotation = isMobile
    ? { x: -Math.PI / 2.5, y: Math.PI / 128, z: -Math.PI / 64 }
    : { x: -Math.PI / 2.5, y: Math.PI / 64, z: Math.PI / 32 };
  const group = useRef();
  const { scene } = useGLTF("models/66b229a77c71b146bfdd492f.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: wavingAnimation } = useFBX("animations/Waving.fbx");
  const { animations: fallingAnimation } = useFBX("animations/Falling.fbx");
  const { animations: rollingAnimation } = useFBX("animations/Rolling.fbx");
  const { animations: stretchingAnimation } = useFBX(
    "animations/Stretching.fbx"
  );
  const { animations: victoryAnimation } = useFBX("animations/Victory.fbx");
  const { animations: saluteAnimation } = useFBX("animations/Salute.fbx");

  wavingAnimation[0].name = "Waving";
  fallingAnimation[0].name = "Falling";
  rollingAnimation[0].name = "Rolling";
  stretchingAnimation[0].name = "Stretching";
  pointingAnimation[0].name = "Pointing";
  victoryAnimation[0].name = "Victory";
  saluteAnimation[0].name = "Salute";

  const { actions } = useAnimations(
    [
      wavingAnimation[0],
      fallingAnimation[0],
      rollingAnimation[0],
      stretchingAnimation[0],
      pointingAnimation[0],
      victoryAnimation[0],
      saluteAnimation[0],
    ],
    group
  );

  useEffect(() => {
    actions[animation].reset().fadeIn(0.001).play();
    return () => {
      actions[animation].reset().fadeOut(0.001);
    };
  }, [animation]);

  useEffect(() => {
    return () => {
      window.location.reload();
    };
  }, [isMobile]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group
        rotation-y={rotation.y}
        rotation-z={rotation.z}
        rotation-x={rotation.x}
        position={position}
      >
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/66b229a77c71b146bfdd492f.glb");
