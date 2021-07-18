function getRandom(ost){
	let sonido = new Audio();
	sonido.src= ost;
	if (sonido.play()==true) {
		sonido.pause()
	} else{
	sonido.play();
	}
};
const dialogosET = [null,"hello world! Soy el profesor ET pero la gente me llama Sor ET.",
"decime, con que genero se siente identificadx?",
"ah joya",
"buenardo"]
let i=0;
let usuario=undefined
function sig(){
	dialogos=document.querySelector("dialog")
	if (i===0) {
		getRandom("etsong.mp3")
		dialogos.innerHTML = dialogosET[i+1];
	} 
	else {
		dialogos.innerHTML = dialogosET[i+1];
	}
	i= i+1;
	console.log("mostrar dialogo nº"+i)
	if(i==dialogosET.length){ 
		let usuario = prompt("decime como te llamas brow");
		dialogos.innerHTML = "aaah, asi q vos sos "+ usuario
	}
}
console.log(usuario)