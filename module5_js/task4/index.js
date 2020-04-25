const matrix = [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
];

for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}

for (item of matrix) {
    console.log(matrix)
}