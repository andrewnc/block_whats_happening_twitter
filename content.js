let div = document.createElement("div");
div.style.width="358px"
div.style.height="100vh"
div.style.position="absolute"
div.style.left="71%"
div.style.top="0"
div.style.backgroundColor="black"
document.body.appendChild(div)
window.addEventListener('load', function () {
    setTimeout(function () {
     document.querySelectorAll('[aria-label="Timeline: Trending now"]')[0].remove();
     div.remove();
    }, 5000);
})
