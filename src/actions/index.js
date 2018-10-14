import axios from 'axios';
import {CLEAR_SEARCH, SAVE_QUERY, SEARCH_IMAGES} from "./actionTypes";
import { PIXABAY_API_KEY} from "../config";

export function searchImages(query) {
  const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&per_page=6`;
  const request = axios.get(url); //Returns a promise
  return {
    type: SEARCH_IMAGES,
    payload: request
  };
}

export function clearSearch() {
  return {
    type: CLEAR_SEARCH,
  };
}

export function saveQuery(query) {
  return {
    type: SAVE_QUERY,
    payload: query
  };
}