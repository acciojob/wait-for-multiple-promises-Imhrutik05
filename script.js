let time = Math.floor((Math.random() * 3000) + 1);

const createPromise = () => {
	let delay = Math.random() * 2 + 1;
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(delay.toFixed(3));
		}, delay * 1000);
	});
}

let p1 = createPromise();
let p2 = createPromise();
let p3 = createPromise();

Promise.all([p1, p2, p3])
	.then(([r1, r2, r3]) => {
		const maxTime = Math.max(r1, r2, r2);
		const tbody = document.getElementById('output');

		tbody.innerHTML = `
			<tr>
				<td>Promise 1</td>
				<td>${r1}</td>
			</tr>
			<tr>
				<td>Promise 2</td>
				<td>${r2}</td>
			</tr>
			<tr>
				<td>Promise 3</td>
				<td>${r3}</td>
			</tr>
			<tr>
				<td>Total</td>
				<td>${maxTime}</td>
			</tr>
		`;
	}).catch(error => {
		let tbody = document.getElementById('output');
		tbody.innerHTML = `
			<tr>
				<td colspan='2'>`Error: ${error.message}`</td>
			</tr>
		`;
	})
														 