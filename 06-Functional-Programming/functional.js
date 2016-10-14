function doubler(num){
	return num*2;
}

function map(array, itr){
	var array2 = []
	for(var i=0;i<array.length;i++){
		array2.push(itr(array[i]))
	}
	return array2;
}

function filter(array,itr){
var array2 = []
for(var i=0;i<array.length;i++){
		if(itr(array[i])){
		array2.push(array[i])}
	}
	return array2;
}

function contains(coll, val){
	for(var key in coll){
		if(coll[key] == val){
			return true
		}
	}
	return false
}

function countWords(str){
	str = str.split(' ')
	return str.length;
}

var add = function(a, b) {
      return a + b;
    };

function reduce(array,acc,itr){
	var total = acc
	for(var i=0;i<array.length;i++){
			total = itr(total,array[i]);
	}
	return total
}

function sum(array){
	return reduce(array,0,add)
}

function every(array, itr){
	return reduce(array,true,function(x,i){
		if(x == true){
			return itr(i)
		}
		else if(x == false){
			return false
		}
	})
}


function any(array,itr){
	return reduce(array,false,function(x,i){
		if(x == false){
			return itr(i)
		}
		else if(x == true){
			return true
		}
	})
}

function countWordsInReduce(total,str){
arr = str.split(" ")
console.log(arr)
total += arr.length
return total

}