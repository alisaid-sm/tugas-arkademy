// Buatlah sambungan program menggunakan then catch dan juga
// try catch untuk mengecek hari kerja dari kode Asynchronous 
// dibawah dan jelaskan penggunaan then catch dan try catch 
// dengan memberikan komentar di bawahnya:
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)

    });
}

cekHariKerja('senin')// Memanggil function dengan argumen day, didalam function tersebut terdapat promise
    .then((response) => { // Menangkap method resolve
        console.log(`Hari ${response} merupakan hari kerja`) // menampilkan response
    })
    .catch((response) => { // menangkap method reject
        console.log(response) // menampilkan response
    })

const coba = async () => { // membuat function coba, function diubah menjadi synchronous
    try { // menangkap method resolve
        const response = await cekHariKerja('senin')
        // memanggil promise. await artinya ditunggu proses promisenya sampai selesai
        // setelah itu ditampung di variabel response
        console.log(`Hari ${response} merupakan hari kerjaa`) // menampilkan variabel response
    } catch (error) { // menangkap method reject
        console.log(error) // menampilkan error
    } finally { // menampilkan sesuatu hal apabila hasilnya resolve atau reject
        console.log("Selesai")// menampilkan selesai
    }
}
coba() // memanggil function coba