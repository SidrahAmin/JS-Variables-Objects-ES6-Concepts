function SandWichCalculator(bread,cheese){
    var count=0;
    while(cheese>0 && bread>1){
        count++;
        cheese=cheese-1;
        bread=bread-2;
    }
    return count;
}
let bread=20;
let cheese=6;
var sandwiches=SandWichCalculator (bread,cheese);
console.log(sandwiches);
