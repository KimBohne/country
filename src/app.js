console.log('Hallo daar!');
import axios from 'axios';

async function fetchData(){
    try{
       const result = await axios.get('https://restcountries.com/v2/all');
      const countries = result.data;
       console.log(result.data);


       countries.sort((a, b)=> {
           return a.population - b.population;
        });

        countryItem(countries);
    }catch(e){
        console.log(e);
    }
}

fetchData();

function countryItem(countries){
const countryList = document.getElementById("country-list");

countryList.innerHTML = countries.map((country)=>{
    return `

        <li class="list-item">
          <p class="${regionColor(country.region)}">${country.name}</p>
          <img src="${country.flags.svg} " alt="Vlag van land ${country.name}" height="50px"/>
          <p>Population ${country.population}</p>
         
          </li>
    `;
  })
}

function regionColor(region){
    switch (region){
        case 'Africa':
            return 'blue';
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        default:
            return 'default';

    }
}
