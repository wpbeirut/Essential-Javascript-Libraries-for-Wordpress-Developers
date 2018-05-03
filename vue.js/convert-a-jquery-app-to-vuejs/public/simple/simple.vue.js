// we created a new instace of vue with new command
// selected the element in our case is the id text
// we set the data as json object , a bolean of active is set to false by default.
(function() {
    new Vue({
        el: '#text',
        data: {
            active: false
        }
    })
})();