function strConstr(stringArray) {
  stringArray.forEach(string => {
    let p = "";
    for(let j = 0; j < string.length; j++){
      if(p.indexOf(string[j]) === -1){
        p += (string[j]);
      }
    }
    console.log(p.length);
  });
}

//strConstr(["abcd", "abab", "iubi"]);