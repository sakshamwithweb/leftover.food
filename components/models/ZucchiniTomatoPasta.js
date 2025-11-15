import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ZucchiniTomatoPasta(props) {
  const { nodes, materials } = useGLTF('/zucchiniTomatoPasta.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.mesh_0.geometry} material={materials.Mat_1} />
    </group>
  )
}

useGLTF.preload('/zucchiniTomatoPasta.glb')
