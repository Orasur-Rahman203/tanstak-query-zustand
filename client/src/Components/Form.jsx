import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

const createTodo = (text) => {
  return () =>
    fetch('http://localhost:8000/todo/create', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
}

const Form = () => {
  const [text, setText] = useState('')

  const todoMutation=useMutation(createTodo(text), {
    onSuccess:()=>{
        console.log("Success");
    }, 
    onError:(error)=>{
        console.log("Error");
    }
  })


  return (
    <>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={(e)=>todoMutation.mutate()}>Create</button>
    </>
  )
}
export default Form
