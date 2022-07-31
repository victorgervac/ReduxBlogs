import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';

export default combineReducers({
  posts: postsReducer,
  users: userReducer

});
//reducer watching actions with type fetch post and get data
// import here create indivudual 
//each reducer gets called one time on open app
//must return any value but never undefined , 
// produce state or data that to be used inside of your app using only previous state and the action
//must not return reach out of itself to decide what value to return 
//keep reducer pure!!
  //bad return axios.get('/posts')
  //good state + action 
  //must not mutate its input state argument 