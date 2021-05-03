import React, { useState } from 'react'
const CreateNote=(props)=>{
  const [note,setNote]=useState({
    title:"",
    content:""
  })
  const [exp,setexp]=useState(false)
const noteMake=(event)=>{ 
  const {name,value}=event.target;
setNote((preval)=>{
  return{...preval,
     [name]:value
  }
})
}
const sendNote=()=>{
props.passfun(note)
setNote({
  title:"",
  content:""
})
}
const chgExp=()=>{
  setexp(true)
}
    return (
      <>
        <div>
       {exp?
        <input name='title' type='text' placeholder='Title' autoComplete='off' value={note.title} onChange={noteMake}></input>:null}
        <br/>

       <textarea name='content' rows='' cols='' placeholder='write a note..' value={note.content} onChange={noteMake} onClick={chgExp}></textarea>
       {exp?
       <button onClick={sendNote}>+</button>
       :null}
       </div>  
      </>  
    )
}
export default CreateNote