import { useThree } from "@react-three/fiber";
import GUI from "lil-gui";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Element = () => {
  const { scene, camera, gl } = useThree();
  const [radius, setRadius] = useState(1);

  const params = {
    size: radius,
  };

  const guiRef = useRef<GUI>();

  useEffect(() => {
    const gui = new GUI();
    gui
      .add(params, "size", 1, 10)
      .onChange((value: number) => setRadius(value));
    guiRef.current = gui;
  }, []);

  const geo = new THREE.SphereGeometry(radius);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xff00ff,
    wireframe: true,
  });

  return <mesh geometry={geo} material={mat} />;
};

export default Element;
