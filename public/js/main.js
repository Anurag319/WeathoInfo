const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityname.value;
    if (cityVal === "") {
        city_name.innerText = 'plz write the name before search';
        datahide.classList.add('data_hide');
    }
    else {
        try {
            const urltemp = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=42f4355977d6047781e352845cd13e69`
            const restemp = await fetch(urltemp);   
            data = await restemp.json();
            console.log(data);      

            city_name.innerText = `${cityVal},${data.sys.country}`;
            temp_real_val.innerText = data.main.temp;
            const tempmood = data.weather[0].main;

            if(tempmood === "Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style:'color:#eccc68;'></i>";
            }
            else if(tempmood == "Clouds"){
                temp_status.innerHTML = "<i class='fas  fa-cloud' style:'color:#f1f2f6;'></i>";
            }
            else if(tempmood == "Rain"){
                temp_status.innerHTML = "<i class='fas  fa-cloud-rain' style:'color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML = "<i class='fas  fa-sun' style:'color:#f1f2f6;'></i>";
            }

            datahide.classList.remove('data_hide');
        } catch (error) {
            city_name.innerText = 'plz enter the city name properly';
            datahide.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click', getInfo); 