$(document).ready(function() {
    $('nav a').click(function(e) {
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });
});