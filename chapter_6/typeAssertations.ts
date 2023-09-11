function formatInput(input: string) {

}

function getUserInput(): string | number {
    return ""
}

let input = getUserInput()

// Assert that input is a string
formatInput(input as string)

// This is equivalent to
formatInput(<string> input)


function addToList(list: string[], item: string) {

}

addToList('this is really' as any, 'really unsafe')