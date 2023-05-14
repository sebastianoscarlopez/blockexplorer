import React, { useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import { Mesh } from 'three'

function Box(props: MeshProps) {
  const ref = useRef<Mesh>(null!)
  
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  
  
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box;