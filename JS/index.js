let load=document.getElementById('loader');
console.log(load);
let back=document.getElementById('bg');
let loadcount=0;
let int=setInterval(loaderset,30);
function loaderset(){
  loadcount++;
  if(loadcount<101){
    load.innerHTML=`${loadcount}%`;
    console.log(loadcount);
    load.style.opacity=scale(loadcount,0,100,1,0);
    back.style.filter=`blur(${scale(loadcount,0,100,30,0)}px)`
  }
  /*if(loadcount>99){
    clearInterval(int);
  }
  load.innerHTML=`${loadcount}%`;
  console.log(loadcount);
  load.style.opacity=scale(loadcount,0,100,1,0);
  back.style.filter=`blur(${scale(loadcount,0,100,30,0)}px)`*/
}
const scale=(num,in_min,in_max,out_min,out_max)=>{
  return ((num-in_min)*(out_max-out_min))/(in_max-in_min)+out_min;
}
loaderset();