// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), 
// serta dataArray (array). Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah 
// data dalam dataArray harus lebih dari 5.Fungsi tersebut akan mencari data didalam dataArray yang 
// memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke 
// layar/console.

// Contoh: 
// SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])

// Output:
// [8, 14, 17]
// SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])

// Output:
// “Nilai akhir harus lebih besar dari nilai awal”


// SeleksiNilai(5, 17 , [2, 25, 4])

// Output:
// “Jumlah angka dalam dataArray tidak ada”

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray, callback) => {
    if (nilaiAwal > nilaiAkhir) {
        console.log(`Nilai akhir harus lebih besar dari nilai awal`)
    } else if (dataArray.length < 5) {
        console.log(`Jumlah angka harus lebih dari 5`)
    } else {
        // function seleksi(nilai) {
        //     return nilai > nilaiAwal && nilai < nilaiAkhir;
        // }
        let a = dataArray.filter((nilai) => nilai > nilaiAwal && nilai < nilaiAkhir);
        let b = a.sort(function (a, b) { return a - b });
        callback(b)
    }
}

const tampilNilai = (name) => {
    console.log(name)
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8], tampilNilai)




