/**
 * Created by tothzs on 2018.02.26..
 *
 * Read the examResults.json file which contains the results of a complex exam.
 * The application has to log the students results.
 * There are 4 subjects on the exam and each subject has 2 questions.
 * So there are 8 tasks on the exam.
 * Each question worth 8 points.
 * At least 4 points per subject are required to pass the exam.
 * Minimum 32 point required to pass the exam.
 *
 * Grading:
 * 0-32     Fail
 * 33-40    Satisfactory
 * 41-48    Average
 * 49-56    Good
 * 57-64    Excellent
 *
 * If the student fails from one subject, then warning message is generated.
 * If the student fails on the exam, then an error message is generated.
 * If the student passes the exam, then an info message is generated.
 *
 */

var winston = require('winston');
var fs = require('fs');

winston.add(winston.transports.File,{filename: 'examResults.log'});

const SUBJECT_MINIMUM = 4;

fs.readFile('./examResults.json',{encoding : "utf8", flag : 'r'},function(err,data){
   var results = JSON.parse(data);
   results.forEach(function(exam){
       // console.log(exam.student.name);
       var osResult =exam.results.operatingSystems[0] + exam.results.operatingSystems[1];
       var oopResult =exam.results.objectOrientedProgramming[0] + exam.results.objectOrientedProgramming[1];
       var networkResult = exam.results.computerNetworks[0] + exam.results.computerNetworks[1];
       var swengResult = exam.results.softwareEngineering[0] + exam.results.softwareEngineering[1];
       var hasFailed = false;
       if(osResult < SUBJECT_MINIMUM){
           hasFailed = true;
           winston.warn(exam.student.name+" has failed from Operating Systems!");
           // console.log(exam.student.name+" has failed from OS!");
       }
       if(oopResult < SUBJECT_MINIMUM){
           hasFailed = true;
           winston.warn(exam.student.name+" has failed from Object Oriented Programming!");
       }
       if(networkResult < SUBJECT_MINIMUM){
           hasFailed = true;
           winston.warn(exam.student.name+" has failed from Computer Networks!");
       }
       if(swengResult < SUBJECT_MINIMUM){
           hasFailed = true;
           winston.warn(exam.student.name+" has failed from Software Engineering!");
       }
       if(hasFailed){
           winston.error(exam.student.name+' has failed at least one subject!');
       }
       else{
           var sumScore = osResult + oopResult + networkResult + swengResult;
           if(sumScore > 0 && sumScore <= 32 ){
               winston.error(exam.student.name+" has failed because he/she got only "+sumScore+" points");
           }
           if(sumScore > 33 && sumScore <= 40 ){
               winston.info(exam.student.name+" is Satisfactory because he/she got "+sumScore+" points");
           }
           if(sumScore > 41 && sumScore <= 48 ){
               winston.info(exam.student.name+" is Average because he/she got "+sumScore+" points");
           }
           if(sumScore > 49 && sumScore <= 56 ){
               winston.info(exam.student.name+" is Good because he/she got "+sumScore+" points");
           }
           if(sumScore > 57 && sumScore <= 64 ){
               winston.info(exam.student.name+" is Excellent because he/she got "+sumScore+" points");
           }
       }
   });
});
console.log('Hello World');