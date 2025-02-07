import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const showErrorMessage = message => {
  iziToast.error({
    message,
    position: 'topRight',
    maxWidth: 432,
  });
};
