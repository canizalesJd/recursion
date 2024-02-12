function fibs(n) {
	if (isNaN(n) || n < 0) return "Invalid input";
	let seq = [];
	for (let i = 0; i <= n; i++) {
		if (i <= 1) {
			seq.push(i);
		} else {
			seq.push(seq[i - 2] + seq[i - 1]);
		}
	}
	return seq;
}
