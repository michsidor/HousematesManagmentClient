window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const data = JSON.parse(urlParams.get("data"));

    const resultHTML = data.map(item => 
        "<table class='styled-table'>" + 
        "<thead><tr><th>Amount</th><th>Deadline</th><th>Debtors</th></tr></thead>"+
        "<tbody>"+
        "<tr class='active-row'>" + 
        "<td>" + item.Amount + "</td>" +
        "<td>" + item.Deadline + "</td>" + 
        "<td>" + item.DebtorsMetadata + "</td>" + 
        "<td>" + 
            "<input type='button' onclick='ObjectDelete(" + '"https://localhost:7021/api/payment/' + item.Id +  '"'  + ")'value='Delete payment'></input>" +
            "<input type='button' onclick='ObjectEdit(" + '"' + item.Id + '"' + ")'value='Edit payment'></input>" + 
        "</td>" +
        "</tr>").join("") + 
    "</table>";
    console.log(data);

    document.getElementById("result").innerHTML = resultHTML;
};

function ObjectEdit(Id){
    window.location.href = '/HTML/UpdateModels/UpdatePayment.html?id='+Id;
}