import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';
import {
  MDBInputGroup,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Weather() {
    const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const baseKey = 'a2e9598efeed1ffda20eb3001bc7f53b';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const getWeatherData = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: city,
          appid: baseKey,
          
        },
      });
      setWeatherData(response.data);
      console.log(weatherData);
    } 
    catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
 
  return (
    <div>
       
       <div className="overlay   container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <MDBCard background='dark' className='text-white text-center border-0'>
                            <MDBCardImage overlay src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2t5JTIwYW5pbWF0aW9uJTIwZ2lmc3xlbnwwfHwwfHx8MA%3D%3D" alt='...' />
                           
                            <MDBCardOverlay>
                                <div>
                                <MDBInputGroup className='mb-3 w-75 mx-auto mt-3' >
                                    <input value={city} onChange={(e)=>setCity(e.target.value)} className='form-control' type='search' placeholder='Search City' />
                                    <button  onClick={getWeatherData} type='submit' className='btn btn-info '>
                                    <i  className='fas fa-search fa-1x'></i>
                                </button>

                                </MDBInputGroup>
                                </div>
                            <div className="bg-primary bg-opacity-50 py-3" style={{marginTop:'80px'}}>
                             <MDBCardTitle><h2> </h2></MDBCardTitle>
                                <MDBCardText className='lead'>
                                {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          
        </div>
      )}
                                </MDBCardText>
                              <i className='fas fa-cloud fa-3x'></i>
                            
                               
                                </div>
                            </MDBCardOverlay>
                            
                        </MDBCard>
                    </div>

              </div>
            </div>
  
    </div>
  )
}

export default Weather





// <input className='form-control' value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder='Enter location' />
// <button className='btn btn-light my-4' style={{borderRadius:'70px'}} onClick={getWeatherData} ><i class="fa-solid fa-magnifying-glass"></i></button>
// {weatherData && (
// <div className='p-4' style={{backgroundColor:'rgba(255,255,255,0.7)', borderRadius:'20px'}}>
// <h5 className='text-primary my-2'><i class="fa-solid fa-location-dot me-2"></i>{weatherData.name}</h5>
// <h1 className='text-primary my-3' style={{fontSize:'60px'}}>{parseFloat((weatherData.main.temp-273.15).toFixed(1))}<sup>o</sup></h1>
// <h3 className='text-primary my-3'>{weatherData.weather[0].description}</h3>
// <div style={{backgroundColor:'rgba(255,255,255,0.8)', borderRadius:'20px'}} className='d-flex justify-content-evenly text-primary py-3 px-1'>
//     <div className='mx-2'>
//         <i class="fa-solid fa-cloud"></i>
//         <h5>{weatherData.clouds.all}%</h5>
//         <h6>Cloudiness</h6>
//     </div>
//     <div className='mx-2'>
//         <i class="fa-solid fa-droplet"></i>
//         <h5>{weatherData.main.humidity}%</h5>
//         <h6>Humidity</h6>
//     </div>
//     <div className='mx-2'>
//     <i class="fa-solid fa-wind"></i>
//     <h5>{weatherData.wind.speed}m/s</h5>
//     <h6>Wind speed</h6>
//     </div>
//   </div>
// </div>
// )}
// </div> */}





// import React, { useState } from 'react'




// const api ={
//     key:'e816b9ca21aa9b346c5d5bf371138550',
//     base:'https://api.openweathermap.org/data/2.5/'
//    }
// function Search() {

//     const [search,setSearch]= useState("");
//    const [weather,setWeather] = useState({});
    
    

//     const searchPressed=()=>{
//         fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
//         .then(res=> res.json())
//         .then(result=>{
//        setWeather(result);
//         })
//     }
     
//     return (
//         <div>
//             <div className="container mt-5">
//                 <div className="row justify-content-center">
//                     <div className="col-md-4">
//                         <MDBCard background='dark' className='text-white text-center border-0'>
//                             <MDBCardImage overlay src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2t5JTIwYW5pbWF0aW9uJTIwZ2lmc3xlbnwwfHwwfHx8MA%3D%3D" alt='...' />
//                             <MDBCardOverlay>
//                                 <div>
//                                 <MDBInputGroup className='mb-3 w-75 mx-auto mt-3' >
//                                     <input onChange={(e)=>setSearch(e.target.value)} className='form-control' type='search' placeholder='Search City' />
//                                     <button onClick={searchPressed} type='submit' className='btn btn-info '>
//                                     <i  className='fas fa-search fa-1x'></i>
//                                 </button>
//                                 </MDBInputGroup>
//                                 </div>
//                             <div className="bg-primary bg-opacity-50 py-3" style={{marginTop:'80px'}}>

                         
//                                 <MDBCardTitle><h2> </h2></MDBCardTitle>
//                                 <MDBCardText className='lead'>
//                                 <p> </p>
//                                 <p>Humidity:</p>
//                                  <p>Wind Speed:</p>
//                                 </MDBCardText>
//                               <i className='fas fa-cloud fa-3x'></i>
//                               <p> </p>
                               
//                                 </div>
//                             </MDBCardOverlay>
                            
//                         </MDBCard>
//                     </div>

// //                 </div>
// //             </div>
//         </div>
//     )
// }

// export default Search