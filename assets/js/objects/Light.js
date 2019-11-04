'use strict'

class Light extends SceneObject {

    static get RADIUS() {
        return 1
    }

    static get HEIGHT() {
        return 2
    }

    constructor(x, y, z, tx, ty, tz) {
        super(x, y, z)
        
        this.materials = {
            body: new THREE.MeshBasicMaterial({
                color: 0x95AFC0,
                wireframe: false
            }),
            bulb: new THREE.MeshBasicMaterial({
                color: 0xF6E58D,
                wireframe: false
            })
        }

        this.addBase()
        this.addBulb()

        this.addLight(tx, ty, tz)
    }

    update(deltatime) {
        this.helper.update()
    }

    addToScene(scene) {
        //super.addToScene(scene)
        window.light = this.light
        scene.add(window.light)
        scene.add(window.light.target)
        
        console.log(window.light)

        this.helper = new THREE.SpotLightHelper(window.light)
        scene.add(this.helper)
    }

    toggle() {
        // TODO: Toggle Light
    }

    addLight(tx, ty, tz) {
        this.light = new THREE.SpotLight(0xFFFFFF, 200, 20, Math.PI / 12, 0)

        this.light.penumbra = .2

        this.light.position.set(this.objGroup.position.x, this.objGroup.position.y, this.objGroup.position.z)

        this.light.target.position.set(tx, 0, tz)
    }

    addBase() {
        let geometry = new THREE.ConeGeometry(Light.RADIUS, Light.HEIGHT, 16)
        let mesh = new THREE.Mesh(geometry, this.materials.body)
        this.objGroup.add(mesh)

    }

    addBulb() {
        let geometry = new THREE.SphereGeometry(Light.RADIUS * 2 / 3, 16, 16)
        let mesh = new THREE.Mesh(geometry, this.materials.bulb)

        mesh.position.y = -Light.HEIGHT + Light.RADIUS

        this.objGroup.add(mesh)
    }
}