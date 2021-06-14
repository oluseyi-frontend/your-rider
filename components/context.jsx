import React from 'react'
import { useState } from 'react';

export const DataCentral = React.createContext()

const YourRiderContext = (props) => {
    const [open, setOpen] = useState(false)


    const handleAsideOpen = () => {
        console.log('clicked')
        setOpen(!open)
    }


    return ( 
        <DataCentral.Provider value={{
            open: open,
            handleAsideOpen: handleAsideOpen,
            setOpen: setOpen
        }}>
            {props.children}
        </DataCentral.Provider>
     );
}
 
export default YourRiderContext;   