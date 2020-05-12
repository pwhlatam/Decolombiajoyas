Vue.component('card-productos', {

    props:['refe','id','image','imgcora','gr'],

    template:

    `
    <div class="col-6 col-sm-4 col-lg-3 mb-3 pl-2 pr-2" >

    <div class="card btn" @click="addtocard(id,refe,image,gr)">

    <p class="card-text text-right mb-0 text-black-50">{{ refe }}</p>

    <img v-bind:src='image'  width="100%">

    <div class="card-body p-0">

        <div class="d-flex justify-content-between ">

            <p class="card-text mb-0 text-black-50">{{ gr }}g aprox</p>

            <img v-if="tipoimg" v-bind:src="imgadd" width="25px" >

            <img v-else="tipoimg" v-bind:src="srcadd" width="25px" >

        </div>

    </div>

    </div>

   </div>   

    `,

    data () {

        return {

          tipoimg:true,

          imgadd:'img/love-and-romance.svg',

          srcadd:'img/love-and-romance (1).svg',

        }

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

        }

  

    }

})