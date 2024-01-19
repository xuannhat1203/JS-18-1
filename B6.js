let array = [];
let a = +prompt("Nhập kích thước của mảng");
for (let i = 0; i < a; i++) {
  let b = +prompt(`Nhập giá trị thứ ${i + 1}`);
  array.push(b);
}
function canhTamGiac(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
function check(arr) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      for (let k = j + 1; k < size; k++) {
        if (canhTamGiac(arr[i], arr[j], arr[k])) {
          console.log(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
}
check(array);