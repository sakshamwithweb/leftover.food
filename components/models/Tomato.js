import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Tomato(props) {
  const { nodes, materials } = useGLTF('/tomato.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tomato_Tomato_baked_0.geometry}
            material={materials.Tomato_baked}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tomatoleaf_Tomato_baked_0.geometry}
            material={materials.Tomato_baked}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tomato.glb')