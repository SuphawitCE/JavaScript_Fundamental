const posts = [
  { title: 'Post 1', body: 'this is post one' },
  { title: 'Post 2', body: 'this is second post' }
];

const getPosts = () => {
  setTimeout(() => {
    let output = '';
    posts.map((post, index) => {
      //  can use forEach instead of map
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: something went wong');
      }
    }, 2000);
  });
};

// async function init() {

// async function init() {
//     await createPost({ title: 'Post 3', body: 'this is post 3'});
//     getPosts();
// }
// init();

//  Async / Await / Fetch

async function fetchUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json(); //  Store data
  console.log(data);
}

fetchUsers();
