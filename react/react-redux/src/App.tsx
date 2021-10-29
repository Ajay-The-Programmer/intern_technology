import React from 'react';

import './App.css';
import { connect, DefaultRootState, useDispatch, useSelector } from 'react-redux'
import { addWish, myActionCreationName } from './action/myaction';
import { DefaultSerializer } from 'node:v8';



function App() {

  // props.myWish.push(props.myWish);
  // console.log(props);
  // console.log(props.myWish);
  // console.log(props.myname);
  const dispatch = useDispatch();
  const data:any = useSelector<any>(state => {
    return state
  })
   
  // const wish:any= useSelector<any>((state:any)=> {
   
  //   return state.wish
    
  // })

  const myWish = data.wish.map((item: any) => {
    console.log(data.name);
    
    console.log(item);
    
    return <h2 key={Math.random()}>{item}</h2>
  })

  return (
    <>
    <div className="App">
      <h1>Welcome</h1>
      <h2>My Name is : <strong>  {data.name} </strong></h2>
      <h3>I Like is : {myWish}</h3>
      <button onClick={()=>dispatch(myActionCreationName())}>Change Name</button>
      <button onClick={() =>dispatch(addWish())}>Change Wish</button>
    </div>
    </>
  );
}
  // const mapStateToProps = (state: { name: any; wish: any; }) => {

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



