//this returns a new data 
//once new data is detected it goes to where ever is connected 
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
