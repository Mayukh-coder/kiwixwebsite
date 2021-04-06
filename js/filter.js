function showhide(e) {
    var checkboxes = document.getElementsByName('organization');

    if (e.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}
function apply() {
    var wiki_check = document.getElementById("org1");
    if (wiki_check.checked) {
        let wikis = document.getElementsByClassName("wiki");
        for (i = 0; i < wikis.length; i++) {
            wikis[i].style.display = "grid"
        }
    }
    else {
        let wikis = document.getElementsByClassName("wiki");
        for (i = 0; i < wikis.length; i++) {
            wikis[i].style.display = "none"
        }
    }
    var ted_check = document.getElementById("org2");
    if (ted_check.checked) {
        let teds = document.getElementsByClassName("ted");
        for (i = 0; i < teds.length; i++) {
            teds[i].style.display = "grid"
        }
    }
    else {
        let teds = document.getElementsByClassName("ted");
        for (i = 0; i < teds.length; i++) {
            teds[i].style.display = "none"
        }
    }
    var other_check = document.getElementById("org3");
    if (other_check.checked) {
        let others = document.getElementsByClassName("other");
        for (i = 0; i < others.length; i++) {
            others[i].style.display = "grid"
        }
    }
    else {
        let others = document.getElementsByClassName("other");
        for (i = 0; i < others.length; i++) {
            others[i].style.display = "none"
        }
    }
}