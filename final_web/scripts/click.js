function click() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("Copy");
}