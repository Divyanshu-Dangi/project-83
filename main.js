

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_position_of_x,last_position_of_y;
var width = screen.width;
new_width = width-100;
new_height= screen.height-300;
if (width<992)
{
    document.getElementById("myCanvas").width =new_width;
    document.getElementById("myCanvas").height =new_height;
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
 color=document.getElementById("color");
 widthofline=document.getElementById("widthofline");   
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
current_position_of_x =e.touches[0].clientX-canvas.offsetLeft;
current_position_of_y =e.touches[0].clientY-canvas.offsetTop; 

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;

    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();

last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}
function cleararea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}