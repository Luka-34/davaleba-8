// fetch ფუნქციის გამოყენებით წამოიღე
// მონაცემები მოცემული მისამართიდან და
// გამოიტანე DOM-ში პოსტის სახით

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        const ul = document.querySelector('ul')
        data.forEach(post => {
            const userIdItem = document.createElement('li')
            userIdItem.textContent = post.userId
            ul.appendChild(userIdItem);
            userIdItem.style.fontSize = '15px'
        })

        const ul2 = document.querySelector('.box2');
        data.forEach(post => {
            const idItem = document.createElement('li');
            idItem.textContent = post.id
            ul2.appendChild(idItem)
            idItem.style.fontSize = '15px'
        })

        const ul3 = document.querySelector('.box3')
        data.forEach(post => {
            const titleItem = document.createElement('li')
            titleItem.textContent = post.title
            ul3.appendChild(titleItem)
            titleItem.style.fontSize = '15px'
        })

        const ul4 = document.querySelector('.box4')
        data.forEach(post => {
            const bodyItem = document.createElement('li')
            bodyItem.textContent = post.body
            ul4.appendChild(bodyItem)
            bodyItem.style.fontSize = '15px'
        })
    })
    .catch(error => console.log(error))



