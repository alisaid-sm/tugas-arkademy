// Dari data dibawah ini
// let data = {
// id: 1,
// name: "Leanne Graham",
// username: "Bret",
// email: "Sincere@april.biz",
// address: 
// {
// street: "Kulas Light",
// suite: "Apt. 556",
// city: "Gwenborough",
// zipcode: "92998-3874",
// },
// phone: "1-770-736-8031 x56442",
// website: "hildegard.org",
// }
// Ubahlah data  tersebut menggunakan spread operator menjadi: 
// name: nama anda
// email: email anda
// hobby: hobi anda

// Ambilah data “street dan city” tersebut menggunakan destructuring
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let dataUbah = {
    ...data,
    id: 1,
    name: "Miftakh Ali Said",
    username: "alisaid",
    email: "alisaid7171@gmail.com",
    address:
    {
        street: "Jl. Combongan, jambidan, banguntapan",
        suite: "",
        city: "Bantul",
        zipcode: "55195",
    },
    phone: "083830764460",
    website: "alisaid.org",
    hobby: "Ngoding"
}

const { address } = dataUbah;
const { street, city } = address;

console.log(street)
console.log(city)