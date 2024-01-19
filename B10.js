function check(n){
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else if(n==2){
        return 2;

    }
    return check(n-1) + check(n-2);
}
let n = +prompt("Nhap so bac thang");
console.log(check(n));