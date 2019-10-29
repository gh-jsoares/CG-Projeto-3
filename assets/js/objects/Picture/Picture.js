'use strict'

class Picture extends SceneObject {

    static get WIDTH() {
        return 0.5
    }

    static get LENGTH() {
        return 15
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

        this.frame = new PictureFrame(0, 0, 0, Picture.LENGTH, Picture.HEIGHT, Picture.WIDTH * 2)
        this.frame.addParent(this.objGroup)

        this.background = new PictureBackground(0, 0, 0, Picture.LENGTH - 0.1, Picture.HEIGHT - 0.1, Picture.WIDTH)
        this.background.addParent(this.objGroup)

        this.grid = new PictureGrid(0, 0, 0, Picture.LENGTH - 0.1, Picture.HEIGHT - 0.1, Picture.WIDTH)
        this.grid.addParent(this.objGroup)

        this.objGroup.rotation.y = Math.PI / 2
    }

}