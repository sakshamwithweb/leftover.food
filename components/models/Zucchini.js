import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Zucchini(props) {
  const { nodes, materials } = useGLTF('/zucchini.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Zucchini_material}
      />
    </group>
  )
}

useGLTF.preload('/zucchini.glb')