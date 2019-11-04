'use strict'

class SceneManager {
    constructor() {
        this.activeScene = new THREE.Scene()
        this.activeScene.add(new THREE.AxesHelper(100))

        this.objects = []
        this.lights = []

        this.addSceneLight()
        this.registerEvents()
    }
    
    addSceneLight() {
        this.sceneLight = new THREE.DirectionalLight(0xFFFFFF)

        this.sceneLight.position.set(0, 18, 0).normalize()
        this.sceneLight.target.position.set(-24, 0, 0).normalize()

        this.activeScene.add(this.sceneLight)
        this.activeScene.add(this.sceneLight.target)
    }

    registerEvents() {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 81) // q
                this.sceneLight.visible = !this.sceneLight.visible
            if (e.keyCode == 87) { // w
                this.objects.forEach((obj) => obj.toggleLightCalculations())
                this.lights.forEach((obj) => obj.toggleLightCalculations())
            }
            if (e.keyCode == 69) { // e
                this.objects.forEach((obj) => obj.toggleShadingType())
                this.lights.forEach((obj) => obj.toggleShadingType())
            }
            if (e.keyCode >= 49 && e.keyCode <= 52) {
                let index = e.keyCode - 49
                this.lights[index].toggle()
            }
        })
    }
    

    addObject(object) {
        this.objects.push(object)
        object.addToScene(this.getActiveScene())
    }

    removeObject(object) {
        object.removeFromScene(this.getActiveScene())
        this.objects = this.objects.filter((obj) => obj != object)
    }

    addLight(light) {
        this.lights.push(light)
        light.addToScene(this.getActiveScene())
    }

    removeLight(light) {
        light.removeFromScene(this.getActiveScene())
        this.lights = this.lights.filter((l) => l != light)
    }

    update(deltatime) {
        this.objects.forEach((obj) => obj.update(deltatime))
    }

    getActiveScene() {
        return this.activeScene
    }
}