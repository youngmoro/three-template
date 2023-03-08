uniform vec3 uColor;
varying vec3 vNormal;
varying vec4 vModelPos;
varying vec4 vProjectPos;

void main() {
    gl_FragColor = vec4(uColor, 1.);
}