module.exports = function toReadable (number) {
    let result = []
     let digits = {
          0: "zero",
          1: "one",
          2: "two",
          3: "three",
          4: "four",
          5: "five",
          6: "six",
          7: "seven",
          8: "eight",
          9: "nine"
    };
     
     let dozens = {
          10: "ten",
          11: "eleven",
          12: "twelve",
          13: "thirteen",
          14: "fourteen",
          15: "fifteen",
          16: "sixteen",
          17: "seventeen",
          18: "eighteen",
          19: "nineteen",
          20: "twenty",
          30: "thirty",
          40: "forty",
          50: "fifty",
          60: "sixty",
          70: "seventy",
          80: "eighty",
          90: "ninety"
    }

    number = number.toString().split('')
    if (number.length > 2) {
        result.push(digits[number[0]]+' '+'hundred')
        number.shift()
    }

    if (number.length > 1) {
        if(dozens[number.join('')]) {
            result.push(dozens[number.join('')])
        }
        else  {
            result.push (dozens[(number[number.length-2])+'0'])
            if(result[result.length-1] == undefined) {
                result.pop()
            }
            result.push(digits[(number[number.length-1])])
        }
    }

    if (number.length -1 == 0 ) {
        result.push(digits[number])
    }
    
    if (result[result.length-1] == 'zero' && result.length !==1 ){
        result.splice(result.length-1, 1)
    }

    return result.join(' ')
}



