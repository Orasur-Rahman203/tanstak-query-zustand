import React, { useState } from 'react'

function AddPost({ initialValue, onSubmit }) {
  const [post, setPost] = useState({
    title: initialValue.title || '',
    body: initialValue.body || '',
  })

  const handleChangeInput = (e) => {
    // console.log("change input", e.target.value);
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(post)
    setPost({
      title: '',
      body: '',
    })
  }

  return (
    <>
      <p>Add new post</p>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          onChange={handleChangeInput}
          type="text"
          name="title"
          value={post.title}
        />
        <label>Body</label>
        <input
          onChange={handleChangeInput}
          type="text"
          name="body"
          value={post.body}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddPost
