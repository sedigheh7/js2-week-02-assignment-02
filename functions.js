const changeEmailFromGmailToHicoders = (gmailArr) => {
    let gmailToHicoders= gmailArr.map((gmail) => gmail.toLowerCase()
    .replace("gmail.com" , "hicoders.ch"))
    .reverse()
    return gmailToHicoders
};


const findSuperNumbers = (pArray) => {
        let supperNumberArray = [];
        pArray.map(superNumber=>{ //30
          let numberList = String(superNumber).split("").map(Number)  // [3,0]
          let totalNumber=0;
          numberList.map(digit=>{  // [3,0]
              totalNumber+=Math.pow(digit,numberList.length) //3 ^ 2 + 0^0
          })
          if(totalNumber===superNumber){
              supperNumberArray.push(superNumber)
          }
        })
        console.log(supperNumberArray)
        return supperNumberArray;
      };

export { changeEmailFromGmailToHicoders, findSuperNumbers };

// let arr1 = arr
// .unshift(arr.pop())
// .toLowerCase()
// // return arr1