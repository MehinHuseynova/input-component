import React from 'react'

interface InputWrapperProps {
    children:any
    text:string;
}
export const InputWrapper:React.FC<InputWrapperProps> = ({ children, text }) => {
    return (
        <div>
            <p>{text}</p>
            <div> {children}</div>
        </div>
    )
}
