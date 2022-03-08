function average(...calculator) {
    console.log(arguments);
    var sum=0;
    let arr=[];
    for (var i=0; i<arguments.length; i++) {
        sum+=arguments[i];
    }
    let Average=sum/calculator.length;
    let max=Math.max(...calculator);
    arr[0]=Average;
    arr[1]=max;
    console.log(max);
    return arr;
    
}

console.log(average(5,8,9,7));
