let progression = function (number, step) {
	let result = 1;
	let pow = step;
	let suma = 0;
	for (let i = 0; i < number; i++) {

		document.write(` ${result} `);
		suma += result;
		result *= step;
	
	}
	
	document.write(`= ${suma}`);
}

let number = +prompt('Введіть кількість чисел прогресії');
let step = +prompt('Введіть  знаменник прогресії');

let show = progression(number, step);

// *************************************************



document.write(` <br> Розв'язок за формулою = `);


let progression2 = function (number, step) {
	let result = 1;
	let suma = result * ((1 - step ** number) / (1 - step));
	document.write(suma);
}



let show2 = progression2(number, step);


document.write(`<a class="link" href="index.html">Повернутись  до завдання 1</a> <br>`);
document.write(`<a class="link" href="index3.html">Перейти до завдання 3</a>`);