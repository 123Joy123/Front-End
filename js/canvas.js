var canvas,pen;
canvas=document.getElementById('myCanvas');
pen=canvas.getContext('2d');

//设置画笔
pen.lineWidth=1;
pen.stokeStyle="blue";

var mousePress=false;
var last =null;//上一次绘画位置

//取得当前点坐标
function pos(event)
{
    var ex,ey;
    ex=event.clientX;
    ey=event.clientY;
    return{
        x:ex,
        y:ey
    }
}

function start(event){
    mousePress=true;
}
function draw(event){
    //鼠标没摁下直接返回
    if(!mousePress) return;

    var xy=pos(event);
    if(last!=null){
        pen.beginPath();
        pen.moveTo(last.x,last.y);
        pen.lineTo(xy.x,xy.y);
        pen.stroke();
    }
    last=xy;
}
function finish(event){
    mousePress=false;
    last=null;
}

canvas.onmousedown=start;
canvas.onmousemove=draw;
canvas.onmouseup=finish;