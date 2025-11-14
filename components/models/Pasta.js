import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pasta(props) {
  const { nodes, materials } = useGLTF('/pasta.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bowl.geometry}
        material={materials['Ceramic bowl material']}
        position={[0.014, -0.497, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0001.geometry}
        material={materials['macaroni.001']}
        position={[0.003, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0002.geometry}
        material={materials['macaroni.001']}
        position={[0.445, -0.024, 0.074]}
        rotation={[-2.141, 0.748, -3.045]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0003.geometry}
        material={materials['macaroni.001']}
        position={[-0.412, 0.128, -0.163]}
        rotation={[-1.629, 0.043, 0.117]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0004.geometry}
        material={materials['macaroni.001']}
        position={[0.073, 0.289, -0.247]}
        rotation={[-2.214, -0.138, -1.742]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0005.geometry}
        material={materials['macaroni.001']}
        position={[-0.3, -0.002, 0.053]}
        rotation={[-1.819, 0.674, 1.703]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0006.geometry}
        material={materials['macaroni.001']}
        position={[0.118, 0.023, 0.495]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0007.geometry}
        material={materials['macaroni.001']}
        position={[0.34, 0.023, -0.174]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0008.geometry}
        material={materials['macaroni.001']}
        position={[-0.215, 0.023, 0.467]}
        rotation={[-1.282, -0.706, 1.073]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0009.geometry}
        material={materials['macaroni.001']}
        position={[-0.21, 0.231, 0.448]}
        rotation={[-0.472, -0.711, 2.372]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0010.geometry}
        material={materials['macaroni.001']}
        position={[0.389, 0.41, 0.409]}
        rotation={[-0.609, 0.167, 0.737]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0011.geometry}
        material={materials['macaroni.001']}
        position={[0.669, 0.391, 0.416]}
        rotation={[-2.39, 0.455, -0.561]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0012.geometry}
        material={materials['macaroni.001']}
        position={[-0.496, 0.426, 0.399]}
        rotation={[-1.77, 0.656, 1.591]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0013.geometry}
        material={materials['macaroni.001']}
        position={[-0.24, 0.42, 0.403]}
        rotation={[-1.207, -0.76, 2.006]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0014.geometry}
        material={materials['macaroni.001']}
        position={[-0.355, 0.138, 0.47]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0015.geometry}
        material={materials['macaroni.001']}
        position={[-0.355, 0.376, 0.422]}
        rotation={[-0.256, 0.247, -2.501]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0016.geometry}
        material={materials['macaroni.001']}
        position={[-0.355, 0.221, -0.406]}
        rotation={[-1.628, 0.563, 1.218]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0017.geometry}
        material={materials['macaroni.001']}
        position={[-0.355, 0.067, 0.185]}
        rotation={[-1.634, 0.568, 1.233]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0018.geometry}
        material={materials['macaroni.001']}
        position={[-0.133, 0.081, -0.569]}
        rotation={[-1.821, 0.675, 1.708]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0019.geometry}
        material={materials['macaroni.001']}
        position={[-0.36, 0.111, -0.337]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0020.geometry}
        material={materials['macaroni.001']}
        position={[-0.072, 0.303, -0.604]}
        rotation={[-2, 0.621, 2.185]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0021.geometry}
        material={materials['macaroni.001']}
        position={[0.245, 0.469, -0.283]}
        rotation={[-2.216, 0.546, 2.738]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0022.geometry}
        material={materials['macaroni.001']}
        position={[0.38, 0.54, -0.145]}
        rotation={[-2.379, 0.29, -2.809]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0023.geometry}
        material={materials['macaroni.001']}
        position={[-0.581, 0.073, 0.193]}
        rotation={[-2.252, -0.174, -1.64]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0024.geometry}
        material={materials['macaroni.001']}
        position={[0.066, 0.403, 0.558]}
        rotation={[-2.384, 0.246, -2.709]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0025.geometry}
        material={materials['macaroni.001']}
        position={[-0.5, 0.651, 0.276]}
        rotation={[-1.6, 0.035, 0.139]}
        scale={-39.128}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macaroni_HP_macaroni_0026.geometry}
        material={materials['macaroni.001']}
        position={[0.575, 0.247, -0.232]}
        rotation={[-1.64, -0.039, -0.164]}
        scale={-39.128}
      />
    </group>
  )
}

useGLTF.preload('/pasta.glb')