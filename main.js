fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((posts) => {
    const postsArr = posts.slice(0, 5);
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
  });
