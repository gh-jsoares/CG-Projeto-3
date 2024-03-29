'use strict'

class SculptureLeg extends SceneObject {

    static get RADIUS() {
        return 1
    }

    static get HEIGHT() {
        return 2
    }

    constructor(x, y, z, height) {
        super(x, y, z)
        
        this.materials = [
            {
                body: new THREE.MeshBasicMaterial({
                    color: 0xA99F8F,
                    wireframe: false
                }),
            },
            {
                body: new THREE.MeshLambertMaterial({
                    color: 0xA99F8F,
                    wireframe: false
                })
            },
            {
                body: new THREE.MeshPhongMaterial({
                    color: 0xA99F8F,
                    wireframe: false
                })
            }
        ]

        let geometry = new THREE.CylinderGeometry(SculptureFoot.RADIUS * 0.2, SculptureFoot.RADIUS, height, 16)
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].body)

        this.objGroup.add(mesh)
    }

    updateMaterial() {
        this.objGroup.traverse((child) => {
            child.material = this.materials[this.materialType].body
        })
    }
}