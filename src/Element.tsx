import * as THREE from "three";
import frag from "./shader/frag.glsl?raw";
import vert from "./shader/vert.glsl?raw";

export default class Element {
  scene: THREE.Scene;

  constructor(scene: THREE.Scene, radius: number) {
    const geometry = new THREE.SphereGeometry(radius);
    const material = new THREE.ShaderMaterial({
      fragmentShader: frag,
      vertexShader: vert,
      uniforms: {
        uColor: { value: new THREE.Color("#d0ffff") },
      },
      wireframe: true,
    });
    this.scene = scene;
    this.scene.add(new THREE.Mesh(geometry, material));
  }
}
