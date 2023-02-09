const userId = localStorage.getItem("id");

window.onload = async function(){
    const formPayment = document.getElementById("addingPayment");
    const formAdvertisement = document.getElementById("addingAdvertisement");
    const formAssignment = document.getElementById("addingAssignment");
    const formUser = document.getElementById("userRegister");
    const formFamily = document.getElementById("addingFamily");
    debugger;

    if(formPayment != null){
        formPaymentFunction("https://localhost:7021/api/payment/"+JSON.parse(userId),formPayment);
    }
    else if(formAdvertisement != null){
        formAssignmentAndAdvertisementFunction("https://localhost:7021/api/advertisement/"+JSON.parse(userId),formAdvertisement);
    }
    else if(formAssignment != null){
        formAssignmentAndAdvertisementFunction("https://localhost:7021/api/assignment/"+JSON.parse(userId),formAssignment);
    }
    else if(formUser != null){
        formUserFunction("https://localhost:7021/api/user",formUser);
    }
    else if(formFamily != null){
        formFamilyFunction("https://localhost:7021/api/family/" + JSON.parse(userId), formFamily)
    }
}

const formPaymentFunction = (url,form) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const Amount = form.elements.amount.value;
        const Deadline = form.elements.deadline.value;
        const DebtorsMetadata = form.elements.debtors.value;
        const formData = {
          Amount,
          Deadline,
          DebtorsMetadata
        };
        try{
            await ObjectAdd(url, formData).then(() => {
                window.location.href='/HTML/HousematesManagment.html?id='+userId;
            });
        }
        catch(error){
            console.log(error);
        }
    });
}

const formAssignmentAndAdvertisementFunction = (url,form) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const Title = form.elements.title.value;
        const Description = form.elements.description.value;
        const Comments = form.elements.comments.value;
        const Status = false;
        const formData = {
            Title,
            Description,
            Comments,
            Status
        };
        try{
            await ObjectAdd(url, formData).then(() => {
                window.location.href='/HTML/HousematesManagment.html?id='+userId;
            });
        }
        catch(error){
            console.log(error);
        }
    });
}

const formUserFunction = (url,form) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const Name = form.elements.name.value;
        const SecondName = form.elements.secondname.value;
        const Login = form.elements.login.value;
        const Email = form.elements.email.value;
        const Password = form.elements.password.value;
        const Birthday = form.elements.birthday.value;
        const Gender = form.elements.gender.value
        const formData = {
            Name,
            SecondName,
            Login,
            Email,
            Password,
            Birthday,
            Gender
        };
        try{
            await ObjectAdd(url, formData).then(() => {
                window.location.href='/HTML/LoginModel/LoginUserView.html'
            });
        }
        catch(error){
            console.log(error);
        }
    });
}

const formFamilyFunction = async(url,form) => {
    form.addEventListener("submit", async(event) =>{
        event.preventDefault();
        const Name = form.elements.name.value;
        debugger;
        const formData = {
            Name
        }
        try{
            await ObjectAdd(url, formData).then(() => {
                window.location.href='/HTML/HousematesManagment.html?id='+userId;
            });
        }
        catch(error){
            console.error(error);
        }
    })
}

const ObjectAdd = async(url,body) => {
    try{
        await PutMethod(url,body);
    }
    catch(error){
        console.error(error);
    }
}

const PutMethod = async(url,body) => {
    const reposne = await fetch(url,{
         method:"PUT",
         headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(body)
    });

    if(!response.ok){
        throw new Error(`Request failed with status code:${response.status}`)
    }
}