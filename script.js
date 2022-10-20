var div = document.createElement("div");
div.setAttribute("class","formstyle");
// div.innerHTML = "Hai";


var form = document.createElement("form");
form.setAttribute("name","form1");

var input = document.createElement("input");
input.setAttribute("id","txt");
input.setAttribute("class","textview");
form.append(input);

div.append(form);

function createtab(tagname,attrname,attrvalue)
{
    var table=document.createElement(tagname);
    table.setAttribute(attrname,attrvalue);
    return table;
}
function createtr(tagname)
{
    var tr=document.createElement(tagname);
    return tr;
}
function createtd(tagname)
{
    var td =document.createElement(tagname);
    // td.innerHTML = content;
    return td;
}

function btncreate(element,val=" ")
{
    var element = document.createElement(element);
    element.innerHTML = val;
    return element;
}

function clear()
{
   //document.getElementById("txt").innerHTML = "0";
   
    console.log("0");
}





var table = createtab("table","class","table");
var tr1 = createtr("tr");
var td1 = createtd("td");

var btnclr = btncreate("button","C");
btnclr.setAttribute("id","clr");

// c.addEventListener("click",clear);

// btnclr.addEventListener("click", function() {
//     console.log("Hello World");
//   });

var btnbs = btncreate("button","B");
// btnbs.addEventListener("click","")

var btndiv = btncreate("button","/");

var btnmul = btncreate("button","X");

var tr2 = createtr("tr");
var td2 = createtd("td");

var btn7 = btncreate("button","7");
var btn8 = btncreate("button","8");
var btn9 = btncreate("button","9");
var btnmin = btncreate("button","-");

var tr3 = createtr("tr");
var td3 = createtd("td");

var btn4 = btncreate("button","4");
var btn5 = btncreate("button","5");
var btn6 = btncreate("button","6");
var btnplus = btncreate("button","+");

var tr4 = createtr("tr");
var td4 = createtd("td");

var btn1 = btncreate("button","1");
var btn2 = btncreate("button","2");
var btn3 = btncreate("button","3");


td4.append(btn1,btn2,btn3);
tr4.append(td4);

td3.append(btn4,btn5,btn6,btnplus);
tr3.append(td3);

td2.append(btn7,btn8,btn9,btnmin);
tr2.append(td2)
td1.append(btnclr,btnbs,btndiv,btnmul);
tr1.append(td1);
table.append(tr1,tr2,tr3,tr4);
form.append(table);
document.body.append(div);

var c = document.getElementById('clr');
// c.addEventListener("click",clear);
c.addEventListener("click", function() {
    console.log("Hello World");
  });
