<template>

    <div class="Nuevo">
        <h2>Datos del articulos - nuevo</h2>
    <br />
    <label for="txtdescription">Descripcion</label>

    <input 
    type="text"
     name="txtdescripcion"
      id="txtdescripcion" 
      v-model="articulos.descripcion"
    class="form-control"
    />


    <br />
    <label for="txtpreio">Preio</label>

    <input 
    type="text"
     name="txtpreio"
      id="txtpreio" 
      v-model="articulos.precio"
    class="form-control"
    />

    <br />
    <label for="txtcantidad">Cantidad</label>

    <input 
    type="text"
     name="txtcantidad"
      id="txtcantidad" 
      v-model="articulos.cantidad"
    class="form-control"
    />

    <br />

    <button @click.prevent="nuevo()" class="btn btn-primary btn-lg">
        Nuevo articulo
    </button>

    </div>
    
    </template>
    
    <script>
    import {URL_DATOS} from '../utils/constantes.js'
    import axios from "axios";


    export default {
        name:"Nuevo",
        components:{},
        data: function(){
            return{
                articulos:[],
            };
            
        },
        methods:{
            nuevo: async function(){
                const res = await axios.post(URL_DATOS + "/articulos/",{
                descripcion: this.articulos.descripcion,
                precio: this.articulos.precio,
                cantidad: this.articulos.cantidad,

              });
        console.log(res); 

            }


        },
    };
    
    </script>