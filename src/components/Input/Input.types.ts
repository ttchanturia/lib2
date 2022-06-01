import { ChangeEventHandler } from "react"

export interface InputProps {
    id?: string,
    disabled?: boolean,
    label?: string,
    error?: boolean,
    message?: string,
    success?: boolean,
    placeholder?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}