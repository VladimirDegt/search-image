import axios from 'axios';
import {Spinner} from 'spin.js';

import { refs } from './refs-elements';

const API_KEY = '35689289-d239eabcb13b35ae6aaf4f6ed';
const BASE_URL = 'https://pixabay.com/api/';

let spinner = new Spinner();

class ApiService {
  constructor() {
    this.findValueOnInput = '';
    this.numberPage = 1;
    this.totalElementsOnPage = 40;
  }

  async fetchPhoto() {
    spinner.spin(refs.spinner);
    
    try {
      const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.findValueOnInput}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.totalElementsOnPage}&page=${this.numberPage}`)
      this.numberPage += 1;
      spinner.stop()

      return response.data;
    } catch(error) {
      spinner.stop()

      return;
    }
  };

  get searchValue() {
    return this.findValueOnInput;
  };

  set searchValue(newValue) {
    this.findValueOnInput = newValue;
  };

  get totalElements() {
    return this.totalElementsOnPage;
  };

  set totalElements(newTotal) {
    this.totalElementsOnPage = newTotal;
  };

  resetPage () {
    this.numberPage = 1;
  };

  resetTotalElementsOnPage () {
    this.totalElementsOnPage = 40;
  };

};

export const instanceApiService = new ApiService();

