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
                body_off: new THREE.MeshBasicMaterial({
                    color: 0x130F40,
                    wireframe: false
                }),
                body_on: new THREE.MeshBasicMaterial({
                    color: 0x7ED6DF,
                    wireframe: false
                }),
                bulb_off: new THREE.MeshBasicMaterial({
                    color: 0xF6E58D,
                    wireframe: false
                }),
                bulb_on: new THREE.MeshBasicMaterial({
                    color: 0xF9CA24,
                    wireframe: false
                })
            },
            {
                body_off: new THREE.MeshLambertMaterial({
                    color: 0x130F40,
                    wireframe: false
                }),
                body_on: new THREE.MeshLambertMaterial({
                    color: 0x7ED6DF,
                    wireframe: false
                }),
                bulb_off: new THREE.MeshLambertMaterial({
                    color: 0xF6E58D,
                    wireframe: false
                }),
                bulb_on: new THREE.MeshLambertMaterial({
                    color: 0xF9CA24,
                    wireframe: false
                })
            },
            {
                body_off: new THREE.MeshPhongMaterial({
                    color: 0x130F40,
                    wireframe: false
                }),
                body_on: new THREE.MeshPhongMaterial({
                    color: 0x7ED6DF,
                    wireframe: false
                }),
                bulb_off: new THREE.MeshPhongMaterial({
                    color: 0xF6E58D,
                    wireframe: false
                }),
                bulb_on: new THREE.MeshPhongMaterial({
                    color: 0xF9CA24,
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
        this.updateMaterial()
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
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].body_on)
        this.objGroup.add(mesh)
        return mesh
    }

    addBulb() {
        let geometry = new THREE.SphereGeometry(Light.RADIUS * 2 / 3, 16, 16)
        let mesh = new THREE.Mesh(geometry, this.materials[this.materialType].bulb_on)

        mesh.position.y = -Light.HEIGHT + Light.RADIUS

        this.objGroup.add(mesh)
        return mesh
    }

    updateMaterial() {
        if(this.light.visible) {
            this.base.material = this.materials[this.materialType].body_on
            this.bulb.material = this.materials[this.materialType].bulb_on
        }
        else {
            this.base.material = this.materials[this.materialType].body_off
            this.bulb.material = this.materials[this.materialType].bulb_off
        }
    }
}