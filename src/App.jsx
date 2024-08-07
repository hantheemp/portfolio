import { Canvas } from "@react-three/fiber";
import { Character } from "./components/Character";
import "./App.css";
import { Interface } from "./components/Interface";
import { InterfaceMobile } from "./components/InterfaceMobile";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { useMediaQuery } from "@uidotdev/usehooks";

function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [section, setSection] = useState(0);
  const isMobile = isSmallDevice;

    return (
      <div className="w-screen h-screen flex font-roboto">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: isMobile ? 20 : 15 }}>
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Character section={section} isMobile={isMobile}/>
            <Scroll html className="text-black">
              {isSmallDevice ? <InterfaceMobile /> : <Interface />}
            </Scroll>
            <color attach="background" args={["#ececec"]} />
          </ScrollControls>
        </Canvas>
      </div>
    );    
}

export default App;
