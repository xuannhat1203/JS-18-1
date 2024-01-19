function dequy(n) {
    if(n==1 || n==2){
        return 1;
    }
    return dequy(n-1)+dequy(n-2);
}
let n = +prompt("Nhap so fibo");
console.log(dequy(n));