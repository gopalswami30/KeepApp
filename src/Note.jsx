import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note=(props)=>{
    const deleteItem=()=>{
        props.deleteNote(props.id)
    }
    return (
       <>
       <div className='note'>
           <h1 className='titleHeading'>{props.title}</h1>
         
           <h2 className='contentHeading'>{props.content}</h2>
           
           <button onClick={deleteItem} className='delItem'><DeleteOutlineIcon /></button>
       </div>    
       </> 
    )
}
export default Note