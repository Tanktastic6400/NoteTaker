import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "../CSS/NoteSelection.css";
import axios from 'axios';
import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom";



function NoteSelection({ username, userID }) {

    const [Notes, setNotes] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const [dropdown, setDropdown] = useState({
        visible: false,
        x: 0,
        y: 0,
        noteId: null
    });
    const buttonRefs = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {



        axios.get('http://localhost:8080/notes')
            .then(response => {
                setNotes(response.data);

            }).catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    useEffect(() => {
        console.log("dropdown note id is: " + dropdown.noteId);
    }, [dropdown]);




    function handleOptionsClick(event, noteId, index) {

        event.stopPropagation();

        const button = buttonRefs.current[index];
        const rect = button.getBoundingClientRect();
        setDropdown({
            visible: true,
            x: rect.left,
            y: rect.bottom,
            noteId: Notes[index].id
        });
        console.log("Button postion:", rect);

    };

    function handleDoubleClick(event, index) {

        navigate(`/workspace/${selectedNoteId}`, {
            state: {mode: "existing"}
        });
    }

    function handleCreateClick(){
        navigate("/workspace/0", {
            state: {mode: "new"}
        });
    }

    function handleSingleClick(id) {
        setSelectedNoteId(id);
    }

    function handleNewNote() {
        setNewNote(true);
    }

    useEffect(() => {
        function handleClickOutside() {
            setDropdown(prev => ({ ...prev, visible: false }));
        }

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div>
            <button key="create" className="create-button" onClick={() => handleCreateClick() }>+</button>
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
                                key={note.id} className={`noteContainer ${note.id === selectedNoteId ? "selected" : ""}`}>

                                <td>{note.title}</td>
                                <td>{new Date(note.createdAt).toLocaleDateString()}</td>
                                <td>
                                    <button
                                        key={note.id}
                                        ref={el => (buttonRefs.current[index] = el)}
                                        onClick={(e) => handleOptionsClick(e, note.id, index)}
                                        onDoubleClick={(e) => handleDoubleClick(e, index)}
                                        className="note-menu buttons">
                                        ☰
                                    </button>
                                </td>
                            </tr>

                        )}
                    </tbody>

                </table>

                {dropdown.visible && (
                    <DropdownMenu
                        noteID={dropdown.noteId}
                        style={{
                            position: 'absolute',
                            left: dropdown.x,
                            top: dropdown.y
                        }} />
                )}
            </div>
        </div>
    );



}



export default NoteSelection;

