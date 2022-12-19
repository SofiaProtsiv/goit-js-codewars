const statusKey = document.querySelector('.status-key');
const statusAjax = document.querySelector('.status-ajax');
const autocomplete = document.querySelector('.autocomplete');

function typing() {
  statusKey.textContent = 'Waiting for more keystrokes... ';
}
function make_request() {
  statusKey.textContent = 'Waiting for more keystrokes...';
  statusAjax.textContent = "That's enough waiting. Making now the request";
  console.log('make_request', autocomplete.value);
}

function start_again() {
  statusKey.textContent = 'Type here. I will detect when you stop typing';
  statusAjax.textContent = '';
  autocomplete.value = '';
  console.log('start_again');
}
autocomplete.addEventListener('keydown', typing);
autocomplete.addEventListener('keydown', _.debounce(make_request, 1500));
autocomplete.addEventListener('keyup', _.debounce(start_again, 5000));
