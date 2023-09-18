namespace Network {
    export namespace HTTP {
        export function get<T>(url: string): Promise<T> {
            return new Promise((resolve, reject) => {})
        }
    }
    // export namespace TCP {
    //     export function listeneOn(port: number): Connection | null {
    //         return null
    //     }
    // }
    export namespace UDP {

    }
    export namespace IP {
        
    }
}