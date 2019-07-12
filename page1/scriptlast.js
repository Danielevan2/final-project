
function getname () {

    var hasil;
    var hasil2;
    var x = document.getElementById("usrform")
    
     for(i = 0; i < x.length; i++) { 
            
          if(x[i].name==="usrname") { 
            
                 hasil = x[i].value
          } else if (x[i].name === "quantity"){
                hasil2 = x[i].value
          }
           
          }
    document.getElementById("ii").innerHTML = hasil
    document.getElementById('dd').innerHTML = hasil2
    console.log (hasil)
    
          }
