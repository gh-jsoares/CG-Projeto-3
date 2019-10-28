'use strict'

class PictureFrame extends SceneObject {

    static get WIDTH() {
        return 1
    }

    static get LENGTH() {
        return 10
    }

    static get HEIGHT() {
        return 15
    }

    constructor(x, y, z) {
        super(x, y, z)
        
        this.materials = {
            body: new THREE.MeshBasicMaterial({
                color: 0xF9EFDF,
                wireframe: false
            })
        }

        this.addVerticalFrameBorder((PictureFrame.LENGTH - PictureFrame.WIDTH) / 2)
        this.addVerticalFrameBorder(-(PictureFrame.LENGTH - PictureFrame.WIDTH) / 2)
        this.addHorizontalFrameBorder((PictureFrame.HEIGHT - PictureFrame.WIDTH) / 2)
        this.addHorizontalFrameBorder(-(PictureFrame.HEIGHT - PictureFrame.WIDTH) / 2)
    }

    addVerticalFrameBorder(zOffset) {
        let geometry = new THREE.BoxGeometry(PictureFrame.WIDTH, PictureFrame.HEIGHT, PictureFrame.WIDTH)
        let mesh = new THREE.Mesh(geometry, this.materials.body)

        mesh.position.z = zOffset

        this.objGroup.add(mesh)
    }

    addHorizontalFrameBorder(yOffset) {
        let geometry = new THREE.BoxGeometry(PictureFrame.WIDTH, PictureFrame.LENGTH, PictureFrame.WIDTH)
        let mesh = new THREE.Mesh(geometry, this.materials.body)

        mesh.position.y = yOffset
        mesh.rotation.x = Math.PI / 2

        this.objGroup.add(mesh)
    }
}