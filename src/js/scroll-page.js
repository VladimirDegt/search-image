/* прокрутка страницы на расстояние, которое равно 
*  двойной высоте первого дочернего элемента, 
*  найденного внутри элемента с классом "gallery"
**/
export function scroll() {
    const { height: cardHeight } = document
      .querySelector(".gallery")
      .firstElementChild.getBoundingClientRect();
    
    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });
};


