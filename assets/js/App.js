'use strict'

class GraphicApp {
    constructor() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)
        
        this.clock = new THREE.Clock()
        
        this.sceneManager = new SceneManager()
        this.cameraManager = new CameraManager(this.renderer)

        this.sceneManager.addObject(new Floor(0, 0, 0))
        this.sceneManager.addObject(new Wall(-24, 14, 0, true))

        this.sceneManager.addObject(new Picture(-23, 14, 0))

        this.sceneManager.addObject(new Sculpture(0, 1, 0))
        
        this.controls = new THREE.OrbitControls(this.getCamera(), this.renderer.domElement)
        this.update()
    }

    update() {
        this.renderer.setClearColor(0xDFE6E9)
        let deltatime = this.clock.getDelta()

        this.controls.update()
        this.sceneManager.update(deltatime)

        this.render()
        requestAnimationFrame(this.update.bind(this))
    }

    render() {
        this.renderer.render(this.getScene(), this.getCamera())
    }

    getScene() {
        return this.sceneManager.getActiveScene()
    }

    getCamera() {
        return this.cameraManager.getActiveCamera()
    }
}