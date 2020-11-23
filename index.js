// Code your solutions in this file
function writeCards(array, string){
    const newArray = []
    for(let i = 0 ; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}

function countDown (number) {

for(let i = 0; i<=11; i--){
    console.log(`${i}`);
  }
};

countDown(number);