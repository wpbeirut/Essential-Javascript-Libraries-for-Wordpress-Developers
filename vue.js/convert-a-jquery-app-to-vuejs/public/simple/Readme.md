# Method compared

## Jquery 

/*
a regular document ready with an on click event of layer selector by id text.
toogleclass is a default jquery module that show and hide blue bg.
*/

`(function() {
    $('#text').on('click', function(e) {
        $(this).toggleClass('blue-bg');
    })
})();`


=====================================================


## Vue.Js

/* we created a new instace of vue with new command
selected the element in our case is the id text
we set the data as json object , a bolean of active is set to false by default.
*/

(function() {
    new Vue({
        el: '#text',
        data: {
            active: false
        }
    })
})();

=========================================================


# Summary

Vue.Js have the power of writing logic in the semantic html, wish make it more easier for developers to understand
what is happening in the html, and have full control.
also the data passed can be dynamic rendered from a json object file or a router.

This is an advanced topic that we will talk about later.