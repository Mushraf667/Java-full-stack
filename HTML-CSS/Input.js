let greetings=["Good Morning","GoodAfternoon","Good night"];
let num=0;
function greet_afternoon()
{
    let text = document.getElementById("greet");
    text.innerText="Good Afternoon";
    num+=1;
}
function turn_on()
{
    let light=document.getElementById("on");
    light.src="C:\\Users\\mushraf\\Downloads\\download.jpeg";
}
function turn_off()
{
    let light=document.getElementById("on");
    light.src="C:\\Users\\mushraf\\Downloads\\download1.jpeg";
}
function Change_color()
{
    let colour = document.getElementById("cap");
    colour.style.backgroundColor="pink";
}