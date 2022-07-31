import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

const  UserHeader= (props) =>{
  useEffect(() => {
    props.fetchUser(props.userId)
  },[])
  //move this logic to maoStateToProps
  // const user = props.users.find(user => user.id === props.userId)
  const { user } = props
  if(!user) {return null}
  return ( 
    <div><strong>{user.name}</strong></div>
    )
}
//you can move this to a separate file if you want to.
//The advantage to that is that you will have a component that can be used on its own without having to

// reach into the Redux store by going through all this work right here.
// The reason that we define map stage props right here is so that we can do kind of like these pre calculations

// on values that are coming into our component as props and our redux state.
//a refrence to the props into the component
const mapStateToProps = (state, ownProps) => {
  return{user: state.users.find(user => user.id === ownProps.userId) }
}
export default connect(mapStateToProps,{ fetchUser })(UserHeader)