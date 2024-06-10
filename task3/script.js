// დაწერე ასინქრონული ფუნქცია, რომელიც
// არგუმენტად იღებს ობიექტს და აკეთებს
// deep copy-ს
// ● ფუნქციამ უნდა გამოიძახოს reject თუ
// არგუმენტი არ არის ობიექტი. თუ
// ყველაფერი კარგად არის, გამოიძახოს
// resolve კოპირებული ობიექტით

const user = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
    },
    hobbies: ['reading', 'gaming']
}

function users(obj) {
    const {name,age,address:{street,city}, hobbies: [reading,gaming]} = user

    return new Promise((resolve,reject) => {
        if(typeof user === 'object') {
            resolve({name,age,street,city,reading,gaming})
        }else{
            reject('This argument is not object')
        }
    })
}

users(user)
    .then(res => console.log(res))
    .catch(rej => console.log(rej))

   



    





