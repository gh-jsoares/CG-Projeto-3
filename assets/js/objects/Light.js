'use strict'

class Light extends SceneObject {

    static get RADIUS() {
        return 1
    }

    static get HEIGHT() {
        return 2
    }

    constructor(x, y, z, tx = 0, ty = 0, tz = 0) {
        super(x, y, z)
        
        this.materials = [
            {
                body: new THREE.MeshBasicMaterial({
                    color: 0x95AFC0,
                    wireframe: false
                }),
                bulb: new THREE.MeshBasicMaterial({
                    color: 0xF6E58D,
                    wireframe: false
                })
            },
            {
                body: new THREE.MeshLambertMaterial({
                    color: 0x95AFC0,
                    wireframe: false
                }),
                bulb: new THREE.MeshLambertMaterial({
                    color: 0xF6E58D,
                    wireframe: false
                })
            },
            {
                body: new THREE.MeshPhongMaterial({
                    color: 0x95AFC0,
                    wireframe: false
                }),
                bulb: new THREE.MeshPhongMaterial({
                    color: 0xF6E58D,
                    wireframe: false
                })
            }
        ]

        this.base = this.addBase()
        this.bulb = this.addBulb()
        this.addLight(tx, ty, tz)
    }

    update(deltatime) {
        this.helper.update()
    }

    addToScene(scene) {
        super.addToScene(scene)
        scene.add(this.light)
        scene.add(this.light.target)
    }

    toggle() {
        this.light.visible = !this.light.visible
    }

    addLight(tx, ty, tz) {
        this.light = new THREE.SpotLight(0xFFFFFF, 1.2, 0, Math.PI / 5, 0.33)

        this.light.position.set(this.objGroup.position.x, this.objGroup.position.y - Light.HEIGHT, this.objGroup.position.z)

        
        if(tx != 0 || tz != 0) {
            let angle = this.objGroup.position.angleTo(new THREE.Vector3(tx, ty, tz))
            let sign = tx < this.objGroup.position.x ? -1 : 1
            this.objGroup.rotation.z += sign * (angle - angle / 2 * angle / 2 * 1.3)
            this.objGroup.position.y -= 2
        }

        tx = tx == 0 ? this.objGroup.position.x : tx
        tz = tz == 0 ? this.objGroup.position.z : tz
        this.light.target.position.set(tx, ty, tz)
    }

    addBase() {
        let geometry = new THREE.ConeGeometry(Light.RADIUS, Light.HEIGHT, 16)
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].body)
        this.objGroup.add(mesh)
        return mesh
    }

    addBulb() {
        let geometry = new THREE.SphereGeometry(Light.RADIUS * 2 / 3, 16, 16)
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].bulb)

        mesh.position.y = -Light.HEIGHT + Light.RADIUS

        this.objGroup.add(mesh)
        return mesh
    }

    updateMaterial() {
        this.base.material = this.materials[this.materialType].body
        this.bulb.material = this.materials[this.materialType].bulb
    }
}