var keys = [];
var nodeNames = ["INPUT", "TEXTAREA"];

window.addEventListener("keydown",
    function(e) {
        keys[e.keyCode] = true;
        if (nodeNames.includes(document.activeElement.nodeName)) {
            return;
        }
        if (document.activeElement.isContentEditable) {
            return;
        }

        checkCombinations(e);
    },
    false);

window.addEventListener('keyup',
    function(e) {
        keys[e.keyCode] = false;
    },
    false);

function checkCombinations(e) {
    if (keys[16] && keys[8]) {
        goForward();
        e.preventDefault();
    } else if (keys[8] && !keys[16]) {
        goBack();
        e.preventDefault();
    }
}

function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}