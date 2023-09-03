import { isContext } from "vm"

function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in')
}

log('Page loaded')      // Logs "12:38:31 PM Page loaded Not signed in"
log('User signed in', 'da763be')    // Logs "12:38:31" PM User signed in da763be"


function log1(message: string, userId = 'Not- signed in') {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}
log1('User clicked on a button', 'da763be')
log1('User signed out')


type Context = {
    appId?: string
    userId?: string
}
function log2(message: string, context: Context = {}) {
    let time = new Date().toISOString()
    console.log(time, message, context.userId)
}

log2("some message", {userId:'da763be'})
log2("undefined user message", {})

export {}