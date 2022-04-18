import React from 'react'

const Block: React.FC = () => {
  return (
      <>
    <div className='block'>
        <div className='col'>
            <div className='circle' style={{backgroundColor: "#8BC34A"}}></div>
            <div className='error'>
                <p>Errors: 0,12%</p>
                <p className='average'>Average: 0,11%</p>
            </div>
        </div>
        <div className='col'>
            <div className='circle' style={{backgroundColor: "#8BC34A"}}></div>
            <div className='error'>
                <p>Zeroes: 5,12%</p>
                <p className='average'>Average: 0,11%</p>
            </div>
        </div>
        <div className='col'>
            <div className='circle' style={{backgroundColor: "#8BC34A"}}></div>
            <div className='error'>
                <p>Timeouts: 0,12%</p>
                <p className='average'>Average: 0,11%</p>
            </div>
        </div>
    </div>
    <div className='pipe'>
        <div style={{width: "35%"}} className='yellow'></div>
        <div style={{width: "30%"}} className='blue'></div>
        <div style={{width: "25%"}} className='purple'></div>
        <div style={{width: "15%"}} className='pink'></div>
    </div>
    <div className='sector'>
        <div className='sec'>
            <div className='yellow'></div> <p>Error 500: 1 256</p>
        </div>
        <div className='sec'>
            <div className='blue'></div> <p>Error 501: 800</p>
        </div>
        <div className='sec'>
            <div className='purple'></div><p>Error 502: 650</p>
        </div>
        <div className='sec'>
            <div className='pink'></div> <p>Other: 330</p>
        </div>
    </div>
    </>
  )
}

export default Block;