function signUp(event) {
  // remove page reload option

  // get username, email and password value

  // get formData from local storage or pass empty array
  const formData = some_code;

  // check existing form data in LS,
  //if formData is empty and there are some coincidence
  //variable "exist" should return false

  const exist = some_code;
  formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(
      data =>
        data.email === email && data.password === password && data.name === name
    );

  if (exist) {
    alert('Ooopppssss... Duplicate found!!!\nYou have already sigjned up');
  } else {
    // push data to formdata variable and then set it to local storage
    // reset form agter submit
    // add this string if you what move to sign in page after successfull registration
    // example
    // location.href =
    //   'http://127.0.0.1:5500/08-module-lesson-02/login/signin.html';
    // OR add this string if you what have message after successfull registration
    // alert('Account Created.\n\nPlease Sign In using the link below.');
  }
}

function signIn(event) {
  // remove page reload option

  // get email and password value

  // get formData from local storage or pass empty array
  const formData = some_code;

  // check existing form data in LS,
  //if formData is empty and there are some coincidence
  //variable "exist" should return false

  const exist = some_code;

  if (exist) {
    // example
    // location.href =
    //   'http://127.0.0.1:5500/08-module-lesson-02/login/index.html';
  } else {
    alert('Incorrect login credentials');
  }
}

// get refs
const signup = document.querySelector('#signUp');
const signin = document.querySelector('#signIn');

// add event listener
signup && signup.addEventListener('submit', signUp);
signin && signin.addEventListener('submit', signIn);
