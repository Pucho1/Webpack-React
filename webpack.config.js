const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); // me crea una ruta en al que al uinicio rtrienen la direccion en la esta el archivo

module.exports = (env, args ) => {
	const { mode } = args;

	const isProducction  = mode === 'production'

	return {
		//entry: "", // le decimos el punto de entrada, lo saba reconocer por defecto "index.js"
	output: {
		filename: isProducction ? '[name].[contenthash].js' : 'main.js', // hashear la salida 
		path: path.resolve(__dirname,  'build' ) // este seria la ruta en la que webpack generaria el js compilado para navegadores
	},
	// caracteristicas agregadas a webpack
	plugins:[
		new HtmlWebpackPlugin({template: 'src/index.html'})
	],
	// -creo y configuro mis loader
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
			},
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devserver: {
		open: true, // al iniciar abrimos el navegador
		compres: true,
		overlay: true // traza de errores
	},
	/* devtool: 'source-map' --> ayuda a depurar el codigo creando dos archivos  
	   en el cual uno es exactamente la copi del codigo puedes encontrar los errores exactos por linea 
	    es sumamente costoso */
	}
	
}