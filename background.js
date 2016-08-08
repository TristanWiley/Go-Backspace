var ENTER = 8;
var nodeNames = ['INPUT', 'TEXTAREA'];

window.addEventListener('keydown', function(e) {
    if (nodeNames.includes(document.activeElement.nodeName)) {
        return;
    }
    if (document.activeElement.isContentEditable) {
        return;
    }

    checkCombinations(e);
}, false);

function checkCombinations(e) {
    if (e.shiftKey && e.keyCode === ENTER) {
        goForward();
        e.preventDefault();
    } else if (e.keyCode === ENTER) {
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
