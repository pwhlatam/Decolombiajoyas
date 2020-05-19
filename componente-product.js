Vue.component('card-productos', {

    props:['refe','id','image','imgcora','gr'],

    template:

    `
    <div class="col-6 col-sm-4 col-lg-3 mb-3 pl-2 pr-2" >

    <modal-img v-if="showmodal" @close='showmodal=false' :data="modalData"></modal-img>

    <div class="card btn" >

    <p class="card-text text-right mb-0 text-black-50" @click="addtocard(id,refe,image,gr)">{{ refe }}</p>

    <img v-bind:src='image'  width="100%" @click="addtocard(id,refe,image,gr)">

    <div class="card-body p-0 mt-2">

        <div class="d-flex justify-content-between align-items-center">

            <p class="card-text mb-0 text-black-50" @click="addtocard(id,refe,image,gr)" style="font-size:12px">{{ gr }}g aprox</p>

            <div>

            <img v-bind:src="miglupa" width="25px" @click="Openmodal(image)">
            
            <img v-if="tipoimg" v-bind:src="imgadd" width="25px" @click="addtocard(id,refe,image,gr)">

            <img v-else="tipoimg" v-bind:src="srcadd" width="25px" @click="addtocard(id,refe,image,gr)">

            </div>

        </div>

    </div>

    </div>

   </div>  
    

    `,


    computed: {
        ...Vuex.mapState(['cart'])

    },
    created() {
	store.watch(	
	state => state.cart,
	(newV, oldV) => {
		//Buscaremos en el nuevo array
		let search = (key, inputArray) => {
      for (let i=0; i < inputArray.length; i++) {
        if (inputArray[i].id === key) {
            return i;
          }
        }
      }
	let i = search(this.id, newV)
		if(typeof i === 'undefined' && this.tipoimg === false){
		this.tipoimg = true			
		} 
}
	)


    },
    data () {

        return {

          tipoimg:true,

          imgadd:'img/love-and-romance.svg',

          srcadd:'img/love-and-romance (1).svg',

          miglupa:'img/lupa.svg',

          modalData: null,

          showmodal:false,
	unwatch: null

        }

      },    

beforeDestroy()
{
	this.unwatch()
},
    methods:{

        addtocard(id,refe,image,gr){

            this.tipoimg=!this.tipoimg

            if(this.tipoimg==false){  

                add=1  

                store.commit('addcart',{addp:add,idp:id,refe:refe,img:image,gr:gr})

            }else{

                add=0  

                store.commit('addcart',{addp:add,idp:id})                

            }

        },
        Openmodal(data){

            this.modalData=data

            this.showmodal=true

        }

    }


})
