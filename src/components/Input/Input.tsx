import React from 'react'
import csx from 'classnames'
import './Input.style.scss'
import classNames from 'classnames';

interface InputProps {
    hasError?: boolean;
    disabled?: boolean;
    content?: string | JSX.Element;
    startIcon?: boolean;
    endIcon?: boolean;
    value?: string;
    size?: 'sm' | 'lg'
    fullWidth?:boolean;
    multiline?:boolean;
    rows?:number;
}

export const Input: React.FC<InputProps> = ({ hasError = false, disabled = false, content, startIcon, endIcon, value, size,fullWidth,multiline,rows }) => {
    const suffix = 'input'

    const classNames = {
        error: hasError,
        disabled,
        startIcon,
        endIcon,
        fullWidth,
        ...size && {[`${size}`]:true}
    }

    return (
        <>
            <label>Label</label>
            <input tabIndex={1} className={csx(suffix, classNames)}  type="text" value={value} placeholder='Placeholder' />
            {content && <small>{content}</small>}
        </>
    )
}
