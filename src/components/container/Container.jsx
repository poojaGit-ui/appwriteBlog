import React from 'react'

function Container({children}) {  //children is just a name which can accepts properties
    return <div className='w-full max-w-7xl  mx-auto px-4'>{children}</div>;
  
}

export default Container


//container contains styling properties 