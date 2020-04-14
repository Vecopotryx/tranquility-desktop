$(function () {
    $(".application").draggable();
});


$(function () {
    $('#mediaplayer').hover(function () {
        $('#mediaplayer a').css('color', 'black');
        $('#mediaplayer').css('filter', 'grayscale(0%)');
        $('#bouncingballs a').css('color', 'gray');
        $('#bouncingballs').css('filter', 'grayscale(60%)');
        $('#notes a').css('color', 'gray');
        $('#notes').css('filter', 'grayscale(40%)');
    },
    )
});

$(function () {
    $('#bouncingballs').hover(function () {
        $('#bouncingballs a').css('color', 'black');
        $('#bouncingballs').css('filter', 'grayscale(0%)');
        $('#mediaplayer a').css('color', 'gray');
        $('#mediaplayer').css('filter', 'grayscale(60%)');
        $('#notes a').css('color', 'gray');
        $('#notes').css('filter', 'grayscale(40%)');
    },
    )
});

$(function () {
    $('#notes').hover(function () {
        $('#notes a').css('color', 'black');
        $('#notes').css('filter', 'grayscale(0%)');
        $('#mediaplayer a').css('color', 'gray');
        $('#mediaplayer').css('filter', 'grayscale(60%)');
        $('#bouncingballs a').css('color', 'gray');
        $('#bouncingballs').css('filter', 'grayscale(60%)');
    },
    )
});