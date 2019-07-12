//for order click
function myFunction() {
    document.getElementById("header").style.display = "none";
    document.getElementById("headerdua").style.display = "block";
  }
// get radio value  
function displayRadioValue(x) { 
  var hasil = null

  var ele = document.getElementsByName(x); 
    
  for(i = 0; i < ele.length; i++) { 
        
      if(ele[i].type==="radio") { 
        
          if(ele[i].checked) 
             hasil = ele[i].value

    } 
  } 
  return hasil


}

var hasill =[]

// untuk menjumlahkan
function jumlahkan () {

  var sum = hasill.map(function myFunc(num) {
return Number (num)}) 
  var  totalnya = sum.reduce(function myFunc(total, num) {
return total + num;
})
document.getElementById('resultharga').innerHTML= 'Rp ' + totalnya
document.getElementById('resulthargadua').innerHTML= 'TOTAL ' + '         ' + '      Rp' + totalnya
}

// ukuran pizza
function size() {
var x = displayRadioValue('size')

hasill[0] = x


if ( x === '25000') {

document.getElementById("resultdua").innerHTML = '-Small' + ' pizza' + '     Rp 25.000'
} 
else if (x === '50000') {

document.getElementById("resultdua").innerHTML = '-Normal' + ' pizza' + '    Rp 50.000'
} 
else if (x === '75000') {

document.getElementById("resultdua").innerHTML = '-Large' + ' pizza' + '     Rp 75.000'
} 

jumlahkan()
}

// pilihan saus 
function sauce () {
var x = displayRadioValue('sauce')

hasill[1] = x


if ( x === 'bbq') {
hasill[1] = 25000
document.getElementById("resulttiga").innerHTML ='-Bbq ' + 'sauce' + '          Rp 25.000'
} 
else if (x === 'ricotta-cheese') {
hasill[1] = 25000
document.getElementById("resulttiga").innerHTML ='-Ricotta-cheese ' + 'sauce' + 'Rp 25.000'
} 
else if (x === 'nutella') {
hasill[1] = 25000
document.getElementById("resulttiga").innerHTML ='-Nutella ' + 'sauce' + '        Rp 25.000'
} 
jumlahkan()
}

// get topping 
function gettopping (){
  var items=document.getElementsByName('topping');
  var selectedItems="";
  for(var i=0; i<items.length; i++){
    if(items[i].type=='checkbox' && items[i].checked==true)
      selectedItems+=items[i].value+"\n"+" ,";
  }
  document.getElementById("resultlima").innerHTML = "( " + selectedItems + ")"
}

// banyak topping
function toppingamount () {
var x = displayRadioValue('toppingamount')
console.log(x)
hasill[3] = x


if ( x === '5000') {

document.getElementById("resultempat").innerHTML = '-Less' + ' topping' + '      Rp 5.000'
} 
else if (x === '15000') {

document.getElementById("resultempat").innerHTML = '-Normal' + ' topping' + '    Rp 15.000'
} 
else if (x === '25000') {

document.getElementById("resultempat").innerHTML = '-More' + ' topping' + '       Rp 25.000'
} 
jumlahkan()
}

// crust
 function crustt (){
  var x = document.getElementById("crust").value
  hasill [4] = x
   if (x === "chessybites"){
hasill [4] = '20000'
document.getElementById("resultenam").innerHTML = '-Chessybites' + '       Rp 20.000'
   } else if (x === "panpizza"){
    hasill [4] = '10000'
document.getElementById("resultenam").innerHTML = '-Panpizza' + '          Rp 10.000'
       }
      else if (x === "stuffedcrust"){
        hasill [4] = '35000'
document.getElementById("resultenam").innerHTML = '-Stuffedcrust' + '      Rp 35.000'        
           }
   jumlahkan()
 }

// payment
function getmoney () {
  var money = document.getElementById("payment").value
  
  var sum = hasill.map(function myFunc(num) {
    return Number (num)}) 
      var  totalnya = sum.reduce(function myFunc(total, num) {
    return total + num;
    })
  console.log(totalnya)
  if (money >= totalnya){
    alert('oke')
  } 

}