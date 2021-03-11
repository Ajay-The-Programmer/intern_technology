import React from 'react';

import './App.css';
import { connect, DefaultRootState, useDispatch, useSelector } from 'react-redux'
import { myActionCreationName } from './action/myaction';
import { DefaultSerializer } from 'node:v8';



function App() {

  // props.myWish.push(props.myWish);
  // console.log(props);
  // console.log(props.myWish);
  // console.log(props.myname);
  const dispatch = useDispatch();
  const myname = useSelector<any>(state => {
    return state.name
  })
   
  const wish:any= useSelector<any>((state:any)=> {
   
    return state.wish
    
  })

  const myWish = wish.map((item: any) => {
    return <h2 key={Math.random()}>{item}</h2>
  })

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>My Name is : <strong>  {myname} </strong></h2>
      <h3>I Like is : {myWish}</h3>
      {/* <button onClick={dispatch(changeName())}>Change Name</button> */}
     {/*  <button onClick={() => { props.addWish(['codding', 'tracking']) }}>Change Wish</button> */}
    </div>
  );
}
  // const myStateToProps = (state: { name: any; wish: any; }) => {

  // return {
  //   myname: state.name,
  //   myWish: state.wish

  // }


// }
// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     changeName: () => {
//       dispatch(myActionCreationName())
//     },
//     addWish: (wish: []) => { dispatch({ type: "ADD_WISH", payload: wish }) }


//   }
// }


export default App;

