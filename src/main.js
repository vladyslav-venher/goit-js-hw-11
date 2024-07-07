
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showError, showInfo } from './js/render-functions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const loadingIndicator = document.getElementById('loading');
const gallery = document.querySelector(".gallery");

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

const searchForm = document.querySelector(".search-form")

searchForm.addEventListener("submit", handlerSubmit);
function handlerSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const queryValue = form.elements.query.value;
    if (!queryValue) {
        showError("Please enter something!");
        return;
    }

    gallery.innerHTML = '';
    loadingIndicator.style.display = 'block';

    fetchImages(queryValue)
        .then(data => {
            if (data.hits.length === 0) {
                showInfo('Sorry, there are no images matching your search query. Please try again!');
            } else {
                renderGallery(data.hits);
                lightbox.refresh();
            }
        })
        .catch(error => {
            console.log(error);
            showError('An error occurred while fetching images. Please try again later.')
        })
        .finally(() => {
            loadingIndicator.style.display = 'none';
            form.reset()
        });
} 