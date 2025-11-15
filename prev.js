"use client"
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Stats, PerspectiveCamera } from '@react-three/drei'
import { Tomato } from "@/components/models/Tomato";
import { Pasta } from "@/components/models/Pasta";
import { Zucchini } from "@/components/models/Zucchini";
import * as THREE from "three"
import { ZucchiniTomatoPasta } from "@/components/models/ZucchiniTomatoPasta";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactLenis } from 'lenis/react'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const lenisRef = useRef()
  let scrollPercent = 0;

  const lerp = (x, y, a) => { // x,y,a = start,end,current
    return (1 - a) * x + a * y // Returning current value b/w x and y
  }

  const scalePercent = (start, end) => {
    return (scrollPercent - start) / (end - start)
  }

  
  // document.body.onscroll = () => {
  //   scrollPercent = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100
  // }

  useEffect(() => {
    setIsClient(true)

    let rafId
    const loop = (time) => {
      lenisRef.current?.lenis?.raf(time)
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [])

  // useEffect(() => {
  //   console.log(scrollPercent)
  // }, [scrollPercent])


  if (!isClient) return null;
  return (
    <div className="text-white bg-black">
      <div className="h-screen w-screen fixed top-0 left-0">
        <Canvas className="">
          {/* BG BLACK */}
          <color attach="background" args={["black"]} />

          {/* CAMERA */}
          <PerspectiveCamera makeDefault position={[0, 0.5, 2]} fov={100} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} />

          {/* LIGHTS */}
          <pointLight color={0xffffff} intensity={4} distance={100} position={[0, 0.8, 1.3]} />
          <ambientLight color={0xffffff} intensity={1} />

          {/* RAW FOOD MODELS */}
          <object3D visible={true} position={[0, 0, 0]}>
            <Zucchini position={[-2.5, -0.1, 0]} scale={0.5} />
            <Pasta position={[0, -0.1, 0]} scale={0.4} />
            <Tomato position={[2.5, -0.1, 0]} scale={5} />
          </object3D>

          {/* FINAL MEAL MODEL */}
          <ZucchiniTomatoPasta scale={0.5} position={[0, 0, 0]} visible={false} />

          {/* STARS */}
          <points>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" count={3000} array={new THREE.Float32BufferAttribute(Array.from({ length: 3000 * 3 }, () => THREE.MathUtils.randFloatSpread(100)), 3).array} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial color={0xffffff} size={0.1} />
          </points>


          <gridHelper />
          <Stats />
        </Canvas>
      </div>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>

        <main className="absolute w-screen h-[150vw] flex flex-col z-99 pointer-events-none">
          <section className="h-screen w-screen flex justify-center items-center">
            <h2 className="text-5xl font-bold">Got leftover ingredients lying around?</h2>
          </section>
          <section className="h-screen w-screen flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bold">Turn them into something delicious</h2>
            <p className="text-xl text-gray-300 max-w-xl">
              Discover creative recipes made by people just like you.
            </p>
          </section>
          <section className="h-screen w-screen flex flex-col justify-center items-center">
            <p className="text-4xl font-semibold text-gray-300">
              Join our community and start transforming your leftovers today.
            </p>
            <Link href={"/login"}>
              <Button className="text-black pointer-events-auto" variant="outline">Get Started</Button>
            </Link>
          </section>
        </main>
      </ReactLenis>
    </div>
  );
}
