//1st task

// let A=+prompt('Please enter a number:');
// function Print() {
//     let num;
//     for (let i = 0; i < 1000; i++) {
//         if (i%A===0) {
//             console.log(i);
//         }
//     }
   
// }
// Print();

//2nd task
let A=+prompt('Please enter a number:');
function findCount() {
    let count=0;
    for (let i = 0; i*i <A ; i++) {
        count++;
        
    }
    console.log(`Count:${count}`);
}
findCount();