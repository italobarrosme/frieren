import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';

export async function post({ request }: any) {
  const results:any = [];
  let total = 0;

  const filePath = path.resolve('./path-to-your-csv-file.csv');

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: any) => {
        total += parseFloat(data.valor);
        results.push(data);
      })
      .on('end', () => {
        resolve({
          body: JSON.stringify({
            total,
            data: results,
          }),
        });
      })
      .on('error', (err: any) => reject(err));
  });
}
