'use strict'

class PictureGrid extends SceneObject {

    constructor(x, y, z, length, height, width) {
        super(x, y, z)
        
        this.materials = [
            {
                grid: new THREE.MeshBasicMaterial({
                    color: 0x95AFC0,
                    wireframe: false
                }),
                ball: new THREE.MeshBasicMaterial({
                    color: 0xDFF9FB,
                    wireframe: false
                })
            },
            {
                grid: new THREE.MeshLambertMaterial({
                    color: 0x95AFC0,
                    wireframe: false
                }),
                ball: new THREE.MeshLambertMaterial({
                    color: 0xDFF9FB,
                    wireframe: false
                })
            },
            {
                grid: new THREE.MeshPhongMaterial({
                    color: 0x95AFC0,
                    wireframe: false
                }),
                ball: new THREE.MeshPhongMaterial({
                    color: 0xDFF9FB,
                    wireframe: false
                })
            }
        ]

        let n = 10
        this.balls = []

        for(let i = 0; i < n; i++) {
            let xOffset = length / 2 - (i + 1) * length / (n + 1)
            let yOffset = height / 2 - (i + 1) * height / (n + 1)
            this.addHorizontalGrid(yOffset, length, 0.2)
            this.addVerticalGrid(xOffset, height, 0.2)
            for(let j = 0; j < n; j++) {
                xOffset = length / 2 - (j + 1) * length / (n + 1)
                this.addBall(xOffset, yOffset, 0.17)
            }
        }

        this.objGroup.position.z = 0.2
    }

    addBall(xOffset, yOffset, radius) {
        let geometry = new THREE.CylinderGeometry(radius, radius, 0.2, 16, 16)
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].ball)

        mesh.position.x = xOffset
        mesh.position.y = yOffset
        mesh.rotation.x = Math.PI / 2

        this.balls.push(mesh)

        this.objGroup.add(mesh)
    }

    addHorizontalGrid(yOffset, length, width) {
        let geometry = new THREE.BoxGeometry(width, length, width)
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].grid)

        mesh.position.y = yOffset
        mesh.rotation.z = Math.PI / 2

        this.objGroup.add(mesh)
    }

    addVerticalGrid(xOffset, height, width) {
        let geometry = new THREE.BoxGeometry(width, height, width)
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].grid)

        mesh.position.x = xOffset

        this.objGroup.add(mesh)
    }

    updateMaterial() {
        this.objGroup.traverse((child) => {
            child.material = this.materials[this.materialType].grid
        })
        this.balls.forEach((ball) => {
            ball.material = this.materials[this.materialType].ball
        })
    }
}