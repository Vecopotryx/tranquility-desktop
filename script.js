// ***Retro Desktop Enviornment***
// **initializing variables and giving default values**
var _titlebarFocusColor = "linear-gradient(to right, white, lightgray)";
var _unfocusedTitlebarColor = "linear-gradient(to right, white, lightgray)";
var _titlebarTextColor = "#000000";
var _unfocusedTitlebarTextColor = "gray";
var _appBackgroundColor = "#FFFFFF";
var _appInterfaceTextColor = "#000000";
var _unfocusedAppInterfaceTextColor = "#808080";
var _menubarTextColor = "#000000";
var _menubarBackgroundColor = "#FFFFFF";
var _bottomMenuBarEnabled = false;

// focus releated stuff:
var currentlyFocused;
var mediaIndex;
var notesIndex;
var backpickerIndex;
var pathfinderIndex;
var terminalIndex;
var browserIndex;
var helpIndex;
var aboutIndex;
var customizeIndex;

// related to closing functionality
var mediaClosed = false;
var demoClosed = false;

// releated to collapsing functionality (helps keep track of required information):
var mediaplayerHeight;
var isMediaplayerCollapsed;
var notesHeight;
var isNotesCollapsed;
var pathfinderHeight;
var isPathfinderCollapsed;
var terminalHeight;
var isTerminalCollapsed;
var browserHeight;
var isBrowserCollapsed;
var helpHeight;
var isHelpCollapsed;
var backpickerHeight;
var isBackpickerCollapsed;
var customizationHeight;
var isCustomizationCollapsed;

// related to maximize functionality (helps keep track of required infromation)
var mediaHeightBeforeMax;
var mediaWidthBeforeMax;
var mediaMarginTop;
var mediaMarginLeft;
var mediaPositionTop;
var mediaPositionLeft;
var isMediaMaximised;
// notes
var notesHeightBeforeMax;
var notesWidthBeforeMax;
var notesMarginTop;
var notesMarginLeft;
var notesPositionTop;
var notesPositionLeft;
var isNotesMaximised;
// terminal
var terminalHeightBeforeMax;
var terminalWidthBeforeMax;
var terminalMarginTop;
var terminalMarginLeft;
var terminalPositionTop;
var terminalPositionLeft;
var isTerminalMaximised;
// browser
var browserHeightBeforeMax;
var browserWidthBeforeMax;
var browserMarginTop;
var browserMarginLeft;
var browserPositionTop;
var browserPositionLeft;
var isBrowserMaximised;

// for clock
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// utilized by keyboard shortcuts
var map = [];
var down = [];

// Used by applications:
// browser
var repetitions = 0;

// background picker
var backgroundBackup;

// terminal
var terminalOpacityValue = 0.5;
var terminalHexColor = "#000000";
var terminalOpacityValueBackup;

// customization window
var boxShadowHorizontal = "8px";
var boxShadowVertical = "15px";
var _applicationOpacity = 1;
var _menubarOpacity = 1;
var _appMenubarShareOpacity = true;
var _menubarBackgroundColorOut;
var _appBackgroundColorOut;

var _unfocusedTitlebarGradientDirection = "to right";
var _unfocusedTitlebarIsGradient = true;
var _unfocusedTitlebarColorOne = "#FFFFFF";
var _unfocusedTitlebarColorTwo = "#D3D3D3";

var _titlebarGradientDirection = "to right";
var _titlebarIsGradient = true;
var _titlebarColorOne = "#FFFFFF";
var _titlebarColorTwo = "#D3D3D3";

// **End of variables**

// make applications draggable and resizable. The start stop functions are there
// to prevent iframes from messing with the operation.
$(function () {
    $(".application").draggable({
        scroll: false,
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

// **focus stuff**

// *unfocus*
// unfocus applications on load
$(document).ready(function () {
    unfocusNotes();
    unfocusMediaplayer();
    $('#windowListNotes').show();
    $('#windowListChip').show();
});

function unfocusMediaplayer() {
    $('#mediaplayer a').css('color', _unfocusedAppInterfaceTextColor);
    $('#mediaplayer .titlebar>a').css('color', _unfocusedTitlebarTextColor);
    $('#mediaplayer').css('filter', 'grayscale(60%)');
    $('#mediaplayer>.titlebar').css('background', _unfocusedTitlebarColor);
}

function unfocusNotes() {
    $('#notes a').css('color', _unfocusedAppInterfaceTextColor);
    $('#notes .titlebar>a').css('color', _unfocusedTitlebarTextColor);
    $('#notesContent a').css('color', _unfocusedAppInterfaceTextColor);
    $('#notesContent h1').css('color', _unfocusedAppInterfaceTextColor);
    $('#notesContent h2').css('color', _unfocusedAppInterfaceTextColor);
    $('#notesContent p').css('color', _unfocusedAppInterfaceTextColor);
    $('#notes').css('filter', 'grayscale(10%)');
    $('#notes>.titlebar').css('background', _unfocusedTitlebarColor);
}

function unfocusBackPick() {
    $('#backgroundPicker a').css('color', _unfocusedAppInterfaceTextColor);
    $('#backgroundPicker .titlebar>a').css('color', _unfocusedTitlebarTextColor);
    $('#backgroundPicker').css('filter', 'grayscale(60%)');
    $('#backgroundPicker>.titlebar').css('background', _unfocusedTitlebarColor);
}

function unfocusPathfinder() {
    $('#pathfinder a').css('color', _unfocusedAppInterfaceTextColor);
    $('#pathfinder .titlebar>a').css('color', _unfocusedTitlebarTextColor);
    $('#pathfinder').css('filter', 'grayscale(60%');
    $('#pathfinder>.titlebar').css('background', _unfocusedTitlebarColor);
}

function unfocusTerminal() {
    $('#terminal a').css('color', _unfocusedAppInterfaceTextColor);
    $('#terminal .titlebar>a').css('color', _unfocusedTitlebarTextColor);
    $('#terminal').css('filter', 'grayscale(60%');
    $('#terminal>.titlebar').css('background', _unfocusedTitlebarColor);
}

function unfocusBrowser() {
    $('#browserWindow a').css('color', _unfocusedAppInterfaceTextColor);
    $('#browserWindow .titlebar>a').css('color', _unfocusedTitlebarTextColor);
    $('#browserWindow').css('filter', 'grayscale(60%');
    $('#browserWindow>.titlebar').css('background', _unfocusedTitlebarColor);
}

function unfocusHelp() {
    $('#help a').css('color', _unfocusedAppInterfaceTextColor);
    $('#help .titlebar>a').css('color', _unfocusedTitlebarTextColor);
    $('#help p').css('color', _unfocusedAppInterfaceTextColor);
    $('#help h1').css('color', _unfocusedAppInterfaceTextColor);
    $('#help h2').css('color', _unfocusedAppInterfaceTextColor);
    $('#help').css('filter', 'grayscale(60%');
    $('#help>.titlebar').css('background', _unfocusedTitlebarColor);
}

function unfocusAbout() {
    $('#about a').css('color', _unfocusedTitlebarTextColor);
    $('#about .titlebar>a').css('color', _unfocusedTitlebarTextColor);
    $('#about').css('filter', 'grayscale(60%');
    $('#about p').css('color', _unfocusedTitlebarTextColor);
    $('#about>.titlebar').css('background', _unfocusedTitlebarColor);
}

function unfocusCustomizationSettings() {
    $('#customizationSettings .titlebar>a').css('color', _unfocusedTitlebarTextColor);
    $('#customizationSettings').css('filter', 'grayscale(60%');
    $('#customizationSettings>.titlebar').css('background', _unfocusedTitlebarColor);
}

// (Unfocus everything)
function unfocusAll() {
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

// *index stuff*
function updateIndex() {
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
    return Math.max(mediaIndex, notesIndex, backpickerIndex, pathfinderIndex, terminalIndex, browserIndex, helpIndex, aboutIndex, customizeIndex);
}

// *focus windows*
function focusMediaplayer() {
    unfocusAll();
    updateIndex();
    mediaIndex = getHighestIndex() + 1;
    $('#mediaplayer').css('z-index', mediaIndex);
    $('#mediaplayer .titlebar>a').css('color', _titlebarTextColor);
    $('#mediaplayer>.titlebar').css('background', _titlebarFocusColor);
    $('#mediaplayer').css('filter', 'grayscale(0%)');
    currentlyFocused = "mediaplayer";
}

function focusNotes() {
    unfocusAll();
    updateIndex();
    notesIndex = getHighestIndex() + 1;
    $('#notes').css('z-index', notesIndex);
    $('#notes .titlebar>a').css('color', _titlebarTextColor);
    $('#notesContent a').css('color', 'black');
    $('#notesContent h1').css('color', 'black');
    $('#notesContent h2').css('color', 'black');
    $('#notesContent p').css('color', 'black');
    $('#notes>.titlebar').css('background', _titlebarFocusColor);
    $('#notes').css('filter', 'grayscale(0%)');
    currentlyFocused = "notes";
}

function focusBackgroundPicker() {
    unfocusAll();
    updateIndex();
    backpickerIndex = getHighestIndex() + 1;
    $('#backgroundPicker').css('z-index', backpickerIndex);
    $('#backgroundPicker .titlebar>a').css('color', _titlebarTextColor);
    $('#backgroundPicker>.titlebar').css('background', _titlebarFocusColor);
    $('#backgroundPicker').css('filter', 'grayscale(0%)');
    currentlyFocused = "backgroundPicker";
}

function focusPathfinder() {
    unfocusAll();
    updateIndex();
    pathfinderIndex = getHighestIndex() + 1;
    $('#pathfinder').css('z-index', pathfinderIndex);
    $('#pathfinder .titlebar>a').css('color', _titlebarTextColor);
    $('#pathfinder>.titlebar').css('background', _titlebarFocusColor);
    $('#pathfinder').css('filter', 'grayscale(0%)');
    currentlyFocused = "pathfinder";
}

function focusTerminal() {
    unfocusAll();
    updateIndex();
    terminalIndex = getHighestIndex() + 1;
    $('#terminal').css('z-index', terminalIndex);
    $('#terminal a').css('color', _appInterfaceTextColor);
    $('#terminal .titlebar>a').css('color', _titlebarTextColor);
    $('#terminal>.titlebar').css('background', _titlebarFocusColor);
    $('#terminal').css('filter', 'grayscale(0%)');
    currentlyFocused = "terminal";
}

function focusBrowser() {
    unfocusAll();
    updateIndex();
    browserIndex = getHighestIndex() + 1;
    $('#browserWindow').css('z-index', browserIndex);
    $('#browserWindow .titlebar>a').css('color', _titlebarTextColor);
    $('#browserWindow>.titlebar').css('background', _titlebarFocusColor);
    $('#browserWindow').css('filter', 'grayscale(0%)');
    currentlyFocused = "browser";
}

function focusHelp() {
    unfocusAll();
    updateIndex();
    helpIndex = getHighestIndex() + 1;
    $('#help').css('z-index', helpIndex);
    $('#help a').css('color', _appInterfaceTextColor);
    $('#help p').css('color', _appInterfaceTextColor);
    $('#help h1').css('color', _appInterfaceTextColor);
    $('#help h2').css('color', _appInterfaceTextColor);
    $('#help .titlebar>a').css('color', _titlebarTextColor);
    $('#help>.titlebar').css('background', _titlebarFocusColor);
    $('#help').css('filter', 'grayscale(0%)');
    currentlyFocused = "help";
}

function focusAbout() {
    unfocusAll();
    updateIndex();
    aboutIndex = getHighestIndex() + 1;
    $('#about').css('z-index', aboutIndex);
    $('#about h1').css('color', _appInterfaceTextColor);
    $('#about p').css('color', _appInterfaceTextColor);
    $('#about a').css('color', _appInterfaceTextColor);
    $('#about .titlebar>a').css('color', _titlebarTextColor);
    $('#about>.titlebar').css('background', _titlebarFocusColor);
    $('#about').css('filter', 'grayscale(0%)');
    currentlyFocused = "about";
}

function focusCustomizationSettings() {
    unfocusAll();
    updateIndex();
    customizeIndex = getHighestIndex() + 1;
    $('#customizationSettings').css('z-index', customizeIndex);
    $('#customizationSettings').css('color', _appInterfaceTextColor);
    $('#customizationSettings .titlebar>a').css('color', _titlebarTextColor);
    $('#customizationSettings>.titlebar').css('background', _titlebarFocusColor);
    $('#customizationSettings').css('filter', 'grayscale(0%)');
    currentlyFocused = "customization";
}


// *execute focus code on hover*
$(function () {
    $('#mediaplayer').hover(function () {
        focusMediaplayer();
    })

    $('#notes').hover(function () {
        focusNotes();
    })

    $('#backgroundPicker').hover(function () {
        focusBackgroundPicker();
    })

    $('#pathfinder').hover(function () {
        focusPathfinder();
    })

    $('#terminal').hover(function () {
        focusTerminal();
    })

    $('#browserWindow').hover(function () {
        focusBrowser();
    })

    $('#help').hover(function () {
        focusHelp();
    })

    $('#about').hover(function () {
        focusAbout();
    })

    $('#customizationSettings').hover(function () {
        focusCustomizationSettings();
    })
});


// **closing functionality**
var mediaClosed = false;
var demoClosed = false;

$(function () {
    $("#closeMedia").click(function () {
        $("#mediaContent").attr('src', '');
        $('#mediaplayer').hide();
        $('#windowListChip').hide();
        mediaClosed = true;
    })

    $("#closeNotes").click(function () {
        $('#notes').hide();
        $('#windowListNotes').hide();
    })

    $("#closePathfinder").click(function () {
        $('#pathfinder').hide();
        $('#windowListPathfinder').hide();
    })

    $("#closeTerminal").click(function () {
        $('#terminalContent').attr('src', '');
        $('#terminal').hide();
        $('#windowListTerminal').hide();
    })

    $("#closeBrowser").click(function () {
        $('#browserContent').hide();
        $('#browserInfo').show();
        $('#browserContent').attr('src', '');
        $('#browserWindow').hide();
        $('#windowListBrowser').hide();
    })

    $("#closeAbout").click(function () {
        $('#about').hide();
        $('#windowListAbout').hide();
    })

    $("#closeHelp").click(function () {
        $('#help').hide();
        $('#windowListHelp').hide();
    })

    $("#closeBackPicker").click(function () {
        $('#backgroundPicker').hide();
        $('#windowListBackPicker').hide();
    })

    $("#closeCustomization").click(function () {
        $('#customizationSettings').hide();
        $('#windowListCustom').hide();
    })
});

// **opening functionality**
$(function () {
    // (Chip Player JS / Mediaplayer)
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
        $('#windowListChip').show();
    })

    // (Notes)
    $("#notesIcon, #notesText").click(function () {
        $('#notes').show();
        $("#appMenuContent").hide();
        $("#uncollapseNotes").click();
        focusNotes();
        $('#windowListNotes').show();
    })

    // (Pathfinder / File explorer)
    $("#pathfinderText").click(function () {
        $('#pathfinder').show();
        $("#appMenuContent").hide();
        $("#uncollapsePathfinder").click();
        focusPathfinder();
        $('#windowListPathfinder').show();
    })

    // (Terminal)
    $("#terminalText").click(function () {
        $("#uncollapseTerminal").click();
        $('#terminalContent').attr('src', 'terminal.html');
        $('#terminal').show();
        $('#terminal').css('height', '50%');
        $("#appMenuContent").hide();
        focusTerminal();
        $('#windowListTerminal').show();
    })

    // (Getpost Gavinator)
    $("#browserText").click(function () {
        $('#browserContent').attr('src', 'http://theoldnet.com/browser');
        $('#browserWindow').show();
        $('#browserWindow').css('height', '50%');
        $("#browserWindow").resizable('enable');
        $("#uncollapseBrowser").css('display', 'none');
        $("#collapseBrowser").css('display', 'inline');
        $("#appMenuContent").hide();
        focusBrowser();
        $('#windowListBrowser').show();
        loadingDots();
        $('#browserInfo').delay(2000).fadeOut("slow");
        $('#browserContent').delay(2500).fadeIn("slow");
    })

    // (About)
    $("#aboutText").click(function () {
        $('#about').show();
        $("#about").resizable('disable');
        $("#fileMenuContent").hide();
        $("#appMenuContent").hide();
        focusAbout();
        $('#windowListAbout').show();
    })

    // (Background Picker)
    $("#backgroundMenuClick").click(function () {
        $('#backgroundPicker').show();
        $('#optionMenuContent').hide();
        $('#fileMenuContent').hide();
        focusBackgroundPicker();
        $('#windowListBackPicker').show();
    })

    // (Help window)
    $("#helpMenuClick").click(function () {
        $("#uncollapseHelp").click();
        $('#help').show();
        $('#appMenuContent').hide();
        $('#optionMenuContent').hide();
        $('#fileMenuContent').hide();
        focusHelp();
        $('#windowListHelp').show();
    })

    // (Customization window)
    $("#customizationMenuClick").click(function () {
        $('#customizationSettings').show();
        $('#optionMenuContent').hide();
        $('#fileMenuContent').hide();
        focusCustomizationSettings();
        $('#windowListCustom').show();
    })
});

// **Collapsing functionality**
$(function () {
    // (Chip Player JS / Mediaplayer)
    $("#collapseMedia").click(function () {
        isMediaplayerCollapsed = true;
        mediaplayerHeight = $("#mediaplayer").css('height');
        $('#mediaContent').hide();
        $('#mediaplayer').height(0);
        $('#mediaplayer').resizable('disable');
        $('#collapseMedia').css('display', 'none');
        $('#uncollapseMedia').css('display', 'inline');
    })

    $("#collapseNotes").click(function () {
        isNotesCollapsed = true;
        notesHeight = $("#notes").css('height');
        $('#notes').height(0);
        $('#notes').resizable('disable');
        $('#collapseNotes').css('display', 'none');
        $('#uncollapseNotes').css('display', 'inline');
    })

    $("#collapsePathfinder").click(function () {
        isPathfinderCollapsed = true;
        pathfinderHeight = $("#pathfinder").css('height');
        $('#pathfinderContent').hide();
        $('#pathfinder').height(0);
        $('#pathfinder').resizable('disable');
        $('#collapsePathfinder').css('display', 'none');
        $('#uncollapsePathfinder').css('display', 'inline');
    })

    $("#collapseTerminal").click(function () {
        isTerminalCollapsed = true;
        terminalHeight = $("#terminal").css('height');
        $('#terminalContent').hide();
        $('#terminal').height(0);
        $('#terminal').resizable('disable');
        $('#collapseTerminal').css('display', 'none');
        $('#uncollapseTerminal').css('display', 'inline');
    })

    $("#collapseBrowser").click(function () {
        isBrowserCollapsed = true;
        browserHeight = $("#browserWindow").css('height');
        $('#browserContent').hide();
        $('#browserWindow').height(0);
        $('#browserWindow').resizable('disable');
        $('#collapseBrowser').css('display', 'none');
        $('#uncollapseBrowser').css('display', 'inline');
    })

    $("#collapseHelp").click(function () {
        isHelpCollapsed = true;
        helpHeight = $("#help").css('height');
        $('#helpContent').hide();
        $('#help').height(0);
        $('#help').resizable('disable');
        $('#collapseHelp').css('display', 'none');
        $('#uncollapseHelp').css('display', 'inline');
    })

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
    })

    $("#collapseCustomization").click(function () {
        isCustomizationCollapsed = true;
        customizationHeight = $("#customizationSettings").css('height');
        $('#windowSettings').hide();
        $('#customizationSettings').height(0);
        $('#customizationSettings').resizable('disable');
        $('#collapseCustomization').css('display', 'none');
        $('#uncollapseCustomization').css('display', 'inline');
    })
});

// **Uncollapse**
$(function () {
    // (Chip Player JS / Mediaplayer)
    $("#uncollapseMedia").click(function () {
        if (isMediaplayerCollapsed) {
            $('#mediaContent').show();
            $('#mediaplayer').height(mediaplayerHeight);
            $('#mediaplayer').resizable('enable');
            $('#collapseMedia').css('display', 'inline');
            $('#uncollapseMedia').css('display', 'none');
        }
        isMediaplayerCollapsed = false;
    })

    $("#uncollapseNotes").click(function () {
        if (isNotesCollapsed) {
            $('#notes').height(notesHeight);
            $('#notes').resizable('enable');
            $('#collapseNotes').css('display', 'inline');
            $('#uncollapseNotes').css('display', 'none');
        }
        isNotesCollapsed = false;
    })

    $("#uncollapsePathfinder").click(function () {
        if (isPathfinderCollapsed) {
            $('#pathfinderContent').show();
            $('#pathfinder').height(pathfinderHeight);
            $('#pathfinder').resizable('enable');
            $('#collapsePathfinder').css('display', 'inline');
            $('#uncollapsePathfinder').css('display', 'none');
        }
        isPathfinderCollapsed = false;
    })


    $("#uncollapseTerminal").click(function () {
        if (isTerminalCollapsed) {
            $('#terminalContent').show();
            $('#terminal').height(terminalHeight);
            $('#terminal').resizable('enable');
            $('#collapseTerminal').css('display', 'inline');
            $('#uncollapseTerminal').css('display', 'none');
        }
        isTerminalCollapsed = false;
    })

    $("#uncollapseBrowser").click(function () {
        if (isBrowserCollapsed) {
            $('#browserContent').show();
            $('#browserWindow').height(browserHeight);
            $('#browserWindow').resizable('enable');
            $('#collapseBrowser').css('display', 'inline');
            $('#uncollapseBrowser').css('display', 'none');
        }
        isBrowserCollapsed = false;
    })

    $("#uncollapseHelp").click(function () {
        if (isHelpCollapsed) {
            $('#helpContent').show();
            $('#help').height(helpHeight);
            $('#help').resizable('enable');
            $('#collapseHelp').css('display', 'inline');
            $('#uncollapseHelp').css('display', 'none');
        }
        isHelpCollapsed = false;
    })

    $("#uncollapseCustomization").click(function () {
        if (isCustomizationCollapsed) {
            $('#customizationSettings').height(customizationHeight);
            $('#customizationSettings').resizable('enable');
            $('#windowSettings').show();
            $('#uncollapseCustomization').css('display', 'inline');
            $('#collapseCustomization').css('display', 'none');
        }
        isCustomizationCollapsed = false;
    })
});


// **Maximise functionality**

function maximizeMedia() {
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

function maximizeNotes() {
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

function maximizeTerminal() {
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

function maximizeBrowser() {
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

// Execute maximize code on doubleclick
$(function () {
    $('#mediaplayer').draggable().dblclick(function () {
        maximizeMedia();
    });

    $('#notes').draggable().dblclick(function () {
        maximizeNotes();
    });

    $('#terminal').draggable().dblclick(function () {
        maximizeTerminal();
    });

    $('#browserWindow').draggable().dblclick(function () {
        maximizeBrowser();
    });
});

// **Menubar**
$(function () {
    // Responsible for opening the application menu
    $("#appMenuClick").click(function () {
        if ($("#appMenuContent").is(":visible")) {
            $('#appMenuContent').hide();
        } else {
            $('#appMenuContent').show();
            $('#optionMenuContent').hide();
            $('#fileMenuContent').hide();
        }
    })

    // Responsible for opening the file menu
    $("#fileMenuClick").click(function () {
        if ($("#fileMenuContent").is(":visible")) {
            $('#fileMenuContent').hide();
        } else {
            $('#fileMenuContent').show();
            $('#optionMenuContent').hide();
            $('#appMenuContent').hide();
        }
    })

    // Responsible for opening the options menu
    $("#optionMenuClick").click(function () {
        if ($("#optionMenuContent").is(":visible")) {
            $('#optionMenuContent').hide();
        } else {
            $('#optionMenuContent').show();
            $('#fileMenuContent').hide();
            $('#appMenuContent').hide();
        }
    })

    // Arranges everything to default
    $("#arrangeToDefault").click(function () {
        $('#optionMenuContent').hide();
        $('#fileMenuContent').hide();
        $('#backgroundPicker').hide();
        $('#appMenuContent').hide();
        $('#closeBackPicker').click();
        $('#closeTerminal').click();
        $('#closeBrowser').click();
        $('#closeHelp').click();
        $('#closePathfinder').click();
        $('#closeAbout').click();
        $('#closeCustomization').click();
        // Show default applications
        $('#mediaplayer').show();
        $('#notes').show();
        // Set default sizes
        // notes
        $('#notes').css('width', '10%')
        $('#notes').css('height', '70%');
        // mediaplayer
        $('#mediaplayer').css('width', '50%')
        $('#mediaplayer').css('height', '60%');
        // Set default position
        // notes
        $('#notes').css('top', '0.78cm')
        $('#notes').css('left', '0.4%');
        // mediaplayer
        $('#mediaplayer').css('top', '0.78cm')
        $('#mediaplayer').css('left', '0.4%');
        // populate iframes if empty
        if (mediaClosed) {
            $("#mediaContent").attr('src', 'https://mmontag.github.io/chip-player-js/');
        }

        // show iframes if collapsed
        if (isMediaCollapsed) {
            $("#uncollapseMedia").click
        }
        isMediaCollapsed = false;
    })

    // Responsible for updating clock
    setInterval(function () {
        var date = new Date();
        var day = days[date.getDay()];
        time = date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
        if(_bottomMenuBarEnabled){
            $("#bottomDateAndTime").html(day + " " + time);
        } else {
            $("#dateAndTime").html(day + " " + time);
        }
    }, 1000);

});

// **Keyboard shortcuts**
$(document).keydown(function (e) {
    if (!map[e.keyCode]) {
        down.push(e.keyCode);
        // If holding down alt, then display cover over applications
        if (down[0] === 18) {
            $('.windowFrameOverlay').fadeIn('fast');
            $(".windowFrameOverlay").css('cursor', 'move');
        }
        // If pressing Alt + A, show the applications menu
        if (down[0] === 18 && down[1] === 65) {
            if(_bottomMenuBarEnabled){
                $("#bottomMenuClick").click();
            } else {
                $("#appMenuClick").click();
            }
        }
        // If pressing Alt + Q, then close the currently focused window
        if (down[0] === 18 && down[1] === 81) {
            closeCurrentlyFocused();
        }
        // If pressing Alt + W, then collapse the currently focused window
        if (down[0] === 18 && down[1] === 87) {
            collapseCurrentlyFocused();
        }
        // If pressing Alt + F, then maximize the currently focused window (If supported)
        if (down[0] === 18 && down[1] === 70) {
            maximizeCurrentlyFocused();
        }
    }
    map[e.keyCode] = true;
}).keyup(function (e) {
    map[e.keyCode] = false;
    down.length = 0;
    $('.frameOverlay').fadeOut('fast');
    $('.windowFrameOverlay').fadeOut('fast');
});

// Utilized by the keyboard shortcut Alt + Q. Emulates click on close buttons
function closeCurrentlyFocused() {
    switch (currentlyFocused) {
        case 'mediaplayer':
            $('#closeMedia').click();
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

// Utilized by the keyboard shortcut Alt + W. Emulates click on collapse/uncollapse buttons
function collapseCurrentlyFocused() {
    switch (currentlyFocused) {
        case 'mediaplayer':
            if (isMediaplayerCollapsed) {
                $('#uncollapseMedia').click();
            } else {
                $('#collapseMedia').click();
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

function maximizeCurrentlyFocused() {
    switch (currentlyFocused) {
        case 'mediaplayer':
            maximizeMedia();
            break;
        case 'notes':
            maximizeNotes();
            break;
        case 'terminal':
            maximizeTerminal();
            break;
        case 'browser':
            maximizeBrowser();
            break;
    }
}


// **Application stuff**

// *Browser*

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
    })

    $("#customWeb").click(function () {
        $('#browserContent').attr('display', 'block');
        $('#browserInfo').attr('display', 'none');
        $('#browserContent').attr('src', 'http://theoldnet.com/browser/');
    })
});


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

// *Background Picker*
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

    $('#imageBackgroundSwitch').click(function () {
        if ($(this).is(':checked')) {
            $('body').css('background-image', backgroundBackup);
        } else {
            backgroundBackup = $('body').css('background-image');
            $('body').css('background-image', 'url("' + " " + '")');
        }
    });


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

function colorBackground(colorPicked) {
    document.body.style.backgroundColor = colorPicked;
}

// *Terminal (Customization)*
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
            terminalOpacityValue = terminalOpacityValueBackup;
            $('#terminalTransparencyAmount').show();
            $('#terminalTransparencyText').show();
            updateTerminalBackground();
        } else {
            terminalOpacityValueBackup = terminalOpacityValue;
            $('#terminalTransparencyAmount').hide();
            $('#terminalTransparencyText').hide();
            terminalOpacityValue = 1;
            updateTerminalBackground();
        }
    });
});

function terminalAmountOfTransparency(terminalOpacityIn) {
    terminalOpacityValue = terminalOpacityIn;
    $('#terminalTransparencyText').text(terminalOpacityValue);
    updateTerminalBackground();
}

function terminalColorBackground(terminalColorIn) {
    terminalHexColor = terminalColorIn;
    updateTerminalBackground();
}

function updateTerminalBackground() {
    $('#terminal').css('background-color', convertHex(terminalHexColor, terminalOpacityValue));
}



// *Customization window*
$(function () {
    $('#generalTranslucencySwitch').click(function () {
        if ($(this).is(':checked')) {
            $('#generalOpacityAmount').show();
            $('#generalOpacityText').show();
            setGeneralOpacity($("#generalOpacityAmount").val());
        } else {
            $('#generalOpacityAmount').hide();
            $('#generalOpacityText').hide();
            setGeneralOpacity(1); 
        }
    })


    $('#manualControlSwitch').click(function () {
        if ($(this).is(':checked')) {
            $('#showColorSettings').prop('disabled', false);
            $('#showWindowSettings').prop('disabled', false);
            $('#showTitlebarSettins').prop('disabled', false);
            $('#showTranslucencySettings').prop('disabled', false);
            $('#showMenubarSettings').prop('disabled', false);
            $('#colorSettings').css('display', 'inline-block');
            $('#generalWindowSettings').css('display', 'none');
            $('#titlebarSettings').css('display', 'none');
            $('#translucencySettings').css('display', 'none');
            $('#customizationSettings').css('width', '45%');
            $('#generalInterface').css('width', '40%');
        } else {
            $('#showColorSettings').prop('disabled', true);
            $('#showWindowSettings').prop('disabled', true);
            $('#showTitlebarSettins').prop('disabled', true);
            $('#showTranslucencySettings').prop('disabled', true);
            $('#showMenubarSettings').prop('disabled', true);
            $('#colorSettings').css('display', 'none');
            $('#generalWindowSettings').css('display', 'none');
            $('#titlebarSettings').css('display', 'none');
            $('#translucencySettings').css('display', 'none');
            $('#customizationSettings').css('width', 'auto');
            $('#generalInterface').css('width', '100%');
        }
    })

    // default preset
    $('#default').click(function () {
        updateInterfaceVariables("#000000", "#808080", "#FFFFFF", "#000000", "#000000", "#FFFFFF");
        updateUnfocusedTitlebarVariables("#FFFFFF", true, "#D3D3D3", "to right");
        updateFocusedTitlebarVariables("#FFFFFF", true, "#D3D3D3", "to right");
        updateUnfocusedTitlebarColor();
        updateFocusedTitlebarColor();
        $('.application').css('border', 'none');
        defaultBoxShadow();
        setBorderRadius(4);
        setTitlebarGradientSwitch(false);
        updateButtonPlacement("RDE");
        _bottomMenuBarEnabled = false;
        updateInterface();
    })

    // darkmode preset
    $('#darkmode').click(function () {
        updateInterfaceVariables("#FFFFFF", "#808080", "#090a0c", "#FFFFFF", "#FFFFFF", "#090a0c");
        updateUnfocusedTitlebarVariables("#000000", true, "#808080", "to right");
        updateFocusedTitlebarVariables("#000000", true, "#808080", "to right");
        updateUnfocusedTitlebarColor();
        updateFocusedTitlebarColor();
        $('.application').css('border', 'none');
        defaultBoxShadow();
        setBorderRadius(4);
        setTitlebarGradientSwitch(false);
        updateButtonPlacement("RDE");
        _bottomMenuBarEnabled = false;
        updateInterface();
    })

    // classic preset (win95isch)
    $('#classic').click(function () {
        updateInterfaceVariables("#FFFFFF", "#808080", "#D3D3D3", "#000000", "#000000", "#D3D3D3");
        updateUnfocusedTitlebarVariables("#A9A9A9", false, null, null);
        updateFocusedTitlebarVariables("#00008B", false, null, null);
        updateUnfocusedTitlebarColor();
        updateFocusedTitlebarColor();
        setBorderRadius(0);
        updateBoxShadow();
        setTitlebarGradientSwitch(true);
        $('.application').css('border', '2px outset lightgray');
        $('#boxShadowSwitch').prop('checked', true);
        $('#boxShadowSwitch').click();
        updateButtonPlacement("redmond");
        _bottomMenuBarEnabled = true;
        updateInterface();
    })

    $('#boxShadowSwitch').click(function () {
        if ($(this).is(':checked')) {
            updateBoxShadow();
            $('#boxShadowHorizontalSlider').show();
            $('#boxShadowHorizontalText').show();
            $('#boxShadowVerticalSlider').show();
            $('#boxShadowVerticalText').show();
            $('.shadowHint').show();
        } else {
            $('.application').css('box-shadow', 'none');
            $('#boxShadowHorizontalSlider').hide();
            $('#boxShadowHorizontalText').hide();
            $('#boxShadowVerticalSlider').hide();
            $('#boxShadowVerticalText').hide();
            $('.shadowHint').hide();
        }
    })

    $('#menubarShareTranslucencySwitch').click(function () {
        if ($(this).is(':checked')) {
            $("#menubarTranslucency").val(_menubarOpacity);
            $("#menubarTranslucencyText").text(_menubarOpacity);
            $('#menubarTranslucencyText').show();
            $('#menubarTranslucency').show();
            _appMenubarShareOpacity = false;
        } else {
            $('#menubarTranslucencyText').hide();
            $('#menubarTranslucency').hide();
            _appMenubarShareOpacity = true;
            _menubarOpacity = _applicationOpacity;
            updateInterfaceVariables(_titlebarTextColor, _unfocusedTitlebarTextColor, _appBackgroundColor, _appInterfaceTextColor, _menubarTextColor, _menubarBackgroundColor);
            updateInterface();
        }
    })

    $('#titlebarGradientSwitch').click(function () {
        if ($(this).is(':checked')) {
            _titlebarIsGradient = true;
            $('#gradientDirectionText').show();
            $('#gradientDirection').show();
            $('#titlebarColorTwoPicker').show();
            $('#titlebarColorTwoPickerText').show();
            $('#titlebarColorOnePickerText').text("Background color one");
            updateFocusedTitlebarColor();
        } else {
            _titlebarIsGradient = false;
            $('#gradientDirectionText').hide();
            $('#gradientDirection').hide();
            $('#titlebarColorTwoPicker').hide();
            $('#titlebarColorTwoPickerText').hide();
            $('#titlebarColorOnePickerText').text("Background color");
            updateFocusedTitlebarColor();
        }
    })

    $('#unfocusedTitlebarGradientSwitch').click(function () {
        if ($(this).is(':checked')) {
            _unfocusedTitlebarIsGradient = true;
            $('#unfocusedGradientDirectionText').show();
            $('#unfocusedGradientDirection').show();
            $('#unfocusedTitlebarColorTwoPicker').show();
            $('#unfocusedTitlebarColorTwoPickerText').show();
            $('#unfocusedTitlebarColorOnePickerText').text("Background color one");
            updateUnfocusedTitlebarColor();
        } else {
            _unfocusedTitlebarIsGradient = false;
            $('#unfocusedGradientDirectionText').hide();
            $('#unfocusedGradientDirection').hide();
            $('#unfocusedTitlebarColorTwoPicker').hide();
            $('#unfocusedTitlebarColorTwoPickerText').hide();
            $('#unfocusedTitlebarColorOnePickerText').text("Background color");
            updateUnfocusedTitlebarColor();
        }
    })
});

function updateInterfaceVariables(titlebarTextColorIn, unfocusedTitlebarTextColorIn, appBackgroundColorIn, appInterfaceTextColorIn, menubarTextColorIn, menubarBackgroundColorIn) {
    // updates all interface variables
    _titlebarTextColor = titlebarTextColorIn;
    _unfocusedTitlebarTextColor = unfocusedTitlebarTextColorIn;
    _appBackgroundColor = appBackgroundColorIn;
    _appBackgroundColorOut = convertHex(appBackgroundColorIn, _applicationOpacity);
    _appInterfaceTextColor = appInterfaceTextColorIn;
    _menubarTextColor = menubarTextColorIn;
    _menubarBackgroundColor = menubarBackgroundColorIn;
    _menubarBackgroundColorOut = convertHex(menubarBackgroundColorIn, _menubarOpacity);
}

function updateInterface() {
    unfocusAll(); // unfocus everything whilst applying interface

    // update settings
    $("#titlebarTextColorPicker").val(_titlebarTextColor);
    $("#unfocusedTitlebarTextColorPicker").val(_unfocusedTitlebarTextColor);
    $("#appBackgroundColorPicker").val(_appBackgroundColor);
    $("#appInterfaceTextColorPicker").val(_appInterfaceTextColor);
    $("#menubarTextColorPicker").val(_menubarTextColor);
    $("#menubarBackgroundColorPicker").val(_menubarBackgroundColor);

    // titlebar
    $('.titlebar button').css('color', _titlebarTextColor);
    $('.titlebar').css('color', _titlebarTextColor);

    // menubar
    if(_bottomMenuBarEnabled){
        $('#bottombar>button').css('color', _menubarTextColor);
        $('#bottombar').css('color', _menubarTextColor);
        $('#bottombar').css('background-color', _menubarBackgroundColorOut);
        $('#menubar').css('display', 'none');
        $('#bottombar').css('display', 'inline-block');
        $('.inMenubar').hide();
        windowListBottomContainer.appendChild(openWindowList);
        $('#openWindowList > img').css('width', '0.45cm');


    } else {
        $('#bottomMenuContent').css('display', 'none');
        $('#bottombar').css('display', 'none');
        $('#menubar').css('display', 'inline-block');
        $('#menubar>button').css('color', _menubarTextColor);
        $('#menubar').css('color', _menubarTextColor);
        $('#menubar').css('background-color', _menubarBackgroundColorOut);
        windowListTopContainer.appendChild(openWindowList);
        $('#openWindowList > img').css('width', '0.35cm');
    }


    // menubar subsidiaries
    $('.inMenubar').css('background-color', _menubarBackgroundColorOut);
    $('.inMenubar').css('color', _menubarTextColor);

    // applications:
    $('#help').css('background-color', _appBackgroundColorOut);
    $('#about').css('background-color', _appBackgroundColorOut);
    $('#customizationSettings').css('background-color', _appBackgroundColorOut);
    $('#generalInterface').css('border-right', '1px solid ' + _appInterfaceTextColor);

    focusCustomizationSettings();
}



// *titlebar stuff*
function setTitlebarGradientSwitch(off){
    if(off){
        $('#titlebarGradientSwitch').prop('checked', true);
        $('#titlebarGradientSwitch').click();
        $('#unfocusedTitlebarGradientSwitch').prop('checked', true);
        $('#unfocusedTitlebarGradientSwitch').click();
    } else {
        $('#titlebarGradientSwitch').prop('checked', false);
        $('#titlebarGradientSwitch').click();
        $('#unfocusedTitlebarGradientSwitch').prop('checked', false);
        $('#unfocusedTitlebarGradientSwitch').click();
    }
}

function updateFocusedTitlebarVariables(colorOne, isGradient, colorTwo, direction){
    _titlebarGradientDirection = direction;
    _titlebarIsGradient = isGradient;
    _titlebarColorOne = colorOne;
    _titlebarColorTwo = colorTwo;
}

function updateUnfocusedTitlebarVariables(colorOne, isGradient, colorTwo, direction){
    _unfocusedTitlebarGradientDirection = direction;
    _unfocusedTitlebarIsGradient = isGradient;
    _unfocusedTitlebarColorOne = colorOne;
    _unfocusedTitlebarColorTwo = colorTwo;
}

function updateFocusedTitlebarColor(){
    if(_titlebarIsGradient){
        _titlebarFocusColor = "linear-gradient(" + _titlebarGradientDirection + ", " + _titlebarColorOne + ", " + _titlebarColorTwo + ")";
        $("#titlebarColorTwoPicker").val(_titlebarColorTwo);
        $("#gradientDirection").val(_titlebarGradientDirection);
    } else {
        _titlebarFocusColor = _titlebarColorOne;
    }
    $("#titlebarColorOnePicker").val(_titlebarColorOne);

    unfocusAll(); // unfocus everything to apply settings
    focusCustomizationSettings();
}

function updateUnfocusedTitlebarColor(){
    if(_unfocusedTitlebarIsGradient){
        _unfocusedTitlebarColor = "linear-gradient(" + _unfocusedTitlebarGradientDirection + ", " + _unfocusedTitlebarColorOne + ", " + _unfocusedTitlebarColorTwo + ")";
        $("#unfocusedTitlebarColorTwoPicker").val(_unfocusedTitlebarColorTwo);
        $("#unfocusedGradientDirection").val(_unfocusedTitlebarGradientDirection);
    } else {
        _unfocusedTitlebarColor = _unfocusedTitlebarColorOne;
    }
    $("#unfocusedTitlebarColorOnePicker").val(_unfocusedTitlebarColorOne);

    unfocusAll(); // unfocus everything to apply settings
    focusCustomizationSettings();
}

function updateTitlebarColorOne(titlebarColorOneIn){
    _titlebarColorOne = titlebarColorOneIn;
    updateFocusedTitlebarColor();
}

function updateTitlebarColorTwo(titlebarColorTwoIn){
    _titlebarColorTwo = titlebarColorTwoIn;
    updateFocusedTitlebarColor();
}

function updateUnfocusedTitlebarColorOne(unfocusedTitlebarColorOneIn){
    _unfocusedTitlebarColorOne = unfocusedTitlebarColorOneIn;
    updateUnfocusedTitlebarColor();
}

function updateUnfocusedTitlebarColorTwo(unfocusedTitlebarColorTwoIn){
    _unfocusedTitlebarColorTwo = unfocusedTitlebarColorTwoIn;
    updateUnfocusedTitlebarColor();
}


function updateGradientDirection(directionIn) {
    gradientDirection.value = directionIn;
    _titlebarGradientDirection = directionIn;
    _titlebarIsGradient = true;
    updateFocusedTitlebarColor();
}

function updateUnfocusedGradientDirection(directionIn) {
    unfocusedGradientDirection.value = directionIn;
    _unfocusedTitlebarGradientDirection = directionIn;
    _unfocusedTitlebarIsGradient = true;
    updateUnfocusedTitlebarColor();
}


// Updates button position depending on which option is picked
function updateButtonPlacement(placementIn) {
    buttonPlacement.value = placementIn;
    switch (placementIn) {
        case 'RDE':
            $('.closeWindow').css('float', 'left');
            $('.collapseWindow').css('float', 'right');
            $('.titlebar').css('text-align', 'center');
            $('.titlebar>a').css('margin-left', '0');
            $('.closeWindow').css('margin-right', '0');
            $('.collapseWindow').css('margin-left', '0');
            break;
        case 'redmond':
            $('.closeWindow').css('float', 'right');
            $('.collapseWindow').css('float', 'right');
            $('.titlebar').css('text-align', 'left');
            $('.titlebar>a').css('margin-left', '1%');
            $('.closeWindow').css('margin-right', '1%');
            $('.collapseWindow').css('margin-left', '0');
            break;
        case 'cupertino':
            $('.closeWindow').css('float', 'left');
            $('.collapseWindow').css('float', 'left');
            $('.titlebar').css('text-align', 'center');
            $('.titlebar>a').css('margin-left', 'none');
            $('.collapseWindow').css('margin-left', '0.1%');
            break;
    }
}

// *Border radius*
function setBorderRadius(borderRadiusIn) {
    $('#borderRadiusSliderText').text(borderRadiusIn + "px");
    $('.application').css('border-radius', borderRadiusIn + "px");
    $('.titlebar').css('border-top-left-radius', borderRadiusIn + "px");
    $('.titlebar').css('border-top-right-radius', borderRadiusIn + "px");
    borderRadiusSlider.value = borderRadiusIn;
}

// *Box shadow stuff*
function setBoxShadowHorizontal(boxShadowHorizontalIn) {
    boxShadowHorizontal = boxShadowHorizontalIn + "px";
    $("#boxShadowHorizontalSlider").val(boxShadowHorizontalIn);
    $('#boxShadowHorizontalText').text(boxShadowHorizontal);
    updateBoxShadow();
}

function setBoxShadowVertical(boxShadowVerticalIn) {
    boxShadowVertical = boxShadowVerticalIn + "px";
    $("#boxShadowVerticalSlider").val(boxShadowVerticalIn);
    $('#boxShadowVerticalText').text(boxShadowVertical);
    updateBoxShadow();
}

function updateBoxShadow(boxShadowHorizontalIn) {
    $('#boxShadowVerticalText').text(boxShadowVertical);
    $('#boxShadowHorizontalText').text(boxShadowHorizontal);
    $('.application').css('box-shadow', boxShadowHorizontal + " " + boxShadowVertical + ' 0px 0px rgba(0, 0, 0, 0.75)');
}

// Sets the box shadow on .application to default settings
function defaultBoxShadow() {
    setBoxShadowHorizontal(8);
    setBoxShadowVertical(15);
    updateBoxShadow();
    $('#boxShadowSwitch').prop('checked', false);
    $('#boxShadowSwitch').click();
}


// *translucency stuff*
function setGeneralOpacity(generalOpacityIn) {
    _applicationOpacity = generalOpacityIn;
    $('#generalOpacityText').text(_applicationOpacity);
    if (_appMenubarShareOpacity) {
        _menubarOpacity = _applicationOpacity;
    }
    updateInterfaceVariables(_titlebarTextColor, _unfocusedTitlebarTextColor, _appBackgroundColor, _appInterfaceTextColor, _menubarTextColor, _menubarBackgroundColor);
    updateInterface();
}

function updateMenubarTranslucency(menubarOpacityIn) {
    _menubarOpacity = menubarOpacityIn;
    $('#menubarTranslucencyText').text(_menubarOpacity);
    updateInterfaceVariables(_titlebarTextColor, _unfocusedTitlebarTextColor, _appBackgroundColor, _appInterfaceTextColor, _menubarTextColor, _menubarBackgroundColor);
    updateInterface();
}

// *color stuff*
function updateInterfaceVariablesAndInterface() {
    updateInterfaceVariables(_titlebarTextColor, _unfocusedTitlebarTextColor, _appBackgroundColor, _appInterfaceTextColor, _menubarTextColor, _menubarBackgroundColor);
    updateInterface();
}

function titlebarTextColorUpdate(titlebarTextColorIn) {
    _titlebarTextColor = titlebarTextColorIn;
    updateInterfaceVariablesAndInterface();
}

function unfocusedTitlebarTextColorUpdate(unfocusedTitlebarTextColorIn) {
    _unfocusedTitlebarTextColor = unfocusedTitlebarTextColorIn;
    updateInterfaceVariablesAndInterface();
}

function appBackgroundColorUpdate(appBackgroundColorIn) {
    _appBackgroundColor = appBackgroundColorIn;
    updateInterfaceVariablesAndInterface();
}

function appInterfaceTextColorUpdate(appInterfaceTextColorIn) {
    _appInterfaceTextColor = appInterfaceTextColorIn;
    updateInterfaceVariablesAndInterface();
}

function menubarTextColorUpdate(menubarTextColorIn) {
    _menubarTextColor = menubarTextColorIn;
    updateInterfaceVariablesAndInterface();
}

function menubarBackgroundColorUpdate(menubarBackgroundColorIn) {
    _menubarBackgroundColor = menubarBackgroundColorIn;
    updateInterfaceVariablesAndInterface();
}

$(function () {
    $('#showColorSettings').click(function () {
        $('#colorSettings').css('display', 'inline-block');
        $('#generalWindowSettings').css('display', 'none');
        $('#titlebarSettings').css('display', 'none');
        $('#translucencySettings').css('display', 'none');
        $('#menubarSettings').css('display', 'none');
    })

    $('#showWindowSettings').click(function () {
        $('#generalWindowSettings').css('display', 'inline-block');
        $('#colorSettings').css('display', 'none');
        $('#titlebarSettings').css('display', 'none');
        $('#translucencySettings').css('display', 'none');
        $('#menubarSettings').css('display', 'none');
    })

    $('#showTitlebarSettins').click(function () {
        $('#titlebarSettings').css('display', 'inline-block');
        $('#colorSettings').css('display', 'none');
        $('#generalWindowSettings').css('display', 'none');
        $('#translucencySettings').css('display', 'none');
        $('#menubarSettings').css('display', 'none');
    })

    $('#showTranslucencySettings').click(function () {
        $('#translucencySettings').css('display', 'inline-block');
        $('#colorSettings').css('display', 'none');
        $('#generalWindowSettings').css('display', 'none');
        $('#titlebarSettings').css('display', 'none');
        $('#menubarSettings').css('display', 'none');
    })

    $('#showMenubarSettings').click(function () {
        $('#menubarSettings').css('display', 'inline-block');
        $('#colorSettings').css('display', 'none');
        $('#generalWindowSettings').css('display', 'none');
        $('#titlebarSettings').css('display', 'none');
        $('#translucencySettings').css('display', 'none');
        if(_bottomMenuBarEnabled){
            $('#bottomMenuBarSwitch').prop('checked', true);
        } else {
            $('#bottomMenuBarSwitch').prop('checked', false);
        }
    })
});


// **Used in many different parts of this code**
// from https://gist.github.com/danieliser/b4b24c9f772066bcf0a6
function convertHex(hex, opacity) {
    hex = hex.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
    return result;
}



var isBottomMenuBarVisisble

$(function () {
    $('#bottomPathfinderText').click(function () {
        $('#pathfinderText').click();
    })

    $('#bottomChipText').click(function () {
        $('#chipText').click();
    })
    
    $('#bottomNotesText').click(function () {
        $('#notesText').click();
    })
    
    $('#bottomTerminalText').click(function () {
        $('#terminalText').click();
    })
    
    $('#bottomBrowserText').click(function () {
        $('#browserText').click();
    })
    
    $('#bottomAboutText').click(function () {
        $('#aboutText').click();
    })
    
    $('#bottomBackgroundMenuClick').click(function () {
        $('#backgroundMenuClick').click();
    })

    $('#bottomCustomizationMenuClick').click(function () {
        $('#customizationMenuClick').click();
    })

    $('#bottomArrangeToDefault').click(function () {
        $('#arrangeToDefault').click();
    })

    $('#bottomHelpMenuClick').click(function () {
        $('#helpMenuClick').click();
    })

    $("#bottomMenuClick").click(function () {
        if ($("#bottomMenuContent").is(":visible")) {
            $('#bottomMenuContent').hide();
        } else {
            $('#bottomMenuContent').show();
        }
    })

    $('#bottomMenuBarSwitch').click(function () {
        if ($(this).is(':checked')) {
            _bottomMenuBarEnabled = true;
            updateInterface();
        } else {
            _bottomMenuBarEnabled = false;
            updateInterface();
        }
    })
});

$(function () {
    $('#windowListChip').hover(function () {
        focusMediaplayer();
        $("#uncollapseMedia").click();
    })

    $('#windowListNotes').hover(function () {
        focusNotes();
        $("#uncollapseNotes").click();
    })

    $('#windowListPathfinder').hover(function () {
        focusPathfinder();
        $("#uncollapsePathfinder").click();
    })

    $('#windowListTerminal').hover(function () {
        focusTerminal();
        $("#uncollapseTerminal").click();
    })

    $('#windowListBrowser').hover(function () {
        focusBrowser();
        $("#uncollapseBrowser").click();
    })

    $('#windowListAbout').hover(function () {
        focusAbout();
    })

    $('#windowListBackPicker').hover(function () {
        focusBackgroundPicker();
        $("#uncollapseBackPicker").click();
    })

    $('#windowListCustom').hover(function () {
        focusCustomizationSettings();
        $("#uncollapseCustomization").click();
    })

    $('#windowListHelp').hover(function () {
        focusHelp();
        $("#uncollapseHelp").click();
    })
});

$(function () {
    $('#windowListChip').click(function () {
        $("#closeMedia").click();
    })

    $('#windowListNotes').click(function () {
        focusNotes();
        $("#closeNotes").click();
    })

    $('#windowListPathfinder').click(function () {
        focusPathfinder();
        $("#closePathfinder").click();
    })

    $('#windowListTerminal').click(function () {
        focusTerminal();
        $("#closeTerminal").click();
    })

    $('#windowListBrowser').click(function () {
        focusBrowser();
        $("#closeBrowser").click();
    })

    $('#windowListAbout').click(function () {
        focusAbout();
        $("#closeAbout").click();
    })

    $('#windowListBackPicker').click(function () {
        focusBackgroundPicker();
        $("#closeBackPicker").click();
    })

    $('#windowListCustom').click(function () {
        focusCustomizationSettings();
        $("#closeCustomization").click();
    })

    $('#windowListHelp').click(function () {
        focusHelp();
        $("#closeHelp").click();
    })
});