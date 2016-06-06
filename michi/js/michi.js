
$(document).ready(function(){
	$(".casilla").click(marcar);
	$("#reset").click(reset);

	});

var i=0
function marcar() {
	i++
	if(i%2==0)
		$(this).html("<span style='color:red'>X</span>")
	else
		$(this).text("O")

	$(this).attr("disabled","")
	michi()
}



function michi(){
	var x1=$("#x1").text()
	var x2=$("#x2").text()
	var x3=$("#x3").text()
	var x4=$("#x4").text()
	var x5=$("#x5").text()
	var x6=$("#x6").text()
	var x7=$("#x7").text()
	var x8=$("#x8").text()
	var x9=$("#x9").text()
	if(i>=5){

	if(x1==x2 && x2==x3 && x1!="")
		alert("El jugador de la marca " + x1 + " gana")  
	else if(x4==x5 && x5==x6 && x6!="")					
		alert("El jugador de la marca " + x6 + " gana")	 
	else if(x7==x8 && x8==x9 && x9!="")					
		alert("El jugador de la marca " + x9 + " gana")	
	else if(x1==x4 && x4==x7 && x7!="")
		alert("El jugador de la marca " + x7 + " gana")	
	else if(x2==x5 && x5==x8 && x8!="")
		alert("El jugador de la marca " + x8 + " gana")	
	else if(x3==x6 && x6==x9 && x9!="")
		alert("El jugador de la marca " + x9 + " gana")	
	else if(x1==x5 && x5==x9 && x9!="")
		alert("El jugador de la marca " + x9 + " gana")	
	else if(x3==x5 && x5==x7 && x7!="")
		alert("El jugador de la marca " + x7 + " gana")	
	else if(i==9){
		alert("Empate")
		reset()
		}
	}
}




function reset(){
	$(".casilla").text("")
	$(".casilla").removeAttr("disabled")
	i=0;
}

/*document.getElementById("reset") == $("#reset")
document.getElementByClassName("casilla") == $(".casilla")
setAttribute("class","nombre-clase")*/
	
/*function condicional(){
	var k=2
	if(k<3)
		alert("soy menor que 3")
	if(k<5)
		alert("soy menor que 5")
	if(k<7)
		alert("soy menor que 7")

function condicional-restrictiva(){
var k=2
if(k<3)
	alert("soy menor que 3")
else if(k<5)
	alert("soy menor que 5")
else if(k<7)
	alert("soy menor que 7")
}*/
	
	



