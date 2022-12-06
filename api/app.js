let express=require('express');
let mysql=require('mysql')
let app = express()
let puerto = 3000
let cors=require('cors')
// servidor entienda json
app.use(express.json())
// acepte solicitudes de lfrontend (cliente)
app.use(cors())
app.listen(puerto,function(){
    let puerto = 3000
console.log("Servidor en linea ")

})

// Base de datos
//Parametros de conexion

let conexion = mysql.createConnection({
    host:'localhost',
    user:'pw',
    password:'12345678',
    database: 'pw'

})

// Conectarnos a la base de datos
conexion.connect(function(error){
    if(error){
        throw error 

    } else{

        console.log('Conectado a la BD')
    }

})

// rutas de acceso
app.get('/',function(req,res){
    res.send('Ruta de inicio');


})

//Todos los articulos
app.get('/api/articulos/',function(req,res){
    conexion.query("SELECT * FROM articulos",function(error,filas){
        if(error){
            throw error
    
        } else{
            res.send(filas)

        }

    })

})

//Solo 1 articulo
app.get('/api/articulos/:id',function(req,res){
    conexion.query("SELECT * FROM articulos where id=?",[req.params.id],function(error,fila){
        if(error){
            throw error
    
        } else{
            res.send(fila)

        }

    })

})

//agregamos un articulo
app.post('/api/articulos',function(req,res){
    let data={descripcion:req.body.descripcion,
            precio:req.body.precio,
            cantidad:req.body.cantidad}

    let sql="INSERT INTO articulos SET ?"
    conexion.query(sql,data,function(error,results){
       
        if(error){
            throw error
    
        } else{
            res.send(results)

        }

    })

})

//actualizar articulo
app.put('/api/articulos/:id',function(req,res){
    let id = req.params.id
    let descripcion=req.body.descripcion
    let precio= req.body.precio
    let cantidad=req.body.cantidad
    let sql="UPDATE articulos SET descripcion = ?, precio= ?, cantidad = ? where id = ?";
    conexion.query(sql,[descripcion,precio,cantidad,id]),
    function(error,results){
        if (error){
            throw error
        }else{
            res.send(results)
        }
    }
})

//borrar un articulo
app.delete('/api/articulos/:id',function(req,res){
    let id= req.params.id
    conexion.query("DELETE FROM articulos WHERE ID = ?",[id],
    function(error,results){
        if (error){
            throw error
        }else{
            res.send(results)
        }
    })    
})