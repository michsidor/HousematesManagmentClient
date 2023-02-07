const ObjectDelete = async(url) =>{
    await DeleteMethod(url);
    window.location.href='/HTML/HousematesManagment.html'
}

const DeleteMethod = async(url) => {
    const response = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    })
}