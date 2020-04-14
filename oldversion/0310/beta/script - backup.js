$(function () {
    $(".application").draggable({ scroll: false });
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
        $('#backgroundPicker a').css('color', 'gray');
        $('#backgroundPicker').css('filter', 'grayscale(60%)');
        $('#pathfinder a').css('color', 'gray');
        $('#pathfinder').css('filter', 'grayscale(60%');
        $('#terminal a').css('color', 'gray');
        $('#terminal').css('filter', 'grayscale(60%');
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
        $('#backgroundPicker a').css('color', 'gray');
        $('#backgroundPicker').css('filter', 'grayscale(60%)');
        $('#pathfinder a').css('color', 'gray');
        $('#pathfinder').css('filter', 'grayscale(60%');
        $('#terminal a').css('color', 'gray');
        $('#terminal').css('filter', 'grayscale(60%');
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
        $('#backgroundPicker a').css('color', 'gray');
        $('#backgroundPicker').css('filter', 'grayscale(60%)');
        $('#pathfinder a').css('color', 'gray');
        $('#pathfinder').css('filter', 'grayscale(60%');
        $('#terminal a').css('color', 'gray');
        $('#terminal').css('filter', 'grayscale(60%');
    },
    )
});

$(function () {
    $('#backgroundPicker').hover(function () {
        $('#backgroundPicker a').css('color', 'black');
        $('#backgroundPicker').css('filter', 'grayscale(0%)');
        $('#notes a').css('color', 'gray');
        $('#notes').css('filter', 'grayscale(10%)');
        $('#mediaplayer a').css('color', 'gray');
        $('#mediaplayer').css('filter', 'grayscale(60%)');
        $('#bouncingballs a').css('color', 'gray');
        $('#bouncingballs').css('filter', 'grayscale(60%)');
        $('#pathfinder a').css('color', 'gray');
        $('#pathfinder').css('filter', 'grayscale(60%');
        $('#terminal a').css('color', 'gray');
        $('#terminal').css('filter', 'grayscale(60%');
    },
    )
});

$(function () {
    $('#pathfinder').hover(function () {
        $('#pathfinder a').css('color', 'black');
        $('#pathfinder').css('filter', 'grayscale(0%)');
        $('#notes a').css('color', 'gray');
        $('#notes').css('filter', 'grayscale(10%)');
        $('#mediaplayer a').css('color', 'gray');
        $('#mediaplayer').css('filter', 'grayscale(60%)');
        $('#bouncingballs a').css('color', 'gray');
        $('#bouncingballs').css('filter', 'grayscale(60%)');
        $('#backgroundPicker a').css('color', 'gray');
        $('#backgroundPicker').css('filter', 'grayscale(60%');
        $('#terminal a').css('color', 'gray');
        $('#terminal').css('filter', 'grayscale(60%');
    },
    )
});

$(function () {
    $('#terminal').hover(function () {
        $('#terminal a').css('color', 'black');
        $('#terminal').css('filter', 'grayscale(0%)');
        $('#notes a').css('color', 'gray');
        $('#notes').css('filter', 'grayscale(10%)');
        $('#mediaplayer a').css('color', 'gray');
        $('#mediaplayer').css('filter', 'grayscale(60%)');
        $('#bouncingballs a').css('color', 'gray');
        $('#bouncingballs').css('filter', 'grayscale(60%)');
        $('#backgroundPicker a').css('color', 'gray');
        $('#backgroundPicker').css('filter', 'grayscale(60%');
        $('#pathfinder a').css('color', 'gray');
        $('#pathfinder').css('filter', 'grayscale(60%');
    },
    )
});

var bouncingHeight;

// bouncingballs
$(function () {
    $("#collapseBounce").click(function () {
        bouncingHeight = $("#bouncingballs").css('height');
        document.getElementById("bouncingContent").style.display = "none";
        $('#bouncingballs').css('height', '0px');
        $("#bouncingballs").resizable('disable');
        $("#collapseBounce").css('display', 'none');
        $("#uncollapseBounce").css('display', 'inline');
    },
    )
});

$(function () {
    $("#uncollapseBounce").click(function () {
        document.getElementById("bouncingContent").style.display = "block";
        $('#bouncingballs').css('height', bouncingHeight);
        $("#bouncingballs").resizable('enable');
        $("#uncollapseBounce").css('display', 'none');
        $("#collapseBounce").css('display', 'inline');
    },
    )
});

var notesHeight;

// Notes
$(function () {
    $("#collapseNotes").click(function () {
        notesHeight = $("#notes").css('height');
        $('#notes').css('height', '0px');
        $("#notes").resizable('disable');
        $("#collapseNotes").css('display', 'none');
        $("#uncollapseNotes").css('display', 'inline');

    },
    )
});

$(function () {
    $("#uncollapseNotes").click(function () {
        $('#notes').css('height', notesHeight);
        $("#notes").resizable('enable');
        $("#uncollapseNotes").css('display', 'none');
        $("#collapseNotes").css('display', 'inline');
    },
    )
});


var mediaplayerHeight;

// Mediaplayer
$(function () {
    $("#collapseMedia").click(function () {
        mediaplayerHeight = $('#mediaplayer').css('height');
        document.getElementById("mediaContent").style.display = "none";
        $('#mediaplayer').css('height', '0px');
        $("#mediaplayer").resizable('disable');
        $("#collapseMedia").css('display', 'none');
        $("#uncollapseMedia").css('display', 'inline');
    },
    )
});

$(function () {
    $("#uncollapseMedia").click(function () {
        document.getElementById("mediaContent").style.display = "block";
        $('#mediaplayer').css('height', mediaplayerHeight);
        $("#mediaplayer").resizable('enable');
        $("#uncollapseMedia").css('display', 'none');
        $("#collapseMedia").css('display', 'inline');
    },
    )
});

var pathfinderHeight;

// pathfinder
$(function () {
    $("#collapsePathfinder").click(function () {
        pathfinderHeight = $("#pathfinder").css('height');
        document.getElementById("pathfinderContent").style.display = "none";
        $('#pathfinder').css('height', '0px');
        $("#pathfinder").resizable('disable');
        $("#collapsePathfinder").css('display', 'none');
        $("#uncollapsePathfinder").css('display', 'inline');
    },
    )
});

$(function () {
    $("#uncollapsePathfinder").click(function () {
        document.getElementById("pathfinderContent").style.display = "block";
        $('#pathfinder').css('height', pathfinderHeight);
        $("#pathfinder").resizable('enable');
        $("#uncollapsePathfinder").css('display', 'none');
        $("#collapsePathfinder").css('display', 'inline');
    },
    )
});

// closing functionality

var mediaClosed = false;

$(function () {
    $("#closeMedia").click(function () {
        $("#mediaContent").attr('src', '');
        $('#mediaplayer').hide();
        mediaClosed = true;
    },
    )
});

$(function () {
    $("#chipIcon, #chipText").click(function () {
        $('#mediaplayer').show();
        if (mediaClosed) {
            $("#mediaContent").attr('src', 'https://mmontag.github.io/chip-player-js/');
        }
        document.getElementById("mediaContent").style.display = "block";
        $('#mediaplayer').css('height', '60%');
        $("#mediaplayer").resizable('enable');
        $("#uncollapseMedia").css('display', 'none');
        $("#collapseMedia").css('display', 'inline');
        $("#appMenuContent").hide();
        mediaClosed = false;
    },
    )
});

var demoClosed = false;

$(function () {
    $("#closeBounce").click(function () {
        $("#bouncingContent").attr('src', '');
        $('#bouncingballs').hide();
        demoClosed = true;
    },
    )
});

$(function () {
    $("#ballIcon, #ballText").click(function () {
        $('#bouncingballs').show();
        if (demoClosed) {
            $('#bouncingContent').attr('src', 'http://www.coffeevortex.net/');
        }
        document.getElementById("bouncingContent").style.display = "block";
        $('#bouncingballs').css('height', '50%');
        $("#bouncingballs").resizable('enable');
        $("#uncollapseBounce").css('display', 'none');
        $("#collapseBounce").css('display', 'inline');
        $("#appMenuContent").hide();
        demoClosed = false;
    },
    )
});

$(function () {
    $("#closeNotes").click(function () {
        $('#notes').hide();

    },
    )
});

$(function () {
    $("#notesIcon, #notesText").click(function () {
        $('#notes').show();
        $("#appMenuContent").hide();
    },
    )
});

$(function () {
    $("#closePathfinder").click(function () {
        $('#pathfinder').hide();

    },
    )
});

$(function () {
    $("#pathfinderText").click(function () {
        $('#pathfinder').show();
        $("#appMenuContent").hide();
    },
    )
});

$(function () {
    $("#closeTerminal").click(function () {
        $('#terminalContent').attr('src', '');
        $('#terminal').hide();
    },
    )
});

$(function () {
    $("#terminalText").click(function () {
        $('#terminalContent').attr('src', 'terminal.html');
        $('#terminal').show();
        document.getElementById("bouncingContent").style.display = "block";
        $('#terminal').css('height', '50%');
        $("#terminal").resizable('enable');
        $("#uncollapseTerminal").css('display', 'none');
        $("#collapseTerminal").css('display', 'inline');
        $("#appMenuContent").hide();
    },
    )
});


$(function () {
    $("#closeAbout").click(function () {
        $('#about').hide();

    },
    )
});

$(function () {
    $("#aboutText").click(function () {
        $('#about').show();
        $("#about").resizable('disable');
        $("#fileMenuContent").hide();
        $("#appMenuContent").hide();
    },
    )
});

$(function () {
    $("#fileMenuClick").click(function () {
        if ($("#fileMenuContent").is(":visible")) {
            $('#fileMenuContent').hide();
        } else {
            $('#fileMenuContent').show();
            $('#optionMenuContent').hide();
            $('#appMenuContent').hide();
        }
    },
    )
});

$(function () {
    $("#optionMenuClick").click(function () {
        if ($("#optionMenuContent").is(":visible")) {
            $('#optionMenuContent').hide();
        } else {
            $('#optionMenuContent').show();
            $('#fileMenuContent').hide();
            $('#appMenuContent').hide();
        }
    },
    )
});

$(function () {
    $("#appMenuClick").click(function () {
        if ($("#appMenuContent").is(":visible")) {
            $('#appMenuContent').hide();
        } else {
            $('#appMenuContent').show();
            $('#optionMenuContent').hide();
            $('#fileMenuContent').hide();
        }
    },
    )
});

$(function () {
    $("#defaultBackground").click(function () {
        $('body').css('background-image', 'url("' + " " + '")');
    },
    )
});

$(function () {
    $("#secondBackground").click(function () {
        $('body').css('background-image', 'url("' + "source/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg" + '")');
    },
    )
});

$(function () {
    $("#thirdBackground").click(function () {
        $('body').css('background-image', 'url("' + "source/KDE Plasma Scenery 64 NO LOGO.png" + '")');
    },
    )
});

$(function () {
    $("#fourthBackground").click(function () {
        $('body').css('background-image', 'url("' + "source/andreas-gucklhorn-X3420VR5T9w-unsplash.jpg" + '")');
    },
    )
});

$(function () {
    $("#fifthBackground").click(function () {
        $('body').css('background-image', 'url("' + "source/noaa-99F4mC79j1I-unsplash.jpg" + '")');
    },
    )
});

$(function () {
    $("#sixthBackground").click(function () {
        $('body').css('background-image', 'url("' + "source/leon-ephraim-xV8uGe9gd6k-unsplash.jpg" + '")');
    },
    )
});


$(function () {
    $("#collapseBackPicker").click(function () {
        $('#backgroundContainer').hide();
        $('#backgroundPicker').css('height', '0px');
        $("#backgroundPicker").resizable('disable');
        $("#collapseBackPicker").css('display', 'none');
        $("#uncollapseBackPicker").css('display', 'inline');

    },
    )
});

$(function () {
    $("#uncollapseBackPicker").click(function () {
        $('#backgroundContainer').show();
        $('#backgroundPicker').css('height', '400px');
        $("#backgroundPicker").resizable('enable');
        $("#uncollapseBackPicker").css('display', 'none');
        $("#collapseBackPicker").css('display', 'inline');
    },
    )
});

$(function () {
    $("#collapseTerminal").click(function () {
        $('#terminalContent').hide();
        $('#terminal').css('height', '0px');
        $("#terminal").resizable('disable');
        $("#collapseTerminal").css('display', 'none');
        $("#uncollapseTerminal").css('display', 'inline');

    },
    )
});

$(function () {
    $("#uncollapseTerminal").click(function () {
        $('#terminalContent').show();
        $('#terminal').css('height', '400px');
        $("#terminal").resizable('enable');
        $("#uncollapseTerminal").css('display', 'none');
        $("#collapseTerminal").css('display', 'inline');
    },
    )
});


$(function () {
    $("#closeBackPicker").click(function () {
        $('#backgroundPicker').hide();

    },
    )
});

$(function () {
    $("#backgroundMenuClick").click(function () {
        $('#backgroundPicker').show();
        $('#optionMenuContent').hide();
        $('#fileMenuContent').hide();
    },
    )
});

$(function () {
    $("#arrangeToDefault").click(function () {
        $('#optionMenuContent').hide();
        $('#fileMenuContent').hide();
        $('#backgroundPicker').hide();
        $('#appMenuContent').hide();
        $('#pathfinder').hide();
        // Show default applications
        $('#bouncingballs').show();
        $('#mediaplayer').show();
        $('#notes').show();
        // Set default sizes
        // notes
        $('#notes').css('width', '10%')
        $('#notes').css('height', '70%');
        // mediaplayer
        $('#mediaplayer').css('width', '50%')
        $('#mediaplayer').css('height', '60%');
        // bouncingballs
        $('#bouncingballs').css('width', '25%')
        $('#bouncingballs').css('height', '50%');
        // Set default position
        // notes
        $('#notes').css('top', '2.9vh')
        $('#notes').css('left', '0.4%');
        // mediaplayer
        $('#mediaplayer').css('top', '2.9vh')
        $('#mediaplayer').css('left', '0.4%');
        // bouncingballs
        $('#bouncingballs').css('top', '2.9vh')
        $('#bouncingballs').css('left', '0.4%');
        // populate iframes if empty
        if (mediaClosed) {
            $("#mediaContent").attr('src', 'https://mmontag.github.io/chip-player-js/');
        }

        if (demoClosed) {
            $('#bouncingContent').attr('src', 'http://www.coffeevortex.net/');
        }

    },
    )
});

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


jQuery(function ($) {
    setInterval(function () {
        var date = new Date();
        var day = days[date.getDay()];
        time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        $("#dateAndTime").html(day + " " + time);
    }, 1000);
});