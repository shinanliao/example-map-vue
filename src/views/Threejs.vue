<template>
  <div class="threejs">
    <h1>This is my cone!</h1>
  </div>
</template>

<script>
import * as THREE from "three";
export default {
  mounted: function () {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );
      
      // const geometry = new THREE.BoxGeometry();
      // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      // const cube = new THREE.Mesh(geometry, material);
      // scene.add(cube);

      const geometry = new THREE.ConeGeometry( 2.1, 4, 8, 7 );
      const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
      const cone = new THREE.Mesh( geometry, material );
      scene.add( cone );

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame(animate);
        cone.rotation.x += 0.01;
        cone.rotation.y += 0.01;
        renderer.render(scene, camera);
        console.log(scene, camera)
      }
      animate();
  },
};
</script>