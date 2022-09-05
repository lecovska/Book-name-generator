import React from "react";
import { useState } from "react";
import imageFisrt from "../src/images/knjigaPrva.jpg";
import imageSec from "../src/images/knjigaDruga.jpg";
import book from "./open-book.jpg";
import './App.css';

function App() {

  const [displayedInsult, setDisplayedInsult] = useState("");

  const [nameSurname, setNameSurname] = useState("");

  const [selectedGender, setSelectedGender] = useState("male");

  const images = [imageFisrt, imageSec];

  const [selectedImage, setSelectedImage] = useState("")

  function randomNum(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomImage() {
    setSelectedImage(randomNum(images));
  }


  function changeHandler(event) {
    setNameSurname(event.target.value);
  }

  const adjectiveInsultFemale = ["Oчerupana", "Naroguшena", "Pederska", "Smrdљiva", "Смежурана", "Degenerisana", "Издајничка", "Korumpirana", "Pokvarena", "Retardirana", "Izlapela"];
  const adjectiveNationalityFemale = ["haшka", "ustaшka", "engleska", "ameriчka", "CIA-ina", "vaшingtonska", "katoliчka", "satanistiчka", "hrvatska"];
  const nounInsultFemale = ["ћurka", "krmaчa", "piчka", "kurva", "maчkica", "narkomanka", "izdajnica", "gњida", "alkoholiчarka", "karakonџula", "bitanga", "veшtica"];

  const adjectiveInsultMale = ["Oчerupani", "Naroguшen", "Pederski", "Smrdљivi", "Degenerisani", "Smeжurani", "Izdajniчki", "Korumpirani", "Pokvareni", "Retardirani", "Izlapeli"];
  const adjectiveNationalityMale = ["haшki", "ustaшki", "engleski", "kurvinski", "ameriчki", "CIA-in", "vaшingtonski", "katoliчki", "satanistiчki", "hrvatski"];
  const nounInsultMale = ["ћuran", "krmak", "govnar", "majmun", "isprdak", "picopevac", "pacov", "narkoman", "шpijun", "izdajnik", "robijaш", "babun", "zloчinac", "seksualni manijak", "alkoholiчar"];

  const adjectiveInsultFemaleForMale = ["Oчerupana", "Naroguшena", "Pederska", "Smrdљiva", "Smeжurana", "Degenerisana", "Izdajniчka", "Korumpirana", "Pokvarena", "Retardirana", "Izlapela"];
  const adjectiveNationalityFemaleForMale = ["haшka", "ustaшka", "engleska", "ameriчka", "CIA-ina", "vaшingtonska", "katoliчka", "satanistiчka", "hrvatska"];
  const nounInsultFemaleForMale = ["ћurka", "pudlica", "piчka", "maчkica", "pederчina", "gњida", "bitanga"];

  const adjectiveInsultMaleForFemale = ["Oчerupani", "Naroguшen", "Pederski", "Smrdљivi", "Degenerisani", "Smeжurani", "Izdajniчki", "Korumpirani", "Pokvareni", "Retardirani", "Izlapeli"];
  const adjectiveNationalityMaleForFemale = ["haшki", "ustaшki", "engleski", "ameriчki", "CIA-in", "vaшingtonski", "katoliчki", "satanistiчki", "hrvatski"];
  const nounInsultMaleForFemale = ["govnar", "zlikovac", "majmun", "isprdak", "pacov", "narkoman", "шpijun", "izdajnik", "robijaш", "babun", "zloчinac", "seksualni manijak", "alkoholiчar"];



  function generate() {
    if (!nameSurname) {
      return;
    }
    let insult = "";

    if (selectedGender === "male") {
      if (Math.random() > (nounInsultMale.length / (nounInsultFemaleForMale.length + nounInsultMale.length))) {
        let randomAdjectiveInsult = Math.floor(Math.random() * adjectiveInsultMale.length);
        let randomAdjectiveNationality = Math.floor(Math.random() * adjectiveNationalityMale.length);
        let randomNounInsult = Math.floor(Math.random() * nounInsultMale.length);

        insult = `${adjectiveInsultMale[randomAdjectiveInsult]} ${adjectiveNationalityMale[randomAdjectiveNationality]} ${nounInsultMale[randomNounInsult]} ${nameSurname}`;

      }
      else {

        let randomAdjectiveInsult = Math.floor(Math.random() * adjectiveInsultFemaleForMale.length);
        let randomAdjectiveNationality = Math.floor(Math.random() * adjectiveNationalityFemaleForMale.length);
        let randomNounInsult = Math.floor(Math.random() * nounInsultFemaleForMale.length);

        insult = `${adjectiveInsultFemaleForMale[randomAdjectiveInsult]} ${adjectiveNationalityFemaleForMale[randomAdjectiveNationality]} ${nounInsultFemaleForMale[randomNounInsult]} ${nameSurname}`;
      }
    }

    else {

      if (Math.random() > (nounInsultFemale.length / (nounInsultMaleForFemale.length + nounInsultFemale.length))) {
        let randomAdjectiveInsult = Math.floor(Math.random() * adjectiveInsultFemale.length);
        let randomAdjectiveNationality = Math.floor(Math.random() * adjectiveNationalityFemale.length);
        let randomNounInsult = Math.floor(Math.random() * nounInsultFemale.length);

        insult = `${adjectiveInsultFemale[randomAdjectiveInsult]} ${adjectiveNationalityFemale[randomAdjectiveNationality]} ${nounInsultFemale[randomNounInsult]} ${nameSurname}`;

      }
      else {

        let randomAdjectiveInsult = Math.floor(Math.random() * adjectiveInsultMaleForFemale.length);
        let randomAdjectiveNationality = Math.floor(Math.random() * adjectiveNationalityMaleForFemale.length);
        let randomNounInsult = Math.floor(Math.random() * nounInsultMaleForFemale.length);

        insult = `${adjectiveInsultMaleForFemale[randomAdjectiveInsult]} ${adjectiveNationalityMaleForFemale[randomAdjectiveNationality]} ${nounInsultMaleForFemale[randomNounInsult]} ${nameSurname}`;
      }



    }
    setDisplayedInsult(`${insult}`);
    randomImage()
  }



  function gender(event) {
    setSelectedGender(event.target.value);
  }

  return (
    <div className="app">
      
      <p id="title">by Teodora Lečovska</p>
      {!selectedImage ? <img className="openBook" src={book} alt=""></img> : <img className="bookFirstPage" src={selectedImage} alt=""></img>}
      <div className='result'>

        <div className="insult">{displayedInsult}</div>
      </div>
      <div className='input'>


        <input className="name" type="text" placeholder='Upiši ime i prezime' value={nameSurname} onChange={changeHandler}></input>
        
        <button onClick={generate} >Click</button>
        </div>
        <div className="radio-btn">
         <div className="radio"> <label>Muško <input className="dot"  type="radio" name="gender" value="male" checked={selectedGender === "male"} onChange={gender} ></input></label> </div>
         <div className="radio"> <label> Žensko <input className="dot" type="radio" name="gender" value="female" checked={selectedGender === "female"} onChange={gender} ></input></label> </div>
        </div>
        
        
        <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/sr_RS/sdk.js#xfbml=1&version=v14.0" nonce="3A47jBdN"></script>
        <div className="buttons">
        <iframe title="Koja si Šešeljeva knjiga" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fbook-name-generator.vercel.app%2F&layout=button_count&size=large&width=88&height=28&appId" width="100" height="30" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <a id="twitterBtn" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
        <p className="note">ZA NAJBOLJI PRIKAZ KORISTITE ĆIRILICU</p>
    </div>

  );
}

export default App;
