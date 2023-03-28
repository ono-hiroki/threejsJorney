// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const cubeGeometry = new THREE.BoxGeometry(3, 2, 1) // 形状
const cubeMaterial = new THREE.MeshBasicMaterial({ // 外観、材質
    color: '#ff0000' // 赤
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial) // 形状と外観を組み合わせてメッシュを作成
scene.add(cubeMesh) // シーンにメッシュを追加

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // 75度の視野角、アスペクト比
camera.position.z = 3 // カメラの位置をz軸方向に3移動 手前が正
scene.add(camera) // シーンにカメラを追加

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
