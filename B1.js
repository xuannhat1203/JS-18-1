function check(array) {
    let length = array.length;
    for (let i = 0; i < length / 2; i++) {
      if (array[i] !== array[length - 1 - i]) {
        return false;
      }
    }
    return true;
}
let array = [];
let a = +prompt("Nhap kich thuoc cua mang"); 
for (let i = 0; i < a; i++) {
    let b = prompt(`Nhap phan tu thu ${i + 1}`);
    array.push(b);
}  
if(check(array)) {
    console.log("Mang doi xung");
}else{
    console.log("Mang khong doi xung");
}
