// game.js
window.addEventListener('DOMContentLoaded', function() {
    // Babylon.js scene and engine setup
    var canvas = document.getElementById('renderCanvas');
    var engine = new BABYLON.Engine(canvas, true);

    // Create a scene
    var scene = new BABYLON.Scene(engine);

    // Create a camera
    var camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Create a light
    var light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    // Create a material and a cube
    var material = new BABYLON.StandardMaterial('material', scene);
    material.diffuseColor = new BABYLON.Color3(1, 0, 0); // Red

    var cube = BABYLON.MeshBuilder.CreateBox('cube', { size: 1 }, scene);
    cube.material = material;

    // Create a background
    var background = new BABYLON.Layer('background', null, scene);
    background.isBackground = true;
    background.texture = new BABYLON.Texture('../assets/DRAKE.PNG', scene); // Replace with your image URL

    // Run the engine
    engine.runRenderLoop(function() {
        scene.render();
    });

    // Resize the canvas when the window is resized
    window.addEventListener('resize', function() {
        engine.resize();
    });
});
