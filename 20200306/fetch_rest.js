const URL = "https://jsonplaceholder.typicode.com/";

const urlPosts = `${URL}posts`;
const urlUsers = `${URL}users`;

const fixUser = user => ({


})


fetch(urlUsers)
    .then(d => d.json())
    .then(data => {
        console.log(data)
    })


const posts = fetch(urlPosts)
    .then(d => d.json())
    .then(data => {

        console.log(data);

        return data;

    })

    console.log(posts);