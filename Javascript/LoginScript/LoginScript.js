const userId = localStorage.getItem("id");

window.onload = function(){
    const userForm = document.getElementById("loginUser");
    const familyForm = document.getElementById("loginFamily");

    if(userForm != null){
        UserFormFunction(userForm);
    }
    else if(familyForm != null){
        FamilyFormFunction(familyForm);
    }
}

const UserFormFunction = (form) =>{
    window.addEventListener("submit", async (event) => {
        event.preventDefault();
        const Login = form.elements.login.value;
        const Password = form.elements.password.value;
        const body ={
            Login,
            Password
        };
        const result = await PostUserRequest(body,'https://localhost:7021/api/user');
        window.location.href = "/HTML/HousematesManagment.html?id=" + JSON.stringify(result);
    });
}

const FamilyFormFunction = (form) =>{
    window.addEventListener("submit", async (event) => {
        event.preventDefault();
        const Id = form.elements.id.value;
        const Name = form.elements.name.value;
        const body ={
            Id,
            Name
        };
        await PostFamilyRequest(body,"https://localhost:7021/api/family/" + JSON.parse(userId));
        window.location.href = "/HTML/HousematesManagment.html?id=" + userId;
    });
}

const PostUserRequest = async (form,url) => {
    const response = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(form)
    });

    if(!response.ok){
        throw new Error(`Request failed with status code:${response.status}`)
    }

    const result = response.json();
    return result;
}

const PostFamilyRequest = async (form,url) => {
    const response = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(form)

    });

    if(!response.ok){
        throw new Error(`Request failed with status code:${response.status}`)
    }
}