import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCountries(data))
    }, [])

    return (
        <div >
            <h2>Countries: {countries.length} </h2>
            {
                // countries.map(country => console.log(country))
            }
            <div className='countries-container'>
                {
                    countries.map(country => <Country

                        key={country.cca3}

                        country={country}

                    // name={country.name.common}
                    // area={country.area}
                    // population={country.population}
                    // region={country.region}

                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
