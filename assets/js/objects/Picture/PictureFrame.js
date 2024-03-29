'use strict'

class PictureFrame extends SceneObject {

    constructor(x, y, z, length, height, width) {
        super(x, y, z)
        
        this.materials = [
            {
                body: new THREE.MeshBasicMaterial({
                    color: 0xF19066,
                    wireframe: false
                }),
            },
            {
                body: new THREE.MeshLambertMaterial({
                    color: 0xF19066,
                    wireframe: false
                })
            },
            {
                body: new THREE.MeshPhongMaterial({
                    color: 0xF19066,
                    wireframe: false
                })
            }
        ]

        this.addVerticalFrameBorder((length - width) / 2, height, width)
        this.addVerticalFrameBorder(-(length - width) / 2, height, width)
        this.addHorizontalFrameBorder((height - width) / 2, length, width)
        this.addHorizontalFrameBorder(-(height - width) / 2, length, width)
    }
    
    addVerticalFrameBorder(xOffset, height, width) {
        let geometry = new THREE.BoxGeometry(width, height, width)
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].body)

        mesh.position.x = xOffset

        this.objGroup.add(mesh)
    }

    addHorizontalFrameBorder(yOffset, length, width) {
        let geometry = new THREE.BoxGeometry(width, length, width)
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].body)

        mesh.position.y = yOffset
        mesh.rotation.z = Math.PI / 2

        this.objGroup.add(mesh)
    }

    updateMaterial() {
        this.objGroup.traverse((child) => {
            child.material = this.materials[this.materialType].body
        })
    }
}