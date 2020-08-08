// Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg
// berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

// Contoh: 
// const printSegitiga = 5

// Output: 
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// const printSegitiga = “enam”

// Output:
// “Data harus number”
var printTriangle = (num) => {
    let str = '';
    for (i = 1; i <= num; i++) {
        for (j = 1; j <= i; j++) {
            str += j;
        }
        str += '\n';
    }
    console.log(str);
}
printTriangle(7);

//Penjelasan
// num = 5
// str = ''

// 1. i = 1
// 2. i <= num jika iya lanjut
// 3.     j = 1
// 4.     j <= i jika iya lanjut
// 5.         str += j;
// 6.     j++; diulang ke langkah 4 sampai false
// 7. str += '\n';
// 8. i ++; diulang ke langkah 2 sampai  false
