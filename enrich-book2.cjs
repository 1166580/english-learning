const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'data', 'book2.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const esc = s => s.replace(/\/g, '\\').replace(/'/g, "\'");

const lessons = [
