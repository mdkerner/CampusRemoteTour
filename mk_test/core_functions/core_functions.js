console.log("************************************************************************************");
console.log("!\t\t !!!!! mk_test v1.0  locked, cocked, and ready to RAWWWWWWK !!!!!");
console.log("!\t\t\tWritten by Michael Kerner in like 5 seconds(it shows)")
console.log("************************************************************************************");

function assert(test_name, result){
  if(result){
    console.log("Passsed:\t" + test_name);
  }
  else {
    console.error("Failed:\t" + test_name);
  }
}

function info(message){
  console.warn("\n\t((!)) " + message + " ((!))\n");
}
