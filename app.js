// function -> dahij ashiglah bolomjtoi kodni tsugluulga
// 1.define -> zarlah
// argument/parametr ->func-iin zaaval avah utga
function hello(name,age){
		console.log("Hello "+name);
		console.log("Your age is"+ age);
}
// 2. call ->duudaj ajluulna
hello("Bat",20);
hello("Suvd",15);
function findYear(age){
	//NaN not a number
	console.log(2024-age);
}
findYear(16);
function niilber(too1,too2){
	console.log(too2+too1);
}
niilber(55,24);

// DOM -> Document : html deerh buh code
console.log(document);
var h1 = document.getElementsByTagName("h1") [0];
console.log(h1);
//variableName.style.styleName="value";
h1.style.color="blue";
// varName.innerText="value"; ->
h1.innerText="Hello Bat";
function changeText(){
	h1.style.color="green";
	h1.innerText="Text changed";
}
var h2 = document.getElementsByTagName("h2") [0];
console.log(h2);
h2.style.color="yellow";
h2.innerText="markasmen";
function changeText2(){
	h2.style.color="red";
	h2.innerText="Tigrel";
}
// define
var input=document.getElementsByTagName("input")[0];
var p=document.getElementsByTagName("p")[0];
var p2=document.getElementsByTagName("p")[1];
var p3=document.getElementsByTagName("p")[2];
console.log(input);
console.log(p);
function nas(){
	console.log(2024-input.value);
	p.innerText="Your bith year :"+(2024-input.value);
	if(input.value>17){
		p2.innerText="Ta nasand hursen baina";
	}else{
		p2.innerText="Ta nasand hureegui baina";
	}
	if(input.value>130){
		p3.innerText="hun iim naslah bolomjgui";
		p3.style.color="red";
	}else if(input.value<0){
		p3.innerText="ta turuugui baina";
		p3.style.color="yellow";
	}else if(input.value==""){
		alert("Hooson baij bolohgui");
	}
}
	

