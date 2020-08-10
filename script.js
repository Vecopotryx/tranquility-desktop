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
var pathfinderIndex;
var terminalIndex;
var browserIndex;
var helpIndex;
var settingsIndex;

// related to closing functionality
var mediaClosed = false;

// releated to collapsing functionality (helps keep track of required information):

var mediaplayerHeight;
var notesHeight;
var pathfinderHeight;
var terminalHeight;
var browserHeight;
var helpHeight;

/*
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
*/

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
    previousFocus = "notes";
    unfocusWindow();
    previousFocus = "mediaplayer";
    unfocusWindow();
    $('#windowListNotes').show();
    $('#windowListMediaplayer').show();
});

function unfocusWindow(windowIn){
    $('#' + windowIn).css('filter', 'grayscale(60%)');
    $('#' + windowIn).css('color', _unfocusedAppInterfaceTextColor);
    $('#' + windowIn + ' .titlebar>a').css('color', _unfocusedTitlebarTextColor);
    $('#' + windowIn + '>.titlebar').css('background', _unfocusedTitlebarColor);

    if(windowIn == "help" || windowIn == "notes"){
        $('#' + windowIn + ' h1').css('color', _unfocusedAppInterfaceTextColor);
        $('#' + windowIn + ' h2').css('color', _unfocusedAppInterfaceTextColor);
        $('#' + windowIn + ' p').css('color', _unfocusedAppInterfaceTextColor);
        $('#' + windowIn + ' a').css('color', _unfocusedAppInterfaceTextColor);
    }

    if(windowIn == "notes"){
        $('#notes').css('filter', 'grayscale(10%)');
    }
}

function unfocusAll(){
    unfocusWindow("mediaplayer")
    unfocusWindow("notes");
    unfocusWindow("pathfinder");
    unfocusWindow("terminal");
    unfocusWindow("browserWindow");
    unfocusWindow("settings");
}

// *index stuff*
function updateIndex() {
    mediaIndex = $('#mediaplayer').css('z-index');
    notesIndex = $('#notes').css('z-index');
    pathfinderIndex = $('#pathfinder').css('z-index');
    terminalIndex = $('#terminal').css('z-index');
    browserIndex = $('#browserWindow').css('z-index');
    helpIndex = $('#help').css('z-index');
    settingsIndex = $('#settings').css('z-index');
    $('.frameOverlay').css('z-index', getHighestIndex() + 1);
}

function getHighestIndex() {
    return Math.max(mediaIndex, notesIndex, settingsIndex, pathfinderIndex, terminalIndex, browserIndex, helpIndex);
}

function focusWindow(windowIn){
    unfocusWindow(previousFocus);
    updateIndex();
    $('#' + windowIn).css('filter', 'grayscale(0%)');
    $('#' + windowIn).css('z-index', getHighestIndex() + 1);
    $('#' + windowIn).css('color', _appInterfaceTextColor);
    $('#' + windowIn + ' .titlebar>a').css('color', _titlebarTextColor);
    $('#' + windowIn + '>.titlebar').css('background', _titlebarFocusColor);
    if(windowIn == "help" || windowIn == "notes"){
        $('#' + windowIn + ' h1').css('color', _appInterfaceTextColor);
        $('#' + windowIn + ' h2').css('color', _appInterfaceTextColor);
        $('#' + windowIn + ' p').css('color', _appInterfaceTextColor);
        $('#' + windowIn + ' a').css('color', _appInterfaceTextColor);
    }
}

var previousFocus;

function getActive(activeIn){
    if(activeIn !== currentlyFocused){
        previousFocus = currentlyFocused;
        currentlyFocused = activeIn;
        focusWindow(currentlyFocused);
    }
}

// **closing functionality**
var mediaClosed = false;

$(function () {
    $('.application').mouseover(function () {
        getActive(this.id);
    });

    
    $(".closeWindow").on('click', function(event){
        closeWindow(currentlyFocused);
    });
});

function closeWindow(windowIn){
    if(windowIn == "mediaplayer"){
        $("#mediaContent").attr('src', '');
        $('#mediaplayer').hide();
        $('#windowListChip').hide();
        mediaClosed = true;
    } else if(windowIn == "browserWindow") {
            $('#browserContent').hide();
            $('#browserInfo').show();
            $('#browserContent').attr('src', '');
            $('#browserWindow').hide();
            $('#windowListBrowser').hide();
    } else {
        $('#' + windowIn).hide();
    }
    $('#windowList' + capitalizeString(windowIn)).hide();
}

function capitalizeString(stringIn){
    return stringIn.substring(0, 1).toUpperCase() + stringIn.substring(1);
}


function openWindow(windowIn){
    $("#appMenuContent").hide();
    $("#fileMenuContent").hide();
    $('#' + windowIn).show();
    // uncollapseWindow(windowIn);
    if(windowIn == "mediaplayer"){
        if (mediaClosed) {
            $("#mediaContent").attr('src', 'https://mmontag.github.io/chip-player-js/');
        }
        $('#mediaplayer').css('height', '60%');
        mediaClosed = false;

    }
    getActive(windowIn);
    $('#windowList' + capitalizeString(windowIn)).show();

}


// **opening functionality**
$(function () {
    // (Chip Player JS / Mediaplayer)
    $("#chipIcon, #chipText").click(function () {
        openWindow("mediaplayer");
    })

    // (Notes)
    $("#notesIcon, #notesText").click(function () {
        openWindow("notes");
    })

    // (Pathfinder / File explorer)
    $("#pathfinderText").click(function () {
        openWindow("pathfinder");
    })

    // (Terminal)
    $("#terminalText").click(function () {
        openWindow("terminal");
    })

    // (Getpost Gavinator)
    $("#browserText").click(function () {
        $('#browserContent').attr('src', 'http://theoldnet.com/browser');
        openWindow("browserWindow");
        loadingDots();
        $('#browserInfo').delay(2000).fadeOut("slow");
        $('#browserContent').delay(2500).fadeIn("slow");
    })

    // (Help window)
    $("#helpMenuClick").click(function () {
        openWindow("help");
    })

    // (Settings window)
    $("#settingsMenuClick").click(function () {
        openWindow("settings");
    })
    
});

function collapseWindow(windowIn){
   switch (windowIn) {
    case 'mediaplayer':
        $('#mediaContent').hide();
        mediaplayerHeight = $("#mediaplayer").css('height');
        break;
    case 'notes':
        notesHeight = $("#notes").css('height');
        break;
    case 'pathfinder':
        $('#pathfinderContent').hide();
        pathfinderHeight = $("#pathfinder").css('height');
        break;
    case 'terminal':
        terminalHeight = $("#terminal").css('height');
        break;
    case 'browserWindow':
        $('#browserContent').hide();
        browserHeight = $("#browserWindow").css('height');
        break;
    case 'help':
        helpHeight = $("#help").css('height');
        break;
   }
    $('#' + windowIn).height(0);
    $('#' + windowIn).resizable('disable');
}

function uncollapseWindow(windowIn){
   if($('#' + windowIn).resizable("option","disabled")){
    switch (windowIn) {
        case 'mediaplayer':
            $('#mediaContent').show();
            $('#mediaplayer').css('height', mediaplayerHeight);
            break;
        case 'notes':
            $('#notes').css('height', notesHeight);
            break;
        case 'pathfinder':
            $('#pathfinderContent').show();
            $('#pathfinder').css('height', pathfinderHeight);
            break;
        case 'terminal':
            $('#terminal').css('height', terminalHeight);
            break;
        case 'browserWindow':
            $('#browserContent').show();
            $('#browserWindow').css('height', browserHeight);
            break;
        case 'help':
            $('#help').css('height', helpHeight);
            break;
       }
    $('#' + windowIn).resizable('enable'); 
    }
}

// **Collapsing functionality**
$(function () {
    $('.collapseWindow').click(function () {
        if(this.innerHTML == "▲"){
            collapseWindow(currentlyFocused);
            this.innerHTML = "▼";
        } else {
            this.innerHTML = "▲";
            uncollapseWindow(currentlyFocused);
        }        
    });
});

/*
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
*/

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
        $('#settings').hide();
        $('#appMenuContent').hide();
       closeWindow("terminal");
       closeWindow("browserWindow");
       closeWindow("help");
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
            closeWindow(currentlyFocused);
        }
        // If pressing Alt + W, then collapse the currently focused window
        if (down[0] === 18 && down[1] === 87) {
            $('#' + currentlyFocused).find('.collapseWindow').click();
        }
        /*
        // If pressing Alt + F, then maximize the currently focused window (If supported)
        if (down[0] === 18 && down[1] === 70) {
            maximizeCurrentlyFocused();
        }
        */
    }
    map[e.keyCode] = true;
}).keyup(function (e) {
    map[e.keyCode] = false;
    down.length = 0;
    $('.frameOverlay').fadeOut('fast');
    $('.windowFrameOverlay').fadeOut('fast');
});

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
   $('#randomSearchTerm').on('keypress', function (e) {
    if(e.which === 13){
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

function updateTerminalTextColor(terminalTextColorIn) {
    $('#terminalContent > *').css('color', terminalTextColorIn);
}

/*
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
    $('#customizationSettings').css('background-color', _appBackgroundColorOut);
    $('#generalInterface').css('border-right', '1px solid ' + _appInterfaceTextColor);

    getActive("customizationSettings");
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
    getActive("customizationSettings");
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
    getActive("customizationSettings");
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
    $('.fakeWindow').css('border-radius', borderRadiusIn + "px");
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
*/

$(function () {
    $('#windowListMediaplayer').hover(function () {
        getActive("mediaplayer");
        uncollapseWindow("mediaplayer");
    })

    $('#windowListNotes').hover(function () {
        getActive("notes");
        uncollapseWindow("notes");
    })

    $('#windowListPathfinder').hover(function () {
        getActive("pathfinder");
        uncollapseWindow("pathfinder");
    })

    $('#windowListTerminal').hover(function () {
        getActive("terminal");
        uncollapseWindow("terminal");
    })

    $('#windowListBrowser').hover(function () {
        getActive("browserWindow");
        uncollapseWindow("browserWindow");
    })

    $('#windowListHelp').hover(function () {
        focusHelp();
    })
});

$(function () {
    $('#windowListMediaplayer').click(function () {
        closeWindow("mediaplayer");
    })

    $('#windowListNotes').click(function () {
        closeWindow("notes");
    })

    $('#windowListPathfinder').click(function () {
        closeWindow("pathfinder");
    })

    $('#windowListTerminal').click(function () {
        closeWindow("terminal");
    })

    $('#windowListBrowser').click(function () {
        closeWindow("browserWindow");
    })

    $('#windowListHelp').click(function () {
        closeWindow("help");
    })
});

// terminal stuff
$(function () {
    $('#terminalInput').on('keypress', function (e) {
        if(e.which === 13){
            var terminalInput = $('#terminalInput').val().toLowerCase();
            $('#terminalContent').find('pre').hide();;
            switch (terminalInput) {
                case 'ls':
                    $("#terminalLs").css('display', 'block');
                    break;
                case 'uname -r':
                    $("#terminalUnameR").css('display', 'block');
                    break;
                case 'neofetch':
                    $("#terminalNeofetch").css('display', 'block');
                    break;
                case 'help':
                    $("#terminalHelp").css('display', 'block');
                    break;
                case 'exit':
                    $('#terminalInput').val('');
                    closeWindow("terminal");
                    break;
                case 'clear':
                    $('#terminalInput').val('');
                    break;
                default:
                    $("#terminalNotFound").css('display', 'block');
            }
        }
    });
});

var demoTitlebarHasClicked;

$(function () {
    
    $('#settingsAboutButton').click(function () {
        $('#currentSettings > div').hide();
        $("#aboutContainer").show();
        $("#settingsPanels > div").css('background', 'gray');
        $("#settingsAboutButton").css('background', 'linear-gradient(to left, gray, darkgray)');
    })

    $('#settingsBackgroundsButton').click(function () {
        $('#currentSettings > div').hide();
        $("#backgroundContainer").css('display', 'flex');
        $("#settingsPanels > div").css('background', 'gray');
        $("#settingsBackgroundsButton").css('background', 'linear-gradient(to left, gray, darkgray)');
    })

    $('#settingsAppearanceButton').click(function () {
        $('#currentSettings > div').hide();
        $("#appearanceContainer").show();
        $("#settingsPanels > div").css('background', 'gray');
        $("#settingsAppearanceButton").css('background', 'linear-gradient(to left, gray, darkgray)');
    })

    $('#demoWindowContent').click(function () {
        $('#appBackgroundColorPicker').click();
    })

    $('#demoText').click(function () {
        $('#appInterfaceTextColorPicker').click();
    })

    $('#demoMenubar>a').click(function () {
        $('#menubarTextColorPicker').click();
    })

    $('#demoMenubar').click(function () {
        $('#menubarBackgroundColorPicker').click();
    })

    $('#demoTitlebar>a, #demoTitlebar>button').click(function () {
        $('#titlebarTextColorPicker').click();
        demoTitlebarHasClicked = true;
    })

    $("#demoTitlebar").click(function(e){
        if(demoTitlebarHasClicked){
            demoTitlebarHasClicked = false;
        } else {
            if(demoTitlebarIsGradient){
                var pWidth = $(this).innerWidth(); //use .outerWidth() if you want borders
                var pOffset = $(this).offset(); 
                var x = e.pageX - pOffset.left;
                if(pWidth/2 > x){
                    $('#titlebarColorOnePicker').click();
                } else {
                    $('#titlebarColorTwoPicker').click();
                    }
                } else {
                    $('#titlebarColorOnePicker').click();
                }
            }

     });

     $('#titlebarGradientSwitch').click(function () {
        if ($(this).is(':checked')) {
            demoTitlebarIsGradient = true;
            $('#titlebarColorTwoPicker').show();
            $('#titlebarColorTwoPickerText').show();
            $('#titlebarColorOnePickerText').text("Titlebar background color one");
            $("#demoTitlebar").css('background', generateGradient(demoTitlebarDirection, demoTitlebarColorOne, demoTitlebarColorTwo));
        } else {
            demoTitlebarIsGradient = false;
            $('#titlebarColorTwoPicker').hide();
            $('#titlebarColorTwoPickerText').hide();
            $('#titlebarColorOnePickerText').text("Titlebar background color");
            $("#demoTitlebar").css('background', demoTitlebarColorOne);
        }
    })
});

var demoTitlebarIsGradient = true;
var demoTitlebarColorOne = "white";
var demoTitlebarColorTwo = "lightgray";
var demoTitlebarDirection = "to right";

function updateDemoColor(type, color){
    switch(type){
        case "windowBackground":
            $(".demoWindow").css('background', color);
            break;
        case "windowText":
            $(".demoWindow").css('color', color);
            break;
        case "menubarText":
            $("#demoMenubar>a").css('color', color);
            break;
        case "menubarBackground":
            $("#demoMenubar").css('background-color', color);
            break;
        case "titlebarText":
            $("#demoTitlebar>a").css('color', color);
            $("#demoTitlebar>button").css('color', color);
            break;
        case "titlebarBackgroundOne":
            if(demoTitlebarIsGradient){
                demoTitlebarColorOne = color;
                $("#demoTitlebar").css('background', generateGradient(demoTitlebarDirection, color, demoTitlebarColorTwo));
            } else {
                demoTitlebarColorOne = color;
                $("#demoTitlebar").css('background', color);
            }
            break;
        case "titlebarBackgroundTwo":
            if(demoTitlebarIsGradient){
                demoTitlebarColorTwo = color;
                $("#demoTitlebar").css('background', generateGradient(demoTitlebarDirection, demoTitlebarColorOne, color));
            }
            break;
    }
}



function generateGradient(direction, colorOne, colorTwo){
    return "linear-gradient(" + direction + ", " + colorOne + ", " + colorTwo + ")";
}


function updateButtonPlacement(isDemo, placementIn) {
    buttonPlacement.value = placementIn;
    var closeWindow;
    var collapseWindow;
    var titlebar;
    if(isDemo){
        closeWindow = "#closeWindowDemo";
        collapseWindow = "#collapseWindowDemo";
        titlebar = "#demoTitlebar";
    } else {
        closeWindow = ".closeWindow";
        collapseWindow = ".collapseWindow";
        titlebar = ".titlebar";
    }
    switch (placementIn) {
        case 'RDE':
            $(closeWindow).css('float', 'left');
            $(collapseWindow).css('float', 'right');
            $(titlebar).css('text-align', 'center');
            $(titlebar + '>a').css('margin-left', '0');
            $(closeWindow).css('margin-right', '0');
            $(collapseWindow).css('margin-left', '0');
            break;
        case 'redmond':
            $(closeWindow).css('float', 'right');
            $(collapseWindow).css('float', 'right');
            $(titlebar).css('text-align', 'left');
            $(titlebar + '>a').css('margin-left', '1%');
            $(closeWindow).css('margin-right', '1%');
            $(collapseWindow).css('margin-left', '0');
            break;
        case 'cupertino':
            $(closeWindow).css('float', 'left');
            $(collapseWindow).css('float', 'left');
            $(titlebar).css('text-align', 'center');
            $(titlebar + '>a').css('margin-left', 'none');
            $(closeWindow).css('margin-right', '1%');
            $(collapseWindow).css('margin-left', '0.1%');
            break;
    }
}   

