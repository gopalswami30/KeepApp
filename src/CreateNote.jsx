import React, { useState } from 'react'
import './index.css'
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
        <div className='createnote'>
       {exp?
        <input name='title' type='text' placeholder='Title' autoComplete='off' value={note.title} onChange={noteMake} className="inputCss"></input>:null}
        <br/>
       <div className="textDiv">
       <textarea name='content' rows='' cols='' placeholder='write a note..' value={note.content} onChange={noteMake} onClick={chgExp} className="textArea"></textarea>
       {exp?
       <button onClick={sendNote} className='noteButton'>+</button>
       :null}
       </div>
       </div>  
      </>  
    )
}
export default CreateNote