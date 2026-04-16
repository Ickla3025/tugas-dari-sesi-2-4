

function hitung(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b === 0) {
                return "Tidak bisa dibagi nol";
            }
            return a / b;
        default: return "Operator salah";
    }
}

console.log("Hasil: " + hitung(10, 5, '+'));
console.log("Hasil: " + hitung(10, 5, '-'));
console.log("Hasil: " + hitung(10, 5, '*'));
console.log("Hasil: " + hitung(10, 5, '/'));
console.log("Hasil: " + hitung(10, 0, '/')); // contoh pembagian dengan nol
console.log("Hasil: " + hitung(10, 5, '%')); // contoh operator salah