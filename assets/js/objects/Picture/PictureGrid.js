'use strict'

class PictureGrid extends SceneObject {

    constructor(x, y, z, length, height, width) {
        super(x, y, z)
        
        this.materials = {
            grid: new THREE.MeshBasicMaterial({
                color: 0x95AFC0,
                wireframe: false
            }),
            ball: new THREE.MeshBasicMaterial({
                color: 0xDFF9FB,
                wireframe: false
            })
        }
        
        let n = 10

        for(let i = 0; i < n; i++) {
            let xOffset = length / 2 - (i + 1) * length / (n + 1)
            let yOffset = height / 2 - (i + 1) * height / (n + 1)
            this.addHorizontalGrid(yOffset, length, 0.2)
            this.addVerticalGrid(xOffset, height, 0.2)
            for(let j = 0; j < n; j++) {
                xOffset = length / 2 - (j + 1) * length / (n + 1)
                this.addBall(xOffset, yOffset, 0.2)
            }
        }

        this.objGroup.position.z = 0.2
    }

    addParent(parent) {
        parent.add(this.objGroup)
    }

    addBall(xOffset, yOffset, radius) {
        let geometry = new THREE.SphereGeometry(radius, 16, 16)
        let mesh = new THREE.Mesh(geometry, this.materials.ball)

        mesh.position.x = xOffset
        mesh.position.y = yOffset

        this.objGroup.add(mesh)
    }

    addHorizontalGrid(yOffset, length, width) {
        let geometry = new THREE.BoxGeometry(width, length, width)
        let mesh = new THREE.Mesh(geometry, this.materials.grid)

        mesh.position.y = yOffset
        mesh.rotation.z = Math.PI / 2

        this.objGroup.add(mesh)
    }

    addVerticalGrid(xOffset, height, width) {
        let geometry = new THREE.BoxGeometry(width, height, width)
        let mesh = new THREE.Mesh(geometry, this.materials.grid)

        mesh.position.x = xOffset

        this.objGroup.add(mesh)
    }
}