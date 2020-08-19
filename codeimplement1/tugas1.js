// Buat code dari tugas Computer Science dibawah ini
// 1. deteksi palindrom
// 2. reverse word

// const kata = 'Malam';

// if (typeof (kata) != 'string') {
//     console.log(`kata harus string`)
// } else {
//     const a = kata.toLowerCase()
//     const b = kata.toLowerCase().split("").reverse().join("")
//     if (a.length < 3) {
//         console.log(`huruf tidak boleh kurang dari 3`)
//     } else if (a === b) {
//         console.log(`kata ${kata} adalah Palindrom`)
//     } else {
//         console.log(`kata ${kata} bukan Palindrom`)
//     }
// }
// "Saya belajar Javascript"
const kalimat = "Saya belajar Javascript"

if (typeof (kalimat) != 'string') {
    console.log(`kata harus string`)
} else {
    const a = kalimat.split(" ")
    const b = kalimat.split(" ").reverse().join(" ")
    if (a.length < 2) {
        console.log(`kata tidak boleh kurang dari 2`)
    } else {
        console.log(b)
    }
}

