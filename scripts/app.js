import * as THREE from 'three'

var scene = new THREE.Scene()

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set( 0, 0, 100 )
camera.lookAt(new THREE.Vector3(0, 0, 0))

var renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement ) 

var material = new THREE.LineBasicMaterial( { color: 0x00ff00 } )

var geometry = new THREE.Geometry()
geometry.vertices.push(new THREE.Vector3(-10, 0, 0))
geometry.vertices.push(new THREE.Vector3(0, 10, 0))
geometry.vertices.push(new THREE.Vector3(10, 0, 0))

var line = new THREE.Line( geometry, material )
scene.add( line )


function animate() {
  requestAnimationFrame( animate )
  renderer.render( scene, camera )
}

animate()
