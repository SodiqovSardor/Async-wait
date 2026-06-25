const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const container = document.getElementById('posts-container');

async function fetchPosts() {
  const response = await fetch(API_URL);
  if (response.ok === false) {
    console.log('Something went wrong with the fetch');
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

function createCard(post) {
  const card = document.createElement('div');
  card.classList.add('card');

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('card-header');

  const idSpan = document.createElement('span');
  idSpan.classList.add('card-id');
  idSpan.textContent = '#' + post.id;

  const userSpan = document.createElement('span');
  userSpan.classList.add('card-user');
  userSpan.textContent = 'User ' + post.userId;

  headerDiv.appendChild(idSpan);
  headerDiv.appendChild(userSpan);

  const title = document.createElement('h2');
  title.classList.add('card-title');
  title.textContent = post.title;

  const body = document.createElement('p');
  body.classList.add('card-body');
  body.textContent = post.body;

  card.appendChild(headerDiv);
  card.appendChild(title);
  card.appendChild(body);

  return card;
}

function showPosts(posts) {
  container.innerHTML = '';

  for (let i = 0; i < posts.length; i++) {
    const onePost = posts[i];
    const card = createCard(onePost);
    container.appendChild(card);
  }
}

function showLoadingMessage() {
  container.innerHTML = '<div class="loading">Loading posts…</div>';
}

function showErrorMessage(message) {
  container.innerHTML = '<div class="error">' + message + '</div>';
}

async function main() {
  showLoadingMessage();

  try {
    const posts = await fetchPosts();
    showPosts(posts);
  } catch (error) {
    console.log('Caught an error:', error);
    showErrorMessage(error.message);
  }
}

main();
