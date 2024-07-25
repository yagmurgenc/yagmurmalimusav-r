/*
?NESNE BOYUTLARI
- width() - bir nesnenin genişliğini bildirir, değiştirir.
- height() - bir nesnenin yüksekliğini bildirir, değiştirir.
- innerWidth() - bir nesnenin kenarlık ile nesne arası iç boşluk genişliği bildirir, değiştirir.
- innerHeight() - bir nesnenin kenarlık ile nesne arası iç boşluk yüksekliğini bildirir, değiştirir.
- outerWidth() - bir nesnenin sayfadaki dış boşluk genişliğini bildirir, değiştirir.
- outerHeight() - bir nesnenin sayfadaki dış boşluk yüksekliğini bildirir, değiştirir.
!Şimdi bir div elementi hazırlayıp bir butona tıklandığında bu bilgiler gelsin.
<div id="txt" style="border: 1px #000000 solid; margin: 3px;
 padding: 5px;
 width: 320px; height: 140px;"> </div>
<button id="btn">Nesne Bilgilerini Al</button>
<script>
$("#btn").click(function(){
   var txt = "";
   txt += "Genişlik: " + $("#txt").width() + "<br/>";
   txt += "Yükseklik: " + $("#txt").height() + "<br/>";
   txt += "İç Boşluk Genişliği: " + $("#txt").innerWidth() + "<br/>";
   txt += "İç Boşluk Yüksekliği: " + $("#txt").innerHeight() + "<br/>";
   txt += "Dış Boşluk Genişliği: " + $("#txt").outerWidth() + "<br/>";
   txt += "Dış Boşluk Yüksekliği: " + $("#txt").outerHeight() + "<br/>";
   $("#txt").html(txt);
 }); 
</script><br/><br/>
!Bu fonksiyon id="txt" olan nesnenin genişliğini 500 piksele çıkarır.
$("#txt").width(500);


?NESNE BULMA/SEÇME
!jQuery parent():Bir elementin ait olduğu bir üst elementi belirtmemize yarar.
<div><span>Bir kelime yazın</span></div>
<script>
$(document).ready(function(){
  $("span").parent();
}); 
</script><br/><br/>
!Eğer belirttiğimiz elementin içinde yer alan nesneleri seçeceksek bu kez children() fonksiyonu yardımımıza koşar.
<div>
   <span class="kirmizi">Satır 1</span>
   <span class="mavi">Satır 2</span>
</div>
<script>
$(document).ready(function(){
  $("div").children();
}); 
</script><br/><br/>
!Asagıdaki kod "kirmizi" stiline sahip span elementlerini seçmemize yarar.
<script>
$(document).ready(function(){
  $("div").children("span.kirmizi");
});
</script><br/><br/>
!find() Yöntemi:Bir veya daha fazla nesneyi üst düzey bir html2de arama yaparak bulmamızı sağlar.
<div><span>Bir şey yazın.</span></div> olsun.
<script>
$(document).ready(function(){
  $("div").find("span");
}); 
</script><br/><br/>
!nesne belirtmek için siblings() komutu kullanabiliriz.h2 hariç diğer tüm div içindeki komutlar kastedilmiş olur.
<div>div
  <p>p</p>
  <span>span</span>
  <h2>h2</h2>
  <h3>h3</h3>
  <p>p</p>
</div>
<script>
$(document).ready(function(){
  $("h2").siblings();
});
</script><br/><br/>
!sadece h2 ile aynı grupta yer alan p elementleri seçilmiş olur.
<script>
$(document).ready(function(){
  $("h2").siblings("p");
});
</script><br/><br/>
! h2'den sonra gelen (h3) nesnesini verir.
<script>
$(document).ready(function(){
  $("h2").next();
});
</script><br/><br/>
!h2'den sonra gelen tüm aynı gruptaki elementleri seçmeye 
<script>
$(document).ready(function(){
  $("h2").nextAll();
}); 
</script><br/><br/>
?first(), last(), eq() ve filter() Yöntemleri
!first(), bir elementin alt elementlerinden ilkini seçmeye yarar.
<script>
$(document).ready(function(){
  $("div p").first();
}); 
</script><br/><br/>
!last() fonksiyonu ise bir elementin alt elementlerinden en sondakini seçer.
<script>
$(document).ready(function(){
  $("div p").last();
}); 
</script><br/><br/>
!eq() yöntemi,bir elemennten çok olduğunda sıralamaya bakarak hangisini seçeceğimizi söyler.sıfırdan baslar
<script>
$(document).ready(function(){
  $("p").eq(1);
}); 
</script><br/><br/>
!filter() ise belirli bir özelliğine göre element seçmemizi sağlar.
<script>
$(document).ready(function(){
  $("p").filter(".intro");
}); 
</script><br/><br/>
*/
