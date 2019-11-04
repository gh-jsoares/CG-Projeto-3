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
        
        this.materials = [
            {
                body: new THREE.MeshBasicMaterial({
                    color: 0x3DC1D3,
                    wireframe: false
                }),
            },
            {
                body: new THREE.MeshLambertMaterial({
                    color: 0x3DC1D3,
                    wireframe: false
                })
            },
            {
                body: new THREE.MeshPhongMaterial({
                    color: 0x3DC1D3,
                    wireframe: false
                })
            }
        ]

        let geometry = new THREE.BoxGeometry(Floor.LENGTH, Floor.HEIGHT, Floor.LENGTH)
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].body)

        this.objGroup.add(mesh)
    }

    updateMaterial() {
        this.objGroup.traverse((child) => {
            child.material = this.materials[this.materialType].body
        })
    }
}