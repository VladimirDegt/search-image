import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const instanceSimpleLightBox = new SimpleLightbox('.gallery .photo-card .photo a', {
        close: false, 
        showCounter: false,
        captionsData: 'alt',
        captionDelay: 250,
        captionClass: 'text__label',
      });

