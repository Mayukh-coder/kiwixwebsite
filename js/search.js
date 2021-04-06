function myFunction() {
    var input = document.getElementById("searchbox");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('heading');
    var outernodes = document.getElementsByClassName('boxinfo')

    for (i = 0; i < nodes.length; i++) {
        if (nodes[i].innerText.toLowerCase().includes(filter)) {
            outernodes[i].style.display = "grid";
        } else {
            outernodes[i].style.display = "none";
        }
    }
}