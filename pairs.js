const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('Input = ', input => {
  const panjangArr = input.charAt(0)
  const target = input.charAt(2)

  readline.question(`input value (max ${panjangArr})  = ` , data => {
    let arr = data.split('').splice(0, panjangArr);

    let count=0;
    
    for(let i = 0; i < arr.length; i++){

      for(let j = 0; j < arr.length; j++){
        let hasil = arr[i] - arr[j]
        if(hasil == target){
          count++
        }
      }

    }
    console.log(count)
    readline.close();
  })
});