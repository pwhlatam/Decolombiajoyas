Vue.component('card-ver-carrito', {

    props:['id','refe','image','gramos'],

    template:

    `
	<li class="media border border-light">
	  <img v-bind:src='image' width="20%" class="border-right border-light ">
	  <div class="media-body ml-3 ">
	    <h5 class="mt-0 mb-1 pt-3">{{refe}}</h5>
	    <p class="text-black-50"> {{ gramos }}g aprox </p>
	  </div>
	</li>  
    `,


})