import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search';
axios.defaults.headers.Authorization =
  'Client-ID LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

export class UnsplashAPI {
  #page;
  #query;

  // #searchParams = new URLSearchParams({
  //   per_page: 30,
  //   color: 'black',
  //   orientation: 'portrait',
  // });

  constructor() {
    this.#page = 1;
    this.#query = '';
  }

  async getImages() {
    // const { data } = await axios.get(
    //   `?page=${this.#page}&query=${this.#query}&${this.#searchParams}`
    // );

    const { data } = await axios.get('/photos', {
      params: {
        page: this.#page,
        query: this.#query,
        per_page: 30,
        color: 'black',
        orientation: 'portrait',
      },
    });

    return data;

    // const response = await fetch(
    //   `${this.#BASE_URL}?page=${this.#page}&query=${this.#query}&${
    //     this.#searchParams
    //   }`
    // );
    // return await response.json();
  }

  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }

  updadePage() {
    this.#page += 1;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
