import { refs } from './refs-elements';
import { scroll } from './scroll-page';
import { instanceSimpleLightBox } from './create-instance-SimpleLightbox';
import { onIntersectionObserver } from './listeners/onIntersectionObserver';
import { instanceApiService } from './api-service';

export function renderPhotos (hits, event) {

  const template = hits.map( ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
  `
  <div class="photo-card">
    <div class="photo">
      <a href="${largeImageURL}" alt="${tags}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
    </div>
    <div class="info">
      <div>
        <p class="info-item"><b>Likes</b></p>
        <p>${likes}</p>
      </div>
      <div>
        <p class="info-item"><b>Views</b></p>
        <p>${views}</p>
      </div>
      <div>
        <p class="info-item"><b>Comments</b></p>
        <p>${comments}</p>
      </div>
      <div>
        <p class="info-item"><b>Downloads</b></p>
        <p>${downloads}</p>
      </div>
    </div>
  </div>
  `
  ).join('');
  refs.gallery.insertAdjacentHTML('beforeend', template);

  instanceSimpleLightBox.refresh();
  
  onIntersectionObserver();

  if(instanceApiService.numberPage > 2) {
    scroll();
  }
};

