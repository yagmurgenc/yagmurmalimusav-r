/*
?BİLGİ EKLEME
- append() - İçeriği seçili elementin sonuna ekler.
- prepend() - İçeriği seçili elementin başına ekler.
- after() - Seçilen elementten sonra içeriği ekler.
- before() - Seçili elementten önce içeriği ekler.

!Bir elementin bittiği yere içerik ekler.(append())
<ol>
   <li>Nesne 1</li>
   <li>Nesne 2</li>
   <li>Nesne 3</li>
</ol>
<button id="btn1">Yeni nesne ekle</button>
<script>

$(document).ready(function(){
  $("#btn1").click(function(){
    $("ol").append("<li>Yeni nesne</li>");
  });
});
</script><br/><br/>

!1. Yol: HTML Kullanmak
var txt1="<p>Text.</p>";
!2. Yol: jQuery ile Eklemek
var txt2=$("<p></p>").text("Text.");
!3. Yol: HTML DOM Kullanmak
var txt3=document.createElement("p");
txt3.innerHTML="Text.";

!aynı anda üç yöntemi de kullanarak üç adet element oluşturuldu
<script>
function appendText()
{
   var txt1="<p>Yöntem 1</p>";

   var txt2=$("<p></p>").text("Yöntem 2");

   var txt3=document.createElement("p");
   txt3.innerHTML="Yöntem 3";

   $("#div1").append(txt1,txt2,txt3);
}
</script><br/><br/>
<div id="div1"> </div>
<button onclick="appendText();">Elementleri Ekle</button><br/><br/>

!Bir HTML elementinden sonra başka bir element ya da içerik eklemek için bu kodu kullanırız.
!Aşağıdaki örnek after() ve before() yöntemini anlamamızı kolaylaştıracaktır.
<script>
$(document).ready(function(){
  $("#btn7").click(function(){
    $("#ana").before("<b>«</b>");
  });

  $("#btn8").click(function(){
    $("#ana").after("<b>»</b>");
  });
});
</script>
<span id="ana">[BAŞLIK]</span><br>
<button id="btn7">Öncesine Ekle</button>
<button id="btn8">Sonrasına Ekle</button><br/><br/>
?ELEMENT SİLME
- remove() belirtilen element ve içindekileri siler.
- empty() sadece belirtilmiş elementin içindekileri siler.
!remove() yöntemi ile belirtilmiş bir html parçasının tamamı, bu html parçası da dahil olmak üzere siler.
<script>
$(document).ready(function(){
  $("#btn1").click(function(){
    $("#ana1").remove();
  });
});
</script>
<span id="ana1">[BAŞLIK]</span><br>
<button id="btn1">Sil Bunu</button><br/><br/>
!Belirlediğimiz elementin silinmesini istemiyorsak içini boşaltabiliriz. Bunun için empty() fonksiyonunu kullanırız.
<script>
$(document).ready(function(){
  $("#btn2").click(function(){
    $("#ana2").empty();
  });
});
</script>
<div style="border: 1px #000000 solid;" id="ana2">[BAŞLIK]</div><br>
<button id="btn2">Sil Bunu</button><br/><br/>
!birkaç paragraf bulunan bir içerikten sadece class="" tagı sil olanları silmek istesek:istediklerimiz
<script>
$(document).ready(function(){
  $("#btn3").click(function(){
    $("p").remove(".sil");
  });
});
</script>
<div style="border: 1px #000000 solid;" id="ana3">
   <p class="sil">1. paragraf</p>
   <p class="silme">2. paragraf</p>
</div><br>
<button id="btn3">Sil Bunu</button><br/><br/>
?JQUER'DE CSS İŞLEMLERİ
- addClass() belirtilen elemente stil ekler.
- removeClass() belirtilen elementteki stili kaldırır.
- toggleClass() belirtilen elementte stili değiştirir.
- css() belirtilen element için stil belirlememize yarar.
! ilki kırmızı yapar,2.si ne olursa olsun maviye dönüstürür.
div.kirmizi { color: #FF0000; }
div.mavi { color: #0000FF; }
!paragrafın arkaplan rengini beyazdan sarıya dönüştür
$("p").css({"background-color":"yellow","font-size":"200%"});



*/
