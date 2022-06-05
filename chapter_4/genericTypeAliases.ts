type MyEvent<T> = {
    target: T
    type: string
}

type ButtonEvent = MyEvent<HTMLButtonElement>
let myEvent: MyEvent<HTMLButtonElement | null> = {
    target: document.querySelector('#myButton'),
    type: 'click'
}

type TimeEvent<T> = {
    event: MyEvent<T>
    from: Date
    to: Date
}

function triggerEvent<T>(event: MyEvent<T>): void {
    // ...
}

triggerEvent({  // T is Element | null
    target: document.querySelector('#myButton'),
    type: 'mouseover'
})

export {}