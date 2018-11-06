// Define a function that retunrs n lines of Pascal's triangle//

function pascal(n, base = 1) {
    const triangle = [[base]];
    for (let i = triangle.length; i < n; i++) {
        const prevRow = triangle[i - 1];
        const newRow = [base];
        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(add(prevRow[j - 1], prevRow[j]))
        }
        newRow.push(base);
        triangle.push(newRow)
    }
    return triangle.join('\n')
}
const add = (a, b) => a + b;

console.log(pascal(5));

function pascal2(n) {
    for (r = 0; r < n; r++) {
        row = []
        for (i = 0; i <= r; i++) {
            if (i === 0 || i === r) {
                row[i] = 1;
            } else {
                row[i] = prev[i - 1] + prev[i];
            }
        }
        console.log(row);
        prev = row.slice();
    }
}
pascal2(5);