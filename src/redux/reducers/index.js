import { ARTICLES_LOADED, DATA_ERROR } from "../constants";

const initialState = {
  articles: [],
  errorMessage: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_LOADED:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      })
    case DATA_ERROR:
      return Object.assign({}, state, {
        errorMessage: state.errorMessage.concat(action.payload.error_message)
      })
    default:
      return state
  }
}

export default rootReducer