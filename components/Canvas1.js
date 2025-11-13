"use client"

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
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
        camera.position.setZ(2)
        camera.position.setY(0.5)

        const renderer = new THREE.WebGLRenderer({ canvas: canvas.current })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)

        const light = new THREE.PointLight(0xffffff, 4, 100)
        const ambLight = new THREE.AmbientLight(0xffffff, 0.5)
        light.position.set(0, 0.8, -1.3)
        scene.add(light, ambLight)


        //---------------------Load Models------------------------
        var pivot = new THREE.Object3D();
        pivot.position.set(0, 0, 0)

        let tomato;
        loader.load('/tomato.glb', function (glb) {
            glb.scene.scale.multiplyScalar(5);
            tomato = glb.scene
            tomato.position.y = -0.1
            tomato.position.x = 2.5
            pivot.add(tomato);
        })

        let pasta;
        loader.load('/pasta.glb', function (glb) {
            glb.scene.scale.multiplyScalar(0.4);
            pasta = glb.scene
            pasta.position.y = -0.1
            pivot.add(pasta);
        })

        let zucchini;
        loader.load('/zucchini.glb', function (glb) {
            glb.scene.scale.multiplyScalar(0.5);
            zucchini = glb.scene
            zucchini.position.y = -0.1
            zucchini.position.x = -2.5
            pivot.add(zucchini);
        })
        scene.add(pivot)

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

        let finalMeal; // Change this
        loader.load('/zucchini.glb', function (glb) {
            glb.scene.scale.multiplyScalar(0.5)
            finalMeal = glb.scene
            finalMeal.position.set(0, 0, 0)
            finalMeal.visible = false
            scene.add(finalMeal)
        })

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

        const lerp = (x, y, a) => { // x,y,a = start,end,current
            return (1 - a) * x + a * y // Returning current value b/w x and y
        }

        const scalePercent = (start, end) => {
            return (scrollPercent - start) / (end - start)
        }

        const explodeSphereMat = new THREE.MeshLambertMaterial({ visible: false, color: 0xffff00, side: THREE.BackSide })

        const explodeSphere = new THREE.Mesh(new THREE.SphereGeometry(1.5), explodeSphereMat)
        const newL = new THREE.PointLight(0xffff00, 0)
        newL.position.set(0, 0.5, 2)
        scene.add(newL)
        explodeSphere.position.set(0, 0.5, 2)
        scene.add(explodeSphere)

        const explosionAndReadyMeal = (intensity, percentage) => {
            // console.log(`intensity: ${intensity}\npercentage:${percentage}`)

            if (intensity >= 0 && percentage < 0.9) {
                if (intensity != newL.intensity) {// to prevent same value being written again and again to kill the comp
                    newL.intensity = intensity // change light intensity
                    if (!explodeSphereMat.visible) {
                        explodeSphereMat.visible = true // Make the sphare visisble
                    }
                }

                if(finalMeal.visible) finalMeal.visible = false
                if(!pivot.visible) pivot.visible = true
            } else { // Opposite of if condition to make all things normal again
                if (intensity != 0) {
                    newL.intensity = 0
                }
                if (explodeSphereMat.visible) {
                    explodeSphereMat.visible = false
                }
                if (!finalMeal.visible && percentage > 0.95) {
                    finalMeal.visible = true
                    pivot.visible = false
                }
            }
        }

        let scrollPercent = 0;

        document.body.onscroll = () => {
            scrollPercent = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100
        }

        const animationScript = []

        animationScript.push({
            start: 1,
            end: 50,
            func: () => {
                // Start revolving the models
                if (pivot && zucchini && tomato) {
                    pivot.rotateY(lerp(0.05, 1, scalePercent(0, 50)))
                    // Get closer
                    zucchini.position.setX(lerp(-2.5, 0.1, scalePercent(0, 50)))
                    tomato.position.setX(lerp(2.5, 0.1, scalePercent(0, 50)))
                }

            }
        })

        animationScript.push({
            start: 45,
            end: 60,
            func: () => {
                // Here blow up all things and show the new recipe
                explosionAndReadyMeal(lerp(0, 5, scalePercent(45, 60)), scalePercent(45, 60))
            }
        })

        animationScript.push({
            start:60,
            end:110,
            func: () => {
                // Here bring the camera closer
                finalMeal.rotateY(0.05)
                camera.position.setZ(lerp(2,0.5,scalePercent(60,100)))
            }
        })

        const playScrollAnimations = () => {
            animationScript.forEach((a) => {
                if (scrollPercent >= a.start && scrollPercent < a.end) {
                    a.func()
                }
            })
        }


        //---------------------Last Setup------------------------
        const animate = () => {
            requestAnimationFrame(animate)
            playScrollAnimations()
            JEASINGS.update()
            render()
        }

        const render = () => {
            renderer.render(scene, camera)
        }

        window.scrollTo({ top: 0, behavior: 'smooth' })
        animate()
    }, [])


    return <canvas className="fixed top-0 left-0" ref={canvas}></canvas>
}

export default Canvas1