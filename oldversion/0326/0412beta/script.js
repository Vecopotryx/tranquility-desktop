$(function () {
    $(".application").draggable({
        scroll: false
    });
    $(".application").resizable();
});


$(document).ready(function () {
    unfocusNotes();
    unfocusMediaplayer();
    unfocusBounce();
});



// focus stuff

var currentlyFocused;

function unfocusMediaplayer() {
    $('#mediaplayer a').css('color', 'gray');
    $('#mediaplayer').css('filter', 'grayscale(60%)');
}

function unfocusBounce() {
    $('#bouncingballs a').css('color', 'gray');
    $('#bouncingballs').css('filter', 'grayscale(60%)');
}

function unfocusNotes() {
    $('#notes a').css('color', 'gray');
    $('#notesContent a').css('color', 'gray');
    $('#notesContent h1').css('color', 'gray');
    $('#notesContent h2').css('color', 'gray');
    $('#notesContent p').css('color', 'gray');
    $('#notes').css('filter', 'grayscale(10%)');
}

function unfocusBackPick() {
    $('#backgroundPicker a').css('color', 'gray');
    $('#backgroundPicker').css('filter', 'grayscale(60%)');
}

function unfocusPathfinder() {
    $('#pathfinder a').css('color', 'gray');
    $('#pathfinder').css('filter', 'grayscale(60%');
}

function unfocusTerminal() {
    $('#terminal a').css('color', 'gray');
    $('#terminal').css('filter', 'grayscale(60%');
}

function unfocusBrowser() {
    $('#browserWindow a').css('color', 'gray');
    $('#browserWindow').css('filter', 'grayscale(60%');
}

function unfocusHelp() {
    $('#help a').css('color', 'gray');
    $('#help p').css('color', 'gray');
    $('#help h1').css('color', 'gray');
    $('#help h2').css('color', 'gray');
    $('#help').css('filter', 'grayscale(60%');
}

function unfocusAbout() {
    $('#about a').css('color', 'gray');
    $('#about').css('filter', 'grayscale(60%');
    $('#about p').css('color', 'gray');
}

function unfocusCustomizationSettings() {
    $('#customizationSettings a').css('color', 'gray');
    $('#customizationSettings').css('filter', 'grayscale(60%');
}

$(function () {
    $('#mediaplayer').hover(function () {
        focusMediaplayer();
    })
});

$(function () {
    $('#bouncingballs').hover(function () {
        focusBouncingballs();
    })
});

$(function () {
    $('#notes').hover(function () {
        focusNotes();
    })
});

$(function () {
    $('#backgroundPicker').hover(function () {
        focusBackgroundPicker();
    })
});

$(function () {
    $('#pathfinder').hover(function () {
        focusPathfinder();
    })
});

$(function () {
    $('#terminal').hover(function () {
        focusTerminal();
    })
});

$(function () {
    $('#browserWindow').hover(function () {
        focusBrowser();
    })
});

$(function () {
    $('#help').hover(function () {
        focusHelp();
    })
});

$(function () {
    $('#about').hover(function () {
        focusAbout();
    })
});

$(function () {
    $('#customizationSettings').hover(function () {
        focusCustomizationSettings();
    })
});

var mediaIndex;
var bouncingIndex;
var notesIndex;
var backpickerIndex;
var pathfinderIndex;
var terminalIndex;
var browserIndex;
var helpIndex;
var aboutIndex;
var customizeIndex;

var textColor = "#000000";
var titlebarTextColor = "#000000";
var notesTextColor = "#000000";

function updateIndex() {
    bouncingIndex = $('#bouncingballs').css('z-index');
    mediaIndex = $('#mediaplayer').css('z-index');
    notesIndex = $('#notes').css('z-index');
    backpickerIndex = $('#backgroundPicker').css('z-index');
    pathfinderIndex = $('#pathfinder').css('z-index');
    terminalIndex = $('#terminal').css('z-index');
    browserIndex = $('#browserWindow').css('z-index');
    helpIndex = $('#help').css('z-index');
    aboutIndex = $('#about').css('z-index');
    customizeIndex = $('#customizationSettings').css('z-index');
}

function getHighestIndex() {
    return Math.max(mediaIndex, bouncingIndex, notesIndex, backpickerIndex, pathfinderIndex, terminalIndex, browserIndex, helpIndex, aboutIndex, customizeIndex);
}

function focusMediaplayer() {
    unfocusAll();
    updateIndex();
    mediaIndex = getHighestIndex() + 1;
    $('#mediaplayer').css('z-index', mediaIndex);
    $('#mediaplayer a').css('color', titlebarTextColor);
    $('#mediaplayer').css('filter', 'grayscale(0%)');
    currentlyFocused = "mediaplayer";
}


function focusBouncingballs() {
    unfocusAll();
    updateIndex();
    bouncingIndex = getHighestIndex() + 1;
    $('#bouncingballs').css('z-index', bouncingIndex);
    $('#bouncingballs a').css('color', titlebarTextColor);
    $('#bouncingballs').css('filter', 'grayscale(0%)');
    currentlyFocused = "bouncingballs";
}

function focusNotes() {
    unfocusAll();
    updateIndex();
    notesIndex = getHighestIndex() + 1;
    $('#notes').css('z-index', notesIndex);
    $('#notes a').css('color', titlebarTextColor);
    $('#notesContent a').css('color', notesTextColor);
    $('#notesContent h1').css('color', notesTextColor);
    $('#notesContent h2').css('color', notesTextColor);
    $('#notesContent p').css('color', notesTextColor);
    $('#notes').css('filter', 'grayscale(0%)');
    currentlyFocused = "notes";
}

function focusBackgroundPicker() {
    unfocusAll();
    updateIndex();
    backpickerIndex = getHighestIndex() + 1;
    $('#backgroundPicker').css('z-index', backpickerIndex);
    $('#backgroundPicker a').css('color', titlebarTextColor);
    $('#backgroundPicker').css('filter', 'grayscale(0%)');
    currentlyFocused = "backgroundPicker";
}

function focusPathfinder() {
    unfocusAll();
    updateIndex();
    pathfinderIndex = getHighestIndex() + 1;
    $('#pathfinder').css('z-index', pathfinderIndex);
    $('#pathfinder a').css('color', titlebarTextColor);
    $('#pathfinder').css('filter', 'grayscale(0%)');
    currentlyFocused = "pathfinder";
}

function focusTerminal() {
    unfocusAll();
    updateIndex();
    terminalIndex = getHighestIndex() + 1;
    $('#terminal').css('z-index', terminalIndex);
    $('#terminal a').css('color', titlebarTextColor);
    $('#terminal').css('filter', 'grayscale(0%)');
    currentlyFocused = "terminal";
}

function focusBrowser() {
    unfocusAll();
    updateIndex();
    browserIndex = getHighestIndex() + 1;
    $('#browserWindow').css('z-index', browserIndex);
    $('#browserWindow a').css('color', titlebarTextColor);
    $('#browserWindow').css('filter', 'grayscale(0%)');
    currentlyFocused = "browser";
}

function focusHelp() {
    unfocusAll();
    updateIndex();
    helpIndex = getHighestIndex() + 1;
    $('#help').css('z-index', helpIndex);
    $('#help a').css('color', titlebarTextColor);
    $('#help p').css('color', textColor);
    $('#help h1').css('color', textColor);
    $('#help h2').css('color', textColor);
    $('#help').css('filter', 'grayscale(0%)');
    currentlyFocused = "help";
}

function focusAbout() {
    unfocusAll();
    updateIndex();
    aboutIndex = getHighestIndex() + 1;
    $('#about').css('z-index', aboutIndex);
    $('#about h1').css('color', textColor);
    $('#about p').css('color', textColor);
    $('#about a').css('color', titlebarTextColor);
    $('#about').css('filter', 'grayscale(0%)');
    currentlyFocused = "about";
}

function focusCustomizationSettings() {
    unfocusAll();
    updateIndex();
    customizeIndex = getHighestIndex() + 1;
    $('#customizationSettings').css('z-index', customizeIndex);
    $('#customizationSettings a').css('color', titlebarTextColor);
    $('#customizationSettings').css('filter', 'grayscale(0%)');
    currentlyFocused = "customization";
}

function unfocusAll() {
    unfocusBounce();
    unfocusMediaplayer();
    unfocusNotes();
    unfocusBackPick();
    unfocusPathfinder();
    unfocusTerminal();
    unfocusBrowser();
    unfocusHelp();
    unfocusAbout();
    unfocusCustomizationSettings();
}

// closing functionality with the help of alt + q, holding alt to move windows, alt + w to collapse window
var map = [];
var down = [];
$(document).keydown(function (e) {
    if (!map[e.keyCode]) {
        down.push(e.keyCode);
        if (down[0] === 18) {
            $('.windowFrameOverlay').fadeIn('fast');
            $(".windowFrameOverlay").css('cursor', 'move');
        }
        if (down[0] === 18 && down[1] === 81) {
            switch (currentlyFocused) {
                case 'mediaplayer':
                    $('#closeMedia').click();
                    break;
                case 'bouncingballs':
                    $('#closeBounce').click();
                    break;
                case 'notes':
                    $('#closeNotes').click();
                    break;
                case 'backgroundPicker':
                    $('#closeBackPicker').click();
                    break;
                case 'pathfinder':
                    $('#closePathfinder').click();
                    break;
                case 'terminal':
                    $('#closeTerminal').click();
                    break;
                case 'browser':
                    $('#closeBrowser').click();
                    break;
                case 'help':
                    $('#closeHelp').click();
                    break;
                case 'about':
                    $('#closeAbout').click();
                    break;
                case 'customization':
                    $('#closeCustomization').click();
                    break;
            }
        }
        if (down[0] === 18 && down[1] === 87) {
            switch (currentlyFocused) {
                case 'mediaplayer':
                    if (isMediaplayerCollapsed) {
                        $('#uncollapseMedia').click();
                    } else {
                        $('#collapseMedia').click();
                    }
                    break;
                case 'bouncingballs':
                    if (isBouncingCollapsed) {
                        $('#uncollapseBounce').click();
                    } else {
                        $('#collapseBounce').click();
                    }
                    break;
                case 'notes':
                    if (isNotesCollapsed) {
                        $('#uncollapseNotes').click();
                    } else {
                        $('#collapseNotes').click();
                    }
                    break;
                case 'backgroundPicker':
                    if (isBackpickerCollapsed) {
                        $('#uncollapseBackPicker').click();
                    } else {
                        $('#collapseBackPicker').click();
                    }
                    break;
                case 'pathfinder':
                    if (isPathfinderCollapsed) {
                        $('#uncollapsePathfinder').click();
                    } else {
                        $('#collapsePathfinder').click();
                    }
                    break;
                case 'terminal':
                    if (isTerminalCollapsed) {
                        $('#uncollapseTerminal').click();
                    } else {
                        $('#collapseTerminal').click();
                    }
                    break;
                case 'browser':
                    if (isBrowserCollapsed) {
                        $('#uncollapseBrowser').click();
                    } else {
                        $('#collapseBrowser').click();
                    }
                    break;
                case 'help':
                    if (isMediaplayerCollapsed) {
                        $('#uncollapseMedia').click();
                    } else {
                        $('#collapseMedia').click();
                    }
                    break;
                case 'help':
                    if (isCustomizationCollapsed) {
                        $('#uncollapseCustomization').click();
                    } else {
                        $('#collapseCustomization').click();
                    }
                    break;
            }
        }
        // maximise stuff (With Alt + F)
        if (down[0] === 18 && down[1] === 70) {
            switch (currentlyFocused) {
                case 'mediaplayer':
                    maximiseMedia();
                    break;
                case 'bouncingballs':
                    maximiseBounce();
                    break;
                case 'notes':
                    maximiseNotes();
                    break;
                case 'terminal':
                    maximiseTerminal();
                    break;
                case 'browser':
                    maximiseBrowser();
                    break;
            }
        }
    }
    map[e.keyCode] = true;
}).keyup(function (e) {
    map[e.keyCode] = false;
    down.length = 0;
    $('.frameOverlay').fadeOut('fast');
    $('.windowFrameOverlay').fadeOut('fast');
});



// collapse stuff

// bouncingballs
var bouncingHeight;
var isBouncingCollapsed;

$(function () {
    $("#collapseBounce").click(function () {
        isBouncingCollapsed = true;
        bouncingHeight = $("#bouncingballs").css('height');
        $('#bouncingContent').hide();
        $('#bouncingballs').height(0);
        $('#bouncingballs').resizable('disable');
        $('#collapseBounce').css('display', 'none');
        $('#uncollapseBounce').css('display', 'inline');
    },
    )
});

$(function () {
    $("#uncollapseBounce").click(function () {
        if (isBouncingCollapsed) {
            $('#bouncingContent').show();
            $('#bouncingballs').height(bouncingHeight);
            $('#bouncingballs').resizable('enable');
            $('#collapseBounce').css('display', 'inline');
            $('#uncollapseBounce').css('display', 'none');
        }
        isBouncingCollapsed = false;
    },
    )
});

// I've tried turning these into methods twice, both times there have been security errors in the web console

// Notes
var notesHeight;
var isNotesCollapsed;

$(function () {
    $("#collapseNotes").click(function () {
        isNotesCollapsed = true;
        notesHeight = $("#notes").css('height');
        $('#notes').height(0);
        $('#notes').resizable('disable');
        $('#collapseNotes').css('display', 'none');
        $('#uncollapseNotes').css('display', 'inline');
    },
    )
});

$(function () {
    $("#uncollapseNotes").click(function () {
        if (isNotesCollapsed) {
            $('#notes').height(notesHeight);
            $('#notes').resizable('enable');
            $('#collapseNotes').css('display', 'inline');
            $('#uncollapseNotes').css('display', 'none');
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
        $('#pathfinderContent').hide();
        $('#pathfinder').height(0);
        $('#pathfinder').resizable('disable');
        $('#collapsePathfinder').css('display', 'none');
        $('#uncollapsePathfinder').css('display', 'inline');
    },
    )
});

$(function () {
    $("#uncollapsePathfinder").click(function () {
        if (isPathfinderCollapsed) {
            $('#pathfinderContent').show();
            $('#pathfinder').height(pathfinderHeight);
            $('#pathfinder').resizable('enable');
            $('#collapsePathfinder').css('display', 'inline');
            $('#uncollapsePathfinder').css('display', 'none');
        }
        isPathfinderCollapsed = false;
    },
    )
});

// mediaplayer
var mediaplayerHeight;
var isMediaplayerCollapsed;

$(function () {
    $("#collapseMedia").click(function () {
        isMediaplayerCollapsed = true;
        mediaplayerHeight = $("#mediaplayer").css('height');
        $('#mediaContent').hide();
        $('#mediaplayer').height(0);
        $('#mediaplayer').resizable('disable');
        $('#collapseMedia').css('display', 'none');
        $('#uncollapseMedia').css('display', 'inline');
    },
    )
});

$(function () {
    $("#uncollapseMedia").click(function () {
        if (isMediaplayerCollapsed) {
            $('#mediaContent').show();
            $('#mediaplayer').height(mediaplayerHeight);
            $('#mediaplayer').resizable('enable');
            $('#collapseMedia').css('display', 'inline');
            $('#uncollapseMedia').css('display', 'none');
        }
        isMediaplayerCollapsed = false;
    },
    )
});

// terminal
var terminalHeight;
var isTerminalCollapsed;

$(function () {
    $("#collapseTerminal").click(function () {
        isTerminalCollapsed = true;
        terminalHeight = $("#terminal").css('height');
        $('#terminalContent').hide();
        $('#terminal').height(0);
        $('#terminal').resizable('disable');
        $('#collapseTerminal').css('display', 'none');
        $('#uncollapseTerminal').css('display', 'inline');
    },
    )
});

$(function () {
    $("#uncollapseTerminal").click(function () {
        if (isTerminalCollapsed) {
            $('#terminalContent').show();
            $('#terminal').height(terminalHeight);
            $('#terminal').resizable('enable');
            $('#collapseTerminal').css('display', 'inline');
            $('#uncollapseTerminal').css('display', 'none');
        }
        isTerminalCollapsed = false;
    },
    )
});

// browser
var browserHeight;
var isBrowserCollapsed;

$(function () {
    $("#collapseBrowser").click(function () {
        isBrowserCollapsed = true;
        browserHeight = $("#browserWindow").css('height');
        $('#browserContent').hide();
        $('#browserWindow').height(0);
        $('#browserWindow').resizable('disable');
        $('#collapseBrowser').css('display', 'none');
        $('#uncollapseBrowser').css('display', 'inline');
    },
    )
});

$(function () {
    $("#uncollapseBrowser").click(function () {
        if (isBrowserCollapsed) {
            $('#browserContent').show();
            $('#browserWindow').height(browserHeight);
            $('#browserWindow').resizable('enable');
            $('#collapseBrowser').css('display', 'inline');
            $('#uncollapseBrowser').css('display', 'none');
        }
        isBrowserCollapsed = false;
    },
    )
});

// background picker
var backpickerHeight;
var isBackpickerCollapsed;

$(function () {
    $("#collapseBackPicker").click(function () {
        isBackpickerCollapsed = true;
        backpickerHeight = $("#backgroundPicker").css('height');
        $('#backgroundContainer').hide();
        $('#backgroundPicker').css('min-height', '0px');
        $('#backgroundPicker').css('min-width', '0px');
        $('#backgroundPicker').height(0);
        $('#backgroundPicker').resizable('disable');
        $('#collapseBackPicker').css('display', 'none');
        $('#uncollapseBackPicker').css('display', 'inline');
    },
    )
});

$(function () {
    $("#uncollapseBackPicker").click(function () {
        if (isBackpickerCollapsed) {
            $('#backgroundPicker').height(backpickerHeight);
            $('#backgroundPicker').resizable('enable');
            $('#backgroundContainer').show();
            $('#collapseBackPicker').css('display', 'inline');
            $('#uncollapseBackPicker').css('display', 'none');
            $('#backgroundPicker').css('min-height', '12cm');
            $('#backgroundPicker').css('min-width', '25cm');
        }
        isBackpickerCollapsed = false;
    },
    )
});

// help
var helpHeight;
var isHelpCollapsed;

$(function () {
    $("#collapseHelp").click(function () {
        isHelpCollapsed = true;
        helpHeight = $("#help").css('height');
        $('#helpContent').hide();
        $('#help').height(0);
        $('#help').resizable('disable');
        $('#collapseHelp').css('display', 'none');
        $('#uncollapseHelp').css('display', 'inline');
    },
    )
});

$(function () {
    $("#uncollapseHelp").click(function () {
        if (isHelpCollapsed) {
            $('#helpContent').show();
            $('#help').height(helpHeight);
            $('#help').resizable('enable');
            $('#collapseHelp').css('display', 'inline');
            $('#uncollapseHelp').css('display', 'none');
        }
        isHelpCollapsed = false;
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
    })
});

var demoClosed = false;

$(function () {
    $("#closeBounce").click(function () {
        $("#bouncingContent").attr('src', '');
        $('#bouncingballs').hide();
        demoClosed = true;
    })
});

$(function () {
    $("#ballIcon, #ballText").click(function () {
        $('#bouncingballs').show();
        if (demoClosed) {
            $('#bouncingContent').attr('src', 'http://www.coffeevortex.net/');
        }
        $("#uncollapseBouncing").click();
        $('#bouncingballs').css('height', '50%');
        isBouncingCollapsed = false;
        demoClosed = false;
        focusBouncingballs();
    })
});

$(function () {
    $("#chipIcon, #chipText").click(function () {
        $('#mediaplayer').show();
        if (mediaClosed) {
            $("#mediaContent").attr('src', 'https://mmontag.github.io/chip-player-js/');
        }
        $("#uncollapseMedia").click();
        $('#mediaplayer').css('height', '60%');
        isMediaCollapsed = false;
        mediaClosed = false;
        focusMediaplayer();
    })
});

$(function () {
    $("#closeNotes").click(function () {
        $('#notes').hide();
    })
});

$(function () {
    $("#notesIcon, #notesText").click(function () {
        $('#notes').show();
        $("#appMenuContent").hide();
        $("#uncollapseNotes").click();
        focusNotes();
    })
});

$(function () {
    $("#closePathfinder").click(function () {
        $('#pathfinder').hide();
    })
});

$(function () {
    $("#pathfinderText").click(function () {
        $('#pathfinder').show();
        $("#appMenuContent").hide();
        $("#uncollapsePathfinder").click();
        focusPathfinder();
    })
});

$(function () {
    $("#closeTerminal").click(function () {
        $('#terminalContent').attr('src', '');
        $('#terminal').hide();
    })
});

$(function () {
    $("#terminalText").click(function () {
        $("#uncollapseTerminal").click();
        $('#terminalContent').attr('src', 'terminal.html');
        $('#terminal').show();
        $('#terminal').css('height', '50%');
        $("#appMenuContent").hide();
        focusTerminal();
    })
});


$(function () {
    $("#closeBrowser").click(function () {
        $('#browserContent').hide();
        $('#browserInfo').show();
        $('#browserContent').attr('src', '');
        $('#browserWindow').hide();
    })
});

$(function () {
    $("#browserText").click(function () {
        $('#browserContent').attr('src', 'http://theoldnet.com/browser');
        $('#browserWindow').show();
        $('#browserWindow').css('height', '50%');
        $("#browserWindow").resizable('enable');
        $("#uncollapseBrowser").css('display', 'none');
        $("#collapseBrowser").css('display', 'inline');
        $("#appMenuContent").hide();
        focusBrowser();
        loadingDots();
        $('#browserInfo').delay(2000).fadeOut("slow");
        $('#browserContent').delay(2500).fadeIn("slow");
    })
});

$(function () {
    $("#closeAbout").click(function () {
        $('#about').hide();
    })
});

$(function () {
    $("#aboutText").click(function () {
        $('#about').show();
        $("#about").resizable('disable');
        $("#fileMenuContent").hide();
        $("#appMenuContent").hide();
        focusAbout();
    })
});

$(function () {
    $("#closeHelp").click(function () {
        $('#help').hide();
    })
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
    })
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
    })
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
    })
});


$(function () {
    $("#closeBackPicker").click(function () {
        $('#backgroundPicker').hide();

    })
});

$(function () {
    $("#backgroundMenuClick").click(function () {
        $('#backgroundPicker').show();
        $('#optionMenuContent').hide();
        $('#fileMenuContent').hide();
        focusBackgroundPicker();
    })
});

$(function () {
    $("#arrangeToDefault").click(function () {
        $('#optionMenuContent').hide();
        $('#fileMenuContent').hide();
        $('#backgroundPicker').hide();
        $('#appMenuContent').hide();
        $('#pathfinder').hide();
        $('#terminal').hide();
        $('#browserWindow').hide();
        $('#help').hide();
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
        $('#notes').css('top', '0.78cm')
        $('#notes').css('left', '0.4%');
        // mediaplayer
        $('#mediaplayer').css('top', '0.78cm')
        $('#mediaplayer').css('left', '0.4%');
        // bouncingballs
        $('#bouncingballs').css('top', '0.78cm')
        $('#bouncingballs').css('left', '0.4%');
        // populate iframes if empty
        if (mediaClosed) {
            $("#mediaContent").attr('src', 'https://mmontag.github.io/chip-player-js/');
        }

        if (demoClosed) {
            $('#bouncingContent').attr('src', 'http://www.coffeevortex.net/');
        }

        // show iframes if collapsed
        if (isMediaCollapsed) {
            $("#uncollapseMedia").click
        }
        isMediaCollapsed = false;

        if (isBouncingCollapsed) {
            $("#collapseBounce").click
        }
        isBouncingCollapsed = false;
    })
});




// clock

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


jQuery(function ($) {
    setInterval(function () {
        var date = new Date();
        var day = days[date.getDay()];
        time = date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
        $("#dateAndTime").html(day + " " + time);
    }, 1000);
});




$(function () {
    $(".application").draggable({
        start: function () {
            $('.frameOverlay').fadeIn('fast');
            $('.windowFrameOverlay').fadeIn('fast');
            $(".windowFrameOverlay").css('cursor', 'move');
        },
        stop: function () {
            $('.frameOverlay').fadeOut('fast');
            $('.windowFrameOverlay').fadeOut('fast');
        }
    });
});

$(function () {
    $(".application").resizable({
        start: function () {
            $('.frameOverlay').fadeIn('fast');
            $('.windowFrameOverlay').fadeIn('fast');
            $(".windowFrameOverlay").css('cursor', 'nw-resize');
        },
        stop: function () {
            $('.frameOverlay').fadeOut('fast');
            $('.windowFrameOverlay').fadeOut('fast');
        }
    });
});


$(function () {
    $("#customPicker").click(function () {
        var customSrc = prompt("Please enter an url:", "http://theoldnet.com/browser/");
        if (customSrc == null || customSrc == "") {
            console.log("Nothing happened");
        } else if ((customSrc.includes("http://")) || (customSrc.includes("https://"))) {
            $('#browserContent').attr('display', 'block');
            $('#browserInfo').attr('display', 'none');
            $('#browserContent').attr('src', customSrc);
        } else {
            fixedCustomSrc = "http://" + customSrc;
            $('#browserContent').attr('display', 'block');
            $('#browserContent').attr('src', fixedCustomSrc);
        }
    },
    )
});

$(function () {
    $("#customWeb").click(function () {
        $('#browserContent').attr('display', 'block');
        $('#browserInfo').attr('display', 'none');
        $('#browserContent').attr('src', 'http://theoldnet.com/browser/');
    },
    )
});

var repetitions = 0;

function loadingDots() {
    var dots = window.setInterval(function () {
        var wait = document.getElementById("wait");
        repetitions += 1;
        if (wait.innerHTML.length > 3)
            wait.innerHTML = "";
        else
            wait.innerHTML += ".";
        if (repetitions == 16) {
            clearInterval(dots);
            repetitions = 0;
        }
    }, 300);
}




$(function () {
    $("#helpMenuClick").click(function () {
        $("#uncollapseHelp").click();
        $('#help').show();
        $('#appMenuContent').hide();
        $('#optionMenuContent').hide();
        $('#fileMenuContent').hide();
        focusHelp();
    })
});


// background picker stuff

$(function () {
    $(document).on("keypress", "input[type=text]", function (e) {
        if (e.which == 13) {
            $('#randomFromUnsplash').click();
        }
    });

    $('#randomFromUnsplash').click(function () {
        var widthHeight = document.getElementById('randomWidth').value + "x" + document.getElementById('randomHeight').value;
        d = new Date();
        $('body').css('background-image', 'url("https://source.unsplash.com/' + widthHeight + "/?" + document.getElementById('randomSearchTerm').value + "/" + d.getTime() + '/")');
    });

    $('input[type=radio][name=backgroundRepeats]').change(function () {
        if (this.value == 'repeat') {
            $('body').css('background-repeat', 'repeat');
        }
        else if (this.value == 'repeat-x') {
            $('body').css('background-repeat', 'repeat-x');
        }
        else if (this.value == 'repeat-y') {
            $('body').css('background-repeat', 'repeat-y');
        }
        else if (this.value == 'no-repeat') {
            $('body').css('background-repeat', 'no-repeat');
        }
    });
    $('input[type=radio][name=backgroundSizes]').change(function () {
        if (this.value == 'cover') {
            $('body').css('background-size', 'cover');
        }
        else if (this.value == 'contain') {
            $('body').css('background-size', 'contain');
        }
        else if (this.value == 'auto') {
            $('body').css('background-size', 'auto');
        }
    });

    var backgroundBackup;
    $('#imageBackgroundSwitch').click(function () {
        if ($(this).is(':checked')) {
            $('body').css('background-image', backgroundBackup);
        } else {
            backgroundBackup = $('body').css('background-image');
            $('body').css('background-image', 'url("' + " " + '")');
        }
    });


    function colorBackground(colorPicked) {
        document.body.style.backgroundColor = colorPicked;
    }

    $(function () {
        $("#firstBackground").click(function () {
            $('body').css('background-image', 'url("' + "source/img/nasa-Q1p7bh3SHj8-unsplash.jpg" + '")');
        })
    });

    $(function () {
        $("#secondBackground").click(function () {
            $('body').css('background-image', 'url("' + "source/img/KDE Plasma Scenery 64 NO LOGO.jpg" + '")');
        })
    });

    $(function () {
        $("#thirdBackground").click(function () {
            $('body').css('background-image', 'url("' + "source/img/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg" + '")');
        })
    });


    $('document').ready(function () {
        $("#userBackgroundPick").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('body').css('background-image', 'url("' + e.target.result + '")');
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
    });
});


// *maximise stuff* 

// mediaplayer
var mediaHeightBeforeMax;
var mediaWidthBeforeMax;
var mediaMarginTop;
var mediaMarginLeft;
var mediaPositionTop;
var mediaPositionLeft;
var isMediaMaximised;


$(function () {
    $('#mediaplayer').draggable().dblclick(function () {
        maximiseMedia();
    });
});

function maximiseMedia() {
    if (isMediaMaximised) {
        $('#mediaplayer').css('height', mediaHeightBeforeMax);
        $('#mediaplayer').css('width', mediaWidthBeforeMax);
        $('#mediaplayer').css('margin-top', mediaMarginTop);
        $('#mediaplayer').css('margin-left', mediaMarginLeft);
        $('#mediaplayer').css('top', mediaPositionTop);
        $('#mediaplayer').css('left', mediaPositionLeft);
        isMediaMaximised = false;
    } else {
        mediaHeightBeforeMax = $("#mediaplayer").css('height');
        mediaWidthBeforeMax = $("#mediaplayer").css('width');
        mediaMarginTop = $("#mediaplayer").css('margin-top');
        mediaMarginLeft = $("#mediaplayer").css('margin-left');
        mediaPositionTop = $("#mediaplayer").css('top');
        mediaPositionLeft = $("#mediaplayer").css('left');
        $('#mediaplayer').css('top', '0.78cm')
        $('#mediaplayer').css('left', '0.3%')
        $('#mediaplayer').css('margin-left', '0.1%');
        $('#mediaplayer').css('height', '95%');
        $('#mediaplayer').css('width', '99%');
        isMediaMaximised = true;
    }
}

// notes
var notesHeightBeforeMax;
var notesWidthBeforeMax;
var notesMarginTop;
var notesMarginLeft;
var notesPositionTop;
var notesPositionLeft;
var isNotesMaximised;


$(function () {
    $('#notes').draggable().dblclick(function () {
        maximiseNotes();
    });
});

function maximiseNotes() {
    if (isNotesMaximised) {
        $('#notes').css('height', notesHeightBeforeMax);
        $('#notes').css('width', notesWidthBeforeMax);
        $('#notes').css('margin-top', notesMarginTop);
        $('#notes').css('margin-left', notesMarginLeft);
        $('#notes').css('top', notesPositionTop);
        $('#notes').css('left', notesPositionLeft);
        isNotesMaximised = false;
    } else {
        notesHeightBeforeMax = $("#notes").css('height');
        notesWidthBeforeMax = $("#notes").css('width');
        notesMarginTop = $("#notes").css('margin-top');
        notesMarginLeft = $("#notes").css('margin-left');
        notesPositionTop = $("#notes").css('top');
        notesPositionLeft = $("#notes").css('left');
        $('#notes').css('top', '0.78cm')
        $('#notes').css('left', '0.3%')
        $('#notes').css('margin-left', '0.1%');
        $('#notes').css('height', '95%');
        $('#notes').css('width', '99%');
        isNotesMaximised = true;
    }
}


// bouncing
var bouncingHeightBeforeMax;
var bouncingWidthBeforeMax;
var bouncingMarginTop;
var bouncingMarginLeft;
var bouncingPositionTop;
var bouncingPositionLeft;
var isBouncingMaximised;


$(function () {
    $('#bouncingballs').draggable().dblclick(function () {
        maximiseBounce();
    });
});

function maximiseBounce() {
    if (isBouncingMaximised) {
        $('#bouncingballs').css('height', bouncingHeightBeforeMax);
        $('#bouncingballs').css('width', bouncingWidthBeforeMax);
        $('#bouncingballs').css('margin-top', bouncingMarginTop);
        $('#bouncingballs').css('margin-left', bouncingMarginLeft);
        $('#bouncingballs').css('top', bouncingPositionTop);
        $('#bouncingballs').css('left', bouncingPositionLeft);
        isBouncingMaximised = false;
    } else {
        bouncingHeightBeforeMax = $("#bouncingballs").css('height');
        bouncingWidthBeforeMax = $("#bouncingballs").css('width');
        bouncingMarginTop = $("#bouncingballs").css('margin-top');
        bouncingMarginLeft = $("#bouncingballs").css('margin-left');
        bouncingPositionTop = $("#bouncingballs").css('top');
        bouncingPositionLeft = $("#bouncingballs").css('left');
        $('#bouncingballs').css('top', '0.78cm')
        $('#bouncingballs').css('left', '0.3%')
        $('#bouncingballs').css('margin-left', '0.1%');
        $('#bouncingballs').css('height', '95%');
        $('#bouncingballs').css('width', '99%');
        isBouncingMaximised = true;
    }
}

// terminal
var terminalHeightBeforeMax;
var terminalWidthBeforeMax;
var terminalMarginTop;
var terminalMarginLeft;
var terminalPositionTop;
var terminalPositionLeft;
var isTerminalMaximised;


$(function () {
    $('#terminal').draggable().dblclick(function () {
        maximiseTerminal();
    });
});

function maximiseTerminal() {
    if (isTerminalMaximised) {
        $('#terminal').css('height', terminalHeightBeforeMax);
        $('#terminal').css('width', terminalWidthBeforeMax);
        $('#terminal').css('margin-top', terminalMarginTop);
        $('#terminal').css('margin-left', terminalMarginLeft);
        $('#terminal').css('top', terminalPositionTop);
        $('#terminal').css('left', terminalPositionLeft);
        isTerminalMaximised = false;
    } else {
        terminalHeightBeforeMax = $("#terminal").css('height');
        terminalWidthBeforeMax = $("#terminal").css('width');
        terminalMarginTop = $("#terminal").css('margin-top');
        terminalMarginLeft = $("#terminal").css('margin-left');
        terminalPositionTop = $("#terminal").css('top');
        terminalPositionLeft = $("#terminal").css('left');
        $('#terminal').css('top', '1cm')
        $('#terminal').css('left', '0.3%')
        $('#terminal').css('margin-left', '0.1%');
        $('#terminal').css('height', '95%');
        $('#terminal').css('width', '99%');
        isTerminalMaximised = true;
    }
}

// browser
var browserHeightBeforeMax;
var browserWidthBeforeMax;
var browserMarginTop;
var browserMarginLeft;
var browserPositionTop;
var browserPositionLeft;
var isBrowserMaximised;


$(function () {
    $('#browserWindow').draggable().dblclick(function () {
        maximiseBrowser();
    });
});

function maximiseBrowser() {
    if (isBrowserMaximised) {
        $('#browserWindow').css('height', browserHeightBeforeMax);
        $('#browserWindow').css('width', browserWidthBeforeMax);
        $('#browserWindow').css('margin-top', browserMarginTop);
        $('#browserWindow').css('margin-left', browserMarginLeft);
        $('#browserWindow').css('top', browserPositionTop);
        $('#browserWindow').css('left', browserPositionLeft);
        isBrowserMaximised = false;
    } else {
        browserHeightBeforeMax = $("#browserWindow").css('height');
        browserWidthBeforeMax = $("#browserWindow").css('width');
        browserMarginTop = $("#browserWindow").css('margin-top');
        browserMarginLeft = $("#browserWindow").css('margin-left');
        browserPositionTop = $("#browserWindow").css('top');
        browserPositionLeft = $("#browserWindow").css('left');
        $('#browserWindow').css('top', '1cm')
        $('#browserWindow').css('left', '0.3%')
        $('#browserWindow').css('margin-left', '0.1%');
        $('#browserWindow').css('height', '95%');
        $('#browserWindow').css('width', '99%');
        isBrowserMaximised = true;
    }
}



// terminal customization stuff

var opacityValue = 0.5;
var hexColor = "#000000";
var opacityValueBackup;

$(function () {
    $('#customizeTerminal').click(function () {
        if ($("#terminalSettings").is(":visible")) {
            $('#terminalSettings').hide();
        } else {
            $('#terminalSettings').show();
        }
    });

    $('#terminalTransparencySwitch').click(function () {
        if ($(this).is(':checked')) {
            opacityValue = opacityValueBackup;
            $('#terminalTransparencyAmount').show();
            $('#terminalTransparencyText').show();
            updateTerminalBackground();
        } else {
            opacityValueBackup = opacityValue;
            $('#terminalTransparencyAmount').hide();
            $('#terminalTransparencyText').hide();
            opacityValue = 1;
            updateTerminalBackground();
        }
    });
});


function terminalAmountOfTransparency(transparency) {
    opacityValue = transparency;
    $('#terminalTransparencyText').text(opacityValue);
    updateTerminalBackground();
}

function terminalColorBackground(color) {
    hexColor = color;
    updateTerminalBackground();
}

// from https://gist.github.com/danieliser/b4b24c9f772066bcf0a6
function convertHex(hex, opacity) {
    hex = hex.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
    return result;
}

function updateTerminalBackground() {
    $('#terminal').css('background-color', convertHex(hexColor, opacityValue));
}
