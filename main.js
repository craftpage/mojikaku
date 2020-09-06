var app = new Vue({
    el: '#app',
    data: {
        character: '文字の入力',
        size: 20
    },
    methods: {
        big: function(){
            this.size += 10;
        },
        small: function(){
            if (this.size > 20) {
                this.size -= 10
            }
        }

    },
})