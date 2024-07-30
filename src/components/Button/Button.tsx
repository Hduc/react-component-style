import React from "react"
import { ButtonColor } from "./buttonColor"

export interface IButton {
    label: string,
    type?: "submit" | 'reset' | 'button'
    classButton?: string,
    onClick?: () => void
    color?: ButtonColor
}

const Button = (props: IButton) => {
    const getClassColor = () => {
        if (!props.color) return ''
        switch (props.color) {
            case "primary": return 'text-white px-4 py-3 mx-3 mt-3 mb-2 bg-gradient-to-tl from-purple-700 to-pink-500'
            case "success": return 'text-white px-4 py-3 mx-3 mt-3 mb-2 bg-gradient-cyan'
            case "warning": return 'text-white px-4 py-3 mx-3 mt-3 mb-2 bg-gradient-orange'
            case "info": return 'text-white px-4 py-3 mx-3 mt-3 mb-2 bg-gradient-lime'
            case "error": return 'text-white px-4 py-3 mx-3 mt-3 mb-2 bg-gradient-red'
            case "default": return 'px-4 py-3 mx-3 mt-3 mb-2 text-gray'
            case "blue": return 'px-4 py-3 mx-3 mt-3 mb-2 text-gray bg-gradient-blue'
            default: return '';
        }
    }

    return (
        <button type={props.type}
            className={`font-bold text-center  uppercase align-middle transition-all 
    bg-transparent border-0 rounded-lg cursor-pointer hover:scale-105 hover:shadow-soft-xs leading-pro
    text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 ${getClassColor()} ${props.classButton}`}
            onClick={props.onClick}>
            {props.label}
        </button>
    )
}
Button.defaultProps = {
    type: 'button',
    classButton: '',
    color: 'default'
}
export default Button