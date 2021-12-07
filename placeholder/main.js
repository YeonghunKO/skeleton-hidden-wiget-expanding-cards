const $cardHeader = document.querySelector('#header');
const $cardTitle = document.querySelector('#title');
const $cardExcerpt = document.querySelector('#excerpt');
const $profileImg = document.querySelector('#profile-anchor');
const $profileName = document.querySelector('#name');
const $profileEmail = document.querySelector('#email');

const $animatedBgs = document.querySelectorAll('.animated-bg');

const CARD_API_END_POINT = 'https://jsonplaceholder.typicode.com/';
const USER_API_END_POINT = 'https://randomuser.me/api/';
const request = async dataType => {
  try {
    const randomPage = Math.floor(Math.random() * 10);
    const data = await fetch(
      dataType === 'user'
        ? USER_API_END_POINT
        : CARD_API_END_POINT + `posts?_limit=1&_page=${randomPage}`
    );
    if (data.ok) {
      return data.json();
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

async function getData() {
  const cardData = await request('card');
  const userData = await request('user');

  const cardDataFormat = cardData[0];
  const userDataFormat = userData['results'][0];

  const extractedCard = {
    title: cardDataFormat['title'],
    body: cardDataFormat['body'],
  };

  const extractedUser = {
    email: userDataFormat['email'],
    name:
      userDataFormat['name']['first'] + ' ' + userDataFormat['name']['last'],
    picture: userDataFormat['picture']['large'],
  };
  return {
    extractedCard,
    extractedUser,
  };
}

async function init() {
  const { extractedCard, extractedUser } = await getData();
  $cardHeader.innerHTML = `<img src="https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="piano">`;
  $cardTitle.innerHTML = extractedCard['title'];
  $cardExcerpt.innerHTML = extractedCard['body'];
  $profileImg.innerHTML = `<img src="${extractedUser['picture']}" alt="profile-picture">`;
  $profileName.innerHTML = extractedUser['name'];
  $profileEmail.innerHTML = extractedUser['email'];
  $animatedBgs.forEach(bg => {
    bg.classList.remove('animated-bg');
    bg.classList.remove('animated-bg-text');
  });
}
init();
