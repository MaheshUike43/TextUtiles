import React from 'react'

export default function About(props) {
    return (
        <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1>About</h1>
            <p style={{textAlign:'justify'}}>Text Utilities is a versatile app designed to streamline and enhance your text-related tasks. With features like word and character counting, text formatting (including upper/lower/title case), and the ability to remove duplicates or sort text alphabetically, organizing and refining your content has never been easier. Whether you're a writer, student, or professional, Text Utilities offers essential tools like lorem ipsum generation, Base64 encoding/decoding, text-to-Morse code conversion, and unit conversion, ensuring efficiency and precision in every text manipulation endeavor. Simplify your workflow and elevate your text management with Text Utilities today.
            </p>
        </div>
    )
}
