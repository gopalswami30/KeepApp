import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note=(props)=>{
    const deleteItem=()=>{
        props.deleteNote(props.id)
    }
    return (
       <>
       <div className='note'>
           <h1>{props.title}</h1>
           <br/>
           <p>{props.content}</p>
           <br/>
           <button onClick={deleteItem}><DeleteOutlineIcon/></button>
       </div>    
       </> 
    )
}
export default Note