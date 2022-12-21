const signUp = e => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const formData = JSON.parse(localStorage.getItem('formData')) || [];

  const exist =
    formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(
      data =>
        data.email === email && data.password === password && data.name === name
    );

  if (!exist) {
    formData.push({ name, email, password });
    localStorage.setItem('formData', JSON.stringify(formData));

    document.querySelector('form').reset();
    document.getElementById('name').focus();

    location.href =
      'http://127.0.0.1:5500/08-module-lesson-02/login/signin.html';
    // alert('Account Created.\n\nPlease Sign In using the link below.');
  } else {
    alert('Ooopppssss... Duplicate found!!!\nYou have already sigjned up');
  }
};

function signIn(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const formData = JSON.parse(localStorage.getItem('formData')) || [];

  const exist =
    formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(
      data => data.email == email && data.password == password
    );

  if (!exist) {
    alert('Incorrect login credentials');
  } else {
    location.href =
      'http://127.0.0.1:5500/08-module-lesson-02/login/index.html';
  }
}

const signup = document.querySelector('#signUp');
const signin = document.querySelector('#signIn');

signup && signup.addEventListener('submit', signUp);
signin && signin.addEventListener('submit', signIn);
