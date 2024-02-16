function mergeSort(array) {
	if (array.length <= 1) return array;
	const middle = Math.floor(array.length / 2);
	const leftArray = array.slice(0, middle);
	const rightArray = array.slice(middle);
	const sortedLeft = mergeSort(leftArray);
	const sortedRight = mergeSort(rightArray);
	return merge(sortedLeft, sortedRight);
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
