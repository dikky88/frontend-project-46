// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

// let fileData1;
// let fileData2;

// beforeAll(() => {
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);
//   const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
//   fileData1 = JSON.parse(fs.readFileSync(getFixturePath('file1.json')));
//   fileData2 = JSON.parse(fs.readFileSync(getFixturePath('file2.json')));
// });

test('gendiff json', () => {
  const data = gendiff('file1.json', 'file2.json');

  expect(data).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});

test('gendiff yml', () => {
  const data = gendiff('file1.yml', 'file2.yml');

  expect(data).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
