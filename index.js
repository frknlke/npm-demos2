const parquet = require('parquetjs');

async function readParquetFile() {
  try {
    let reader = await parquet.ParquetReader.openFile('converted4.parquet');
    let cursor = reader.getCursor();


    
    let record = null;
    while (record = await cursor.next()) {
      console.log(record);
    }
    

    await reader.close();
    console.log('done');
  } catch (error) {
    console.error('Error:', error);
  }
}

readParquetFile();