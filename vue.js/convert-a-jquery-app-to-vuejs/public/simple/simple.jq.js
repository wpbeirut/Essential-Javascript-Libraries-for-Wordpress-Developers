/*
a regular document ready with an on click event of layer selector by id text.
toogleclass is a default jquery module that show and hide blue bg.
*/
(function() {
    $('#text').on('click', function(e) {
        $(this).toggleClass('blue-bg');
    })
})();