// Buatlah program searching nama yang dapat dibatasi jumlah outputnya
// yang menerapkan  callback function dengan data sebagai berikut:
// const name = [
// ‘Abigail’, ‘Alexandra’, ‘Alison’,
// ‘Amanda’, ‘Angela’, ’Bella’,
// ‘Carol’, ‘Caroline’, ‘Carolyn’,
// ‘Deirdre’, ‘Diana’, ‘Elizabeth’,
// ‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]
// Contoh:
// searchName(“an”, 3, callback)

// Output: 
// [“Alexandra”,”Amanda”,”Angela”]

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
// const filterItems = (query) => {
//     return name.filter((el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
// }

// console.log(filterItems('le')); // ['apple', 'grapes']
// console.log(filterItems('el')); // ['banana', 'mango', 'orange']

const searchName = (inisial, limit, dataArray, callback) => {
    let a = dataArray.filter((nameFilter) => nameFilter.toLowerCase().indexOf(inisial.toLowerCase()) > -1)
    let b = a.slice(0, limit)
    callback(b)
}

const tampilName = (name) => {
    console.log(name)
}

const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'];

searchName('an', 4, name, tampilName)
