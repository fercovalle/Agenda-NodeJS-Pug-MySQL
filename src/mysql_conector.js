//importar mysql 
import mysql from 'mysql';

//crear la conexion

const conector = mysql.createConnection(
    {
        host:'localhost',
        user:'fernando',
        password:'Ferchuz302412',
        database:'agenda_contactos'
    }
)

const conectar = () =>{ 
    conector.connect(err => { 
        if(err) throw err
        console.log('conexion mysql exitosa!');
    })
}

const agregarContacto = (nombre,numero) => {
   const sql = `INSERT INTO agenda (id_agenda, nombre_contacto, numero_contacto) VALUES (${null},"${nombre}",${numero})`; 
   conector.query(sql,function(err,result,filed){
       if(err) throw err
       console.log(result);
   })
}

export {conectar,agregarContacto}