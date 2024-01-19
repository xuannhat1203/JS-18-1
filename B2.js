function check(n) {
    let array = [];
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
      array.push(i);
      if(i%2!=0){
        array.push(i);
      }
    }
    for(let i=0;i<array.length;i++){
        sum+=i;
    }
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
        if(sum%2===0){
            array.pop();
        }
    }
}
let n = +prompt("Nhập số nguyên dương n:");
check(n);