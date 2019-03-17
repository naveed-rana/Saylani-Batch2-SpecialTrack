export const RESET = 'RESET'

export function addCounter(data) {
    console.log('data from action',data)
    return {
        type: "ADDCOUNTER",
        data:data
    }
}
export function decreementCounter() {
    return {
        type: "DECREASECOUNTER",
        data: "something"
    }
}

export function startReset() {
    return {
        type: RESET,
        data: "something"
    }
}

