const hej = ["et eller andet","noget andet","noget tredje"];
i=0;
knap = document.getElementById('pixel');
function hej2(){
  for(i = 0; i<hej.length; i++){
  if(i=0){
    console.log(hej[i])
  }
  else {
    i=0;
    console.log(hej[i])
  }
  }
}
knap.addEventListener("click",hej2)
