import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    // console.log(props?.country?.name)

    const { area, population, region, name, flags, timezones } = props.country;

    return (
        <div className='country'>
            {/* props?.country?. */}
            <h2>Country Name: {name?.common} </h2>
            <img src={flags.png} alt="" />
            <h4 style={{ color: 'red', wordBreak: 'break-all' }}>Timezone: {timezones}</h4>
            <p>Population: {population} </p>
            <p><small>Region: {region} </small></p>
            <p><small>Area: {area} </small></p>
            {/* props.country. */}
        </div>
    );
};

export default Country;
