import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const gendiff = (file1, file2) => {
  const data1 = JSON.parse(fs.readFileSync(path.resolve(file1)));
  const data2 = JSON.parse(fs.readFileSync(path.resolve(file2)));

  const sortKeys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const result = sortKeys.map((key) => {
    const arr = [];
    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) { // ключ есть и в 1-ом и во 2-ом
      if (data1[key] === data2[key]) { // и если их значения равны
        arr.push(`  ${key}: ${data1[key]}\n`); // запишем ключ и значение без ничего, так как равны
      } else {
      // ключи одиннаковые значение разные, запишем с минусом сначало из первого
      // ключи одиннаковые значение разные, потом запишем с + со второго
        arr.push(`- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}\n`);
      }
    } else if (!Object.hasOwn(data2, key)) { // если ключа НЕТ во 2-ом
      arr.push(`- ${key}: ${data1[key]}\n`); // запишем ключ и значение из 1-го с минусом
    } else if (!Object.hasOwn(data1, key)) { // когда ключа НЕТ в 1-ом
      arr.push(`+ ${key}: ${data2[key]}\n`); // запишем ключ и значение из 2-го с плюсом
    }
    return arr;
  });

  return result.join('');
};

export default gendiff;
