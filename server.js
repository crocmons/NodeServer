// Task 1: Basic Node.js Server
import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) =>{

    res.writeHead(200, { "Content-Type" : "text/plain" });

    res.end("Hello, World!\n")
})

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});


//----(using Express.js)------
// import express from 'express';
// const app = express();
// const PORT = 3000;
// app.get('/', (req, res) => {
//     res.send("Hello, World!")
// });

// app.listen(PORT, ()=>{
//     console.log(`Server is running on http://localhost:${PORT}`)
// });
// ------------------//



// Task: 2 Data Manipulation:
function sumArray(nums){
      if(!Array.isArray(nums)){
        throw new Error("Input should be an array")
      }

      let sum = 0;
      for (let i = 0; i < nums.length; i++){
          if(typeof nums[i] !== "number"){
            throw new Error("All items in array should be a number")
          }

          sum += nums[i];
      }

      return sum;
}

// Example:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalSum = sumArray(inputArray);
console.log('Total sum of all the numbers:', totalSum);




// Task 3: Asynchronous File Handling

function countWords(text){
     const words = text.split(/\s+/).filter(word => word !== "");
     return words.length;
}

function countWordsInFile(filePath){
    fs.readFile(filePath, 'utf-8', (err, data)=>{
        if(err){
            console.error('Error reading the file:', err)
        }else{
            const wordCounted = countWords(data);
            console.log("Total Counted Words:", wordCounted);
        }
    })
}

const filePath = 'data.txt';
countWordsInFile(filePath);
