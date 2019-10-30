'use strict'

class Sculpture extends SceneObject {

    static get RADIUS() {
        return 0.5
    }

    constructor(x, y, z) {
        super(x, y, z)
        
        this.materials = {
            body: new THREE.MeshBasicMaterial({
                color: 0xF9EFDF,
                wireframe: false
            }),
            ball1: new THREE.MeshBasicMaterial({
                color: 0xA9AFDF,
                wireframe: false
            }),
        }

        this.createGeometry()
    }

    update(deltatime) {
        this.objGroup.rotation.y += deltatime * 1
        this.objGroup.rotation.z += deltatime * 1
    }

    createGeometry() {
        let geometry = new THREE.Geometry()
        
        geometry.vertices = this.createVertices(3)
        geometry.faces = this.createFaces()

        geometry.vertices.forEach((v) => {
            let geometry = new THREE.SphereGeometry(0.5, 16, 16)
            let mesh = new THREE.Mesh(geometry, this.materials.ball1)
    
            mesh.position.x = v.x
            mesh.position.y = v.y
            mesh.position.z = v.z
    
            this.objGroup.add(mesh)
        })
        

        let mesh = new THREE.Mesh(geometry, this.materials.body)
        this.objGroup.add(mesh)
    }

    // TODO : Make triangles irregular
    createVertices(radius) {
        let vertices = []

        let t = (1 + Math.sqrt(5)) / 2

        vertices.push(new THREE.Vector3(-1 * radius, t * radius, 0))
        vertices.push(new THREE.Vector3(1 * radius, t * radius, 0))
        vertices.push(new THREE.Vector3(-1 * radius, -t * radius, 0))
        vertices.push(new THREE.Vector3(1 * radius, -t * radius, 0))

        vertices.push(new THREE.Vector3(0, -1 * radius, t * radius))
        vertices.push(new THREE.Vector3(0, 1 * radius, t * radius))
        vertices.push(new THREE.Vector3(0, -1 * radius, -t * radius))
        vertices.push(new THREE.Vector3(0, 1 * radius, -t * radius))

        vertices.push(new THREE.Vector3(t * radius, 0, -1 * radius))
        vertices.push(new THREE.Vector3(t * radius, 0, 1 * radius))
        vertices.push(new THREE.Vector3(-t * radius, 0, -1 * radius))
        vertices.push(new THREE.Vector3(-t * radius, 0, 1 * radius))
        return vertices
    }

    createFaces() {
        let faces = []
        
        faces.push(new THREE.Face3(0, 11, 5))
		faces.push(new THREE.Face3(0, 5, 1))
		faces.push(new THREE.Face3(0, 1, 7))
		faces.push(new THREE.Face3(0, 7, 10))
		faces.push(new THREE.Face3(0, 10, 11))
		faces.push(new THREE.Face3(1, 5, 9))
		faces.push(new THREE.Face3(5, 11, 4))
		faces.push(new THREE.Face3(11, 10, 2))
		faces.push(new THREE.Face3(10, 7, 6))
		faces.push(new THREE.Face3(7, 1, 8))
		faces.push(new THREE.Face3(3, 9, 4))
		faces.push(new THREE.Face3(3, 4, 2))
		faces.push(new THREE.Face3(3, 2, 6))
		faces.push(new THREE.Face3(3, 6, 8))
		faces.push(new THREE.Face3(3, 8, 9))
		faces.push(new THREE.Face3(4, 9, 5))
		faces.push(new THREE.Face3(2, 4, 11))
		faces.push(new THREE.Face3(6, 2, 10))
		faces.push(new THREE.Face3(8, 6, 7))
        faces.push(new THREE.Face3(9, 8, 1))
        
        return faces
    }
}