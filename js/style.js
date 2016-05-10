
// сумма двух переменных
// function main(a,b){
// var netice=a+b;
// document.write(netice)
// }
// main(5, 10);

// сложение чисел от одной переменной к другой
// function main(a,b){
// var netice = 0;
// for(i=a; i<=b; i++){
// netice = netice+i;
// }
// document.write(netice);
// }
// main(1, 100);

// function main(p){
 
 // for(i=0; i<=p; i++){
 // document.write("<p>bu bir p-dir</p>");
 // }
 
 // }
 // main(10);




// создаем фигуру

// function divim (width,height,background){
// 	for (i=0; i<=9; i++) {
	
// document.write("<div style='width:"+width+"px; height:"+height+"px;background:"+background+"; border:2px solid black;'></div>")
// }
// }
// divim (50,40,"red");
 
 // в нутри фигуры создаем фигуру

 function boyukDiv(width,say,colum){
 	document.write("<div style='width:"+width+"px;background:yellow'>");
     for(i=0; i<say; i++){
   	document.write("<div style='width:"+((width/colum)-10)+"px; height:100px; background:red; display:inline-block;margin:5px;'></div>");
}
   	document.write("</div>");
 }
 boyukDiv(1200,20,6);



