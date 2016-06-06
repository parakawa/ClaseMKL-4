

function entrar(){
	var user=document.getElementById("user").value
	var clave=document.getElementById("clave").value

	for(i=0;i<usuarios.length;i++)
		if(user===usuarios[i].username && clave===usuarios[i].password){
			alert(usuarios[i].username + ", bienvenid@")
			break;
		}
			
		else
			alert("Intenta de nuevo")
			
}

function crear(){
	var newuser=document.getElementById("newuser").value
	var newclave=document.getElementById("newclave").value

	if(newclave.length<7)
		alert("Ingresa una contraseña de más de 6 caracteres")
	else
		usuarios.push({ username:newuser, password:newclave })
}

