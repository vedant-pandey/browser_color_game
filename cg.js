var color=giveRandCol(6);
var squares= document.querySelectorAll(".square");
var pcolor=color[pickColor(color.length)];
var colordisp= document.querySelector("#colordisp")
var msg=document.querySelector("#msg");
var h1=document.querySelector("h1");
var rst=document.querySelector("#rst");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var sqnum=6;
var btn=document.querySelectorAll("button");
var selected=document.querySelectorAll(".selected");
var style = document.createElement('style');
style.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(style);
function setClass(colvar){
	style.innerHTML = ".newsel { background-color: "+colvar+"; color: white; }";
}
for (var i = 0; i < btn.length; i++) {
	btn[i].classList.add("hovereff");
}
hardbtn.setAttribute("title","Selected!");
hardbtn.disabled=true;
hardbtn.classList.remove("hovereff");

colordisp.textContent= pcolor.toUpperCase();

easybtn.addEventListener("click", function(){
	sqnum=3;
	rst.click();
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	hardbtn.disabled=false;
	hardbtn.removeAttribute("title");
	easybtn.disabled=true;
	easybtn.setAttribute("title","Selected!");
})

hardbtn.addEventListener("click", function(){
	sqnum=6;
	rst.click();
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	hardbtn.disabled=true;
	hardbtn.setAttribute("title","Selected!");
	easybtn.disabled=false;
	easybtn.removeAttribute("title");
})

for (var i = 0; i < sqnum; i++) {
	squares[i].style.backgroundColor = color[i];
	squares[i].addEventListener("click",function(){
		var curcol=this.style.backgroundColor;
		if (curcol===pcolor) {
			msg.style.color=curcol;
			msg.textContent="CORRECT!";
			changecolor(curcol);
			h1.style.backgroundColor=curcol;
			rst.textContent="PLAY AGAIN?";
			colorswitch(curcol);
			setClass(curcol);
			for (var i = 0; i < btn.length; i++) {
				btn[i].style.backgroundColor="white";
				btn[i].style.color=curcol;
				if (btn[i].disabled) {
					btn[i].classList.add("newsel");
				}
				btn[i].classList.remove("selected");
			}
		} else {
			this.style.backgroundColor = "#232323";
			msg.textContent="TRY AGAIN!";
		}
	})
}

rst.addEventListener("click", function(){
	setDiff();
	h1.style.backgroundColor= "steelblue";
	rst.textContent="NEW COLOR";
	msg.textContent="";
	colorswitch("steelblue");
	style.innerHTML = ".newsel { color: steelblue; }";
	setClass("steelblue");
	for (var i = 0; i < btn.length; i++) {
			btn[i].style.backgroundColor="white";
			btn[i].style.color="steelblue";
			btn[i].classList.remove("newsel");
			btn[i].classList.add("selected");
		}
	msg.style.color="steelblue";
})

function changecolor(curcol){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=curcol;
	}
}

function giveRandCol(lim){
	var arr=[];
	for (var i = 0; i < lim; i++) {
		arr[i]="rgb("+pickColor(256)+", "+pickColor(256)+", "+pickColor(256)+")";
	}
	return arr;
}

function pickColor(mult){
	var rand = Math.floor(Math.random() * mult);
	return rand;
}

function setDiff(){
	color=giveRandCol(sqnum);
	pcolor=color[pickColor(sqnum)];
	colordisp.textContent= pcolor.toUpperCase();
	for (var i = 0; i < squares.length; i++) {
		if(color[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = color[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
}

function colorswitch(colfore){
	for (var i = 0; i < btn.length; i++) {
			btn[i].addEventListener("mouseover",function(){
				this.style.backgroundColor=colfore;
				this.style.color="white";
			})
			btn[i].addEventListener("mouseout",function(){
				this.style.backgroundColor="white";
				this.style.color=colfore;
			})
		}
}