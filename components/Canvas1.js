"use client"

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const Canvas1 = () => {
    const canvas = useRef()

    useEffect(() => {
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
        loader.setDRACOLoader(dracoLoader);

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)

        const renderer = new THREE.WebGLRenderer({ canvas: canvas.current })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.position.setZ(1.3)
        camera.position.setY(0.5)

        const light = new THREE.PointLight(0xffffff, 4, 100)
        const ambLight = new THREE.AmbientLight()
        light.position.set(0, 0.8, -1.3)
        scene.add(light, ambLight)

        // const grid = new THREE.GridHelper(20, 100)
        // scene.add(grid)

        let tomato;
        loader.load('/tomato.glb', function (glb) {
            glb.scene.scale.multiplyScalar(5);
            tomato = glb.scene
            tomato.position.y = -0.1
            tomato.position.x = 2.5
            scene.add(tomato);
        })

        let pasta;
        loader.load('/pasta.glb', function (glb) {
            glb.scene.scale.multiplyScalar(0.4);
            pasta = glb.scene
            pasta.position.y = -0.1
            scene.add(pasta);
        })

        let zucchini;
        loader.load('/zucchini.glb', function (glb) {
            glb.scene.scale.multiplyScalar(0.5);
            zucchini = glb.scene
            zucchini.position.y = -0.1
            zucchini.position.x = -2.5
            scene.add(zucchini);
        })

        const generateStar = () => {
            const geometry = new THREE.SphereGeometry(0.09, 24, 24)
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
            const starMesh = new THREE.Mesh(geometry, material)
            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
            starMesh.position.set(x, y, z)
            return starMesh
        }
        Array(1000).fill().map(() => scene.add(generateStar()))

        const moveCamera = () => { // Move it as we scroll the DOM
            const t = document.body.getBoundingClientRect().top
            camera.position.y = (t * -0.002) + 0.5 // 0.5 came from our y initial position
        }
        document.body.onscroll = moveCamera

        const controls = new OrbitControls(camera, renderer.domElement)
        const animate = () => {
            requestAnimationFrame(animate)
            controls.update()
            renderer.render(scene, camera)
            if (tomato) tomato.rotateY(0.02)
            if (zucchini) zucchini.rotateY(0.02)
            if (pasta) pasta.rotateY(0.02)
        }

        animate()
    }, [])


    return <canvas className="fixed top-0 left-0" ref={canvas}></canvas>
}

export default Canvas1