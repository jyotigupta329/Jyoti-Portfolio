// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
// });

// Or with jQuery

$(document).ready(function () {
    $('.sidenav').sidenav();
});

// copy text to clip board

// Or with jQuery

var btns = document.querySelectorAll('a');
var clipboard = new ClipboardJS(btns);
clipboard.on('success', function(e) {
    console.log(e);
});
clipboard.on('error', function(e) {
    console.log(e);
});
