'use strict'

class Floor extends SceneObject {

    static get HEIGHT() {
        return 2
    }

    static get LENGTH() {
        return 50
    }

    constructor(x, y, z) {
        super(x, y, z)
        
        this.materials = {
            body: new THREE.MeshBasicMaterial({
                color: 0x00CEC9,
                wireframe: false
            })
        }

        let geometry = new THREE.BoxGeometry(Floor.LENGTH, Floor.WIDTH, Floor.LENGTH)
        let mesh = new THREE.Mesh(geometry, this.materials.body)

        this.objGroup.add(mesh)
    }
}