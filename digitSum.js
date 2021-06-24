const superDigit = (data) => {
  //convert input params nya menjadi array
  const tmp = data.split('')

  //melakukan penambahan
  let value = tmp.reduce((acc, cur) => acc + parseInt(cur), 0)
  // panjang hasil
  const valueLength = value.toString().length;

  if(valueLength > 1){
    superDigit(value.toString())
  }else {
    return console.log(value)
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('Input = ', input => {
  const inputToArr = input.split(' ');
  const tmp = []

  for(let i = 0; i < inputToArr[0].length; i++){
    //melakukan push ke tmp
    tmp.push(parseInt(inputToArr[0].charAt(i)))
  }

  const arr = []

  for(let i = 0; i < parseInt(inputToArr[1]); i++){
    arr.push(...tmp);
  }

  superDigit(arr.join(''));

  readline.close();
});