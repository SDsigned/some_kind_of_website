
// bright colors
function Light()
{   
document.body.style.background= "url('img/light_bg.jpg') center no-repeat";
document.body.style.backgroundSize= "cover";
        var elements = document.getElementsByClassName("sidebar")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background="url('img/20p_white_bg.png')";
        }

        var elements = document.getElementsByClassName("some_tekst")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color="#2f2f2f";
            elements[i].style.textShadow="none";
        }
}

// dark colors
function Dark()
{   
document.body.style.background= "url('img/dark_bg.jpg') center no-repeat";
document.body.style.backgroundSize= "cover";
var elements = document.getElementsByClassName("sidebar")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background="url('img/20p_bg.png')";   
        }

        var elements = document.getElementsByClassName("some_tekst")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color="whitesmoke";
            elements[i].style.textShadow="1px 1px 5px black";
        }
}

// bright sidebar dark content background
function Light_Dark ()
{   
document.body.style.background= "url('img/dark_bg.jpg') center no-repeat";
document.body.style.backgroundSize= "cover";
var elements = document.getElementsByClassName("sidebar")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background="url('img/light_bg.jpg')";
        }

        var elements = document.getElementsByClassName("sidebar_menu")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color="#2f2f2f";
            elements[i].style.textShadow="none";
        }

        var elements = document.getElementsByClassName("some_tekst")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color="whitesmoke";
            elements[i].style.textShadow="1px 1px 5px black";
        }
}

// dark sidebar bright content background
function Dark_Light ()
{   
document.body.style.background= "url('img/light_bg.jpg') center no-repeat";
document.body.style.backgroundSize= "cover";
var elements = document.getElementsByClassName("sidebar")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background="url('img/dark_bg.jpg')";
        }

        var elements = document.getElementsByClassName("some_tekst")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color="#2f2f2f";
            elements[i].style.textShadow="none";
        }
}
