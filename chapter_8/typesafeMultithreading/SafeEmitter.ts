import EventEmitter from "events"

class SafeEmitter<Events extends Record<string | symbol, unknown[]>> {
    private emiter = new EventEmitter

    emit<K extends keyof Events> (channel: K, ...data: Events[K]) {
        return this.emiter.emit(channel as string, ...data)
    }

    on<K extends keyof Events> (
        channel: K, 
        listener: (...data: any[]) => void) {
            // listener: (...data: Events[K]) => void) {
            return this.emiter.on(channel as string, listener)
        }
}

export {SafeEmitter}