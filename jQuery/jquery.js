/*
?GİZLEME İŞLEMLERİ
 $(this).hide() - seçili elementi gizler.
- $("p").hide() - tüm p elementlerini gizler.
- $(".test").hide() - class="test" olan tüm elementleri gizler.
- $("#test").hide() - id="test" olan tüm elementleri gizler.
"display: none;" belirtilip gizlenmiş bir nesneyi görünür hale getirir.
.fadeIn() - Gizlenmiş bir nesneyi görünür hale getirir.

$("this") kod hangi elementte kullanıldıysa o element.
$("*") tüm elementler
$("p") <p> elementleri
$("div") <div> elementleri

!Özel elementler belirtelim:
$("div.yazi") class="yazi" olan <div> elementleri
$("p:first") belgemizdeki ilk <p> elementi
$("#txt") belgemizdeki id="txt" özelliğine sahip element
$("a[target='_blank']") target="_blank" özelliğine sahip <a> elementi
*/

/*
!tüm p elementlerini gizler
$(function(){
  $("button").click(function () {
    $("p").hide();
  });
});


/*
$("p").click(function(){
   tıklanıldığında yapılacaklar
 });
 !Fare/Tıklama
click, dblclick, mouseenter, mouseleave
$("#p1").mouseup(function(){
   alert("fare id='p1' üzerinde!");
});
!Klavye/Tuş
keypress, keydown, keyup
!Form
submit, change, focus, blur
!Sayfa/Pencere
load, resize, scroll, unload
$("input").focus(function(){
   $(this).css("background-color","#cccccc");
 }); */

/*
!ÖRNEK 1. Bir butona tıklandığında yazımızı gizlesin
<p id="p1">Gizlenecek yazı...</p>
<button id="btn1">Beni Gizle!</button>
<script>
$("#btn1").click(function(){
   $("#p1").hide(1000);
});
</script><br /><br />

!ÖRNEK 2. Gizleme - gösterme işini .toggle(süre) ile 
<p id="p2">Gizlenecek yazı...</p>
<button id="btn2">Beni Gizle!</button>
<script>
$("#btn2").click(function(){
   $("#p2").toggle(1000);
});
</script><br /><br 

!fadeIn(süre) - Gizlenmiş bir nesneyi görünür hale getirir.
<p id="p3" style="display: none;">Gizli Yazı</p>
<button id="btn3">Yazıyı Göster</button>
<script>
$("#btn3").click(function(){
   $("#p3").fadeIn(3000);
});
</script><br /><br /><br />

!fadeToggle Görünmeyen bir nesneyi görünür hale getirir, görüneni ise görünmez yapar. Parantez içinde süre belirtilebilir.
<p id="p5">Yaşamak, yaşattığın sürece güzel.</p>
<button id="btn5">Yazıyı göster / gizle</button>
<script>
$("#btn5").click(function(){
   $("#p5").fadeToggle(1000);
});
</script><br /><br /><br />
*/

/*
!slideDown() Görünmeyen gizlenmiş bir nesneyi, görünür hale getirir. Bunu yaparken aşağıya doğru açılmasını sağlar.
<div id="d1" class="kutu">Buraya Tıkla</div>
<div id="d2" class="kutu2" style="display: none;">Açılır Bir Kutu</div>
<script>
$("#d1").click(function(){
   $("#d2").slideDown(1000);
});
</script><br /><br /><br />

!slideToggle Hem slideDown hem slideUp bir aradadır. Yani tıklandığında açıksa kapanır, kapalıysa açılır.
<div id="d1" class="kutu">Buraya Tıkla</div>
<div id="d2" class="kutu2">Kapatılacak Bir Kutu</div>
<script>
$("#d1").click(function(){
   $("#d2").slideUp(1000);
});
</script><br /><br /><br />



*/
