function fib(n){
   if (n < 2){
     return 1;
   }else{
     return fib(n-2) + fib(n-1);
   }
}




function factorialIterative(n){
	f = 1
	for(var i=1;i<=n;i++){
		f *= i
	}
	return f;
}

function factorial(n){
	if(n == 0){
		return 1
	}
	return n*factorial(n-1);
}


function type(x){
	var y = Object.prototype.toString.call(x);
	y = y.split(" ")
	y = y[1]
	y = y.substr(0,y.length-1)
	return y
}


function stringify(x){
  var str = ''
  if(type(x)!="Object" & type(x)!='Array' & type(x)!='String'){
    str += x
  }
  else if(type(x) == 'String'){
    str += '"'+x+'"'
  }
  else if(type(x) == 'Array'){
    var arr = [];  
    for(var i=0;i<x.length;i++){
      arr.push(stringify(x[i]));
    }
    str = "["+arr.join(",")+"]";

 
  } else if(type(x) == 'Object'){   
    var arr =[];
    for(var key in x){
    var temp = '"'+key + '": ' + stringify(x[key]);
    arr.push(temp);
  }
    str = "{"+ arr.join(",")+"}";
  }
  return str;
}
