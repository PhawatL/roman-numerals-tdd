const romanSymbolsMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
/**
 * Converts a Roman numeral string to a decimal integer.
 * Assumes valid input.
 * @param roman e.g. MCMXLIV
 */
export function romanToDecimal(roman: string): number {
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
        const currentValue = romanSymbolsMap[roman[i]];
        const nextValue = romanSymbolsMap[roman[i + 1]];
        if (nextValue && currentValue < nextValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    }
    return total;

}