// script.js
document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts");

    // Fetch posts from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            displayPosts(data);
        })
        .catch((error) => console.error("Error fetching posts:", error));

    // Display posts as cards
    function displayPosts(posts) {
        posts.slice(0, 12).forEach((post) => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;

            postsContainer.appendChild(card);
        });
    }
});
