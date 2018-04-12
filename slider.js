var index = 0;
var eraseTimeout = 0;
var changeTimeout = 0;

function erase()
{
    $("#slider").fadeOut(500);
}

function loadElement()
{
    //var imgElement = '<img src="img/slide' + index + '.jpg" />';
    var imgElement = "url('img/slide" + index + ".jpg')";
    $('#slider').css('background-image', imgElement);
    //document.getElementById("slider").innerHTML = imgElement;
    $("#slider").fadeIn(500);
}

function changeSlide()
{
    if (index < 3)
        index++;
    else
        index = 0;

    loadElement();

    eraseTimeout = setTimeout("erase()", 4500);
    changeTimeout = setTimeout("changeSlide()", 5000);
}

function clearTimeouts()
{
    clearTimeout(eraseTimeout);
    clearTimeout(changeTimeout);
}

function setNextSlide()
{

    clearTimeouts();
    erase();
    setTimeout("changeSlide()", 500);
}

function setPreviousSlide()
{
    if (index > 0)
        index--;
    else
        index = 3;

    clearTimeouts();
    erase();
    setTimeout("loadElement()", 500);

    eraseTimeout = setTimeout("erase()", 4500);

    changeTimeout = setTimeout("changeSlide()", 5000);
}

function setSlide(number)
{
    index = number;

    clearTimeouts();
    erase();
    setTimeout("changeSlide()", 500);
}