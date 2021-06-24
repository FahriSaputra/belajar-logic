//kesulitan pada nested input, jadi saya langsung membuat function nya

const twoString = (arr) => {
  let isInclude = "NO"
  for(let i = 0; i <= arr[1].length; i++){
    if(arr[1].charAt(i)){
      isInclude = "YES"
    }
  }
  return isInclude
}

console.log(twoString(['qwerty', 'aqsds']))