// Buat program menggunakan callback function untuk 
// melanjutkan dan menampilkan semua bulan menggunakan 
// method map

const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['Januari', 'February', 'March', 'April', 'May',
            'Juni', 'July', 'August', 'September', 'October', 'November',
            'Desember'];
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

const coba = (a, b) => {
    if (b) {
        b.map(tam => console.log(tam))
    } else {
        console.log(a)
    }
}
getmonth(coba)