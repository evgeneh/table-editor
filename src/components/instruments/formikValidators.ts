export const isRequired = (value: string): string | undefined => {
    let errText
    if (value.length < 1) errText = " is required!"
    else if (value.length < 4)  errText = "4 symbols minimum"
    return errText
}

export const emailValidate = (value: string):string | undefined => {
    let errText
    if (value.length < 1)  errText = " is required!"
    else if (! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) errText = " is not valid"
    return errText
}

//if validation in login state return  an undef
export const isPasswordConfirm = (value1: string, value2?: string) => {

    let errText
    if (value2 == undefined) return errText

    if ((value2.length < 1) && (value1.length > 1))  errText = "repeat your password"
    else if (value1 !== value2) errText = "passwords is not match"
    return errText
}
