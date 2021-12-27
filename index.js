let puntaje = document.getElementById("puntaje");
let txt_pregunta = document.querySelector(".preguntas_p");

let txt_preg_a = document.querySelector(".res_a");
let txt_preg_b = document.querySelector(".res_b");
let txt_preg_c = document.querySelector(".res_c");

let btn_a = document.querySelector(".caja_a");
let btn_b = document.querySelector(".caja_b");
let btn_c = document.querySelector(".caja_c");

let check_a = document.querySelector(".check_a");
let check_b = document.querySelector(".check_b");
let check_c = document.querySelector(".check_c");

let continuar = document.querySelector('.continuar');

let contador = 0;

let pregunta_primera = 
{
	pregunta:"La segunda guerra mundial fue el conflicto bélico más devastador en la historia de la humanidad. ¿Cúal fue la batalla con mayores bajas del conflicto?",
	res_obj_a:"Batalla de Las Ardenas",
	res_obj_b:"Batalla de Stalingrado",
	res_obj_c:"Batalla de Berlin",
	correcta: "Batalla de Stalingrado"
}
	
let pregunta_segunda =	
{
	pregunta:"Al finalizar la segunda gurra mundial dos paises surgieron como las nuevas Super Potencias ¿Cuales eran estos paises?",
	res_obj_a:"China y URSS",
	res_obj_b:"Reino Unido y USA",
	res_obj_c:"USA y URSS",
	correcta:"USA y URSS"
}

let pregunta_tercera =	
{
	pregunta:"La caída de Constantinopla a mano de los turcos otomanos significó el fin de la edad media. ¿En que año ocurrió?",
	res_obj_a:"1453",
	res_obj_b:"1383",
	res_obj_c:"1523",
	correcta:"1453"
}
 
window.onload = function mostrarPregunta(){
	console.log(pregunta_primera.pregunta)
	txt_pregunta.innerHTML = pregunta_primera.pregunta;
};

mostrarPregunta()