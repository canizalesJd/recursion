function fibsRec(n, seq = []) {
	if (isNaN(n) || n < 0) return "Invalid input";

	if (seq.length === 0) seq.push(0);
	if (seq.length === 1) seq.push(1);

	if (seq.length <= n) {
		const nextFib = seq[seq.length - 2] + seq[seq.length - 1];
		seq.push(nextFib);
		return fibsRec(n, seq);
	} else {
		return seq;
	}
}
