function even() {
  let array = [];
  for(let i = 0; i < 50; i++) {
    if(i % 2){
    	array.push(i * 2);  
    }
  }
  
return array;
}

console.log(even());
