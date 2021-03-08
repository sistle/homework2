let prime = (n, n2) => {
	nextPrime:
	for (let i = 2; i <= n2; i++) {

		for (let j = 2; j < i; j++) {
			if (i % j == 0) continue nextPrime;
		}
		if (i >= n) {
			document.write(`<p>${i}</p>`);
		}
	}
};

prime(15, 50);