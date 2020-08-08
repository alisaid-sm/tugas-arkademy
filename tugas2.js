// Buat program yang menghitung rata-rata UN beserta gradenya,
//dengan mengisi 4 nilai yakni Bahasa indonesia, Bahasa Inggris Matematika 
//dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai 
//tersebut harus diisi dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E
// Contoh: 
// const mtk = 80
// const bahasaIndonesia = 90
// const bahasaInggris = 89
// const ipa =  69
// …………….
// …………....

// Output: 
// Rata-rata = 82
// Grade = B
// var

//Berhasil Menggunakan Function
// function rataRataUN(ind, ingg, mtk, ipa) {
//     if (ind != '' && ingg != '' && mtk != '' && ipa != '') {
//         const ratarata = (ind + ingg + mtk + ipa) / 4;
//         console.log('Rata-rata = ' + ratarata);
//         if (ratarata >= 0 && ratarata <= 59) {
//             console.log("Grade = E");
//         } else if (ratarata <= 69) {
//             console.log("Grade = D");
//         } else if (ratarata <= 79) {
//             console.log("Grade = C");
//         } else if (ratarata <= 89) {
//             console.log("Grade = B");
//         } else if (ratarata <= 100) {
//             console.log("Grade = A");
//         } else {
//             console.log("Nilai Salah");
//         }
//     } else {
//         console.log("Nilai Harus Diisi");
//     }
// }
// console.log(rataRataUN(200, 100, 100, 100))

// Berhasil tanpa menggunakan function
const ind = 90;
const ingg = 90;
const mtk = 90;
const ipa = 90;

if (ind != '' && ingg != '' && mtk != '' && ipa != '') {
    const ratarata = (ind + ingg + mtk + ipa) / 4;
    console.log('Rata-rata = ' + ratarata);
    if (ratarata >= 0 && ratarata <= 59) {
        console.log("Grade = E");
    } else if (ratarata <= 69) {
        console.log("Grade = D");
    } else if (ratarata <= 79) {
        console.log("Grade = C");
    } else if (ratarata <= 89) {
        console.log("Grade = B");
    } else if (ratarata <= 100) {
        console.log("Grade = A");
    } else {
        console.log("Nilai Salah");
    }
} else {
    console.log("Nilai Harus Diisi");
}




