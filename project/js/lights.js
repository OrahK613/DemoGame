
var Lights = function( )
{
	alert("lights");
	var lights = this;
	
	//this.light, this.light1, this.light2, this.light3, this.light4, this.light5, this.light6, this.dlight;
	//this.directionalLight1, this.directionalLight2;
	
	this.initLights = function(scene)
	{
	
		var ambient = new THREE.AmbientLight( 0x111111 );
		scene.add( ambient );

		light = new THREE.SpotLight( 0xffffff );
		light.position.set( 10, 30, 20 );
		light.target.position.set( 0, 0, 0 );
		if(true){
			light.castShadow = true;

			light.shadowCameraNear = 20;
			light.shadowCameraFar = 50;//camera.far;
			light.shadowCameraFov = 40;

			light.shadowMapBias = 0.1;
			light.shadowMapDarkness = 0.7;
			light.shadowMapWidth = 2*512;
			light.shadowMapHeight = 2*512;

			light.shadowCameraVisible = true;
		}
		scene.add( light );
		
		
		// Lighting
		directionalLight1 = new THREE.DirectionalLight( 0xF7EFBE, 0.7 );
		directionalLight1.position.set( 0.5, 1, 0.5 );
		scene.add( directionalLight1 );
		directionalLight2 = new THREE.DirectionalLight( 0xF7EFBE, 0.5 );
		directionalLight2.position.set( -0.5, -1, -0.5 );
		scene.add( lights.directionalLight2 );
		
		// LIGHTS

		scene.add( new THREE.AmbientLight( 0x111111 ) );

		var intensity = 2.5;
		var distance = 100;
		var c1 = 0xff0040, c2 = 0x0040ff, c3 = 0x80ff80, c4 = 0xffaa00, c5 = 0x00ffaa, c6 = 0xff1100;
		//var c1 = 0xffffff, c2 = 0xffffff, c3 = 0xffffff, c4 = 0xffffff, c5 = 0xffffff, c6 = 0xffffff;

		

		lights.light1 = new THREE.PointLight( c1, intensity, distance );
		lights.light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c1 } ) ) );
		scene.add( lights.light1 );

		// lights.light2 = new THREE.PointLight( c2, intensity, distance );
		// lights.light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c2 } ) ) );
		// scene.add( lights.light2 );

		// lights.light3 = new THREE.PointLight( c3, intensity, distance );
		// lights.light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c3 } ) ) );
		// scene.add( lights.light3 );

		// lights.light4 = new THREE.PointLight( c4, intensity, distance );
		// lights.light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c4 } ) ) );
		// scene.add( lights.light4 );

		// lights.light5 = new THREE.PointLight( c5, intensity, distance );
		// lights.light5.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c5 } ) ) );
		// scene.add( lights.light5 );

		// lights.light6 = new THREE.PointLight( c6, intensity, distance );
		// lights.light6.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c6 } ) ) );
		// scene.add( lights.light6 );

		// lights.dlight = new THREE.DirectionalLight( 0xffffff, 0.1 );
		// lights.dlight.position.set( 0.5, -1, 0 ).normalize();
		// scene.add( lights.dlight );
	};
};