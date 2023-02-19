function createTable()
{
  let rows = prompt("Enter number of rows");
  let columns = prompt("Enter number of columns");
  document.write("<table>");
  for(var i=1;i<=rows;i++)
  {
    document.write("<tr>");
    for(var j=1;j<=columns;j++)
    {
      document.write("<td>Row" + i + " Column" + j + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}


function drawInHtml(){
  let arr=["USA", "Canada", "Jordan", "London"]
  var tag1=document.createElement("br");
  document.body.appendChild(tag1);

  var tag2=document.createElement("ol");
  document.body.appendChild(tag2);
}

function createSomething()
{
  var d = document.createElement("p");
  //d.setAttribute("color", "red");
  
  var d2 = document.createElement("input");
  d2.setAttribute("type", "checkbox");
  
  document.body.appendChild(d2);
  var txt=document.createTextNode("Hello");
  d.style.color="red";
  
  d.appendChild(txt);

  document.body.appendChild(d);
}