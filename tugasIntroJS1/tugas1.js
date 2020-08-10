// Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data  sebagai berikut:
// name (string)
// age(number)
// hobbies (array)
// IsMaried (boolean)
// schoolList (Array of Object) with key name, yearIn, yearOut, and major (if any, if no set “null” )
// skills (Array of Obj) with key skillName and level (beginner, advanced, expert)
// interestInCoding (Boolean)
// Contoh: 
// const biodata = {	name: “arkademy”,
// 	age: …
// .... : ...  
// }
const biodata = {
    name: 'Miftakh Ali Said',
    age: 17,
    hobbies: ['ngoding', 'nonton film', 'main game'],
    isMaried: false,
    schoolList: [
        {
            name: "TK Pertiwi 27",
            yearIn: 2006,
            yearOut: 2008,
            major: null
        },
        {
            name: "SDN Ngablak",
            yearIn: 2008,
            yearOut: 2014,
            major: null
        },
        {
            name: "SMPN 1 Pleret",
            yearIn: 2014,
            yearOut: 2017,
            major: null
        },
        {
            name: "SMKN 3 Yogyakarta",
            yearIn: 2017,
            yearOut: 2020,
            major: "Teknik Komputer Jaringan"
        }
    ],
    skills: [
        {
            skillName: 'Microsoft Office',
            level: 'expert'
        },
        {
            skillName: 'intallasi jaringan',
            level: 'advanced'
        },
        {
            skillName: 'Web Programing',
            level: 'beginner'
        }
    ],
    interestInCoding: true
}
console.log(biodata)