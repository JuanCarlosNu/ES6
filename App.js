import React from 'react'

import {Login , Logout} from './Login'
//import // export
// What
// Why
// How



const App = () => {

    const names = ['abd' , 'juanca' , 'Mark' , 'Rob' , 'Samuel']
    
    const name = 'Abd Alwahab'

    return <div>
        {
        
        names.map(name => {
             return <h1>{name}</h1>
            })
            
        }
    </div>

}

export default App
