uniform vec3 uColor;
varying vec3 vNormal;
varying vec4 vModelPos;
varying vec4 vProjectPos;
varying vec2 vUv;

void main() {
    gl_FragColor = vec4(vUv, 0., 1.);
}