/*let f=1,n;
n=Number(prompt("Enter any number:= "));
document.writeln("Number := "+n+" , ")
while(n>0){
    f=f*n;
    n--;

}
document.writeln()




let base=5,index=3,power=1;

while(index>0)
{
    power=power*base;
    index--;
}
document.writeln("Power= "+power);

*/

/*let n=22,i=1;

while(i<=n){
    if(n%i==0)
        document.writeln(i);
    i++;
}

*/
/*
let n=22,i=1,isPrime=0;

while(i<=n/2){
    if(n%i==0)
        isPrime++;
    i++;

}
if(isPrime>0){
    document.writeln("Give Num is not prime");

}
else{
    document.writeln("Give numm is prime num");
}
*/
/*
let i=1,j,n=7
while(i<=n){
    j=i;
    while(j<n){
        document.write("&nbsp;&nbsp;&nbsp;")
        j++
    }
    j=1;
    while(j<=(i*2-1)){
        document.writeln("* ")
        j++
    }
    i++
    document.writeln("<br>")
 
}
i=2
while(i<=n){
    j=1;
    while(j<i){
        document.write("&nbsp;&nbsp;&nbsp;")
        j++
    }
    j=i;
    while(j<=(n*2)-i){
        document.writeln("* ")
        j++
    }
    i++
 
    document.writeln("<br>")
 
}
document.writeln("</h3>")
 
*/
/*
for(let i=1,j=5;i<=5;i++,j--){
    if(i==j)
        continue;
    document.writeln(i+" : "+j+ "<br>")

}
document.writeln("</h3")
*/
/*
do{
   statements
   inc/dec
}
while(condition)
*/
/*let n,option
do{
    n=Number(prompt("Enter any number= "))
    document.writeln(n+" : "+n*n,"<br>")
    option=confirm("Do you want to continue")
}
while(option);*/

/*
switch(expression)
{
    case constvalue:statement
        break;
    case constvalue2:statement
        break;
    default:statement

}
*/
/*
function add(){
    let n1=Number(prompt('n1 :'));
    let n2=Number(prompt('n2 :'));
    let res=n1+n2;
    document.writeln(`Addition of ${n1} and ${n2} = ${res}`);

}
add()
*/
/*
    function add(a,b)
    {
        let res=a+b;
        document.writeln(`Addition of ${a} and ${b} is ${res}`);
    }
    let n1=Number(prompt('n1='));
    let n2=Number(prompt('n2='));
    add(n1,n2);

*/
/*
function reverse(n){
    let rem,rev=0;
    while(n>0){
        rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    return rev
}
let n=Number(prompt("enter any number: "));
document.writeln("Number : "+n)
let r=reverse;
document.writeln("<br>Reverse : "+r(n));
  
 */
/*
let add = function addition(){
    a = 4
    b = 5
    add = a+b 
    return add

}

document.writeln("Addition of numbers: "+add());
*/
/*
let add = function (a,b){
    addition = a+b
    return addition
}
document.writeln("Addition of Number: "+add(10,20))
*/
/*
let add = (a,b)=> (a+b)//arrow function : most important 
document.writeln("Addition of number: " + add(10,20))
*/
/*
function myname(name){
    return name
}
function sayHello(name){
    alert("Good Morning := "+name("Jyotsna"))
}

sayHello(myname);

*/
/*
a = new Array(5)
document.writeln(a,":",typeof a)
document.writeln("<br>")
a[0]="Hello"
a[1]=1
a[2]=true
a[3]=45.98
a[4]="JS"
a[10]=11
document.writeln(a,":",typeof a)
document.writeln("<br>")
*/
/*
arr=[1,2,3,4,5,6,7] //[]:indicates array //{}:indicates object
document.writeln(arr)
document.writeln("<br>")
arr1=new Array(arr.length)
for(i=0;i<=arr.length;i++){
    arr1[i]=arr[i]
}
document.writeln(arr1)
*/
/*
let arr1=[1,2,3,4,5,7]
let arr2=[1,2,3,4,5,6,7,8]
let equal=true;
if(arr1.length==arr2.length)
{
    for(let i=0;i<arr1.length;i++){
        if(arr[i]!=arr2[i]){
            equal=false;
            break;
        }
    }
    if(equal)
        document.writeln("Arrays are same")
    else
        document.writeln("Arrays are different")
}
else
    document.writeln("Array size different, array different")


*/

/*
document.writeln("<h2>")
let arr=[1,2,3,4,5]
document.writeln("Original array := "+arr)
document.writeln("<br>Length := "+arr.length)

//Push Funtion : adds the element at the end of the array and also return the length of array
let a1=[6,7,8,9,10]
let len=arr.push(a1)//it will treat the whole array as one element
document.writeln("<br>After Push := "+arr)
document.writeln("<br>Length := "+len)

//pop funtion : removes the last element from array 
let ele=arr.pop()
document.writeln("<br>After pop := "+arr)
document.writeln("<br> Element Removed= "+ele)
ele=arr.pop()
document.writeln("<br>After pop := "+arr)
document.writeln("<br> Element Removed= "+ele)
document.writeln("<h2>")
*/
/*
document.writeln("<h2>")

let arr=["Shekhar","Rajesh","Hemma","Priti"]
let name=arr.shift()//removes the first element of array
document.writeln("<br>arr := "+arr)
document.writeln("<br>arr := "+name)

let len=arr.unshift("Sudha")//adds the element at first position in array and returns tthe length
document.writeln("<br>arr := "+arr)
document.writeln("<br>arr := "+len)
document.writeln("<h2>")
*/

/*
//filter Funtion: Filter out the array based on condition
document.writeln("<h2>")
let arr=[2,3,4,5,6,7,10,12]
let evenArray=arr.filter((n)=>n%2==0)
document.writeln("<br>"+evenArray)

let names=["Radha","Maya","Priti","Swara","Payal","Shital"]
let name5length=names.filter(name=>name.length==5)
document.writeln("<br>"+name5length)

let namesSwithS = names.filter(name=>name.startsWith('P'))
document.writeln("<br>"+namesSwithS)
document.writeln("<h2>")
*/
/*
document.writeln("<h2>")
let marks=[34,46,35,49,67,89,98];
let fail=marks.filter(mark=>mark<40)
let pass=marks.filter(mark=>mark>=40 && mark<=90)
let distinction=marks.filter(mark=>mark>=90)

document.writeln("<br>Fail Students marks := "+fail)
document.writeln("<br>Pass Students marks := "+pass)
document.writeln("<br>Distinction Students marks := "+distinction)
*/
/*
document.writeln("<h2>")
let arr=[1,2,3,4,5,6,7,8,9,10]
let sq=arr.map(n=>n*n)
document.writeln("<br>Original Array:= "+arr)
document.writeln("<br>Squared Array:= "+sq)

let double=arr.map(n=>n*2)
document.writeln("<br>Doubled Array:= "+double)

let mul100=arr.map(n=>n*100)
document.writeln("<br>Multiplied Array:= "+mul100)

let names=["Usha","Deepa","Priya","Sayali"]
document.writeln("<br>Original Array:= "+names)
let namesData=names.map(name=>name+"Er. ")
document.writeln("<br>New Array:= "+namesData)

let namesupper=names.map(name=>name.toUpperCase())
document.writeln("<br>Upper Array:="+namesupper)
*/
//-----------------------------------------------------------------------------------------
/*
//ObjectsInJavaScript :== It is combination of funtions and methods

document.writeln("<h2>")
//object Initializer Syntax
let student={
    name:"Rajesh",
    age:40

}
document.writeln("<br>"+student.name+" , "+student.age)

let employee= new Object();
employee.name="Mayur"
employee.salary=50000
employee.address="Pune"

document.writeln("<br>" +employee.name+" , "+employee.salary+" , "+employee.address)

*/
//-----------------------------------------------------------------------------------------------
// Windows funtionalities

let headingTag = document.getElementById("head")
console.log(headingTag.textContent)
headingTag.style.color='red'
headingTag.style.textAlign='center'
headingTag.style.border='1px solid blue'
headingTag.style.padding='20px'

function show(){
    alert("Welcome to event handling")
}

let divs=document.getElementsByClassName('d')
console.log(divs.length)
for(let i=0;i<divs.length;i++){
    divs[i].style.border='2px solid green'
    divs[i].style.padding='20px'
    divs[i].style.width='20%'

    divs[i].style.display='inline-block'
}