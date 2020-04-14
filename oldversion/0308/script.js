$(function () {
    $(".application").draggable();
    $(".application").resizable();
});

$(function () {
    $('#mediaplayer').hover(function () {
        $('#mediaplayer a').css('color', 'black');
        $('#mediaplayer').css('filter', 'grayscale(0%)');
        $('#bouncingballs a').css('color', 'gray');
        $('#bouncingballs').css('filter', 'grayscale(60%)');
        $('#notes a').css('color', 'gray');
        $('#notes').css('filter', 'grayscale(10%)');
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
        $('#notes').css('filter', 'grayscale(10%)');
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


// bouncingballs
$(function () {
    $("#closeBounce").click(function () {
        document.getElementById("bouncingContent").style.display = "none";
        $('#bouncingballs').css('height', '0px');
        $("#bouncingballs").resizable('disable');
        $("#closeBounce").css('display', 'none');
        $("#openBounce").css('display', 'inline');

    },
    )
});

$(function () {
    $("#openBounce").click(function () {
        document.getElementById("bouncingContent").style.display = "block";
        $('#bouncingballs').css('height', '500px');
        $("#bouncingballs").resizable('enable');
        $("#openBounce").css('display', 'none');
        $("#closeBounce").css('display', 'inline');
    },
    )
});

// Notes
$(function () {
    $("#closeNotes").click(function () {
        $('#notes').css('height', '0px');
        $("#notes").resizable('disable');
        $("#closeNotes").css('display', 'none');
        $("#openNotes").css('display', 'inline');

    },
    )
});

$(function () {
    $("#openNotes").click(function () {
        $('#notes').css('height', '400px');
        $("#notes").resizable('enable');
        $("#openNotes").css('display', 'none');
        $("#closeNotes").css('display', 'inline');
    },
    )
});

// Mediaplayer
$(function () {
    $("#closeMedia").click(function () {
        document.getElementById("mediaContent").style.display = "none";
        $('#mediaplayer').css('height', '0px');
        $("#mediaplayer").resizable('disable');
        $("#closeMedia").css('display', 'none');
        $("#openMedia").css('display', 'inline');

    },
    )
});

$(function () {
    $("#openMedia").click(function () {
        document.getElementById("mediaContent").style.display = "block";
        $('#mediaplayer').css('height', '500px');
        $("#mediaplayer").resizable('enable');
        $("#openMedia").css('display', 'none');
        $("#closeMedia").css('display', 'inline');
    },
    )
});



/*
Jag är inte särskilt bra på Javascript. Lämnar detta här om jag kan få det till att fungera senare.
$(function () {
    $("button").click(function () {
        if ($('#bouncingballs').height() == '0px') {
            document.getElementById("content").style.display = "block";
            $('#bouncingballs').css('height', '500px');
            $("#bouncingballs").resizable();
        } else {
            document.getElementById("content").style.display = "none";
            $('#bouncingballs').css('height', '0px');
            $("#bouncingballs").resizable('disable');
        }

    },
    )
});
*/
