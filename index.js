let puntaje = document.getElementById("puntaje");
let pregunta_txt = document.querySelector(".pregunta_p");

let txt_preg_a = document.querySelector(".res_a");
let txt_preg_b = document.querySelector(".res_b");
let txt_preg_c = document.querySelector(".res_c");
let div_txt = document.querySelectorAll(".res");

let btn_a = document.querySelector(".caja_a");
let btn_b = document.querySelector(".caja_b");
let btn_c = document.querySelector(".caja_c");

let check_a = document.querySelector(".check_a");
let check_b = document.querySelector(".check_b");
let check_c = document.querySelector(".check_c");

let btn_res = document.querySelectorAll('button');

let img_ok = document.querySelector('.img_good');
let img_bad = document.querySelector('.img_bad');

let continuar = document.querySelector('.continuar');

let contador_pregunta = 1;
let score = 0;

let pregunta1 = 
{
	pregunta:"La segunda guerra mundial fue el conflicto bélico más devastador en la historia de la humanidad. ¿Cúal fue la batalla con mayores bajas del conflicto?",
	res_obj_a:"Batalla de Las Ardenas",
	res_obj_b:"Batalla de Stalingrado",
	res_obj_c:"Batalla de Berlin",
	correcta: "Batalla de Stalingrado",
	check: false
}
	
let pregunta2 =	
{
	pregunta:"Al finalizar la segunda gurra mundial dos paises surgieron como las nuevas Super Potencias ¿Cuales eran estos paises?",
	res_obj_a:"China y URSS",
	res_obj_b:"Reino Unido y USA",
	res_obj_c:"USA y URSS",
	correcta:"USA y URSS",
	check: false
}

let pregunta3 =	
{
	pregunta:"La caída de Constantinopla a mano de los turcos otomanos significó el fin de la edad media. ¿En que año ocurrió?",
	res_obj_a:"1453",
	res_obj_b:"1383",
	res_obj_c:"1523",
	correcta:"1453",
	check: false
}
 
function mostrarPregunta(pregunta){
	pregunta_txt.innerHTML = pregunta.pregunta;
	txt_preg_a.innerHTML = pregunta.res_obj_a;
	txt_preg_b.innerHTML = pregunta.res_obj_b;
	txt_preg_c.innerHTML = pregunta.res_obj_c;

};

if (contador_pregunta===1) {
	mostrarPregunta(pregunta1);
} 

function comprobar(respuesta, pregunta){
	if (respuesta===pregunta.correcta) {
		txt_preg_a.disabled=true;
		txt_preg_b.disabled=true;
		txt_preg_c.disabled=true;
		btn_a.disabled=true;
		btn_b.disabled=true;
		btn_c.disabled=true;
		img_ok.style.display='flex';
		continuar.style.display = 'flex';
		score = score + 5;
		puntaje.textContent = score;
		pregunta.check = true;
		console.log(pregunta.check);
		color_back(pregunta);
	}
	else{
		txt_preg_a.disabled=true;
		txt_preg_b.disabled=true;
		txt_preg_c.disabled=true;
		btn_a.disabled=true;
		btn_b.disabled=true;
		btn_c.disabled=true;
		img_bad.style.display='flex';
		continuar.style.display = 'flex';
		score = score - 5;
		puntaje.textContent = score;
		console.log(pregunta.check);
		color_back(pregunta);
	}	
	
}

function color_back(pregunta){
		if (contador_pregunta === 1) {
			btn_a.classList.add('red');
			btn_b.classList.add('green');
			btn_c.classList.add('red');
			check_a.textContent = 'Respuesta Incorrecta!';
			check_b.textContent = 'Respuesta Correcta!';
			check_c.textContent = 'Respuesta Incorrecta!';
		}
		else if(contador_pregunta === 2){
			btn_a.classList.add('red');
			btn_b.classList.add('red');
			btn_c.classList.add('green');
			check_a.textContent = 'Respuesta Incorrecta!';
			check_b.textContent = 'Respuesta Incorrecta!';
			check_c.textContent = 'Respuesta Correcta!';
		}
		else if(contador_pregunta === 3){
			btn_a.classList.add('green');
			btn_b.classList.add('red');
			btn_c.classList.add('red');
			check_a.textContent = 'Respuesta Correcta!';
			check_b.textContent = 'Respuesta Inorrecta!';
			check_c.textContent = 'Respuesta Incorrecta!';
		}

	}

function color_back_remove(pregunta){
		if (contador_pregunta === 1) {
			btn_a.classList.remove('red');
			btn_b.classList.remove('green');
			btn_c.classList.remove('red');
			check_a.textContent = '';
			check_b.textContent = '';
			check_c.textContent = '';
			continuar.style.display = 'none';
		}
		else if(contador_pregunta === 2){
			btn_a.classList.remove('red');
			btn_b.classList.remove('green');
			btn_c.classList.remove('red');
			check_a.textContent = '';
			check_b.textContent = '';
			check_c.textContent = '';
			continuar.style.display = 'none';
		}
		else if(contador_pregunta === 3){
			btn_a.classList.remove('red');
			btn_b.classList.remove('red');
			btn_c.classList.remove('green');
			check_a.textContent = '';
			check_b.textContent = '';
			check_c.textContent = '';
			continuar.style.display = 'none';
		}

	}
	


btn_res.forEach(element => {
    element.addEventListener('click', (e)=>{
        if (contador_pregunta===1){
        	comprobar(e.target.innerHTML, pregunta1);
        }
        else if(contador_pregunta===2){
        	comprobar(e.target.innerHTML, pregunta2);
        }
        else if(contador_pregunta===3){
        	comprobar(e.target.innerHTML, pregunta3);
        }
    });
})

function btn_cambio_pag(){
	contador_pregunta = contador_pregunta + 1;
	txt_preg_a.disabled=false;
	txt_preg_b.disabled=false;
	txt_preg_c.disabled=false;
	btn_a.disabled=false;
	btn_b.disabled=false;
	btn_c.disabled=false;
	img_ok.style.display='none';
	img_bad.style.display='none';
	color_back_remove()
	if (contador_pregunta===2) {
		mostrarPregunta(pregunta2);
		pregunta2.check = false;
	}
	else if(contador_pregunta===3){
		mostrarPregunta(pregunta3);
		pregunta3.check = false;
	}
	else {
		continuar.href = 'final.html';
	}
}

continuar.addEventListener('click', () => {
	btn_cambio_pag();
})
