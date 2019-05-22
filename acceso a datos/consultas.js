const mysql = require('mysql')
const url = require('../negocio/database')
var home = require('../negocio/home')
const dbConection = mysql.createConnection(url.urlMySql)

//modificar con return
//agregar excepciones
 exports.traerDatos = function(req, res,sql ){
	dbConection.query(sql, function(err,result){
		if(!err){	
			home.datos(res,result);
	   }else
	    //thwow "eroorr";
		res.redirect('/error');
	})
}


exports.agregarData = function(req, res, sql, data){
	dbConection.query(sql,[data],function(err,result){
		if(!err){
			home.direccionar(res);
		}else{
			res.redirect('/error');
		}
	})
}

exports.eliminar = function(req, res,sql,ID){
	dbConection.query(sql,[ID],function(err,resul){
		if(!err){
			home.direccionar(res);
		}else{
			res.redirect('/error');
		}
	});
  }

exports.editar = function(req, res,sql,ID){
	dbConection.query(sql,[ID],function(err,resul){
		if(!err){
			home.datosEditados(res,resul[0]);
		}else{
			res.redirect('/error');
		}
	});
  }

 
  exports.actualizar = function(req, res,sql,data,ID){
	dbConection.query(sql,[data,ID],function(err,resul){
		if(!err){
			home.direccionar(res);
		}else{
			res.redirect('/error');
		}
	});
  }
  