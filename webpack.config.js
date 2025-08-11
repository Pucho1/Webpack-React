const path = require('path'); // me crea una ruta en al que al uinicio rtrienen la direccion en la esta el archivo

module.exports = {
	//entry: "", // le decimos el punto de entrada, lo saba reconocer por defecto "index.js"
	output: {
		path: path.resolve(__dirname,  'build' ) // este seria la ruta en la que webpack generaria el js compilado para navegadores
	},
	// -creo mi loader
	module: {
		rules: [ // -----> tengo una serie de reglas 
			{ // --------> primera de mis rules pueden ser varias las puedo encadenar  

				test: /\.js$/, //   ------> para todos los archivos que terminen por js 
				loader: 'babel-loader', // -> cargalos con babel
				options: { // --------------> configuro el loader pasandole opcciones
					 presets: [
						[
							'@babel/preset-react',
							{
								runtime: 'automatic'
							}
						]
					]
				}
			}
		]
	}
}