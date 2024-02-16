function mergeSort(array) {
	if (array.length <= 1) return array; // Base case:
	const middle = Math.floor(array.length / 2);
	const leftArray = mergeSort(array.slice(0, middle));
	const rightArray = mergeSort(array.slice(middle));
	return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
	let result = [];
	let i = 0;
	let j = 0;
	while (i < leftArray.length && j < rightArray.length) {
		if (leftArray[i] < rightArray[j]) {
			result.push(leftArray[i]);
			i++;
		} else {
			result.push(rightArray[j]);
			j++;
		}
	}
	return result.concat(leftArray.slice(i), rightArray.slice(j));
}
