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

// createPost({ title: 'Post 3', body: 'this is post3'}).then(getPosts)
// .catch(err =>   console.log(err));

//  Promises.all
const promise1 = Promise.resolve('HelloWorld');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye');
});

const promise4 = fetch(`https://jsonplaceholder.typicode.com/users`).then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((value) => {
  console.log(value);
});
