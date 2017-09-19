import { combineReducers } from "redux";
import {
  RECEIVE_POSTS,
  RECEIVE_CATEGORIES,
  GET_POSTS_CATEGORY,
  GET_SINGLE_POST
} from "../actions";

function receivePosts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    default:
      return state;
  }
}

function receiveCategories(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

function getPostsCategory(state = {}, action) {
  switch (action.type) {
    case GET_POSTS_CATEGORY:
      return action.posts;
    default:
      return state;
  }
}

function receivePost(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_POST:
      return action.posts;
    default:
      return state;
  }
}

export default combineReducers({
  receivePosts,
  receiveCategories,
  getPostsCategory,
  receivePost
});
