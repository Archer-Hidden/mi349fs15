function contain(s){
  part=/[a-mA-m]/;
  if(part.exec(s.charAt(0))){
    return true;
  }
  else
    return false;
}

function showHide() {
    var myParam = location.search.split('para=')[1]
    var i;
    var el;
    if(myParam=="project"){
    el = document.getElementById("search_title");
    el.style.display = 'none';
    for( i=1 ; i<6;i++){
      el = document.getElementById("b_"+i);
      el.style.display = 'none';
    }
    document.title = "Project List | Archer's Blog";
  }
    else if(myParam=="blog"){
      el = document.getElementById("search_title");
      el.style.display = 'none';
      for( i=1 ; i<6;i++){
        el = document.getElementById("p_"+i);
        el.style.display = 'none';
      }
      document.title = "Blog List | Archer's Blog";
  }
    else if(contain(myParam)){
      for( i=1 ; i<4;i++){
        el = document.getElementById("p_"+i);
        el.style.display = 'none';
      }
      for( i=4 ; i<6;i++){
        el = document.getElementById("b_"+i);
        el.style.display = 'none';
      }
    }
    else{
      for( i=1 ; i<4;i++){
        el = document.getElementById("b_"+i);
        el.style.display = 'none';
      }
      for( i=4 ; i<6;i++){
        el = document.getElementById("p_"+i);
        el.style.display = 'none';
      }
    }
}
