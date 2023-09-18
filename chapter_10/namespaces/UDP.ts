import { rejects } from "assert";

namespace Network {
    export namespace UDP {
        export function send(url: string, packet: Buffer): Promise<void> {
            return new Promise(() => {})
        }
    }
}