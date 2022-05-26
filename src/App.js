import './App.css';
import Naslovna from './komponente/Naslovna';
import KarticaBijela from './komponente/KarticaBijela';
import KarticaCrna from './komponente/KarticaCrna';
import { H, Section } from "react-headings";
import NavbarCrni from './komponente/Navbar';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import DonjiNavbar from './komponente/DonjiNavbar';

function App() {
  return (
    <div className="App">
     <NavbarCrni></NavbarCrni>
     <Naslovna></Naslovna>
     <DonjiNavbar></DonjiNavbar>
     <Section component={ 
     <AnimationOnScroll animateIn="animate__fadeInLeftBig">
      <H className='naslov1'>Voće</H>
    </AnimationOnScroll>}>
<div className = "flexbox1">
      <AnimationOnScroll animateIn="animate__fadeIn">
            <KarticaCrna naslov = "Jabuke (Novi Travnik)" text =  "Jabuke za rakiju i soka..." slika = "https://i0.wp.com/sibenskiportal.hr/wp-content/uploads/2013/12/pijaca-voce-jabuke1.jpg?resize=622%2C360&ssl=1"></KarticaCrna>     
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
            <KarticaCrna naslov = "Kruške (Bugojno)" text =  "Domaca organska kruška odličnog kvaliteta, proizvedena na potpuno prirodan način, bez upotrebe ikakvih hemijskih sredstava." slika = "https://cdn.agroklub.com/upload/images/text/viljamovka-8.jpg"></KarticaCrna>     
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
            <KarticaCrna naslov = "Breskve (Gornji Vakuf)" text =  "*Autor objave nije postavio deskripciju proizvoda*" slika = "https://www.radio-capljina.com/images/stories/2020/pijacaaaaaa/Pijaca_5-VI-2020a.JPG"></KarticaCrna>     
      </AnimationOnScroll>
      </div>
     </Section>
     <section className='zekcije'>
     <Section component={
     <AnimationOnScroll animateIn="animate__fadeInLeftBig">
  <H className='naslov2'>Povrće</H>
</AnimationOnScroll>}>
<div className = "flexbox1">
      <AnimationOnScroll animateIn="animate__fadeIn">
            <KarticaBijela naslov = "Krastavice (Busovača)" tekst =  "*Autor objave nije postavio deskripciju proizvoda*" slika = "https://www.semberija.info/UcitaneSlike/nemanja/Zelena_Pijaca_Povrce_2_.jpg"></KarticaBijela>     
      </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
      <KarticaBijela naslov = "Luk (Gornji Vakuf)" tekst =  "DOSTAVLJAM BRZOM POŠTOM DOGOVOR NA VIŠE KG" slika = "https://static.klix.ba/media/images/vijesti/b_200314060.jpg?v=1"></KarticaBijela>     
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
         <KarticaBijela naslov = "Paradajz (Donji Vakuf)" text =  "*Autor objave nije postavio deskripciju proizvoda*" slika = "https://xdn.tf.rs/2021/08/13/pijaca-paradajz-macva-pres-6.jpg"></KarticaBijela>       
      </AnimationOnScroll>
      </div>
      </Section>
     </section>
     <Section component={ <AnimationOnScroll animateIn="animate__fadeInLeftBig">
  <H className='naslov1'>Suhomesnati proizvodi</H>
</AnimationOnScroll>}>
     <div className = "flexbox1">
      <AnimationOnScroll animateIn="animate__fadeIn">
            <KarticaCrna naslov = "Suhomeso (Donji Vakuf)" tekst =  "Suho meso kosti" slika = "http://www.srednjabosna.com/wp-content/uploads/2018/12/0.jpg"></KarticaCrna>     
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
            <KarticaCrna naslov = "Sudzuk (Bugojno)" tekst =  "domace, ekstra kvalitete" slika = "https://cdn.agroklub.com/upload/images/text/sudzuk-c.jpg"></KarticaCrna>     
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
            <KarticaCrna naslov = "Pršut (Vitez)" text =  "*Autor objave nije postavio deskripciju proizvoda*" slika = "https://www.tehnologijahrane.com/wp-content/uploads/2017/03/Bosanski-pr%C5%A1ut.jpg"></KarticaCrna>     
      </AnimationOnScroll>
      </div>
     </Section>
     <section className='zekcije'>
     <Section component={ <AnimationOnScroll animateIn="animate__fadeInLeftBig">
  <H className='naslov2'>Mliječni proizvodi</H>
</AnimationOnScroll>}>
<div className = "flexbox1">
<AnimationOnScroll animateIn="animate__fadeIn">
            <KarticaBijela naslov = "Mlijeko (Oborci)" tekst =  "Mlijeko aaa krava kaze muuuu" slika = "http://www.nkp.ba/wp-content/uploads/2015/03/pijaca-mlijeko-sir-i-kajmak.jpg"></KarticaBijela>     
      </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
      <KarticaBijela naslov = "Sir (Turbe)" tekst =  "*Autor objave nije postavio deskripciju proizvoda*" slika = "https://www.vamedia.info/wp-content/uploads/2015/novembar/sir-kajmak.jpg"></KarticaBijela>     
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
         <KarticaBijela naslov = "Kajmak (Busovača)" tekst =  "*Autor objave nije postavio deskripciju proizvoda*" slika = "https://onlinepijaca.net/wp-content/uploads/2020/04/IMG-9487cfe30b95a3ca592fb275925ea667-V.jpg"></KarticaBijela>       
      </AnimationOnScroll>
      </div>
      </Section>
     </section>
    </div>
  );
}

export default App;

