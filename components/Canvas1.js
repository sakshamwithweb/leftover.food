"use client"

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import JEASINGS from 'jeasings'


const Canvas1 = () => {
    const canvas = useRef()

    useEffect(() => {
        //---------------------INITAL SETUP------------------------
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
        loader.setDRACOLoader(dracoLoader);

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.setZ(1.3)
        camera.position.setY(0.5)

        const renderer = new THREE.WebGLRenderer({ canvas: canvas.current })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)

        const controls = new OrbitControls(camera, renderer.domElement)

        const light = new THREE.PointLight(0xffffff, 4, 100)
        const ambLight = new THREE.AmbientLight(0xffffff, 0.5)
        light.position.set(0, 0.8, -1.3)
        scene.add(light, ambLight)


        //---------------------Load Models------------------------
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

        const generateStars = () => {
            const geometry = new THREE.BufferGeometry()
            const vertices = [] // Positions

            for (let i = 0; i < 1000; i++) {
                vertices.push(
                    THREE.MathUtils.randFloatSpread(100),
                    THREE.MathUtils.randFloatSpread(100),
                    THREE.MathUtils.randFloatSpread(100)
                )
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
            const stars = new THREE.Points(geometry, material)
            scene.add(stars)
        }
        generateStars()


        //---------------------Resizing Adjustments------------------------
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        })


        //---------------------Scrolling------------------------
        let scrollMove = 0
        document.addEventListener(
            'wheel',
            (event) => {
                event.preventDefault()
                event.stopPropagation()

                scrollMove += event.deltaY

                // it keeps the scrollmove between valid scrollMove, if it get less so makes 0 or else if it goes higher so makes it max scrollHeight
                scrollMove = Math.max(0, Math.min(scrollMove, document.documentElement.scrollHeight));

                new JEASINGS.JEasing(document.documentElement).to({ scrollTop: scrollMove }, 500).easing(JEASINGS.Quadratic.InOut).start()
            },
            { passive: false }
        )

        //---------------------Animations on Specific Keyframed------------------------



        //---------------------Last Setup------------------------
        const animate = () => {
            requestAnimationFrame(animate)
            controls.update()
            JEASINGS.update()
            render()

            if (tomato) tomato.rotateY(0.02)
            if (zucchini) zucchini.rotateY(0.02)
            if (pasta) pasta.rotateY(0.02)
        }

        const render = () => {
            renderer.render(scene, camera)
        }

        window.scrollTo({ top: 0, behavior: 'smooth' })
        animate()
    }, [])


    return <canvas className="fixed top-0 left-0 pointer-events-none" ref={canvas}></canvas>
}

export default Canvas1