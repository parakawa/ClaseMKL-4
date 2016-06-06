
function tuitear(){
	var texto=document.getElementById("texto").value
	var li=document.createElement("li")
	li.innerHTML=texto
	li.className="list-group-item"
	li.setAttribute("onclick","eliminar(this)")
	var lista=document.getElementById("lista")
	lista.appendChild(li)
	clean()
}

function clean(){
	var textarea=document.getElementById("texto")
	textarea.value=""
	textarea.focus()
}

function eliminar(x){
	document.getElementById("lista").removeChild(x)

}
