'use strict'

class Sculpture extends SceneObject {

    static get HEIGHT() {
        return 7
    }

    constructor(x, y, z) {
        super(x, y, z)

        this.foot = new SculptureFoot(0, 1, 0)
        this.foot.addParent(this.objGroup)

        this.leg = new SculptureLeg(0, 2 + Sculpture.HEIGHT / 2, 0, Sculpture.HEIGHT)
        this.leg.addParent(this.objGroup)

        this.shape = new SculptureShape(0, 2 + Sculpture.HEIGHT + SculptureShape.RADIUS, 0)
        this.shape.addParent(this.objGroup)
    }

    update(deltatime) {
        this.shape.update(deltatime)
    }
}