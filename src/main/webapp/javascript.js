/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var message;
//console.log(message);
//message = "Hello";
//console.log(message);

//1
var carname = "Volvo XC60"; //String
console.log(carname);
var x = 3.14; //Number
console.log(x);
var bool = true; //Boolean
console.log(bool);
var a = [1,2,3,4] //Array
console.log(a);
var car = {type:"Fiat", model:"500", color:"white"}; //Object
console.log(car);

//2
var arrayBoolean = [true,false,true];
console.log(typeof arrayBoolean[1]);
var arrayString = ["","abe","bull"];
console.log(typeof arrayString[1]);
var arrayNumber = [1,2,3,4,5];
console.log(typeof arrayNumber[1]);
var ferrari = {type:"Fiat", model:"500", color:"white"}; //Object
var lamborghini = {type:"Fiat", model:"500", color:"white"}; //Object
var arrayObjects = [ferrari,lamborghini];
console.log(typeof arrayObjects[1]);
var arrayArrays = [arrayBoolean,arrayString,arrayNumber,arrayObjects];
console.log(typeof arrayArrays[0][0]);
console.log(typeof arrayArrays[1][0]);
console.log(typeof arrayArrays[2][0]);
console.log(typeof arrayArrays[3][0]);

//3
function Student(studentId, studentName)
{
    this.studentId = studentId;
    this.studentName = studentName;
    this.toString = function(){return this.studentId + " " + this.studentName;};
}

var students = [new Student("cph-rr99","John"),new Student("cph-tt99","Thomas"),new Student("cph-ff99","Fie")];

for (var i = 0;i<students.length;i++){
    console.log(students[i].toString());
}

//4
function StudentElement(studentName,age,isFemale){
    this.studentName=studentName;
    this.age=age;
    this.isFemale=isFemale;
    this.getAge = function(){ return this.age;};
    this.toString = function(){return this.studentName+" "+this.age+" isFemale="+this.isFemale+" ";}; 
}



function StudentList(students){
    this.students = students;
    this.youngestStudent = function(){
        var min = students[0].age;
        var s;
        for(var i=0;i<students.length;i++){
            if(students[i].age<min){
                min = students[i].age;
                s = students[i];
            }
        }
        return s;
    };
    this.allFemaleStudents = function(){
        var females=[];
        for(var i=0;i<students.length;i++){
            if(students[i].isFemale){
                females.push(students[i]);
            }
        }
        return females;
    };
}
studentTest = new StudentElement("Havsgaard",65,false);
var students = [studentTest,new StudentElement("Pia",24,true),new StudentElement("Louise",21,true),new StudentElement("Gabriel",18,false),new StudentElement("Keld",49,false),new StudentElement("Michael",34,false)];

arrayStudents = new StudentList(students);
console.log(arrayStudents.youngestStudent().toString());

females = arrayStudents.allFemaleStudents();

for(var i = 0; i<females.length;i++){
    console.log(females[i].toString());
}

//5
function SortedArrayOfStudents(students){
    this.students = students;
    var result=[];
    this.getArray = function(student){
        this.student = student;
        for (var i = 0;i<students.length;i++){
            if(student.age===students[i].age && student.studentName===students[i].studentName && student.isFemale===students[i].isFemale){
                
            }else{
                result.push(students[i]);
            }
        }
        return result;
    };
}

var sortedArrayOfStudents = new SortedArrayOfStudents(students);
newSortedArrayOfStudents = sortedArrayOfStudents.getArray(studentTest);

for(var i = 0; i<newSortedArrayOfStudents.length;i++){
    console.log(newSortedArrayOfStudents[i]);
}

//6
function StudentElement(studentName,age,isFemale){
    this.studentName=studentName;
    this.age=age;
    this.isFemale=isFemale;
    this.toString = function(){return this.studentName+" "+this.age+" isFemale="+this.isFemale+" ";}; 
}

students = [new StudentElement("abe",21,false),new StudentElement("gorilla",21,false)];
students.forEach(function(entry){
    console.log(entry.toString());
});
var key;
for (key in students) {
    console.log(students[key].toString());
}

//7
var max = function(){
    var key;
    var Object=arguments[0];
    for(key in arguments){
        if(Object>arguments[key]){
            Object = arguments[key];
        }
    }
    return Object;
};

console.log(max(1,2,3,4,0));

//8
var d = new Date();
var n = d.getDay();

var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

console.log(weekday[n]);

//9
//function Animal(name,color,isMammal,type) {
//    this.name = name;
//    this.color = color;
//    this.isMammal = isMammal;
//    this.type = type;
//    this.toString = function(){
//        return this.name+" "+ " " + this.color + " " + this.isMammal + " " + this.type;
//    };
//}
//
//var array = [new Animal("Iben","Black",true,"Monkey"),new Animal("Julie","White",false,"Squirrel"),new Animal("Julie","White",false,"Squirrel"),new Animal("Mango","Yellow",true,"Mufdi")];
//var key;
//for(key in array){
//    console.log(array[key].toString());
//}

//10
//function checkIsMammal(isMammal){
//    this.isMammal = isMammal;
//    if(isMammal){
//        return isMammal;
//    }
//}
//
//var a = new checkIsMammal;
//array.filter(a);
//var key;
//for(key in array){
//    console.log(array[key].toString());
//}

