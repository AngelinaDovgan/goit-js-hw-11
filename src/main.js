import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createMarkup from "./js/render-functions";
import getImages from "./js/pixabay-api";

const list = document.querySelector(".gallery");
const input = document.querySelector(".input-img");
const form = document.querySelector(".form");
const btn = document.querySelector(".btn-sub");
const loading = document.querySelector(".loading");

loading.style.display = 'none';

function loadImg(event) {
    event.preventDefault();

    const inputValue = input.value.trim();
    if (!inputValue) {
        return warningNotification();
    }

    loading.style.display = 'inline-block';
    getImages(inputValue)
        .then(data => {
            const images = data.hits;
            if (!images.length) {
                list.innerHTML = '';
                return errorNotification();
            } else {
                list.innerHTML = createMarkup(images);
                const lightbox = new SimpleLightbox('.gallery a.gallery-link', {
                    captionsData: 'alt',
                    captionDelay: 300,
                });
                lightbox.refresh();
            }
    
        })
        .catch(error => console.log(error))
      .finally(() => {
      loading.style.display = 'none';
    });
    input.value = '';
}


form.addEventListener('submit', loadImg);

function errorNotification(){
    iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        title: "Error",
        titleColor: "#fff",
        backgroundColor: "rgba(239, 64, 64, 1)",
        messageColor: "#fff",
        position: "topRight",
    });
}
function warningNotification(){
   iziToast.warning({
       title: 'Увага!',
       position: "topRight",
       backgroundColor: "orange",
       message: 'Поле пошуку не може бути порожнім!',
   });
}