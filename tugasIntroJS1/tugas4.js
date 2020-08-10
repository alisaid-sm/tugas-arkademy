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
    name: "Miftakh Ali Said",
    email: "alisaid7171@gmail.com",
    hobby: "Ngoding"
}

const { address } = dataUbah;
const { street, city } = address;

console.log(dataUbah)
console.log(street)
console.log(city)