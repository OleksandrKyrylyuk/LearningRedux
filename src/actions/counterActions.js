export const Plus = () => {
    return {
        type: "PLUS"
    }
}

export const Minus = ()  => {
    return {
        type: "MINUS"
    }
}

export const PlusFive = number => {
    return {
        type:"PLUS_FIVE",
        payload: number
    }
}

export const Zero = () => {
    return {
        type: "ZERO"
    }
}


export const Multiplication = () => {
    return {
        type: "MULT"
    }
}

export const Division = number => {
    return {
        type: "DIV",
        payload: number
    }
}