var rellax = new Rellax('.rellax');

function inView(element)
{
    var visible = false;
    var rect = element.getBoundingClientRect();
    var top = rect.top;
    var bottom = rect.bottom;

    if (top <= 0 && bottom <= window.innerWidth) visible = true;

    return visible;
}


document.addEventListener("scroll", () =>
{
    var nav = document.getElementsByTagName("nav")[0];
    var elem = document.getElementById("projects");
    if (inView(elem)) 
    {
        if (nav.classList.contains("navbar-expand-sm")) nav.classList.remove("navbar-expand-sm");
    }

    else nav.classList.add("navbar-expand-sm");
});
