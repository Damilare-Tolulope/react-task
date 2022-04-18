import React from 'react'
import sales from './assets/sales.svg'
import search from './assets/search.svg'
import click from './assets/click.svg'

const Segment: React.FC = () => {
  return (
    <div className='section-container'>
        <div className='section'>
        <img src={search} alt="" />
        <div className='section-a'>
            <h4>Searches <span style={{backgroundColor:"#8BC34A"}}>+5%</span></h4>
            <p>29 380 <small>Yesterday</small></p>
            <p>27 985 <small>Last Friday</small></p>
        </div>
        <div className='section-b'>
            <h4>Mobile traffic: 100%</h4>
            <h4>Web traffic: 100%</h4>
            <p>You get 100% traffic on mobile and desktop devices.</p>
            <p style={{color: "#2196f3"}}><span style={{color: "#4a4a4a"}}>Help:</span> Searches, Pessimisation</p>
        </div>
    </div>
    <div className='section'>
        <img src={click} alt="" />
        <div className='section-a'>
            <h4 style={{color:"#FF6A67"}}>Clicks <span style={{backgroundColor:"#FF6A67"}}>-135%</span></h4>
            <p>243 <small>Yesterday</small></p>
            <p>280 <small>Last Friday</small></p>
        </div>
        <div className='section-b'>
            <h4 style={{color:"#FF6A67"}}>CTR: 0,04%</h4>
            <p>Conversion from searches  to clicks on all devices.</p>
            <p style={{color: "#2196f3"}}><span style={{color: "#4a4a4a"}}>Help:</span> CTR, Cliks</p>
        </div>
    </div>
    <div className='section'>
        <img src={sales} alt="" />
        <div className='section-a'>
            <h4>Sales</h4>
            <p>24 <small>Yesterday</small></p>
            <p>24 <small>Last Friday</small></p>
        </div>
        <div className='section-b'>
            <h4>STR: 6.2%</h4>
            <h4>Avg. Check: 8 903</h4>
            <p>Conversion from cliks  to bookings on all devices.</p>
            <p style={{color: "#2196f3"}}><span style={{color: "#4a4a4a"}}>Help:</span> STR, Bookings, Avg. Check</p>
        </div>
    </div>
    </div>
  )
}

export default Segment