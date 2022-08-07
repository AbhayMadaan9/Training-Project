if(window.scrollX > 100)
{
    document.getElementsByClassName('container2').style.position = 'fixed'
    document.getElementsByClassName('container2').style.top= 0
}
else
{
    document.getElementsByClassName('container2').style.position = 'relative'
    document.getElementsByClassName('container2').style.top = 100
}