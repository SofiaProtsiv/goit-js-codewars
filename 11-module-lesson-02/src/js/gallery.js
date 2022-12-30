import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createGalleryCards } from '../templates/createGalleryCards';

import { UnsplashAPI } from './service/unsplash-api';

import { getRefs } from './getGalleryRefs';
const refs = getRefs();

const unsplashApi = new UnsplashAPI();

const handleSubmit = async event => {
  event.preventDefault();

  const { query } = event.currentTarget.elements;
  searchValue = query.value.trim();

  if (!searchValue) {
    Notify.failure('enter text!');
    return;
  }

  unsplashApi.page = 1;
  refs.list.innerHTML = '';
  refs.loadMoreBtn.classList.add('is-hidden');

  unsplashApi.query = searchValue;

  try {
    const { total_pages: totalPages, results: images } =
      await unsplashApi.getImages();

    if (images.length === 0) {
      Notify.failure(`Images by ${searchValue} not found!`);
      query.value = '';
      return;
    }

    const markup = createGalleryCards(images);
    refs.list.insertAdjacentHTML('beforeend', markup);

    if (unsplashApi.page === 1 && totalPages !== 1) {
      refs.loadMoreBtn.classList.remove('is-hidden');
    }
  } catch (error) {
    Notify.failure(`Error!!! ${error.message}`);
  }
};

const handleClickLoadMore = async () => {
  unsplashApi.updadePage();

  try {
    const { total_pages: totalPages, results: images } =
      await unsplashApi.getImages();
    if (unsplashApi.page >= totalPages) {
      refs.loadMoreBtn.classList.add('is-hidden');
      Notify.info('The end this collection!');
    }

    const markup = createGalleryCards(images);
    refs.list.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    Notify.failure(`Error!!! ${error.message}`);
  }
};
refs.loadMoreBtn.addEventListener('click', handleClickLoadMore);
refs.form.addEventListener('submit', handleSubmit);
