/*
!Bir nesnenin stilinde yapacağımız değişiklikleri animasyon şeklinde yapar. 
!Kullanım: .animate(özellikler, hız);
div id="d1a" class="kutu">Aşağıdaki kutunun yüksekliğini 50 piksel yap!</div>
<div id="d1b" class="kutu2"> </div>
<script>
$("#d1a").click(function(){
   $("#d1b").animate({height: '50px'});
 });
</script><br /><br /><br />

!Ayrıca hide, show ve toggle kullanılabilir (özellik olarak).
<div id="d4a" class="kutu">Aşağıdaki kutuyu gizle/göster</div>
<div id="d4b" class="kutu2"> </div>
<script>
$("#d4a").click(function(){
   $("#d4b").animate({
      height: 'toggle'
   });
 });
</script><br /><br /><br />

!Belli işlemleri sırasıyla yapıp animasyon oluşturmasını sağlayabiliriz.
<div id="d5a" class="kutu">Aşağıdaki kutuyu oynat</div>
<div id="d5b" class="kutu2"> </div>
<script>
$("#d5a").click(function(){
      var div=$("#d5b");
      div.animate({height:'300px',opacity:'0.4'},"slow");
      div.animate({width:'300px',opacity:'0.8'},"slow");

      div.animate({height:'100px',opacity:'0.4'},"slow");
      div.animate({width:'100px',opacity:'0.8'},"slow");
 });
</script><br /><br /><br />

!Yazı tipi boyutu ile ilgili oynamalar için fontSize kullanılmalıdır.
<div id="d6a" class="kutu">Aşağıdaki yazının boyutunu arttır</div>
<div id="d6b" class="kutu2">Merhaba Dünya!</div>
<script>
$("#d6a").click(function(){
      var div=$("#d6b");
      div.animate({fontSize:'3em'},"slow");
 });
</script><br /><br /><br />

!Aşağıdaki kodda hide() tamamlandığında fonksiyon devreye girecek ve uyarı verecektir.
<div id="d1a" class="kutu">Gizlenecek bir kutu!</div>
<button id="d1b">Kutuyu kapatmak için tıklayın.</button>
<script>
$("#d1b").click(function(){
   $("#d1a").hide("slow",function(){
     alert("Yazı şu an gizlendi.");
   });
 });
</script><br /><br /><br />

!Eğer callback kullanmadan bunu yapsaydık animasyon tamamlanmadan uyarı gelirdi:
<div id="d2a" class="kutu">Gizlenecek bir kutu!</div>
<button id="d2b">Kutuyu kapatmak için tıklayın.</button>
<script>
$("#d2b").click(function(){
   $("#d2a").hide(1000);
   alert("Yazı gizleniyor...");
 });
</script><br /><br /><br />
?TOPLU İŞLEMLER
!Yukarıdaki komutta önce CSS kodu, sonra kaybolma, sonra ortaya çıkma uygulanacaktır.
$("#p1").css("color","red").slideUp(2000).slideDown(2000);

!Veri elde etmeye yarayan üç adet basit ancak işinizi çok kolaylaştıracak jQuery yöntemi mevcuttur.
text() - Belirtilen elementte yer alan içeriği verir.
html() - Belirtilen elementte yer alan içeriği verir (HTML kodları dahil).
val() - Form alanlarındaki nesnelerde yer alan değerleri verir.

!Buton yapıp uyarı verdirtiyoruz
<input type="text" id="txt2" value="Selam!" /><br/>
<input type="button" id="btn2" value="Tıkla!" />
<script>

$(document).ready(function(){
  $("#btn2").click(function(){
    alert("Value: " + $("#txt2").val());
  });
});
</script>

!HREF="" ile belirtilen bir element özelliğidir. Bunu elde etmek için jQuery'de attr() fonksiyonunu kullanabiliriz.
!yine yukarıdan adresi gösteren bir alert yapılır.
<a href="http://www.google.com.tr/" id="link">Google.COM.TR</a><br/>
<button>Adres</button>
<script>

$(document).ready(function(){
  $("button").click(function(){
    alert($("#link").attr("href"));
  });
});
</script>

!- text("eklenecek/değiştirilecek yazı") - Yazılar için
!- html("eklenecek/değiştirilecek yazı") - HTML kodları dahil olan içerikler için
!- val("eklenecek/değiştirilecek yazı") - Form nesneleri için
<p id="test1">Bu bir paragraf</p>
<p id="test2">Bu diğer bir paragraf.</p>
<p>Form Veri Girişi:
<input type="text" id="test3" value="Bu da form verisi"></p>
<button id="btn1">Yazıyı değiştir</button>
<button id="btn2">HTML kodunu değiştir</button>
<button id="btn3">Form verisi değiştir</button>
<script>

$(document).ready(function(){
  $("#btn1").click(function(){
    $("#test1").text("Merhaba Ziyaretçi!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>jQuery Dersleri'ne Hoş Geldiniz.</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("jQuery oldukça basit!");
  });
});
</script>

!Aşağıdaki kod, button elementine tıklandığında id değeri "link" olan A elementinin HREF özelliğinin http://sitesi.web.tr/ olarak değişmesini sağlar:
$("button").click(function(){
   $("#link").attr("href","http://sitesi.web.tr/");
 });




*/
