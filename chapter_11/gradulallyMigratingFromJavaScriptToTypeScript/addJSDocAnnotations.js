/**
 * @param word {string} An input string to convert 
 * @returns The string in PacalCase
 */
export function toPascalCase(word) {
    return word.replace(
        '/\w+/g',
        ([a, ...b]) => a.toUpperCase() + b.join('').toLowerCase()
    )
}