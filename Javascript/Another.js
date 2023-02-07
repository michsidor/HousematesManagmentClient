function PostMethod(postData){
    const response = fetch(url,{
        method:"POST",
        headers:{
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(postData)
    })

    console.log(response);
}

function PutMethod(){
    const response = fetch(url,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body:JSON.stringify(putData)    
    });

    console.log(response);
}

// const putData = {
//     "Amount": 100,
//     "Deadline": "2023-02-05T00:00:00",
//     "DebtorsMetadata": "{\"Debtor1\": 500,\"Debtor2\": 500}"
// };