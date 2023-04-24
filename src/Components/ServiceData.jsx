
import korku from "../images/korku.png";
import uzgun from "../images/uzgun.png";
import mutlu from "../images/mutlu.png";
import kızgın from "../images/kızgın.png";
import kart from "../images/kart.png";
import kart1 from "../images/kart1.png";
import kart2 from "../images/kart2.png";
import kart3 from "../images/kart3.png";
import animasyon1 from "../images/animasyon1.png";
import animasyon2 from "../images/animasyon2.png";
import animasyon3 from "../images/animasyon3.png";
import animasyon4 from "../images/animasyon4.png";
import carkifelek from "../images/carkifelek.png";
import carkifelek1 from "../images/carkifelek1.png";
import carkifelek2 from "../images/carkifelek2.png";
import carkifelek3 from "../images/carkifelek3.png";
import duygu from "../images/duygu.png";
import duygu1 from "../images/duygu1.png";
import duygu2 from "../images/duygu2.png";
import duygu3 from "../images/duygu3.png";
import duygu4 from "../images/duygu4.png";
import duygu5 from "../images/duygu5.png";
import duygu6 from "../images/duygu6.png";
import duygu7 from "../images/duygu7.png";
import kutu from "../images/kutu.png";
import kutu1 from "../images/kutu1.png";
import kutu2 from "../images/kutu2.png";
import kutu3 from "../images/kutu3.png";


const ServiceData = [
    {
        imgsrc: carkifelek,
        title: "Empati Çarkı 1.Oturum",
        url: "./Empati",
        text: "Katılımcılar ekranda ilk olarak bir çarkıfelek görecek ve çarkıfeleğin döndürülmesi ile bir sosyal öykü çıkacak ve okuyup ilgili duruma gereken cevabı bulmaları beklenecektir"
    },
    {
        imgsrc: carkifelek1,
        title: "Empati Çarkı 2.Oturum",
        url: "./Empati2",
        text: "Katılımcılar ekranda ilk olarak bir çarkıfelek görecek ve çarkıfeleğin döndürülmesi ile bir sosyal öykü çıkacak ve okuyup ilgili duruma gereken cevabı bulmaları beklenecektir"
    },
    {
        imgsrc: carkifelek2,
        title: "Empati Çarkı 3.Oturum",
        url: "./Empati3",
        text: "Katılımcılar ekranda ilk olarak bir çarkıfelek görecek ve çarkıfeleğin döndürülmesi ile bir sosyal öykü çıkacak ve okuyup ilgili duruma gereken cevabı bulmaları beklenecektir"
    },
    {
        imgsrc: carkifelek3,
        title: "Empati Çarkı 4.Oturum",
        url: "./Empati4",
        text: "Katılımcılar ekranda ilk olarak bir çarkıfelek görecek ve çarkıfeleğin döndürülmesi ile bir sosyal öykü çıkacak ve okuyup ilgili duruma gereken cevabı bulmaları beklenecektir"
    },
    {
        imgsrc: kutu,
        title: "Kutu Açma 1.Oturum",
        url: "./Kutu",
        text: "Ekranda bulunan farklı kutulardan birini açması ile oluşturulmuş sosyal öyküye maruz kalan katılımcıdan, sosyal öyküye uygun cevabı vermesi beklenmektedir."

    },
    {
        imgsrc: kutu1,
        title: "Kutu Açma 2.Oturum",
        url: "./Kutu2",
        text: "Ekranda bulunan farklı kutulardan birini açması ile oluşturulmuş sosyal öyküye maruz kalan katılımcıdan, sosyal öyküye uygun cevabı vermesi beklenmektedir."

    },
    {
        imgsrc: kutu2,
        title: "Kutu Açma 3.Oturum",
        url: "./Kutu3",
        text: "Ekranda bulunan farklı kutulardan birini açması ile oluşturulmuş sosyal öyküye maruz kalan katılımcıdan, sosyal öyküye uygun cevabı vermesi beklenmektedir."

    },
    {
        imgsrc: kutu3,
        title: "Kutu Açma 4.Oturum",
        url: "./Kutu4",
        text: "Ekranda bulunan farklı kutulardan birini açması ile oluşturulmuş sosyal öyküye maruz kalan katılımcıdan, sosyal öyküye uygun cevabı vermesi beklenmektedir."

    },
    {
        imgsrc: kart,
        title: "Kart Eşleme 1.Oturum",
        url: "./Kart",
        text: "Oyunun kart eşleme içeriğinde ise birinde duygusal durumu yansıtan resim diğerinde bu duyguya yönelik yüz ifadesini içeren resim bulunan kart çiftleri ayrıca bu duruma yönelik sosyal öykü sunulmaktadır."

    },
    {
        imgsrc: kart1,
        title: "Kart Eşleme 2.Oturum",
        url: "./Kart2",
        text: "Oyunun kart eşleme içeriğinde ise birinde duygusal durumu yansıtan resim diğerinde bu duyguya yönelik yüz ifadesini içeren resim bulunan kart çiftleri ayrıca bu duruma yönelik sosyal öykü sunulmaktadır."

    },
    {
        imgsrc: kart2,
        title: "Kart Eşleme 3.Oturum",
        url: "./Kart3",
        text: "Oyunun kart eşleme içeriğinde ise birinde duygusal durumu yansıtan resim diğerinde bu duyguya yönelik yüz ifadesini içeren resim bulunan kart çiftleri ayrıca bu duruma yönelik sosyal öykü sunulmaktadır."

    },
    {
        imgsrc: kart3,
        title: "Kart Eşleme 4.Oturum",
        url: "./Kart4",
        text: "Oyunun kart eşleme içeriğinde ise birinde duygusal durumu yansıtan resim diğerinde bu duyguya yönelik yüz ifadesini içeren resim bulunan kart çiftleri ayrıca bu duruma yönelik sosyal öykü sunulmaktadır."

    },
    {
        imgsrc: duygu,
        title: "Duyguları Tanıma ve Ayırt Etme Oyunu 1.Oturum",
        url: "./Tanıma",
        text: "Duyguları Tanıma ve Ayırt Etme Oyunu’ndaki amaç çocuğun Duyguları Öğrenelim Oyununda öğretmeyi amaçladığımız temel duygu ve yüz ifadelerini ne kadar iyi anlayabildiklerini ve bu duygu ve yüz ifadelerini başka durumlarda/fotoğraflarda ne kadar iyi ayırt edebildiğini test etmektir."

    },
    {
        imgsrc: duygu1,
        title: "Duyguları Tanıma ve Ayırt Etme Oyunu 2.Oturum",
        url: "./Tanıma2",
        text: "Duyguları Tanıma ve Ayırt Etme Oyunu’ndaki amaç çocuğun Duyguları Öğrenelim Oyununda öğretmeyi amaçladığımız temel duygu ve yüz ifadelerini ne kadar iyi anlayabildiklerini ve bu duygu ve yüz ifadelerini başka durumlarda/fotoğraflarda ne kadar iyi ayırt edebildiğini test etmektir."

    },
    {
        imgsrc: duygu2,
        title: "Duyguları Tanıma ve Ayırt Etme Oyunu 3.Oturum",
        url: "./Tanıma3",
        text: "Duyguları Tanıma ve Ayırt Etme Oyunu’ndaki amaç çocuğun Duyguları Öğrenelim Oyununda öğretmeyi amaçladığımız temel duygu ve yüz ifadelerini ne kadar iyi anlayabildiklerini ve bu duygu ve yüz ifadelerini başka durumlarda/fotoğraflarda ne kadar iyi ayırt edebildiğini test etmektir."

    },
    {
        imgsrc: duygu3,
        title: "Duyguları Tanıma ve Ayırt Etme Oyunu 4.Oturum",
        url: "./Tanıma4",
        text: "Duyguları Tanıma ve Ayırt Etme Oyunu’ndaki amaç çocuğun Duyguları Öğrenelim Oyununda öğretmeyi amaçladığımız temel duygu ve yüz ifadelerini ne kadar iyi anlayabildiklerini ve bu duygu ve yüz ifadelerini başka durumlarda/fotoğraflarda ne kadar iyi ayırt edebildiğini test etmektir."

    },
    {
        imgsrc: duygu4,
        title: "Duygu Oyunu 1.Oturum",
        url: "./Duygu1",
        text: "Duygu Oyunu’nda resimlendirilmiş sosyal öyküler verilen çocuklardan artık sosyal öyküler içerisindeki temel duyguları ayırt etmesi beklenmektedir."

    },
    {
        imgsrc: duygu5,
        title: "Duygu Oyunu 2.Oturum",
        url: "./Duygu2",
        text: "Duygu Oyunu’nda resimlendirilmiş sosyal öyküler verilen çocuklardan artık sosyal öyküler içerisindeki temel duyguları ayırt etmesi beklenmektedir."

    },
    {
        imgsrc: duygu6,
        title: "Duygu Oyunu 3.Oturum",
        url: "./Duygu3",
        text: "Duygu Oyunu’nda resimlendirilmiş sosyal öyküler verilen çocuklardan artık sosyal öyküler içerisindeki temel duyguları ayırt etmesi beklenmektedir."

    },
    {
        imgsrc: duygu7,
        title: "Duygu Oyunu 4.Oturum",
        url: "./Duygu4",
        text: "Duygu Oyunu’nda resimlendirilmiş sosyal öyküler verilen çocuklardan artık sosyal öyküler içerisindeki temel duyguları ayırt etmesi beklenmektedir."

    },
    {
        imgsrc: animasyon1,
        title: "Animasyonlar-1",
        url: "./Animasyon1",
        text: "Animasyonlar 1. Oturum"
    },
    {
        imgsrc: animasyon2,
        title: "Animasyonlar-2",
        url: "./Animasyon2",
        text: "Animasyonlar 2. Oturum"
    },
    {
        imgsrc: animasyon3,
        title: "Animasyonlar-3",
        url: "./Animasyon3",
        text: "Animasyonlar 3. Oturum"
    },
    {
        imgsrc: animasyon4,
        title: "Animasyonlar-1",
        url: "./Animasyon4",
        text: "Animasyonlar 4. Oturum"
    },
    {
        imgsrc: mutlu,
        title: "Duyguları Öğrenelim - Mutluluk",
        url: "./Mutluluk",
        
    },
    {
        imgsrc: korku,
        title: "Duyguları Öğrenelim - Korku",
        url: "./Korku",
        
    },
    {
        imgsrc: uzgun,
        title: "Duyguları Öğrenelim - Üzgün",
        url: "./Uzgun",
    },
    {
        imgsrc: kızgın,
        title: "Duyguları Öğrenelim - Kızgın",
        url: "./Kızgın",
        
    },
];

export default ServiceData;