var div=document.querySelector("#my-div");


function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
function foo()
{
    div.style.color=generateRandomColor();
}