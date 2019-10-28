'use strict'

class SceneManager {
    constructor() {
        this.activeScene = new THREE.Scene()

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