import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { renderPhotos } from "../render-photos";
import { instanceApiService } from "../api-service";

export function onIntersectionObserver() {
  const observer = new IntersectionObserver( (entries, observer) => {
    entries.forEach(async (entry) => {
      if(entry.isIntersecting){
        observer.unobserve(entry.target);
       
        if(instanceApiService.totalElementsOnPage < 40 && instanceApiService.numberPage === 2) {
          return 
        } else if(instanceApiService.totalElementsOnPage < 40 && instanceApiService.numberPage > 2) {
          return Notify.info("We're sorry, but you've reached the end of search results.");
        }

        try {
          const objectResolve = await instanceApiService.fetchPhoto();
          const { hits } = objectResolve;
    
          instanceApiService.totalElements = hits.length;
        
          renderPhotos(hits)
          } catch(error) {
            console.log(error.message);
          } 

      }
    })
  }, {
    rootMargin: '50px',
  });

  observer.observe(document.querySelector('.gallery > .photo-card:last-child'))
  
};




