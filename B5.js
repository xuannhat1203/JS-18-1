let string = prompt("Nhập vào một chuỗi ký tự");
let result = "";
for (let i = 0; i < string.length; i++) {
  if (i !== string.length - 1 && string[i + 1] === " ") {
    result += string[i].toUpperCase();
  } else if (i === string.length - 1) {
    result += string[i].toUpperCase();
  } else {
    result += string[i];
  }
}
console.log(result);