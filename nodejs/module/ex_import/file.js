const fs = require("fs");

const writefile=(fileName, data)=>{
    fs.writeFile(fileName, data ,(err) =>
    {
        if(err)console.log(err);
        else console.log("write operation succeeded");
    });
}
const readfile=(fileName)=>{
    fs.readFile(fileName, 'utf8',(err, data)=>{
        if(err) throw err;
        console.log(data);
    });
}
module.exports.write=writefile;
module.exports.read=readfile;
