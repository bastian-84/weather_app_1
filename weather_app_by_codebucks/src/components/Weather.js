import React, { useState } from 'react';
import './weather.css'

function Weather(){
    /* API KEY */
    const APIKEY = 'd9a4c44fd809d07b0bf141607cfb8d23';

    const [form, setForm] = useState({
        city: '',
        country: ''
    })

    /* button fetch fn  */
    async function weatherData(paramE){
        paramE.preventDefault();
        if(form.city == ''){
            alert('Add values');
        }else{  
            const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`)
            .then((res) => console.log(res.json()));
        }
    }

    const handleChange = (paramE) => {
        let name = paramE.target.name;
        let value = paramE.target.value;

        if(name == 'city'){
            setForm({...form, city:value})
        }
        if(name == 'country'){
            setForm({...form, country:value})
        }
        console.log(form.city, form.country);
    }

    return(
        <div className='weather'>
            <span className='title'>Weather App</span>
            <br />
            <form>
                <input type='text' name='city' placeholder='city' onChange={paramE => handleChange(paramE)} />
                &nbsp; &nbsp; &nbsp; &nbsp; 
                <input type='text' name='country' placeholder='country' onChange={paramE => handleChange(paramE)} />
                <button className='getweather' onClick={(paramE) => weatherData(paramE)}>Submit</button>
            </form>
        </div>
    )
}

export default Weather;

