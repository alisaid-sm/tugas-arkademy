// Buatlah Algoritma, Flowchart dan Code untuk soal dibawah ini:

// Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) 
// dalam variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. 
// Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. 
// Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa pemisah dengan 
// output berupa bilangan integer. Buatlah method/function yang menerima parameter hanya deret 
// angka dan menghasilkan output seperti keterangan di atas.
// contoh input:
// divideAndSort(5956560159466056)
// contoh output:
// 55566914566956

// Algoritma
// 1. Mulai
// 2. Input data integer
// 3. Validasi apakah data yang dimasukkan berupa number
//    jika iya lanjut, jika tidak selesai
// 4. data integer diubah menjadi string dengan tostring
//    dan di pisah berdasarkan angka nol dengan split
// 5. setelah itu di map, yang didalam map data di split
//    lagi perhuruf, lalu di sort, lalu dijoin
// 6. lalu data tersebut di join lagi
// 7. kamudian data diubah ke number dengan parseint
// 8. output number
// 9. selesai


const divideAndSort = (integer) => {


    if (typeof integer == 'number') {
        const a = integer.toString().split("0")
        const b = a.map(e => {
            const c = e.split('').sort().join('')
            return c
        })

        const d = b.join('')
        const number = parseInt(d)
        console.log(number)
    } else {
        console.log('data harus number')
    }

}
divideAndSort(5956560159466056)

// let integer = 5956560159466056

// const coba = integer.toString().split("0")
// const map = coba.map(e => e.split("").sort().join(''))
// const ki = Number(map.join(''))

// console.log(map)