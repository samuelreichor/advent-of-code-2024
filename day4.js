function countXMAS(grid) {
    const word = "XMAS";
    const wordLength = word.length;
    const rows = grid.length;
    const cols = grid[0].length;

    // Define all 8 directions as (dx, dy)
    const directions = [
        [0, 1],  // Horizontal (right)
        [0, -1], // Horizontal (left)
        [1, 0],  // Vertical (down)
        [-1, 0], // Vertical (up)
        [1, 1],  // Diagonal (down-right)
        [-1, -1], // Diagonal (up-left)
        [1, -1], // Diagonal (down-left)
        [-1, 1]  // Diagonal (up-right)
    ];

    let count = 0;

    // Helper function to check if a word matches in a given direction
    function matches(x, y, dx, dy) {
        for (let i = 0; i < wordLength; i++) {
            const newX = x + i * dx;
            const newY = y + i * dy;

            // Check boundaries
            if (newX < 0 || newX >= rows || newY < 0 || newY >= cols) {
                return false;
            }

            if (grid[newX][newY] !== word[i]) {
                return false;
            }
        }
        return true;
    }

    // Iterate through each cell in the grid
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            // Check in all 8 directions
            for (const [dx, dy] of directions) {
                if (matches(x, y, dx, dy)) {
                    count++;
                }
            }
        }
    }

    return count;
}

// Example input grid
const grid = [
    "MMMSXXMASM",
    "MSAMXMSMSA",
    "AMXSXMAAMM",
    "MSAMASMSMX",
    "XMASAMXAMM",
    "XXAMMXXAMA",
    "SMSMSASXSS",
    "SAXAMASAAA",
    "MAMMMXMMMM",
    "MXMXAXMASX"
];

const fs = require('node:fs')

fs.readFile('./assets/day4.txt', 'utf-8', (err, data) => {

    const lines = data.split(/\n/g)

  let gridArray = []

  lines.forEach((line, index) => {
    gridArray.push(line.split(''))
  })

  console.log(gridArray)
  
  // Count occurrences of XMAS
  const result = countXMAS(gridArray);
  console.log("Total occurrences of XMAS:", result);
})
