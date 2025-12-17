import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "../CSS/DropdownMenu.css";



function DropdownMenu({ style, options, onSelect, noteId }) {


    const menuOptions = ["Delete", "Edit", "Move to...", "New"];
    function handleClick(str) {
        console.log(str);
    }
    return ReactDOM.createPortal(
        <div className="dropdown-container" style={style}>
            <table className="dropdown-table">
                <tbody>

                    {menuOptions.map((option, index) =>
                        <tr>
                            <td onClick={() => handleClick(menuOptions[index])} key={option} className="menu-options">{option}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>,
        document.body
    );
}


export default DropdownMenu;