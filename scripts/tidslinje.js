const billede = ['images/omos/1.jpg', 'images/omos/2.jpg', 'images/omos/3.jpg','images/omos/4.jpg','images/omos/5.jpg'];
const overskrift = ['1. Juli 1965', '1973', '9. august 1973', 'Store musical produktioner','1995'];
const tilloop = ["Hej Alle sammen", "dette er et array", "som consollogges"];
let i = 0;
const vknap = document.getElementById('left_btn');
const hknap = document.getElementById('right_btn');

function visText(){
  if(i == 0){
    document.getElementById('tid-overskrift').innerHTML = overskrift[i];
    document.getElementById('text1').style.display = 'block';
    document.getElementById('text2').style.display = 'none';
    document.getElementById('text3').style.display = 'none';
    document.getElementById('text4').style.display = 'none';
    document.getElementById('text5').style.display = 'none';
  }
  else if(i == 1){
    document.getElementById('tid-overskrift').innerHTML = overskrift[i];
    document.getElementById('text1').style.display = 'none';
    document.getElementById('text2').style.display = 'block';
    document.getElementById('text3').style.display = 'none';
    document.getElementById('text4').style.display = 'none';
    document.getElementById('text5').style.display = 'none';
  }
  else if(i == 2){
    document.getElementById('tid-overskrift').innerHTML = overskrift[i];
    document.getElementById('text1').style.display = 'none';
    document.getElementById('text2').style.display = 'none';
    document.getElementById('text3').style.display = 'block';
    document.getElementById('text4').style.display = 'none';
    document.getElementById('text5').style.display = 'none';
  }
  else if(i == 3){
    document.getElementById('tid-overskrift').innerHTML = overskrift[i];
    document.getElementById('text1').style.display = 'none';
    document.getElementById('text2').style.display = 'none';
    document.getElementById('text3').style.display = 'none';
    document.getElementById('text4').style.display = 'block';
    document.getElementById('text5').style.display = 'none';
  }
  else if(i == 4){
    document.getElementById('tid-overskrift').innerHTML = overskrift[i];
    document.getElementById('text1').style.display = 'none';
    document.getElementById('text2').style.display = 'none';
    document.getElementById('text3').style.display = 'none';
    document.getElementById('text4').style.display = 'none';
    document.getElementById('text5').style.display = 'block';
  }
}

function tilbage(){
  i <= 0 ? i = 0: --i;
  document.getElementById('tbillede').src = billede[i];
  visText()
  }

function frem(){
  i > 3 ? i = 0 : i++;
  document.getElementById('tbillede').src = billede[i];
  visText()
}

for (i=0; i<3; i++){
  console.log(tilloop[i]);
  
}


vknap.addEventListener('click', tilbage);
vknap.addEventListener('click', visText);
hknap.addEventListener('click', frem);
hknap.addEventListener('click', visText);
