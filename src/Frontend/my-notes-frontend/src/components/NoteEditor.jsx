import React, { useEffect } from "react";
import '../CSS/NoteEditor.css';
import {useState,useRef} from "react";
import debounce from "debounce";


function NoteEditor({ note, noteId, title, content, onContentChange, onTitleChange }) {
    
    const [Note, setNote] = useState(note);
    const [localTitle,setLocalTitle] = useState(Note?.title?? "");
    const localContent = useRef(content);
    const [NoteId, setNoteId] = useState(noteId);

    const debouncedSave = useRef(
        debounce((value) => {
            onContentChange(value);
        }, 500)
    ).current;

   const handleContentChange = (e) => {
        localContent.current = e.target.value;
        debouncedSave(e.target.value);
   }

   const handleTitleChange = (e) => {
        setLocalTitle(e.target.value);
        onTitleChange(e.target.value);
   }

   useEffect(() => {
    setLocalTitle(title ?? "");
    localContent.current = content ?? "";
    
   }, [title, content]);

    return (
        <div className="noteForm">
            <div className="boxes">
                <div className="title">
                    <textarea className="titleArea" 
                    placeholder="Title" 
                    value={localTitle? localTitle: ""}
                    onChange={handleTitleChange}></textarea>
                </div>

                <div className="contentArea">
                    <textarea key={noteId} className="textBody"
                     placeholder="Start typing here..." 
                     defaultValue={localContent.current}
                     onChange={handleContentChange}></textarea>

                </div>

            </div>

        </div>
    );


}

export default NoteEditor;