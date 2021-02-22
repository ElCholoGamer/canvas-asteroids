Math.degrees = function (radians) {
	return radians / (Math.PI / 180);
};

Math.radians = function (degrees) {
	return degrees * (Math.PI / 180);
};

Math.mod = function (n1, n2) {
	return ((n1 % n2) + n2) % n2;
};
