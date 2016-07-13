function destroyer(arr) {

 var args = [];
  for(var j = 1; j<arguments.length; j++){
      args.push(arguments[j]);
 
    for(var i = 0; i<arr.length; i++){

        if(args.indexOf(arr[i]) > -1){
            arr.splice(i, i+1);
           }
       }
   }
  return arr;
  }
 destroyer([1,2, 3,1, 2, 3], 2, 3);
