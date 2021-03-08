// function fibanachi(n) {

// 	let first = 0;
// 	let second = 1;

// 	let result = 0;

// 	document.write(`<p>вихідні параметри :  ${first}  , ${second} ;</p>  `);

// 	for (let i = 0; i < n; i++) {

// 		result = first + second;

// 		document.write(`<p>послідовність Фібоначчі  ${first} + ${second} = ${result};</p> `);

// 		first = second;
// 		second = result;

// 	}
// }

// let show = +prompt(`Введіть  кількіть елементів послідовності Фібаначі`, 5);
// fibanachi(show);


let fib = (n) => {

	let first = 0;
	let second = 1;

	let result = 0;

	document.write(`<p>вихідні параметри :  ${first}  , ${second} ;</p>  `);

	for (let i = 0; i < n; i++) {

		result = first + second;

		document.write(`<p>послідовність Фібоначчі  ${first} + ${second} = ${result};</p> `);

		first = second;
		second = result;

	}

};
let show = +prompt(`Введіть  кількіть елементів послідовності Фібаначі`, 5);
fib(show);


document.write(`<a class="link" href="index2.html">Перейти до завдання 2</a>`);