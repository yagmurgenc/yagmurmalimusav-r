/*
?jQuery load() fonksiyonu
load() fonksiyonu ile bir internet sayfasından anlık veri alabiliriz.
Kullanım: $(nesne).load(adres, veri, dönüş fonksiyonu);
- adres, veriyi alacağımız internet sayfası adresi, dosya adı.
- veri
- dönüş fonksiyonu, veri yüklendikten sonra çalıştırılacak bir fonksiyon
!Not defteri açıp adını "demo.txt" koyun ve içine şunları yazın:
<h2>Veri Alindi!</h2>
<p>Veriyi aldik, napalim?</p>
! HTML belgemizde aşağıdaki koda yer verelim:
<div id="txt" style="border: 1px #000000 solid; margin: 
3px; padding: 5px; width: 320px; height: 140px;"> </div>
<button id="btn">Veri Al</button>
<script>
$("#btn").click(function(){
   $("#txt").load("demo.txt");
});
</script>
?Dönüş Fonksiyonu
$("button").click(function(){
   $("#div1").load("demo.txt",function(responseTxt,statusTxt,xhr){
     if(statusTxt=="success")
       alert("İçerik başarıyla yüklendi.");
     if(statusTxt=="error")
       alert("Hata: "+xhr.status+": "+xhr.statusText);
   });
 });
 ?Veri Alma ve Veri Gönderme
 !jQuery ile AJAX kullanarak veri işlemek için önce şu kavramları tanımlayalım:
- GET - veriyi almak için
- POST - veri göndermek için
!GET ile Veri Almak
$.get("adres",function(veri){ ifadeler }); şeklinde kullandığımız bu fonksiyon, bir sayfadan GET yöntemi ile veri almamızı sağlar.
!Bir asp dosyası hazırlayın ve içine şu bilgiyi koyun:
<%
 response.write("Bu disardan aldigimiz bir bilgidir.")
%>
!Ardından HTML dosyamızda şu kodlara yer verelim.
<div id="txt" style="border: 1px #000000 solid; margin: 
3px; padding: 5px; width: 320px; height: 140px;"> </div>
<button id="btn">Veri Al</button>
<script>
$("#btn").click(function(){
   $.get("demo.asp",function(veri){
      $("#txt").html(veri);
   });
});
</script><br/><br/>
?POST ile Veri Göndermek
!Bir "demo.asp" dosyası yaratıp içine şunu yazın:
<%
   response.write("Adiniz " & Request.Form("ad") & ", soyadiniz " & Request.Form("soyad"))
%>
!Ardından HTML dosyanıza şu kodu kopyalayın:
<div id="txt3" style="border: 1px #000000 solid; margin: 3px; 
padding: 5px; width: 320px; height: 140px;"> </div>
<button id="btn3">Veri Al</button>
<script>
$("#btn3").click(function(){
   $.post("demo.asp",
   {
     ad:"Murat",
     soyad:"Elicaliskan"
   },
   function(data,status){
     $("#txt3").html(data);
   });
 });
</script><br/><br/>






*/
