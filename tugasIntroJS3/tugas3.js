// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1
// 1. Cek Kehadiran Siswa
// Program cek kehadiran siswa ini dilakukan dengan melihat absen siswanya. 
// jadi user mengetikkan absen siswanya setelah itu user akan mendapatkan info
// tentang siswa dengan absen tersebut hadir atau tidaknya
// const cekSiswa = (absen) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dataSiswa = [
//                 {
//                     siswa: 'Miftakh Ali Said',
//                     kehadiran: 'Hadir'
//                 },
//                 {
//                     siswa: 'Drajat Fikri',
//                     kehadiran: 'Izin'
//                 },
//                 {
//                     siswa: 'Adam Maulana',
//                     kehadiran: 'Tidak Hadir'
//                 }
//             ];
//             const cksiswa = dataSiswa[absen - 1]
//             if (typeof (absen) !== 'number') {
//                 reject(new Error('Input harus number'))
//             } else if (cksiswa == undefined) {
//                 resolve(`Belum ada siswa dengan absen ${absen}`)
//             } else {
//                 const dsiswa = dataSiswa[absen - 1].siswa
//                 const dhadir = dataSiswa[absen - 1].kehadiran
//                 if (dhadir == 'Tidak Hadir') {
//                     resolve(`Siswa absen ${absen} dengan nama ${dsiswa} tidak hadir `)
//                 } else if (dhadir == 'Izin') {
//                     resolve(`Siswa absen ${absen} dengan nama ${dsiswa} izin tidak mengikuti pelajaran`)
//                 } else {
//                     resolve(`Siswa absen ${absen} dengan nama ${dsiswa} hadir`)
//                 }
//             }
//         }, 3000)

//     })
// }
// cekSiswa(3)
//     .then((response) => console.log(response))
//     .catch((response) => console.log(response))
// 2. mengecek kedisiplinan siswa selama sebulan
// Program ini melanjutkan dari program 1 yang mengecek kedisiplinan siswa
// jadi user ceritanya sudah memiliki data kehadiran. kemudian data tersebut tinggal dimasukkan
// dan user akan mengetahui tingkat kedisiplinan siswa tersebut

const siswa = (name, hadir, tdkhadir, izin) => {
    return new Promise((resolve, reject) => {
        const nameSiswa = ['Miftakh Ali Said', 'Drajat Fikri', 'Adam Maulana']
        const cek = nameSiswa.some((a) => a === name)
        if (typeof (name) !== 'string' || cek !== true) {
            reject(`Siswa dengan nama ${name} tidak ada`)
        } else if (typeof (hadir) !== 'number' || typeof (tdkhadir) !== 'number' || typeof (izin) !== 'number') {
            reject('Pengisian kehadiran harus number')
        } else if (hadir + tdkhadir + izin < 28 || hadir + tdkhadir + izin > 31) {
            resolve(`angka yang dimasukkan kurang dari sebulan atau melebihi sebulan`)
        } else if (hadir <= 31 && hadir >= 25) {
            resolve(`Siswa dengan nama ${name} disiplin`)
        } else if (hadir > tdkhadir && hadir > izin) {
            resolve(`Siswa dengan nama ${name} kurang disiplin`)
        } else if (tdkhadir > hadir) {
            resolve(`Siswa dengan nama ${name} tidak disiplin`)
        } else {
            resolve(`Siswa dengan nama ${name} terlalu banyak izin dan tidak disiplin`)
        }
    })

}

const tampil = async (name, hadir, tdkhadir, izin) => {
    try {
        const response = await siswa(name, hadir, tdkhadir, izin)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    // finally {
    //     console.log('Proses Selesai')
    // }
}
tampil('Miftakh Ali Said', '1', 1, 1)





