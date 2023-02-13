window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const actualWindow = window.location.href;
  if(actualWindow.includes("?data")){
    const data = JSON.parse(urlParams.get("data"));
    const resultHTML = data.map(item => 
      "<table class='styled-table'>" + 
      "<thead><tr><th>Title</th><th>Description</th><th>Comments</th></tr></thead>"+
      "<tbody>"+
      "<tr class='active-row'>" + 
      "<td>" + item.Title + "</td>" +
      "<td>" + item.Description + "</td>" + 
      "<td>" + item.Comments + "</td>" + 
      "</tr>").join("") + 
  "</table>";
  console.log(data);
  document.getElementById("result").innerHTML = resultHTML;
  }
  else if(actualWindow.includes("?myData")){
    const data = JSON.parse(urlParams.get("myData"));
    const resultHTML = data.map(item => 
      "<table class='styled-table'>" + 
      "<thead><tr><th>Title</th><th>Description</th><th>Comments</th></tr></thead>"+
      "<tbody>"+
      "<tr class='active-row'>" + 
      "<td>" + item.Title + "</td>" +
      "<td>" + item.Description + "</td>" + 
      "<td>" + item.Comments + "</td>" + 
      "<td>" + 
          "<input type='button' onclick='ObjectDelete(" + '"https://localhost:7021/api/assignment/' + item.Id +  '"'  + ")'value='Delete assignment'></input>" +
          "<input type='button' onclick='ObjectEdit(" + '"' + item.Id + '"' + ")'value='Edit assignment'></input>" + 
      "</td>" +
      "</tr>").join("") + 
  "</table>";
  console.log(data);
  document.getElementById("result").innerHTML = resultHTML;
  }
};

function ObjectEdit(Id){
  window.location.href = '/HTML/UpdateModels/UpdateAssignment.html?id='+Id;
}