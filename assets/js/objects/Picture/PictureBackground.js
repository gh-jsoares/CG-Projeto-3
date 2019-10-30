'use strict'

class PictureBackground extends SceneObject {

    constructor(x, y, z, length, height, width) {
        super(x, y, z)
        
        this.materials = {
            body: new THREE.MeshBasicMaterial({
                color: 0x303952,
                wireframe: false
            })
        }

        let geometry = new THREE.BoxGeometry(length, height, width)
        let mesh = new THREE.Mesh(geometry, this.materials.body)

        this.objGroup.add(mesh)
    }
}