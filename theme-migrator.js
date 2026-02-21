import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const walk = (dir, done) => {
    let results = [];
    fs.readdir(dir, (err, list) => {
        if (err) return done(err);
        let pending = list.length;
        if (!pending) return done(null, results);
        list.forEach((file) => {
            file = path.resolve(dir, file);
            fs.stat(file, (err, stat) => {
                if (stat && stat.isDirectory()) {
                    walk(file, (err, res) => {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    results.push(file);
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

const replacements = {
    'bg-chess-dark': 'bg-white',
    'bg-chess-board': 'bg-gray-50',
    'text-white': 'text-gray-900',
    'text-gray-300': 'text-gray-600',
    'text-gray-400': 'text-gray-500',
    'text-chess-gold': 'text-brand-primary',
    'bg-chess-gold': 'bg-brand-primary',
    'border-chess-gold': 'border-brand-primary',
    'text-chess-accent': 'text-brand-primary',
    'bg-chess-accent': 'bg-brand-primary',
    'border-chess-board': 'border-gray-200',
    'border-chess-board/50': 'border-gray-100',
    'hover:text-white': 'hover:text-brand-primary',
    'hover:bg-chess-dark': 'hover:bg-gray-100',
    'hover:bg-chess-board': 'hover:bg-gray-200',
    'hover:text-chess-gold': 'hover:text-brand-primary',
    'hover:bg-chess-gold': 'hover:bg-brand-dark',
    'from-chess-dark': 'from-white',
    'via-chess-board': 'via-gray-50',
    'to-chess-dark': 'to-gray-100',
    'from-chess-gold': 'from-brand-primary',
    'text-chess-dark': 'text-gray-900',
    'text-chess-dark/80': 'text-gray-700',
    'ring-chess-gold/20': 'ring-brand-primary/20',
    'from-chess-board': 'from-gray-50',
    'focus:ring-chess-gold': 'focus:ring-brand-primary',
    'text-chess-light': 'text-gray-500'
};

const processFile = (filePath) => {
    if (!filePath.endsWith('.jsx') && !filePath.endsWith('.tsx') && !filePath.endsWith('.js')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    for (const [key, value] of Object.entries(replacements)) {
        content = content.split(key).join(value);
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
};

walk(path.join(__dirname, 'src'), (err, results) => {
    if (err) throw err;
    results.forEach(processFile);
    console.log('Done migrating theme!');
});
