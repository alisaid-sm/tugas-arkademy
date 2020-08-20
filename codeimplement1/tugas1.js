// Buat code dari tugas Computer Science dibawah ini
// 1. deteksi palindrom
// 2. reverse word

// const kata = 7;

// if (typeof (kata) != 'string') {
//     console.log(`kata harus string`)
// } else {
//     const a = kata.toLowerCase()
//     const b = kata.toLowerCase().split("").reverse().join("")
//     if (a.length < 2) {
//         console.log(`huruf tidak boleh kurang dari 2`)
//     } else if (a === b) {
//         console.log(`kata ${kata} adalah Palindrom`)
//     } else {
//         console.log(`kata ${kata} bukan Palindrom`)
//     }
// }

const kalimat = 9

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

