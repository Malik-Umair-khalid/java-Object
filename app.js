// // Question One

// var itemsArray = [
//     { name: "juice", price: 50, quantity: 3 },
//     { name: "cookie", price: 30, quantity: 9 },
//     { name: "shirt", price: 880, quantity: 1 },
//     { name: "pen", price: 100, quantity: 2 }
// ];
// console.log(itemsArray.price)
// for (let i = 0; i < itemsArray.length; i++) {
//     var price = itemsArray[i].price
//     var quantity = itemsArray[i].quantity
//     itemsArray[i].totalAmmount = price * quantity
//     console.log(itemsArray)
// }

// // Question Two

// var details = {
//     firstName: "Umair",
//     LastName: "khalid",
//     email: 'fighteromega@gmail.com',
//     passward: 'asdfas',
//     age: 19,
//     gender: 'Male',
//     city: 'karachi',
//     country: 'pakistan'
// }
// console.log(details.firstName)
// console.log(details.LastName)
// console.log(details.country)
// console.log(details.age)



// // Question Three


// function Student(name, classa, section, id) {
//     this.name = name;
//     this.class = classa;
//     this.section = section;
//     this.id = id
// }
// var studentsDetails = [
//     new Student("umair", 12, "A", 3123),
//     new Student("Adil", 12, "A", 23123),
//     new Student("baba", 12, "A", 23123),
//     new Student("Kaka", 12, "A", 23123),
//     new Student("Nana", 12, "A", 23123),
// ]
// console.log(studentsDetails)




// //  Question Four 


// function submit() {
//     // Getting Values
//     var naMe = document.getElementById("name")
//     naMe = naMe.value
//     var address = document.getElementById("address")
//     address = address.value
//     var education = document.getElementById("Edu")
//     education = education.value

//     var gender = document.getElementsByName("gender")
//     for (let i = 0; i < gender.length; i++) {
//         if (gender[i].checked) {
//             var gender = (gender[i].value)
//         }
//     }

//     // Setting Values In Object

//     function Details(naMe, gender, education, address) {
//         this.name = naMe;
//         this.gender = gender;
//         this.education = education;
//         this.address = address
//     }
//     var studentsDetails = [
//         new Details(naMe, gender, education, address)
//     ]
//     console.log(studentsDetails)

//     //  Reseting Form

//     var naMe = document.getElementById("name")
//     var address = document.getElementById("address")
//     var education = document.getElementById("Edu")
//     naMe.value = ""
//     address.value = ""
//     education.value = ""
//     gender.value = ""

// }



