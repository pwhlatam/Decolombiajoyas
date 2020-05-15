Vue.component('card-ver-carrito', {

    props:['id','refe','image','gramos'],

    template:

	`
	<transition name="slide-fade">
	<li class="media border border-light p-0">
	  <img v-bind:src='image' width="20%" class="border-right border-light ">
	  <div class="media-body ml-3 ">
	    <h5 class="mt-0 mb-1 pt-3">{{refe}}</h5>
	    <p class="text-black-50"> {{ gramos }}g aprox </p>
	  </div>
	  <div class="btn col-lg-3 border-left border-light p-4">
        <img v-bind:src='imgdelete' width="15px" @click="deletep(0,id)">
      </div>
	</li>  
	<transition>
	`,
    data () {

        return {

          imgdelete:'img/delete.svg'

        }

	},
	  
	methods:{
		deletep(add,id){
			store.commit('addcart',{addp:add,idp:id})  
		}
	}


})