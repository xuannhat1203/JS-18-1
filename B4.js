let array = [];
let a = +prompt("Nhap do dai cua mang");
for (let i = 0; i < a; i++) {
  let b = prompt(`Nhap ki tu thu ${i + 1}`);
  array.push(b);
}
for (let i = 0; i < a; i++) {
  let check = true;
  for (let j = 2; j < array[i]; j++) {
    if (array[i] % j == 0) {
      check = false;
      break;
    }
  }
  if (check) {
    console.log(array[i]);
  }
}