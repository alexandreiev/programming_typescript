class MessageQueue {
    private constructor(private messages: string[]) {}
}

// class BadQueue extends MessageQueue {}  // Error TS2675: Cannot extend a class 'MessageQueue'. 
//                                         // Class constructor is marked as private.
// new MessageQueue([])    // Error TS2673: Constructor of class 'MessageQueue' is private 
//                         // and only accessible within the class declaration.

class MessageQueue1 {
    private constructor(private messages: string[]) {}
    static create(messages: string[]) {
        return new MessageQueue1(messages)
    }
}

// class BadQueue1 extends MessageQueue1 {}  // Error TS2675: Cannot extend a class 'MessageQueue'. 
//                                         // Class constructor is marked as private.

MessageQueue1.create([])    // MessageQueue1