function makeid(l) {
  // write your code here
	let str = '';

for(let i = 0; i < l; i++){
   str += Math.floor(Math.random()*100).toString(16).padStart('f',1); 
}
	let arr = str.split('');
	return arr.splice(0,l).join('');
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
