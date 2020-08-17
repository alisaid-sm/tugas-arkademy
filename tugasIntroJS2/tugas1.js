//Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya


// 1. replace()
// adalah Method yang digunakan untuk mengganti string dengan kata yang diinginkan
// Contoh penerapan :
// var str = "Halo Semua!";
// var rep = str.replace("Semua", "Miftakh Ali Said");
// //replace(menentukan kata yang ingin diganti,kata pengganti)
// console.log(str)
// console.log(rep)
// 2. toUpperCase() dan toLowerCase()
// adalah method yang digunakan untuk mengubah string hurufnya menjadi kapital semua (toUpperCase()) 
// dan kecil semua (toLowerCase())
// contoh penerapan :
// var str = "Halo Semua!";
// var kap = str.toUpperCase();
// var low = str.toLowerCase();
// console.log(str)
// console.log(kap)
// console.log(low)
// 3. concat()
// adalah method yang digunakan untuk menggabungkan 2 atau lebih array
// var array1 = ["Nama", "Miftakh"];
// var array2 = ["Ali", "Said"];
// var array3 = ["Asal", "Bantul"];
// var gabung = array1.concat(array2, array3);
// console.log(array1)
// console.log(array2)
// console.log(array3)
// console.log(gabung)
// 4. max() dan min()
// adalah method math yang digunakan untuk mengembalikan nilai tertinggi (untuk max) dan terendah (untuk min)
// var a = Math.max(1, 2, 3, 4, 5, 6);
// var b = Math.min(1, 2, 3, 4, 5, 6);
// console.log(a)
// console.log(b)
// 5. pow()
// adalah method math yang digunakan untuk pemangkatan
// var pangkat = Math.pow(10, 2); // (angka, pangkat)
// console.log(pangkat)
// 6. slice()
// adalah method untuk mengatur array mau di tampilkan dari index berapa dan dibatasi sampai berapa
// var buah = ["Pisang", "Jeruk", "Apel", "Mangga", "Belimbing", "Duwet"];
// console.log(buah.slice(0, 2))
// 7. reverse()
// adalah method untuk membalik urutan array 
// var buah = ["Pisang", "Jeruk", "Apel", "Mangga", "Belimbing", "Duwet"];
// console.log(buah.reverse())
// 8. push()
// adalah method array yang digunakan untuk menambahkan data di akhir array
// var buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
// buah.push("Rambutan");
// console.log(buah)
// 9. sort()
// adalah method array untuk mengurutkan data sesuai abjad
// var buah = ["Pisang", "Jeruk", "Apel", "Mangga", "Belimbing", "Duwet"];
// buah.sort();
// console.log(buah)
// 10. filter()
// adalah method untuk menyeleksi data array dengan fungsi yang bisa ditentukan
// var umur = [32, 33, 16, 40];

// function seleksiumur(batasanUmur) {
//     return batasanUmur >= 18;
// }
// var a = umur.filter(seleksiumur);
// console.log(a)
