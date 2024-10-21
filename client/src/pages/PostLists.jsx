import React from 'react'
import AddPost from '../Components/AddPost'

function PostLists() {

const handleAddPost=(post)=>{
    console.log("Add new posst", post.title, post.body);

}

  return (
    <div>
        <AddPost onSubmit={handleAddPost} initialValue={{}}/>
<p>Hello</p>
    </div>
  )
}

export default PostLists