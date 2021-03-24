import React from 'react'

export default function Navbar(props) {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <h1 className='title'>Weather-app</h1>
            </div>
            <div className='col-md-6'>
                <form 
                    className='region'
                    // onSubmit, s.h. bei ENTER oder click Submit button, mache...
                    onSubmit={
                        (paramEE) => {
                            props.changeWeather(paramEE)
                        }
                    }
                >
                    <input 
                        className='regioninput' 
                        placeholder='Enter location'
                        onChange={ (paramE) => {
                            /* console.log(paramE.target.value) */
                            props.changeRegion(paramE.target.value)
                        } }
                    >

                    </input>
                </form>
            </div>
        </div>
    )
}
