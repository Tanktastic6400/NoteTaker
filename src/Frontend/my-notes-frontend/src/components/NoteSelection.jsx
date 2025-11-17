import React, { useEffect } from "react";
import { useState,useRef } from "react";
import "../CSS/NoteSelection.css";
import axios from 'axios';
import DropdownMenu from "./DropdownMenu";



function NoteSelection({ username, userID }) {

    const [Notes, setNotes] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const [dropdown, setDropdown] = useState({
        visible: false,
        x:0,
        y:0
    });
    const buttonRefs = useRef([]);

useEffect(() =>{


    axios.get('http://localhost:8080/notes')
    .then(response => { setNotes(response.data);
    
    }).catch(error => {
        console.error('There was an error!', error);
    });
},[]);





    function handleOptionsClick(event, index) {

        event.stopPropagation();

        const button = buttonRefs.current[index];
        const rect= button.getBoundingClientRect();
        setDropdown({
            visible: true,
            x: rect.left,
            y: rect.bottom
        });
        console.log("Button postion:", rect);
    };

    function handleDoubleClick() {
        
    }
    function handleSingleClick(id) {
        setSelectedNoteId(id);
    }

    useEffect(() => {
        function handleClickOutside(){
            setDropdown(prev => ({ ...prev, visible: false}));
        }

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="noteTable">
            <table >
                <thead>
                    <tr className="tableHeader">
                        <th className="tableHeader">Title</th>
                        
                        <th className="tableHeader">created at</th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody>
                    {Notes.map((note, index) =>  
                        <tr onClick={() => setSelectedNoteId(note.id)} onDoubleClick={() => handleDoubleClick()} 
                        key= {note.id} className={`noteContainer ${note.id === selectedNoteId ? "selected" : ""}`}>

                            <td>{note.title}</td>
                            <td>{new Date(note.createdAt).toLocaleDateString()}</td>
                            <td><button 
                            key={note.id}
                            ref ={el => (buttonRefs.current[index] = el)}
                            onClick={(e) => handleOptionsClick(e, index)} className="note-menu buttons">☰</button>
                            </td>
                        </tr>
                    )}





                </tbody>


            </table>
                    {dropdown.visible && (
                        <DropdownMenu style={{
                            position:'absolute',
                            left: dropdown.x,
                            top: dropdown.y
                        }} />
                    )}
        </div>
    );



}



export default NoteSelection;

