import { useThree } from "@react-three/fiber";
import GUI from "lil-gui";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Element = () => {
  const { scene, camera, gl } = useThree();
  const [radius, setRadius] = useState(50);

  const params = {
    size: radius,
  };

  const guiRef = useRef<GUI>();

  useEffect(() => {
    const gui = new GUI();
    gui
      .add(params, "size", 0, 100)
      .onChange((value: number) => setRadius(value));
    guiRef.current = gui;
  }, []);

  const box = {
    const geo = new THREE.BoxBufferGeometry(radius, radius, radius);
  }

  return <></>;
};

export default Element;
