import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css';
import India from './India_Map-removebg-preview.png';
import USA from './USA-Map-removebg-preview.png';
import Dubai from './Dubai_map-removebg-preview.png';

const Home = () => {
  return (
    <div>
      <Navbar/>
     <h1> Welcome to Home Page</h1>
      <div id='cont'>
       
        <h2>India</h2> 
        <div id='id1'>
        <div id='id2'> 
        <figure> 
        <img src={India}></img><figcaption>Map Of India</figcaption></figure> </div> 
        <div id='id3'><p>India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),[25] is a 
          country in South Asia. It is the seventh-largest country by area, the second-most populous 
          country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the 
          Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan
           to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east.<b>For more click on About Section</b>
            </p></div>
        </div>
        
        
           
              
        <h2>USA</h2>  
        <div id='id4'>      
       
        
        <div id='id5'>
          <figure>   
        <img src={USA}></img> <figcaption>Map Of USA</figcaption></figure> </div>
        <div id='id6'><p>The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America,
           is a transcontinental country located primarily in North America. It consists of 50 states, 
           a federal district, five major unincorporated territories, nine minor outlying islands,[j] and 326 Indian reservations.
            It is the third-largest country by total area.[d] .<b>For more click on About Section</b></p>
            
            </div>
        </div> 
         


                    
         <h2>Dubai</h2>
         <div id='id7'> 
         <div id='id8'>
          <figure>

          <img src={Dubai}></img><figcaption>Map Of Dubai</figcaption></figure></div>
         <div id='id9'><p>Dubai (/duːˈbaɪ/, doo-BY; Arabic: دبي, romanized: Dubayy, IPA: [dʊˈbajj], Gulf Arabic pronunciation:          
           [dəˈbaj]) is the most populated city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai, 
           the most populated of the 7 monarchies which together form the United Arab Emirates.  The tallest building in the world, the Burj Khalifa,
            which is over a half a mile tall.[9]<b>For more click on About Section</b></p></div>
       
        </div>
        
      </div>
      </div>
 
    
  )
}

export default Home