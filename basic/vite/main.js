import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("canvas");

//1. Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

//2. Create a camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 20;

//3. Object
const dodecahedronGeometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({
    color: 0x468568,
    emissive: 0x468568,
});

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xd68568,
    emissive: 0xd68568,
});

const dodecahedron = new THREE.Mesh(dodecahedronGeometry, material);
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.y = -1.5;
scene.add(dodecahedron);
scene.add(cube);

//4. Add light to the scene
const light = new THREE.SpotLight(0x00dba6, 100);
light.position.set(1, 1, 1);
scene.add(light);

//5. Set up the renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.pixelRatio = window.devicePixelRatio;

// 6. Add controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

//7. Animate the scene
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
}
animate();
