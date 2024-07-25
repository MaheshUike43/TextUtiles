import React from 'react'

export default function Alert(props) {

    const cap = (word) => {
        let first = word.charAt(0).toUpperCase();
        let rest = word.slice(1);
        return first + rest;
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
            <strong>{cap(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}
