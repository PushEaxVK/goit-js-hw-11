'use strict';

import { searchImages } from './js/pixabay-api.js';

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.form-input'),
  button: document.querySelector('.form-button'),
};

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const value = event.currentTarget.elements.search.value;
  searchImages(value).then(data => {
    if (data.length === 0) {
      console.log(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      console.log(data);
    }
  });
}
