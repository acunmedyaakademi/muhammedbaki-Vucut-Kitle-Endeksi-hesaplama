let boy =Number( prompt("Boyunuz ? ") );
let kilo =Number(prompt(" Kilonuz? ")) ;
let boykare = boy * boy;
let indeks = kilo / boykare;
  
if (indeks > 40 ) {
  alert("Kilo indeksiniz " + indeks + " Morbid Obezsiniz") ;
}else if (indeks > 30 ) {
  alert("Kilo indeksiniz " + indeks + " Obezsiniz") ;
}else if (indeks > 25 ) {
  alert("Kilo indeksiniz " + indeks + " İdeal Kilonun Üstündesinizz") ;
}else if (indeks > 18.5 ) {
  alert("Kilo indeksiniz " + indeks + " İdeal Kilodasınız") ;
}else {
  alert("Kilo indeksiniz 1.5" + indeks + " İdeal Kilonun altındasınız") ;
}