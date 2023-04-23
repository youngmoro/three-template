import * as THREE from "three";
import frag from "./shader/frag.glsl?raw";
import vert from "./shader/vert.glsl?raw";

export default class Element {
  scene: THREE.Scene;
  mesh: THREE.Mesh;
  geo: THREE.SphereGeometry;
  mat: THREE.ShaderMaterial;
  radius: number;

  constructor(scene: THREE.Scene, radius: number) {
    this.radius = radius;
    this.geo = new THREE.SphereGeometry(radius);
    this.mat = new THREE.ShaderMaterial({
      fragmentShader: frag,
      vertexShader: vert,
      uniforms: {
        uColor: { value: new THREE.Color("#d0ffff") },
      },
      wireframe: true,
    });
    this.mesh = new THREE.Mesh(this.geo, this.mat);
    this.scene = scene;
    this.scene.add(this.mesh);
  }

  update(newRadius: number) {
    const scale = newRadius / this.radius;
    this.mesh.scale.x = scale;
    this.mesh.scale.y = scale;
    this.mesh.scale.z = scale;
  }
}
