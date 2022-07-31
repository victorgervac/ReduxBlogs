import jsonPlaceholder from '../apis/jsonPlaceholder';
  //initiate dispatch action fw to reducers 
  //getState acces our store --4-r
export const fetchPosts = () => async dispatch => {
  // dummy (()=>())
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const  fetchUser = (id) => async dispatch =>{
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch ({type: 'FETCH_USER', payload: response.data})
}

//action creators must return plain javascript objects with a type property we are not 
//by the time our actions gets to a reducer we wont have fetched our data
//es2015 syntax for destructuring
//async await gets transformed into es2015 syntax
// export const fetchPosts = async () => {
  
//   const res = await JSONPlaceholder.get("/posts");
//    return {
//      type: 'FETCH_POSTS'
//      payload: res
//    };
//  }
//no async promise and action redux t fast to wait for promise to return use the thunk middleware
// asynchronous action creators take some amount of  time for to get its data ready to go