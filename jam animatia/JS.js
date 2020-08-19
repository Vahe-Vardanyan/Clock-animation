
function clock(){
    var weekday= new Array(7),
    d = new Date(),
    date=d.getDate(),
    month=d.getMonth()+1,
    year =d.getFullYear();
    
   var hDeg , mDeg , sDeg ;
    
        
    var hE1= document.querySelector('.hour'),
        mE1= document.querySelector('.minute'),
        sE1= document.querySelector('.second'),
        dateE1= document.querySelector('.date'),
        dayE1= document.querySelector('.day');
  
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Teuday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saterday";
    
    var day = weekday[d.getDay()];
    hE1.style.Transform="rotate("+hDeg+"deg)";
    mE1.style.Transform="rotate("+mDeg+"deg)";
    sE1.style.Transform="rotate("+sDeg+"deg)";
    dateE1.innerHTML=date+"/"+month+"/"+year;
    dayE1.innerHTML=day;
//console.log(d);
//console.log(d.getDay());
}

setInterval("clock()",100);





















































