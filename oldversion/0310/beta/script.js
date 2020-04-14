$(function () {
    $(".application").draggable({ scroll: false });
    $(".application").resizable();
});



// focus stuff

function unfocusMediaplayer(){
    $('#mediaplayer a').css('color', 'gray');
    $('#mediaplayer').css('filter', 'grayscale(60%)');
}

function unfocusBounce(){
    $('#bouncingballs a').css('color', 'gray');
    $('#bouncingballs').css('filter', 'grayscale(60%)');
}

function unfocusNotes(){
    $('#notes a').css('color', 'gray');
    $('#notes').css('filter', 'grayscale(10%)');
}

function unfocusBackPick(){
    $('#backgroundPicker a').css('color', 'gray');
    $('#backgroundPicker').css('filter', 'grayscale(60%)');
}

function unfocusPathfinder(){
    $('#pathfinder a').css('color', 'gray');
    $('#pathfinder').css('filter', 'grayscale(60%');
}

function unfocusTerminal(){
    $('#terminal a').css('color', 'gray');
    $('#terminal').css('filter', 'grayscale(60%');
}

$(function () {
    $('#mediaplayer').hover(function () {
        $('#mediaplayer a').css('color', 'black');
        $('#mediaplayer').css('filter', 'grayscale(0%)');
        unfocusBounce();
        unfocusNotes();
        unfocusBackPick();
        unfocusPathfinder();
        unfocusTerminal();
    },
    )
});

$(function () {
    $('#bouncingballs').hover(function () {
        $('#bouncingballs a').css('color', 'black');
        $('#bouncingballs').css('filter', 'grayscale(0%)');
        unfocusMediaplayer();
        unfocusNotes();
        unfocusBackPick();
        unfocusPathfinder();
        unfocusTerminal();
    },
    )
});

$(function () {
    $('#notes').hover(function () {
        $('#notes a').css('color', 'black');
        $('#notes').css('filter', 'grayscale(0%)');
        unfocusBounce();
        unfocusMediaplayer();
        unfocusBackPick();
        unfocusPathfinder();
        unfocusTerminal();
    },
    )
});

$(function () {
    $('#backgroundPicker').hover(function () {
        $('#backgroundPicker a').css('color', 'black');
        $('#backgroundPicker').css('filter', 'grayscale(0%)');
        unfocusBounce();
        unfocusMediaplayer();
        unfocusNotes();
        unfocusPathfinder();
        unfocusTerminal();
    },
    )
});

$(function () {
    $('#pathfinder').hover(function () {
        $('#pathfinder a').css('color', 'black');
        $('#pathfinder').css('filter', 'grayscale(0%)');
        unfocusBounce();
        unfocusMediaplayer();
        unfocusNotes();
        unfocusBackPick();
        unfocusTerminal();
    },
    )
});

$(function () {
    $('#terminal').hover(function () {
        $('#terminal a').css('color', 'black');
        $('#terminal').css('filter', 'grayscale(0%)');
        unfocusBounce();
        unfocusMediaplayer();
        unfocusNotes();
        unfocusBackPick();
        unfocusPathfinder();
    },
    )
});



// bouncingballs
var bouncingHeight;
var isBouncingCollapsed;

$(function () {
    $("#collapseBounce").click(function () {
        isBouncingCollapsed = true;
        bouncingHeight = $("#bouncingballs").css('height');
        collapse(bouncingballs, bouncingContent, collapseBounce, uncollapseBounce, 0);
    },
    )
});

$(function () {
    $("#uncollapseBounce").click(function () {
        if(isBouncingCollapsed){  
            unCollapse(bouncingballs, bouncingContent, collapseBounce, uncollapseBounce, bouncingHeight);
        }
        isBouncingCollapsed = false;
    },
    )
});


// Notes
var notesHeight;
var isNotesCollapsed;

$(function () {
    $("#collapseNotes").click(function () {
        isNotesCollapsed = true;
        notesHeight = $("#notes").css('height');
        collapse(notes, null, collapseNotes, uncollapseNotes, 0);
    },
    )
});

$(function () {
    $("#uncollapseNotes").click(function () {
        if(isNotesCollapsed){
            unCollapse(notes, null, collapseNotes, uncollapseNotes, notesHeight);
    
        }
        isNotesCollapsed = false;
    },
    )
});



// pathfinder
var pathfinderHeight;
var isPathfinderCollapsed;


$(function () {
    $("#collapsePathfinder").click(function () {
        isPathfinderCollapsed = true;
        pathfinderHeight = $("#pathfinder").css('height');
        collapse(pathfinder, pathfinderContent, collapsePathfinder, uncollapsePathfinder, 0)
    },
    )
});

$(function () {
    $("#uncollapsePathfinder").click(function () {
        if(isPathfinderCollapsed){
            unCollapse(pathfinder, pathfinderContent, collapsePathfinder, uncollapsePathfinder, pathfinderHeight);
    
        }
        isPathfinderCollapsed = false;
    },
    )
});

// closing functionality


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
        $('#uncollapseBouncing').trigger('click');
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


function collapse(windowName, contentName, collapseIcon, uncollapseIcon, height){
    $(contentName).hide();
    $(contentName).css('display', 'none');
    $(windowName).height(height);
    $(windowName).resizable('disable');
    $(collapseIcon).css('display', 'none');
    $(uncollapseIcon).css('display', 'inline');
}

function unCollapse(windowName, contentName, collapseIcon, uncollapseIcon, height){
    $(contentName).show();
    $(contentName).css('display', 'block');
    $(windowName).height(height);
    $(windowName).resizable('enable');
    $(collapseIcon).css('display', 'inline');
    $(uncollapseIcon).css('display', 'none');
}


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



// mediaplayer stuff

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

// clock

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


jQuery(function ($) {
    setInterval(function () {
        var date = new Date();
        var day = days[date.getDay()];
        time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        $("#dateAndTime").html(day + " " + time);
    }, 1000);
});



      $(function() {
        $( ".application" ).draggable({
            start: function() {
                $('.frameOverlay').fadeIn('fast');
                $('.windowFrameOverlay').fadeIn('fast');
                $(".windowFrameOverlay").css('cursor', 'move');
            },
            stop: function() {
                $('.frameOverlay').fadeOut('fast');
                $('.windowFrameOverlay').fadeOut('fast');
            }
        });
      });


      $(function() {
        $( ".application" ).resizable({
            start: function() {
                $('.frameOverlay').fadeIn('fast');
                $('.windowFrameOverlay').fadeIn('fast');
                $(".windowFrameOverlay").css('cursor', 'nw-resize');
            },
            stop: function() {
                $('.frameOverlay').fadeOut('fast');
                $('.windowFrameOverlay').fadeOut('fast');
            }
        });
      });