const App ={
data: function (){
    return{
        mensaje: "hola Vue.js",
        muestra: false,
        nombre: "",
        pesonas:[],
        cantidad:1
    }
},
methods: {
    cambiarMuestra: function(){
        this.muestra = !this.muestra    
    },
    randomuser: async function(){
        let n =""
        let p = []
        axios.get('https://randomuser.me/api/?results='*this.cantidad)
        .then(function (response) {
            console.log(response.data.results[0].name.last)
            n = response.data.results[0].name.last
            p = response.data.results
        });
        this.nombre = n
        this.personas = p
    }
    
  }

}

Vue.createApp(App).mount("#app")