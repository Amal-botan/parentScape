import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import gsap from 'gsap';

let camera, scene, renderer;
const loader = new GLTFLoader();

export function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 5;
     camera.rotation.z = 1;

	scene = new THREE.Scene();

    const light = new THREE.AmbientLight( 0xffffff, 2 );
    scene.add( light );


    loader.load("../models/toys/scene.gltf", (gltf) => {
        let model = gltf.scene
        model.scale.set(.005, .005, .005)

        gsap.to(camera.position, {
            z: 1,
            duration: 2,
            ease: "back.out(1.7)"
        })
        gsap.to(camera.rotation, {
            z: 0,
            duration: 2
        })

        gsap.to(model.rotation, {
            x: 1,
            duration: 2,
            delay: 1
        })
        gsap.to(model.rotation, {
            y: Math.PI * 1.75,
            duration: 4,
            delay: 1
        })
        gsap.to(model.scale, {
            delay: 1,
            duration: 2,
            x: .0025,
            y: .0025,
            z: .0025
        })
        // gsap.to(model.position, {
        //     delay: 1,
        //     duration: 1,
        //     x: .35,
        //     y: .3
        // })
       

        scene.add(model)
    })

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animation );
    renderer.setClearColor( 0x272727, 1 );
	document.body.appendChild( renderer.domElement );

    // window.addEventListener( 'resize', () => {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize( window.innerWidth, window.innerHeight );
    // });
}

function animation() {
	renderer.render( scene, camera );

}
