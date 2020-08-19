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


const divideAndSort = (integer) => {

    const b = integer.toString().split("0")
    if (b.length <= 3) {
        const [satu, dua, tiga] = b
        const sortsatu = satu.split("").sort()
        const sortdua = dua.split("").sort()
        const sorttiga = tiga.split("").sort()
        const gabung = sortsatu.concat(sortdua, sorttiga).join("")
        const number = Number(gabung)
        // console.log(integer)
        // console.log(b)
        // console.log(satu)
        // console.log(dua)
        // console.log(tiga)
        // console.log(sortsatu)
        // console.log(sortdua)
        // console.log(sorttiga)
        // console.log(gabung)
        console.log(number)
    } else {
        console.log('nol harus kurang dari 2')
    }

}
divideAndSort(5956560159466056)