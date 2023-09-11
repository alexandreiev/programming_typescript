type CompanyID = string
type OrderID = string
type UserID = string
type ID = CompanyID | OrderID | UserID

function queryForUser(id: UserID) {}

let id: CompanyID = 'b4843361'
queryForUser(id)


type CompanyID2 = string & {readonly brand: unique symbol}
type OrderID2 = string & {readonly brand: unique symbol}
type UserID2 = string & {readonly brand: unique symbol}
type ID2 = CompanyID | OrderID | UserID

function CompanyID(id: string) {
    return id as CompanyID2
}

function OrderID(id: string) {
    return id as OrderID2
}

function UserID(id: string) {
    return id as UserID2
}

let companyId = CompanyID('8a6076cf') 
let orderId = OrderID('9994acc1')
let userId = UserID('d21b1dbf')

function queryForUser2(id: UserID2) {}

queryForUser2(userId)
// queryForUser2(companyId)        // Error TS2345: Type 'typeof brand' is not assignable to type 'typeof brand'. 
                                // Two different types with this name exist, but they are unrelated.


export {}
