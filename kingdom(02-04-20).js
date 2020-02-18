//----------------Camera & SCENE----------------------
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 100;

//----------------Drawables----------------------
//Sky
const skyGeometry = new THREE.BoxBufferGeometry(innerWidth, innerHeight, 20);
let skyTexture = new THREE.TextureLoader().load( 'textures/high-clouds.jpg' );
let skyMaterial = new THREE.MeshBasicMaterial( { map: skyTexture } );
let skyBack = new THREE.Mesh( skyGeometry, skyMaterial);
skyBack.position.z = -500;
scene.add( skyBack );
let skyFront = new THREE.Mesh( skyGeometry, skyMaterial);
skyFront.position.z = 500;
scene.add( skyFront );
let skyLeft = new THREE.Mesh( skyGeometry, skyMaterial);
skyLeft.position.x = 500;
scene.add( skyLeft );
let skyRight = new THREE.Mesh( skyGeometry, skyMaterial);
skyRight.position.x = -500;
scene.add( skyRight );

//Center Building
const centerGeometry = new THREE.BoxBufferGeometry(100,100,80);
let centerTexture = new THREE.TextureLoader().load( 'textures/Brick Wall Windows 1.png' );
let centerMaterial = new THREE.MeshBasicMaterial( { map: centerTexture } );
let center = new THREE.Mesh( centerGeometry, centerMaterial);
scene.add( center );

//Side Building
const sideGeometry = new THREE.BoxBufferGeometry(50,100,40);
let sideTexture = new THREE.TextureLoader().load( 'textures/pexels-photo-207142.jpeg' );
let sideMaterial = new THREE.MeshBasicMaterial( { map: sideTexture } );
let side = new THREE.Mesh( sideGeometry, sideMaterial);
side.position.x = -80;
side.position.z = 10;
scene.add( side );
let side1 = new THREE.Mesh( sideGeometry, sideMaterial);
side1.position.x = 80;
side1.position.z = 10;
scene.add( side1 );

//Side Pillar
const pillarGeometry = new THREE.CylinderBufferGeometry(50, 50, 100, 250);
let pillarTexture = new THREE.TextureLoader().load( 'textures/Brick Wall Windows 1.png' );
let pillarMaterial = new THREE.MeshBasicMaterial( { map: pillarTexture } );
let pillar = new THREE.Mesh( pillarGeometry, pillarMaterial);
pillar.position.x = -130;
pillar.position.z = -10;
scene.add( pillar );
let pillar1 = new THREE.Mesh( pillarGeometry, pillarMaterial);
pillar1.position.x = 130;
pillar1.position.z = -10;
scene.add( pillar1 );

//Roof Pillar
const roofGeometry = new THREE.ConeBufferGeometry(20,60,200);
let roofTexture = new THREE.TextureLoader().load( 'textures/Brick Wall Windows 1.png' );
let roofMaterial = new THREE.MeshBasicMaterial( { map: roofTexture } );
let roof = new THREE.Mesh( roofGeometry, roofMaterial);
roof.rotation.y = 1.5;
roof.rotation.x = 3;
roof.position.y = -130;
roof.position.x = -130;
scene.add(roof);


//----------------Renderer----------------------
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//----------------Functions----------------------
function animate() {
    requestAnimationFrame( animate );
        camera.rotation.y += 0.005;
        camera.position.x += 0.01;
    renderer.render( scene, camera );
}
animate();