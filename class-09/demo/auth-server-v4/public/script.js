const URL = 'https://github.com/login/oauth/authorize';
const options = {
  client_id: 'beda0710a46a6ecfba97',
  scope: 'read:user',
  state: '401 app consent',
};

const queryString = Object.keys(options)
  .map((key) => {
    return `${key}=${encodeURIComponent(options[key])}`;
  })
  .join('&');

console.log('QUERY', queryString);

const authURL = `${URL}?${queryString}`;
const aEl = document.getElementById('oauth');
aEl.setAttribute('href', authURL);
