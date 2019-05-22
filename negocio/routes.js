var home = require('../negocio/home');

//you can include all your controllers

module.exports = function (app) {
    //llamdo get
    app.get('/',home.consultaDatos);//home
    app.get('/consultar',home.consultaDatos);//home
    app.get('/error',home.fallo);//home
    //llamdo post
    app.post('/insertar', home.insertar);
    app.post('/update/:id', home.actualiza);
    //
    app.get('/update/:id', home.editar);
    app.get('/delete/:id', home.borrar);
}

exports.datos2 = function (res,datos){
	res.render("index",{Data: datos})
}

exports.datosEditados2 = function (res,datos){
	res.render("resultados_editar",{Data: datos})
}

exports.direccionar2 = function (res){
	res.redirect('/');
}
