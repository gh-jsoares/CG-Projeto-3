'use strict'

class SceneObject {

    constructor(x, y, z) {
        this.objGroup = new THREE.Object3D()
        this.objGroup.position.set(x, y, z)
        this.materialType = 1
        this.prevMaterialType = 0
    }

    addToScene(scene) {
        scene.add(this.objGroup)
    }
    
    removeToScene(scene) {
        scene.remove(this.objGroup)
    }

    update(deltatime) {
        
    }

    addParent(parent) {
        parent.add(this.objGroup)
    }

    toggleLightCalculations() {
        if (this.materialType != 0) {
            this.prevMaterialType = this.materialType
            this.materialType = 0
        } else {
            this.materialType = this.prevMaterialType
            this.prevMaterialType = 0
        }

        this.updateMaterial()
    }

    toggleShadingType() {
        if(this.materialType != 0)
            this.materialType = this.materialType == 1 ? 2 : 1
        else
            this.prevMaterialType = this.prevMaterialType == 1 ? 2 : 1

        this.updateMaterial()
    }

    updateMaterial() {

    }
}