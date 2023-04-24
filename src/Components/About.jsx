import React from 'react'
import about from "../images/about.svg";
import Common from './Common'

const About = () => {
    return (
        <>
            <Common 
                name='Hakkımızda' 
                imgsrc={about} 
                about="4. sınıf öğrencilerinin zihin kuramı temelinde; duygu - ayırt etme ve empati becerilerinin resimlerden duygu isimlendirme, sosyal öykü tanıma (kart eşleme, kutu açma, çarkıfelek oyunu), animasyonlar gibi farklı tekniklerin birleştirilmesiyle oluşturulmuş Empati Geliştirme Oyunu’nun hazırlanması, uygulanması ve bu oyunun kontrol grubuyla kıyaslanarak müdahale uygulanan öğrencilerin empati ve saldırganlık seviyeleri üzerine etkisinin tespit edilmesi amaçlanmıştır"
                visit='/services'
                btnname="Haydi Başlayalım" 
            />
        </>
    )
}

export default About
