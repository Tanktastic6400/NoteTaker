import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "../CSS/DropdownMenu.css";



function DropdownMenu({ style, options, onSelect }) {
    const [open, setOpen] = useState(false);

    const menuOptions = ["Delete", "Edit", "Move to...", "New"];
    function handleClick(str){
        console.log(str);
    }
    return ReactDOM.createPortal(
        <div className="dropdown-container" style={style}>
            <table className="dropdown-table">
                <tbody>
                    {menuOptions.map((option,index) =>
                    <tr onClick={() => handleClick(menuOptions[index])} className="menu-options">{option}</tr>)}
                
                </tbody>
            </table>
        </div>,
        document.body
    );
}


export default DropdownMenu;