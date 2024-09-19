import inquirer from'inquirer'
inquirer
.prompt([
    {
        message:"Type in url",
        name:"url"
    },
])
.then((answers)=>{
    const url = answers.URL;
})
.catch((error)=>{
    if(error.isTtyError){
        //prompt couldnt rendered
    }
    else{//something went wrong
        }
})