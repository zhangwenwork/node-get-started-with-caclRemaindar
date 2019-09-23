// Write your cade below:
function caclRemaindar(divisor,dividend) {
	return divisor%dividend;
};

function caclSum(array) {
	let caclSum = 0;
	for (var i = 0; i < array.length; i++) {
		caclSum = caclSum + array[i];
	}
	return caclSum;
};

function caclSumInConditon(array, indicatedNum) {
	let caclSum = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] < indicatedNum) {
			caclSum = caclSum + array[i];
		}
		
	}
	return caclSum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}