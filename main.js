const url = "https://apis.scrimba.com/jsonplaceholder/posts";
const postsArr = [];
const form = document.querySelector("#new-post-form");

// Fetch posts
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    postsArr.push(...data.slice(0, 5));
    renderPosts();
  });

// Create new post
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const postTitle = document.querySelector("#title").value;
  const postBody = document.querySelector("#body").value;

  if (postTitle && postBody) {
    const newPost = {
      title: postTitle.trim(),
      body: postBody.trim()
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => response.json())
      .then((post) => {
        postsArr.unshift(post);
        renderPosts();
        form.reset();
      });
  }
});

// Render all the posts
function renderPosts() {
  let html = "";

  for (const post of postsArr) {
    html += `
    <article class="post" >
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </article>
    `;
  }

  document.querySelector("#posts").innerHTML = html;
}
