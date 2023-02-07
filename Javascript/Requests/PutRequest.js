window.onload = async function(){

    const formPayment = document.getElementById("addingPayment");
    const formAdvertisement = document.getElementById("addingAdvertisement");
    const formAssignment = document.getElementById("addingAssignment");

    if(formPayment != null){
        formPaymentFunction("https://localhost:7021/api/payment",formPayment);
    }
    else if(formAdvertisement != null){
        formAssignmentAndAdvertisementFunction("https://localhost:7021/api/advertisement",formAdvertisement);
    }
    else if(formAssignment != null){
        formAssignmentAndAdvertisementFunction("https://localhost:7021/api/assignment",formAssignment);
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

        await ObjectAdd(url, formData);
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

        await ObjectAdd(url, formData);
    });
}

const ObjectAdd = async(url,body) => {
    await PutMethod(url,body);
    window.location.href='/HTML/HousematesManagment.html'
}

const PutMethod = async(url,body) => {
    const reposne = await fetch(url,{
         method:"PUT",
         headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(body)
    });
}
