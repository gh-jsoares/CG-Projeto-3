'use strict'

class Sculpture extends SceneObject {

    static get RADIUS() {
        return 0.5
    }

    constructor(x, y, z) {
        super(x, y, z)
        
        this.materials = {
            body: new THREE.MeshBasicMaterial({
                color: 0xF9EFDF,
                wireframe: false
            })
        }

        this.createGeometry()
    }

    createGeometry() {
        let geometry = new THREE.Geometry()
        
        // TODO

        let mesh = new THREE.Mesh(geometry, this.materials.body)
        this.objGroup.add(mesh)
    }
}