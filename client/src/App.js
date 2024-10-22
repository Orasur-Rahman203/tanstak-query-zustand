// import { useQuery } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { useCounterStore } from './store'
import { useEffect } from 'react';
import PostLists from './pages/PostLists';
import Post from './pages/Post';
import EditPost from './pages/EditPost';
// import Form from './Components/Form'
// import Form from './components/Form'


//zustand section 
const logCount=()=>{
  const count=useCounterStore.getState().count;
  // const newValue= useCounterStore.setState({count:1})
  console.log("cousnt", count);
}


function App() {
  // const { data, status, isFetching } = useQuery(
  //   ['todo'],
  //   async () => await (await fetch('http://localhost:8000/todo')).json()
  // )

  // console.log('Data', data)

  // if (isFetching) {
  //   return <h1>Loading...</h1>.
  // }


//zustand section 
const count=useCounterStore((state)=>state.count)




  return (
    <div className="App">
      <p>Hello Developer 🇧🇩</p>
        <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
      {/* <Form /> */}
  {/* zustand section  */}
      {/* <OtherComponent count={count}/> */}
    </div>
  )
}

//zustand section 
const OtherComponent=({count})=>{
useEffect(()=>{
logCount()
}, []);

const increase=useCounterStore((state)=>state.increase);
const increaseAsync=useCounterStore((state)=>state.increaseAsync);
const decrease=useCounterStore((state)=>state.decrease);
const decreaseAsync=useCounterStore((state)=>state.decreaseAsync);
const remove=useCounterStore((state)=>state.remove);

  return(
    <div>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={increaseAsync}>increaseAsync</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={decreaseAsync}>DecreaseAsync</button>
      <button onClick={remove}>Remove</button>
    </div>
  )
}


export default App
