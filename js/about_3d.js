window.addEventListener('load', init);
 
function init() {
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#home_canvas'),
        antialias: true
    });
    const scene = new THREE.Scene();
 
    const camera = new THREE.PerspectiveCamera(45, 1);
    camera.fov = 60;
    camera.position.set(0, -150, 1000);
 
    const loader = new THREE.GLTFLoader();
    const url = './img/about.glb';
 
    let model = null;
    loader.load(
        url,
        function (gltf) {
            model = gltf.scene;
            model.scale.set(100.0, 100.0, 100.0);
            model.position.set(0, -300, 0);
            scene.add(model);
        },
        function (error) {
            console.log('An error happened');
        }
    );
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
 
 
    hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.8);
    scene.add(hemisphereLight);
 
    tick();
    onResize();
 
    window.addEventListener('resize', onResize);
 
    function onResize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        renderer.setSize(w, h);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xEFEFEF);
 
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        console.log('h' + h + 'h' + h);
 
        renderer.render(scene, camera);
    }
 
    function tick() {
        requestAnimationFrame(tick);
        if (model) {
            model.rotation.y += 0.02;
        }
        renderer.render(scene, camera);
    }
 
}