type Dialog = {
    id?: string
}

// function closeDialog(dialog: Dialog) {
//     if (!dialog.id) {
//         return
//     }

//     setTimeout(() =>
//         removeFromDOM(
//             dialog, 
//             document.getElementById(dialog.id)) // Error TS2345: Argument of type 'string | undefined' 
//     )                                           // is not assignable to parameter of type 'string'.
// }


// function removeFromDOM(dialog: Dialog, element: Element) {
//     element.parentNode.removeChild(element)                 // Error TS2531: element.parentNode' is possibly 'null'.
//     delete dialog.id
// }


function closeDialog(dialog: Dialog) {
    if (!dialog.id) {
        return
    }

    setTimeout(() =>
        removeFromDOM(
            dialog, 
            document.getElementById(dialog.id!)!)  
    )                                           
}

function removeFromDOM(dialog: Dialog, element: Element) {
    element.parentNode!.removeChild(element)                 
    delete dialog.id
}



type VisibleDialog = {id?: string}
type DestroyedDialog = {}
type Dialog2 = VisibleDialog | DestroyedDialog


function closeDialog2(dialog: Dialog2) {
    if (!('id' in dialog)) {
        return
    }

    setTimeout(() =>
        removeFromDOM2(
            dialog, 
            document.getElementById(dialog.id!)!)  
    )                                           
}

function removeFromDOM2(dialog: VisibleDialog, element: Element) {
    element.parentNode!.removeChild(element)                 
    delete dialog.id
}


export {}