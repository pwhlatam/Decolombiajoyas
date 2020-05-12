Vue.component('card-carrito', {



    template:

    `

    <div class="col-3 col-sm-1 col-lg-1 btn ">

    <img v-bind:src="imgcart" width="50px" >
    
    <span class="cart-compra">
     {{ $store.state.cart.length }}
    </span>

    </div>  

    

    `,

    data (){

        return{

            imgcart:'img/commerce.svg'

        }

    }

})