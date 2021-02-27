import React from "react";

// class FetchApi extends React.Component {


//   state = {
//     title: "loading",
//   };

//   componentDidMount = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((res2)=>
//        this.setState({
//           title:res2[0].title
//       }));
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.title}</h1>
//       </div>
//     );
//   }
// }

// export default FetchApi;



// // const [userData, setUserData] = useState<any>([]);
// //   getData=(apiUrl: any)=> {
// //     return new Promise(async (resolve, reject) => {
// //       const res: Response = await fetch(
// //         "https://jsonplaceholder.typicode.com/todos"
// //       );
// //       res
// //         .json()
// //         .then((res) => {
// //           if (res) {
// //             resolve(res);
// //           }
// //         })
// //         .catch((err) => {
// //           reject(err);
// //         });
// //     });
// //   }