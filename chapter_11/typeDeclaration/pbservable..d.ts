import {Subscriber} from './Subscriber'
import {Subscription} from './Subscription'
import {PartialObserver, Subscribable, TeardownLogic} from './types'

export declare class Observable<T> implements Subscribable<T> {
    _isScalar: boolean

    constructor(
        subscribe?: (
            this: Observable<T>,
            subscriber: Subscriber<T>
        ) => TeardownLogic
    );
    
    static create<T>(
        subscribe?: (subscriber: Subscriber<T>) => TeardownLogic
    ): Observable<T>
    
    subscribe(observer?: PartialObserver<T>): Subscription
    
    subscribe(
        next?: (value: T) => void,
        error?: (error: any) => void,
        complete?: () => void
    ): Subscription
}