//balnk box initial value
var blank=44;
var isStop=0;
var interval=false;
var box11=document.getElementById("11");
var box12=document.getElementById("12");
var box13=document.getElementById("13");
var box14=document.getElementById("14");
var box21=document.getElementById("21");
var box22=document.getElementById("22");
var box23=document.getElementById("23");
var box24=document.getElementById("24");
var box31=document.getElementById("31");
var box32=document.getElementById("32");
var box33=document.getElementById("33");
var box34=document.getElementById("34");
var box41=document.getElementById("41");
var box42=document.getElementById("42");
var box43=document.getElementById("43");
var box44=document.getElementById("44");


function moverBox()
{
	//alert("1"+interval);
if(interval)
{
	return;
}

	interval=true;
	//	alert("2   "+interval);

	//get box handle
 box11=document.getElementById("11");
 box12=document.getElementById("12");
 box13=document.getElementById("13");
 box14=document.getElementById("14");
 box21=document.getElementById("21");
 box22=document.getElementById("22");
 box23=document.getElementById("23");
 box24=document.getElementById("24");
 box31=document.getElementById("31");
 box32=document.getElementById("32");
 box33=document.getElementById("33");
 box34=document.getElementById("34");
 box41=document.getElementById("41");
 box42=document.getElementById("42");
 box43=document.getElementById("43");
 box44=document.getElementById("44");


box11.addEventListener("click",function(){judgeFunction(11);},false);
box12.addEventListener("click",function(){judgeFunction(12);},false);
box13.addEventListener("click",function(){judgeFunction(13);},false);
box14.addEventListener("click",function(){judgeFunction(14);},false);
box21.addEventListener("click",function(){judgeFunction(21);},false);
box22.addEventListener("click",function(){judgeFunction(22);},false);
box23.addEventListener("click",function(){judgeFunction(23);},false);
box24.addEventListener("click",function(){judgeFunction(24);},false);
box31.addEventListener("click",function(){judgeFunction(31);},false);
box32.addEventListener("click",function(){judgeFunction(32);},false);
box33.addEventListener("click",function(){judgeFunction(33);},false);
box34.addEventListener("click",function(){judgeFunction(34);},false);
box41.addEventListener("click",function(){judgeFunction(41);},false);
box42.addEventListener("click",function(){judgeFunction(42);},false);
box43.addEventListener("click",function(){judgeFunction(43);},false);
box44.addEventListener("click",function(){judgeFunction(44);},false);

	destroyListerner();

/*
if(isStop==1)
{
	alert("stop");
	destroyListerner();
	return;
}*/


}

function destroyListerner()
{
 box11=document.getElementById("11");
 box12=document.getElementById("12");
 box13=document.getElementById("13");
 box14=document.getElementById("14");
 box21=document.getElementById("21");
 box22=document.getElementById("22");
 box23=document.getElementById("23");
 box24=document.getElementById("24");
 box31=document.getElementById("31");
 box32=document.getElementById("32");
 box33=document.getElementById("33");
 box34=document.getElementById("34");
 box41=document.getElementById("41");
 box42=document.getElementById("42");
 box43=document.getElementById("43");
 box44=document.getElementById("44");

	box11.removeEventListener ("click",function(){judgeFunction(11);},false);
	box12.removeEventListener ("click",function(){judgeFunction(12);},false);
	box13.removeEventListener ("click",function(){judgeFunction(13);},false);
	box14.removeEventListener ("click",function(){judgeFunction(14);},false);
	box21.removeEventListener ("click",function(){judgeFunction(21);},false);
	box22.removeEventListener ("click",function(){judgeFunction(22);},false);
	box23.removeEventListener ("click",function(){judgeFunction(23);},false);
	box24.removeEventListener ("click",function(){judgeFunction(24);},false);
	box31.removeEventListener ("click",function(){judgeFunction(31);},false);
	box32.removeEventListener ("click",function(){judgeFunction(32);},false);
	box33.removeEventListener ("click",function(){judgeFunction(33);},false);
	box34.removeEventListener ("click",function(){judgeFunction(34);},false);
	box41.removeEventListener ("click",function(){judgeFunction(41);},false);
	box42.removeEventListener ("click",function(){judgeFunction(42);},false);
	box43.removeEventListener ("click",function(){judgeFunction(43);},false);
	box44.removeEventListener ("click",function(){judgeFunction(44);},false);
}

//judge if the user finish the play successfuly
function judgeSuccess()
{
 box11=document.getElementById("11");
 box12=document.getElementById("12");
 box13=document.getElementById("13");
 box14=document.getElementById("14");
 box21=document.getElementById("21");
 box22=document.getElementById("22");
 box23=document.getElementById("23");
 box24=document.getElementById("24");
 box31=document.getElementById("31");
 box32=document.getElementById("32");
 box33=document.getElementById("33");
 box34=document.getElementById("34");
 box41=document.getElementById("41");
 box42=document.getElementById("42");
 box43=document.getElementById("43");
 box44=document.getElementById("44");


if(box11.src.indexOf("1.png")!=-1&&box12.src.indexOf("2.png")!=-1
	&&box13.src.indexOf("3.png")!=-1&&box14.src.indexOf("4.png")!=-1
	&&box21.src.indexOf("5.png")!=-1&&box22.src.indexOf("6.png")!=-1
	&&box23.src.indexOf("7.png")!=-1&&box24.src.indexOf("8.png")!=-1
	&&box31.src.indexOf("9.png")!=-1&&box32.src.indexOf("10.png")!=-1
	&&box33.src.indexOf("11.png")!=-1&&box34.src.indexOf("12.png")!=-1
	&&box41.src.indexOf("13.png")!=-1&&box42.src.indexOf("14.png")!=-1
	&&box43.src.indexOf("15.png")!=-1&&box44.src.indexOf("16.png")!=-1)

{

//prompt the user to determine whether to play again
var restart=window.prompt(" Do you want to play again? Please enter y or n","y");
/*
*/

if(restart=="y"||restart=="Y")
   {	
   //interval=null;
   destroyListerner();
	   initialBox();
	   }

 if(restart=="n"||restart=="N")
   {
//	   interval=null;
//		alert("3   "+interval);
destroyListerner();
 start();
	   }

}

}

//judge the box moving, and alert the user of illegal moves
function judgeFunction(boxNum)
{	

	if(boxNum+10==blank||boxNum-10==blank||boxNum+1==blank||boxNum-1==blank)
	{
	swapBox(boxNum);
	}
	else
	{
	alert("You cann't move this box.");
	}	
}

//moving the box according to user
function swapBox(boxNum)
{
	
	var blankbox=document.getElementById(blank);
	var box=document.getElementById(boxNum);
	blankbox.src=box.src;
	box.src="16.png";
	blank=boxNum;
	judgeSuccess();
}

//randomly the boxes from 1 through 15
function initialBox()
{	
	var numArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	var length=15;
	var randomValue;
	setImage(44, 16);
	 for (var j=1;j<5;j++)
	  {
		 for (var i=1;i<5;i++)
		 {
			 if(j==4&&i==4)
			 break;

		randomValue=Math.floor(Math.random()*length);
		boxValue=numArray[randomValue];
		var boxNum=j*10+i;
		setImage(boxNum,boxValue);
		length--;
		
		for(var h=randomValue;h<length;h++)
		{
		numArray[h]=numArray[h+1];	
		}
		 }
		}
	blank=44;
	moverBox();
	
}

//set certain box image according the box number
function setImage(boxNum, boxValue)
{
var boxImag=document.getElementById(boxNum);

		
	if(isFinite(boxValue))
	{
	boxImag.src=boxValue+".png";
	}
	else
	{
	boxImag.src="blank.png";
	}
}

//start the game, and arrange all the tiles in sequential order row by row
function start()
{
	var h=1;
	 for (var j=1;j<5;j++)
	  {
		 for (var i=1;i<5;i++)
		 {
		 var boxNum=j*10+i;
		 setImage(boxNum,h++);
		 }
	  }
	isStop=1;
	var playButton=document.getElementById("play");
	playButton.addEventListener("click",initialBox,false);


	}
window.addEventListener("load", start, false);