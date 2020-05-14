Vue.component('modal-img',{
    props:['data'],
    template:`
    <div class="modal is-active" @click="$emit('close')">
        <div class="modal-background"></div>
            <div class="modal-content">
                <p class="image is-4by3">
                    <img v-bind:src="data" alt="">
                </p>
            </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>  `
})