import React from "react";
import { useState } from "react";
import './App.css';

function App() {

  const [displayedInsult, setDisplayedInsult] = useState("");

  const [nameSurname, setNameSurname] = useState("");

  const [selectedGender, setSelectedGender] = useState("male");

  function changeHandler(event) {
    setNameSurname(event.target.value);
  }

  const adjectiveInsultFemale = ["Očerupana", "Narogušena", "Pederska", "Smrdljiva", "Smežurana", "Degenerisana", "Izdajnička", "Korumpirana", "Pokvarena", "Retardirana", "Izlapela"];
  const adjectiveNationalityFemale = ["haška", "ustaška", "engleska", "američka", "CIA-ina", "vašingtonska", "katolička", "satanistička", "hrvatska"];
  const nounInsultFemale = ["ćurka", "krmača", "pička", "kurva", "mačkica", "narkomanka", "izdajnica", "gnjida", "alkoholičarka", "karakondžula", "veleizdajnica", "bitanga", "večtica"];

  const adjectiveInsultMale = ["Očerupani", "Narogušen", "Pederski", "Smrdljivi", "Degenerisani", "Smežurani", "Izdajnički", "Korumpirani", "Pokvareni", "Retardirani", "Izlapeli"];
  const adjectiveNationalityMale = ["haški", "ustaški", "engleski", "kurvinski", "američki", "CIA-in", "vašingtonski", "katolički", "satanistički", "hrvatski"];
  const nounInsultMale = ["ćuran", "krmak", "govnar", "majmun", "isprdak", "picopevac", "pacov", "narkoman", "špijun", "izdajnik", "robijaš", "babun", "zločinac", "seksualni manijak", "alkoholičar", "veleizdajnik"];

  const adjectiveInsultFemaleForMale = ["Očerupana", "Narogušena", "Pederska", "Smrdljiva","Smežurana", "Degenerisana", "Izdajnička", "Korumpirana", "Pokvarena", "Retardirana", "Izlapela"];
  const adjectiveNationalityFemaleForMale = ["haška", "ustaška", "engleska", "američka", "CIA-ina", "vašingtonska", "katolička", "satanistička", "hrvatska"];
  const nounInsultFemaleForMale = ["ćurka", "pudlica", "pička", "mačkica", "pederčina", "gnjida", "veleizdajnica", "bitanga"];

  const adjectiveInsultMaleForFemale = ["Očerupani", "Narogušen", "Pederski", "Smrdljivi", "Degenerisani", "Smežurani", "Izdajnički", "Korumpirani", "Pokvareni", "Retardirani", "Izlapeli"];
  const adjectiveNationalityMaleForFemale = ["haški", "ustaški", "engleski", "američki", "CIA-in", "vašingtonski", "katolički", "satanistički", "hrvatski"];
  const nounInsultMaleForFemale = ["govnar", "zlikovac", "majmun", "isprdak", "pacov", "narkoman", "špijun", "izdajnik", "robijaš", "babun", "zločinac", "seksualni manijak", "alkoholičar", "veleizdajnik"];



  function generate() {
    if(!nameSurname){
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
    setDisplayedInsult(`"${insult}"`);
  }



  function gender(event) {
    setSelectedGender(event.target.value);
  }

  return (
    <div className="app">
      <div className='result'>
        <div className="insult">{displayedInsult}</div>
      </div>
      <div className='input'>

        <input type="text" placeholder='Upiši ime i prezime' value={nameSurname} onChange={changeHandler}></input>
        <button onClick={generate}>Click</button>
        </div>
        <div className="radio-btn">
          <label>Muško <input type="radio" name="gender" value="male" checked={selectedGender === "male"} onChange={gender}></input> </label>
          <label>Žensko <input type="radio" name="gender" value="female" checked={selectedGender === "female"} onChange={gender}></input>  </label>
        </div>
        
      </div>
  
  );
}

export default App;
