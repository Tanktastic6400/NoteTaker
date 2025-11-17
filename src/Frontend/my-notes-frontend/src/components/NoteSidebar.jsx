import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import trashIcon from "../assets/trash.png";
import saveIcon from "../assets/diskette.png";
import moveIcon from "../assets/arrows.png";
import "../CSS/NoteSidebar.css";

function NoteSidebar({ props }) {

    const [Notes, setNotes] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);



    useEffect(() => {
        axios.get("http://localhost:8080/notes")
            .then(response => {
                setNotes(response.data);

            }).catch(error => {
                console.error("there was an error!", error);

            });
    }, []);

    function handleDoubleClick() {

    };


    return (
        <div className="side-bar">
            <table className="iconTable">
                <tbody >
                    <tr className="icon-row">
                        <td>
                            <button className="icon-button">
                                <img className="icons" src={trashIcon}></img>

                            </button>
                        </td>
                        <td>
                            <button className="icon-button">
                                <img className="icons" src={saveIcon}></img>

                            </button>
                        </td>
                        <td>
                            <button className="icon-button">
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
                        <tr onClick={() => setSelectedNoteId(note.id)} onDoubleClick={() => handleDoubleClick()}
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