function fibonacci(num) {
	if(num<2){
		return num-1;
	}
return fibonacci(num-1)+fibonacci(num-2);
}

module.exports = fibonacci;
