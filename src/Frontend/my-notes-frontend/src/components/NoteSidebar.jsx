import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import trashIcon from "../assets/trash.png";
import saveIcon from "../assets/diskette.png";
import moveIcon from "../assets/arrows.png";
import "../CSS/NoteSidebar.css";
import { useNavigate } from "react-router-dom";

function NoteSidebar({ toDelete, onSelectId, onSavedNote, newNote }) {

    const [Notes, setNotes] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const navigate = useNavigate();




    useEffect(() => {
        getRequest();
    }, []);

    useEffect(() => {
        getRequest();
        // newNote = false;
        if(onSavedNote?.id){
            navigate(`/workspace/${onSavedNote.id}`);

        }
    }, [onSavedNote]);

    function getRequest() {
        axios.get("http://localhost:8080/notes")
            .then(response => {
                setNotes(response.data);

            }).catch(error => {
                console.error("there was an error!", error);

            });
    }

    useEffect(() => {
        console.log(selectedNoteId);
    }, [selectedNoteId]);

    function handleDoubleClick() {

        navigate(`/workspace/${selectedNoteId}`);

    };

    function changeSelectedId(noteId) {
        setSelectedNoteId(noteId);
        onSelectId(noteId);
    }

    function handleTrashClick() {
        const confirmDelete = window.confirm("Are you sure you want to delete this note");
        if (!confirmDelete) {
            return;

        } else {
            toDelete(selectedNoteId);
            window.location.reload();
        }
    };
    function handleSaveClick() {
        console.log("saved");
    };
    function handleMoveClick() {
        navigate("/select");
    };



    return (
        <div className="side-bar">
            <table className="iconTable">
                <tbody >
                    <tr className="icon-row">
                        <td>
                            <button key="delete-button" className="icon-button" onClick={handleTrashClick}>
                                <img className="icons" src={trashIcon}></img>

                            </button>
                        </td>
                        <td>
                            <button key="save-button" className="icon-button" onClick={handleSaveClick}>
                                <img className="icons" src={saveIcon}></img>

                            </button>
                        </td>
                        <td>
                            <button key="move-button" className="icon-button" onClick={handleMoveClick}>
                                <img className="icons" src={moveIcon}></img>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table >
            <table>
                <thead>
                    <tr>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>

                    {Notes.map((note, index) =>
                        <tr onClick={() => changeSelectedId(note.id)} onDoubleClick={() => handleDoubleClick()}
                            key={note.id} className={`noteContainer ${note.id === selectedNoteId ? "selected" : ""}`}>
                            <td>{note.title}</td>
                            <td>{new Date(note.createdAt).toLocaleDateString()}</td>

                        </tr>

                    )}
                </tbody>


            </table>

        </div >
    );
}


export default NoteSidebar;