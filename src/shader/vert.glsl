varying vec3 vNormal;
varying vec4 vModelPos;
varying vec4 vProjectPos;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    gl_Position = projectionPosition;
    vNormal = normal;
    vModelPos = modelPosition;
    vProjectPos = projectionPosition;
}