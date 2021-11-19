function toplam() {
        var deger1 = parseInt(document.getElementById('sayi1').value);
        var deger2 = parseInt(document.getElementById('sayi2').value);
        document.getElementById("sonuc").value =  deger1 + deger2;
        document.getElementById('sayi2').value = 0;
        document.getElementById('sayi1').value = 0;
        }
        function cikartma() {
        var deger1 = parseInt(document.getElementById('sayi1').value);
        var deger2 = parseInt(document.getElementById('sayi2').value);
        document.getElementById("sonuc").value =  deger1 - deger2;
        document.getElementById('sayi2').value = 0;
        document.getElementById('sayi1').value = 0;
        }
        function carpma() {
        var deger1 = parseInt(document.getElementById('sayi1').value);
        var deger2 = parseInt(document.getElementById('sayi2').value);
        document.getElementById("sonuc").value =  deger1 * deger2;
        document.getElementById('sayi2').value = 0;
        document.getElementById('sayi1').value = 0;
        }
        function bolme() {
        var deger1 = parseInt(document.getElementById('sayi1').value);
        var deger2 = parseInt(document.getElementById('sayi2').value);
        document.getElementById("sonuc").value =  deger1 / deger2;
        document.getElementById('sayi2').value = 0;
        document.getElementById('sayi1').value = 0;
        }