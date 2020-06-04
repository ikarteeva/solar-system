var ctx, w, h, canvas;
var stars = [];
var N = 1000;
//переменные

 function statStars(x,y){
	this.x = x;
	this.y = y;
}
//координаты звезд

function stat(x,y,i){
	this.x = x;
	this.y = y;
	this.i = i;
}

//для колец

function rand(min,max){
	return Math.random()*(max - min) + min;
}

//рандомное расположение 

window.onload = function(){
	canvas = document.getElementById("canvas");
	w = canvas.width;
	h = canvas.height;
	ctx = canvas.getContext('2d');
	ctx.fillRect(0,0,w,h);
	init();
}


//вводится canvas (фон). этот цвет называется "Темный Индиго", ничего не знаю.

function init(){
	for (var i = 0; i < N; ++i) {
		stars[i] = new statStars(rand(0,w),rand(0,h));
	}
setInterval(draw,33);
}


function draw(){

	ctx.fillStyle="rgb(49,0,98)";
	ctx.fillRect(0,0,w,h);
	StartDraw();
	sun();
	planets();
	orbit();
}


function StartDraw(){
	ctx.fillStyle = "rgba(255,255,255,0.6)";
		for (var i = 0; i < N; ++i) {
			ctx.beginPath();
			ctx.arc(stars[i].x,stars[i].y,1,0,Math.PI*2,false);
			ctx.fill();
			ctx.closePath();
		}
}

function sun(){
	ctx.fillStyle = "rgba(248,248,255,0.8)";
	ctx.beginPath();
	ctx.arc(w/2,h/2,50,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

//А вот и Солнце. Белое, потому что так по науке. А цвет - потому что так красивей, чем просто белый.

ctx.fillStyle = "rgba(255,255,31,0.7)";
	ctx.beginPath();
	ctx.arc(w/2,h/2,35,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	//желтая оболочка 

ctx.fillStyle = "rgba(255,0,0,0.7)";
	ctx.beginPath();
	ctx.arc(w/2,h/2,5,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "rgba(255,0,0.0.5)";
	ctx.beginPath();
	ctx.arc(w/2,h/2,15,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "rgba(255,0,0,0.4)";
	ctx.beginPath();
	ctx.arc(w/2,h/2,25,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

}
//красное ядро 


var merc_x, merc_y, merc_v=0;
var ven_x,  ven_y, ven_v=0;
var ear_x,  ear_y,  ear_v=0;
var lun_x,  lun_y,  lun_v=0;
var mar_x,  mar_y,  mar_v=0;
var dem_x, dem_y, dem_v=0;
var fob_x, fob_y, fob_v=0;
var jup_x,  jup_y,  jup_v=0;
var sat_x,  sat_y,  sat_v=0;
var ura_x,  ura_y,  ura_v=0;
var nep_x,  nep_y,  nep_v=0;
var pluto_x, pluto_y, pluto_v=0;

//бесконечные переменные...

//ikarteeva

function planets(){
	ctx.fillStyle = "rgb(217,189,158)";
	ctx.beginPath();
	ctx.arc(merc_x,merc_y,4,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();
	merc_v += 0.01;
	merc_x = w/2 + 90 * Math.sin(merc_v);
	merc_y = h/2 + 90 * Math.cos(merc_v);	

//а вот и меркурий подъехал. цвет - светло-серо-коричневый. Движение - по математическим формулам.

ctx.fillStyle = "rgb(255,236,194)";
	ctx.beginPath();
	ctx.arc(ven_x,ven_y,10,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();
	ven_v += 0.008;
	ven_x = w/2 + 130 * Math.sin(ven_v);
	ven_y = h/2 + 130 * Math.cos(ven_v);	
//бледно-желтая Венера, которая медленнее Меркурия.

ctx.fillStyle = "rgb(0,255,255)";
	ctx.beginPath();
	ctx.arc(ear_x,ear_y,10,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "rgba(0,255,255,0.4)";
	ctx.beginPath();
	ctx.arc(ear_x,ear_y,13,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	ear_v += 0.006;
	ear_x = w/2 + 175 * Math.sin(ear_v);
	ear_y = h/2 + 175 * Math.cos(ear_v);	

	//Земля. Не просто голубая планета, а планета цвета Морской волны!

	ctx.fillStyle = "rgb(191,170,153)";
	ctx.beginPath();
	ctx.arc(lun_x,lun_y,3,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	lun_v -= 0.009;
	lun_x = ear_x + 25 * Math.sin(lun_v);
	lun_y = ear_y + 25 * Math.cos(lun_v);	

//а вот и спутник Земли. Цвет - бледно-коричневый, т.к. поверхность Луны неоднородна. Движение вокруг Земли задается "-=0,009"

ctx.fillStyle = "rgb(255,199,168)";
	ctx.beginPath();
	ctx.arc(mar_x,mar_y,6,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "rgba(255,199,168,0.4)";
	ctx.beginPath();
	ctx.arc(mar_x,mar_y,9,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	mar_v += 0.004;
	mar_x = w/2 + 220 * Math.sin(mar_v);
	mar_y = h/2 + 220 * Math.cos(mar_v);	

//Марс. Цвет серо-коричневый с оттенком красного. Ибо "Красная Планета" - всего лишь прозвище Марса.

ctx.fillStyle = "rgb(255,240,245)";
	ctx.beginPath();
	ctx.arc(dem_x,dem_y,3,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	dem_v -= 0.009;
	dem_x = mar_x + 21 * Math.sin(dem_v);
	dem_y = mar_y + 21 * Math.cos(dem_v);	

	ctx.fillStyle = "rgb(64,58,58)";
	ctx.beginPath();
	ctx.arc(fob_x,fob_y,3,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	fob_v -= 0.015;
	fob_x = mar_x + 27 * Math.sin(fob_v);
	fob_y = mar_y + 27 * Math.cos(fob_v);	

//Ухты! Фобос и Деймос! 


ctx.fillStyle = "rgb(196,172,147)";
	ctx.beginPath();
	ctx.arc(jup_x,jup_y,25,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "rgba(196,172,147,0.2)";
	ctx.beginPath();
	ctx.arc(jup_x,jup_y,33,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "rgba(196,172,147, 0.7)";
	ctx.beginPath();
	ctx.arc(jup_x,jup_y,35,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	jup_v += 0.003;
	jup_x = w/2 + 300 * Math.sin(jup_v);
	jup_y = h/2 + 300 * Math.cos(jup_v);

//встречаем Юпитер + его "кольцо"

ctx.fillStyle = "rgb(252,233,169)";
	ctx.beginPath();
	ctx.arc(sat_x,sat_y,26,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "rgba(252,233,169,0.4)";
	ctx.beginPath();
	ctx.arc(sat_x,sat_y,32,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	sat_v += 0.002;
	sat_x = w/2 + 400 * Math.sin(sat_v);
	sat_y = h/2 + 400 * Math.cos(sat_v);	
 

//Сатурн. Песочный цвет, но более бледноватый

var kol = [];
var ii = 0;
ctx.fillStyle = "rgba(240,240,240,0.3)";
for (var i = 0; i < 2500; i+=3) {
	kol[i]  =new stat(sat_x+40*Math.sin(ii),sat_y+38*Math.cos(ii),0.1);
	kol[i+1]=new stat(sat_x+43*Math.sin(ii),sat_y+41*Math.cos(ii),0.1);
	kol[i+2]=new stat(sat_x+45*Math.sin(ii),sat_y+43*Math.cos(ii),0.1);
	ii+=0.5;
	}
for (var i = 0; i < 2500; ++i) {
	ctx.beginPath();
	ctx.arc(kol[i].x, kol[i].y,1,0.2*Math.PI,false);
	ctx.fill();
	ctx.closePath();
	}


//бело-серые кольца Сатурна. (сложно, но без костылей - это плюс)


ctx.fillStyle = "rgb(127,199,255)";
	ctx.beginPath();
	ctx.arc(ura_x,ura_y,15,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "rgba(127,199,255,0.4)";
	ctx.beginPath();
	ctx.arc(ura_x,ura_y,19,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	ura_v += 0.0013;
	ura_x = w/2 + 490 * Math.sin(ura_v);
	ura_y = h/2 + 490 * Math.cos(ura_v);	

//Уран. 

ctx.fillStyle = "rgb(18, 10, 143)";
	ctx.beginPath();
	ctx.arc(nep_x,nep_y,15,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "rgba(18, 10, 143,0.4)";
	ctx.beginPath();
	ctx.arc(nep_x,nep_y,19,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	nep_v += 0.0009;
	nep_x = w/2 + 550 * Math.sin(nep_v);
	nep_y = h/2 + 550 * Math.cos(nep_v);	
//Нептун

ctx.fillStyle = "rgb(192, 192, 192)";
	ctx.beginPath();
	ctx.arc(pluto_x,pluto_y,4,0,Math.PI*2,false);
	ctx.fill();
	ctx.closePath();

	pluto_v += 0.0007;
	pluto_x = w/2 + 600 * Math.sin(pluto_v);
	pluto_y = h/2 + 600 * Math.cos(pluto_v);	

}

//А это Плутон, за него прост обидно.

var oi = 0;
var movex, movey, linex, liney;

//вводим переменные орбит


function orbit(){

	for(var i = 0; i < 100; ++i){
		ctx.strokeStyle = "rgba(255,255,255,0.2)";
		ctx.beginPath();
		oi += 0.1;
		movex = w/2 + 90 * Math.sin(oi);
		movey = h/2 + 90 * Math.cos(oi);
		ctx.moveTo(movex, movey);
		oi += 0.1;
		linex = w/2 + 90 * Math.sin(oi);
		liney = h/2 + 90 * Math.cos(oi);		
		ctx.lineTo(linex, liney);
		ctx.stroke();
		ctx.closePath();
}
oi = 0;

//ikarteeva 


	for(var i = 0; i < 100; ++i){
		ctx.strokeStyle = "rgba(255,255,255,0.2)";
		ctx.beginPath();
		oi += 0.1;
		movex = w/2 + 130 * Math.sin(oi);
		movey = h/2 + 130 * Math.cos(oi);
		ctx.moveTo(movex, movey);
		oi += 0.1;
		linex = w/2 + 130 * Math.sin(oi);
		liney = h/2 + 130 * Math.cos(oi);		
		ctx.lineTo(linex, liney);
		ctx.stroke();
		ctx.closePath();
}
oi = 0;


	for(var i = 0; i < 100; ++i){
		ctx.strokeStyle = "rgba(255,255,255,0.2)";
		ctx.beginPath();
		oi += 0.1;
		movex = w/2 + 175 * Math.sin(oi);
		movey = h/2 + 175 * Math.cos(oi);
		ctx.moveTo(movex, movey);
		oi += 0.1;
		linex = w/2 + 175 * Math.sin(oi);
		liney = h/2 + 175 * Math.cos(oi);		
		ctx.lineTo(linex, liney);
		ctx.stroke();
		ctx.closePath();
}
oi = 0;


	for(var i = 0; i < 100; ++i){
		ctx.strokeStyle = "rgba(255,255,255,0.2)";
		ctx.beginPath();
		oi += 0.1;
		movex = w/2 + 220 * Math.sin(oi);
		movey = h/2 + 220 * Math.cos(oi);
		ctx.moveTo(movex, movey);
		oi += 0.1;
		linex = w/2 + 220 * Math.sin(oi);
		liney = h/2 + 220 * Math.cos(oi);		
		ctx.lineTo(linex, liney);
		ctx.stroke();
		ctx.closePath();
}
oi = 0;


	for(var i = 0; i < 100; ++i){
		ctx.strokeStyle = "rgba(255,255,255,0.2)";
		ctx.beginPath();
		oi += 0.1;
		movex = w/2 + 300 * Math.sin(oi);
		movey = h/2 + 300 * Math.cos(oi);
		ctx.moveTo(movex, movey);
		oi += 0.1;
		linex = w/2 + 300 * Math.sin(oi);
		liney = h/2 + 300 * Math.cos(oi);		
		ctx.lineTo(linex, liney);
		ctx.stroke();
		ctx.closePath();
}
oi = 0;


	for(var i = 0; i < 100; ++i){
		ctx.strokeStyle = "rgba(255,255,255,0.2)";
		ctx.beginPath();
		oi += 0.1;
		movex = w/2 + 400 * Math.sin(oi);
		movey = h/2 + 400 * Math.cos(oi);
		ctx.moveTo(movex, movey);
		oi += 0.1;
		linex = w/2 + 400 * Math.sin(oi);
		liney = h/2 + 400 * Math.cos(oi);		
		ctx.lineTo(linex, liney);
		ctx.stroke();
		ctx.closePath();
}
oi = 0;


	for(var i = 0; i < 100; ++i){
		ctx.strokeStyle = "rgba(255,255,255,0.2)";
		ctx.beginPath();
		oi += 0.1;
		movex = w/2 + 490 * Math.sin(oi);
		movey = h/2 + 490 * Math.cos(oi);
		ctx.moveTo(movex, movey);
		oi += 0.1;
		linex = w/2 + 490 * Math.sin(oi);
		liney = h/2 + 490 * Math.cos(oi);		
		ctx.lineTo(linex, liney);
		ctx.stroke();
		ctx.closePath();
}
oi = 0;


	for(var i = 0; i < 100; ++i){
		ctx.strokeStyle = "rgba(255,255,255,0.2)";
		ctx.beginPath();
		oi += 0.1;
		movex = w/2 + 550 * Math.sin(oi);
		movey = h/2 + 550 * Math.cos(oi);
		ctx.moveTo(movex, movey);
		oi += 0.1;
		linex = w/2 + 550 * Math.sin(oi);
		liney = h/2 + 550 * Math.cos(oi);		
		ctx.lineTo(linex, liney);
		ctx.stroke();
		ctx.closePath();
}
oi = 0;

for(var i = 0; i < 100; ++i){
		ctx.strokeStyle = "rgba(255,255,255,0.2)";
		ctx.beginPath();
		oi += 0.1;
		movex = w/2 + 600 * Math.sin(oi);
		movey = h/2 + 600 * Math.cos(oi);
		ctx.moveTo(movex, movey);
		oi += 0.1;
		linex = w/2 + 600 * Math.sin(oi);
		liney = h/2 + 600 * Math.cos(oi);		
		ctx.lineTo(linex, liney);
		ctx.stroke();
		ctx.closePath();
}
oi = 0;
}