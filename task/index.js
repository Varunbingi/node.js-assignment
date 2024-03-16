const fs=require('fs');
const data="Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browserNode.js lets developers use JavaScript to write command line tools and for server-side scripting."
fs.writeFileSync('nodejsArchiture.txt',data);
// reading a file 
const data1=fs.readFileSync('nodejs_architecture.txt');
console.log(data1.toString());


//appending data into a file

const data2=" compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications bulit on pther franeworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is high;y scalable and provides high performance. Node js also flexiable with multiple frameworks and makes the development process eadiler."

fs.appendFileSync('nodejs_architecture.txt',data2);

// deleting a file 
fs.unlink('nodejs_architecture.txt',function(err){
    if(err){
        console.log("Error in deleting file");
    }
    console.log("File Deleted SuccessFully");
})