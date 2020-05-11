var yahli = "Yahli";

var namelength = function() {
    var sofer = "Sofer";
    return yahli.length * sofer.length;

}

function initialized() {
    var main = document.getElementById("Thirdmain");
    var text = "";
    for (i = 0; i < namelength(); i++) {
        text += "<article></article>";
    }
    main.innerHTML = text;
    var tagis = document.getElementsByTagName('article');
    tagis[0].onmousemove = function() {
        tagis[0].style.backgroundImage = "url('./images/letterY.jpg')"
    }

    tagis[0].onmouseout = function() {
        tagis[0].style.backgroundImage = "none";

    }
}

function dark() {
    var artTags = document.getElementsByTagName('article');
    for (i = 0; i < "yahli".length; i++) {
        artTags[i].style.backgroundColor = '#000000';
    }
}

function press() {
    var demoTag = document.getElementsByTagName('article');

    for (i = 0; i < "yahli".length; i++) {
        demoTag[i].style.backgroundColor = 'teal';
    }
}