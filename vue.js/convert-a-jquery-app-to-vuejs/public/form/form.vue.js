/* regular submit using method sendRequest method 
since we added the data attribute, we can access them using this.email as example.
*/
(function() {
    new Vue({
        el: '#form',
        data: {
            email: '',
            message: '',
            color: ''
        },
        methods: {
            sendRequest() {
                alert(`Email: ${this.email}\nMessage: ${this.message}\nColor: ${this.color}`);
            }
        }
    })
})();