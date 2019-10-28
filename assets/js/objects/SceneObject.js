'use strict'

class SceneObject {

    constructor(x, y, z) {
        this.objGroup = new THREE.Object3D()
        this.objGroup.position.set(x, y, z)
    }

    addToScene(scene) {
        scene.add(this.objGroup)
    }
    
    removeToScene(scene) {
        scene.remove(this.objGroup)
    }

    update(deltatime) {
        
    }
}