let string = prompt("Nhập chuỗi mà bạn muốn:");
let array = [];
for (let i = 0; i < string.length; i++) {
  array.push(string[i]);
}
for (let i = 0; i < array.length; i++) {
  if ((array[i] >= 'A' && array[i] <= 'Z') || (array[i] >= 'a' && array[i] <= 'z')) {
    if (i === 0 || i === Math.floor(array.length / 2)) {
      console.log(array[i]);
    }
  } else {
    console.log(array[i]);
  }
}