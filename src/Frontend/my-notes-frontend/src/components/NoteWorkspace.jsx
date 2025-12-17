import React, { useEffect, useState, useRef } from 'react';
import NoteSideBar from '../components/NoteSidebar';
import NoteEditor from '../components/NoteEditor';
import "../CSS/NoteWorkspace.css";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';


function NoteWorkspace() {

    const [Note, setNote] = useState();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const { noteId } = useParams();
    const location = useLocation();
    const [selectedId, setSelectedId] = useState();
    const [savedNote, setSavedNote] = useState();
    
    const contentRef = useRef("");
    
    const isNew = location.state?.mode === "new" || noteId === "0";

    useEffect(() => {

        if(!isNew && noteId){
        axios.get(`http://localhost:8080/notes/${noteId}`)
            .then(response => { 
                setNote(response.data)
                setTitle(response.data.title);
                setContent(response.data.content);
                contentRef.current = response.data.content;

            }).catch(error => {
                console.error('There was an error!' , error);
            });
        }
        

    },[noteId, isNew]);

    useEffect(() => {
        console.log("This is content: " + content);
        console.log("This is title: " + title);
    },[content, title]);


    function handleSave(){
        axios.post("http://localhost:8080/notes/saveNote", null, {
            params: {
                userId: 1,
                title: title,
                note: content,
                noteId: noteId
            }
        }).then(response => {
            setSavedNote(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        })
        savedNote

    }

    function handleDelete(noteId){
        axios.delete(`http://localhost:8080/notes/deleteNote/${noteId}`
        ).catch(error => {console.error('There was an error!', error);

        });
    }
       

    return (
        <div >
            <div className="workspace">
                
                <NoteSideBar toDelete={handleDelete} onSelectId={setSelectedId} onSavedNote = {savedNote} newNote={isNew} className="side-bar" />
                <div>
                <button className="save-button" onClick={handleSave}>Save</button>
                {<NoteEditor note={Note} title={title} content={content} onContentChange={setContent} onTitleChange={setTitle} className="editor" />}
                </div>

            </div>
        </div>
    )
}

export default NoteWorkspace;