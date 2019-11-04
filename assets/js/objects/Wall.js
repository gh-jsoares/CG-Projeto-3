'use strict'

class Wall extends SceneObject {

    static get WIDTH() {
        return 2
    }

    static get LENGTH() {
        return 50
    }

    static get HEIGHT() {
        return 26
    }
    
    
    constructor(x, y, z, rotated) {
        super(x, y, z)
        
        this.materials = [
            {
                body: new THREE.MeshBasicMaterial({
                    color: 0xF5CD79,
                    wireframe: false
                }),
            },
            {
                body: new THREE.MeshLambertMaterial({
                    color: 0xF5CD79,
                    wireframe: false
                })
            },
            {
                body: new THREE.MeshPhongMaterial({
                    color: 0xF5CD79,
                    wireframe: false
                })
            }
        ]

        let geometry = new THREE.BoxGeometry(Wall.LENGTH, Wall.HEIGHT, Wall.WIDTH)
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].body)
        
        this.objGroup.add(mesh)

        if(rotated)
            this.objGroup.rotation.y = Math.PI / 2
    }
    
    updateMaterial() {
        this.objGroup.traverse((child) => {
            child.material = this.materials[this.materialType].body
        })
    }
}