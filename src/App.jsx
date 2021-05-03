import React, { useState } from 'react'
import Header from './Header.jsx'
import CreateNote from './CreateNote.jsx'
import Note from './Note.jsx'
const App=()=>{
   const [addItem,setaddItem]= useState([]) 
  const addNote=(note)=>{
     setaddItem((prevdata)=>{
      return [...prevdata,note]
     })
  }  
  const ondelete=(id)=>{
      setaddItem((prev)=>{
          return prev.filter((val,index)=>{
             return id!==index
      })})
  }
    return (<>
        <Header/>
        <CreateNote passfun={addNote}/>
      
       { addItem.map((currval,index)=>{  
       return <Note 
       key={index} 
       id={index} 
       title={currval.title} 
       content={currval.content} 
      deleteNote={ondelete}
       />})}
        </>
    )}

export default App