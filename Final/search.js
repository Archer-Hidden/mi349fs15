fucntion contain(s){
  part=/[a-mA-m]/;
  if(part.exec(s)){
    return true;
  }
  else
    return false;
}
var myParam = location.search.split('para=')[1]
