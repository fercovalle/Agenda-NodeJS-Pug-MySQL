import express from 'express'; //importando Express (usando modulos)
import { conectar,agregarContacto } from './src/mysql_conector.js';


const app = express(); //iniciamos Express

//iniciamos servidor en puerto 8000
app.listen('8000',function(){
    console.log("App Iniciada en puerto 8000");
})

//configuracion de pug
app.set('views','./vistas');
app.set('view engine','pug');

//configuracion de archivos estaticos 
app.use(express.static('./vistas'));
app.use(express.static('./src'));
app.use(express.static('./css'));


app.get('/',function(req,res){
    //res.send('aplicacion corriendo')
    //conectar();
    res.render('index',{titulo:'Aplicacion de Contactos',dato:'dato renderizado'});
})
app.get('/agregar/:nombre/:numero',function(req,res){
    let nombre = req.params.nombre;
    let numero = req.params.numero;
    agregarContacto(nombre,numero);
    res.redirect('/');
})