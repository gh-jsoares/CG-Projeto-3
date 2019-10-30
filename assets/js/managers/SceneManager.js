'use strict'

class SceneManager {
    constructor() {
        this.activeScene = new THREE.Scene()
        this.activeScene.add(new THREE.AxesHelper(100))

        this.objects = []
    }

    addObject(object) {
        this.objects.push(object)
        object.addToScene(this.getActiveScene())
    }

    removeObject(object) {
        object.removeFromScene(this.getActiveScene())
        this.objects = this.objects.filter((obj) => obj != object)
    }

    update(deltatime) {
        this.objects.forEach((obj) => obj.update(deltatime))
    }

    getActiveScene() {
        return this.activeScene
    }
}