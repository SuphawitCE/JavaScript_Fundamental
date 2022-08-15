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

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

// getPosts();

createPost({ title: 'Post 3', body: 'this is post 3' }, getPosts);
