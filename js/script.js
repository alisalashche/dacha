import * as THREE from 'three/webgpu';

const $canvas = document.querySelector('.canvas');

const init = () => { 

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGPURenderer({ $canvas, alpha: false });
}

init();