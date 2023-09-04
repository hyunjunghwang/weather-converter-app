// import React, { useState } from 'react';

// function TemperatureConverter() {
//     const [celsius, setCelsius] = useState('');
//     const [fahrenheit, setFahrenheit] = useState('');


// const handleCelsiusChange = (e) => {
//     const celsiusValue = e.target.value;
//     setCelsius(celsiusValue);
//     const fahrenheitValue = (celsiusValue * 9/5) + 32;
//     setFahrenheit(fahrenheitValue.toFixed(2));
// };

// return (
//     <div>
//         <label>Celsius:</label>
//         <input type="number" value={celsius} onChange={handleCelsiusChange}></input> 
//         {'\n'}
//         <label>Fahrenheit:</label> 
//         <input type="number" value={fahrenheit} readOnly></input>
//     </div>
// );

// }
// export default TemperatureConverter;