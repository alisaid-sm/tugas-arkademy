// Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg
// berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

var printTriangle = (num) => {
    if (typeof num == "number") {
        let str = '';
        for (i = num; i >= 1; i--) {
            for (j = 1; j <= i; j++) {
                str += j;
            }
            str += '\n';
        }
        console.log(str);

    } else {
        console.log("Input Harus Number")
    }
}
printTriangle(4);

//Penjelasan
// num = 5
// str = ''

// 1. i = num
// 2. i >= 1 jika iya lanjut
// 3.     j = 1
// 4.     j >= i jika iya lanjut
// 5.         str += j;
// 6.     j++; diulang ke langkah 4 sampai false
// 7. str += '\n';
// 8. i --; diulang ke langkah 2 sampai  false
