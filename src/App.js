
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import Virtualroom from "./Virtualroom"
import { OrbitControls } from "@react-three/drei";
import {FirstPersonControls} from "@react-three/drei"
import {PointerLockControls} from "@react-three/drei"
 console.log(FirstPersonControls)

function App() {
  return (
  <>
      <Canvas style ={{background:"black",height:"100vh"}} camera={{
                    position: [10,10,10], 
                  fov: 100,
                }}
                className="canvas" >
      <Suspense>
        {/* <Box/> */}
        <ambientLight intensity={0.5}/>
      <pointLight position={[10, 10, 10]} />
      <PointerLockControls/>
      
      {/* <FirstPersonControls/> */}
      <FirstPersonControls
           
            camProps={{
           
              makeDefault: true,
              fov: 50,
              position: [0,1000,1000]
            }}
            orbitProps={{
              target: [0, 2.537, 0]
            }}
            enableJoystick
            enableKeyboard
       
          />
         

          <Virtualroom/>
          < OrbitControls/>
      </Suspense>
    </Canvas>
    <Loader/>
  </>
    
  );
}

export default App;
