 let numbers100 = new Array();
    for (let i = 0 ; i <= 100 ; i++)
        numbers100.push(i);
    

function non3Divisible() {
for (let i = 0; i < numbers100.length ; i++) {
    if (i % 3 == 0)
      continue;
    console.log("Numbers that are not divisible by three :" + numbers100[i]);
}
}

function from0To150() {
    let arrayTo150 = new Array();
    for (let i= 100 ; i<= 150 ; i++)
        arrayTo150.push(i);

    let combinedArr = numbers100.concat(arrayTo150);
    console.log("Numbers From 0 To 150 (100 is repeated according to the task): " + combinedArr);
}

function adds3() {
    for (let i = 0; i < numbers100.length ; i++)
        console.log("Array[" + i + "] + 3 = " + (numbers100[i] + 3));
}

function print20_40() {
    for (let i = 20; i <=40 ; i++)
        console.log("Array[" + i + "] = " + (numbers100[i]));
}

function shuffled$decended() {
     for (let i = numbers100.length - 1; i >= 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [numbers100[i], numbers100[j]] = [numbers100[j], numbers100[i]];
            console.log("shuffled Array[" + i + "] = " + numbers100[i]);
     }
     numbers100.sort((a, b) => b - a);
     console.log("-------------------------------------------------");
     for (let i = 0; i < numbers100.length ; i++)
        console.log("Desended Array[" + i + "] = " + numbers100[i]);
     


}