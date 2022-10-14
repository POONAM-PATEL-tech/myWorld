import React from 'react'
import Navbar from '../components/Navbar'
import './About.css';

const About = () => {
  return (
    <div>
        <Navbar/>
        <h1> About</h1>
        <div className='count'>
          <h2>India</h2>
          <p>Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago.[26][27][28] Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity.[29] Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley Civilisation of the third millennium BCE.[30] By 1200 BCE, an archaic form of Sanskrit, an Indo-European language, had diffused into India from the northwest.[31][32] Its evidence today is found in the hymns of the Rigveda. </p>
          
        </div>

        <div className='count'>
          <h2>USA</h2>
          <p>Paleo-aboriginals migrated from Siberia to the North American mainland at least 12,000 years ago, and advanced cultures began to appear later on. These advanced cultures had almost completely declined by the time European colonists arrived during the 16th century. The United States emerged from the Thirteen British Colonies established along the East Coast when disputes with the British Crown over taxation and political representation led to the American Revolution (1765–1784), which established the nation's independence. In the late 18th century, the U.S. began expanding across North America, gradually obtaining new territories, sometimes through war, frequently displacing Native Americans, and admitting new states. By 1848, the United States spanned the continent from east to west. The controversy surrounding the practice of slavery culminated in the secession of the Confederate States of America, which fought the remaining states of the Union during the American Civil War (1861–1865). With the Union's victory and preservation, slavery was abolished by the Thirteenth Amendment.</p>
        </div>
        <div className='count'>
          <h2>Dubai</h2>
          <p>In the eastern Arabian Peninsula on the coast of the Persian Gulf,[10] it is also a major global transport hub for passengers and cargo.[11] Oil revenue helped accelerate the development of the city, which was already a major mercantile hub. A centre for regional and international trade since the early 20th century, Dubai's economy relies on revenues from trade, tourism, aviation, real estate, and financial services.[12][13][14][15] Oil production contributed less than 1 percent of the emirate's GDP in 2018.[16] The city has a population of around 3.4 million (as of 2021)</p>
        </div>
    </div>

  )
}

export default About