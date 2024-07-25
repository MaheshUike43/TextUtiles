import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleOnUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleOnLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleRemoveExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed", "success")
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className='form-control' value={text} onChange={handleOnChange} rows="8" placeholder='Enter your text' id='myText' style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
                </div>
                <button className='btn btn-primary me-2' onClick={handleOnUpperClick}>Convert to Uppercase</button>
                <button className='btn btn-primary me-2' onClick={handleOnLowerClick}>Convert to Lowercase</button>
                <button className='btn btn-primary me-2' onClick={handleClear}>Clear Text</button>
                <button className='btn btn-primary me-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary me-2' onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
            </div>
        </>
    )
}
