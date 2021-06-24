const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('Input = ', input => {
  let panjangArr = input.charAt(0)
  let rotasi = input.charAt(2)

  let arr = [];

  //input array
  for(let i = 0; i < panjangArr; i++){
    arr.push(i + 1);
  }

  //melakukan rotasi
  for(let i = 1; i <= rotasi; i++){
    //mengambil value awal array
    let firstValue = arr[0];

    //lalukan penambahan pada array
    arr.push(firstValue);
    //melakukan penghapusan value awal array
    arr.shift();
  }

  //print hasil
  console.log(arr.join(' '))

  readline.close();
});