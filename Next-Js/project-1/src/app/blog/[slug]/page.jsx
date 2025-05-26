import React from 'react'

const page = ({params}) => {
    console.log(params);
    const list= ["zuhaib", "hamza" , "sami","Ali","Joji","jazzy"]
    
  return (
    <>
   
    {list.includes(params.slug) ?<h1>This is blog about {params.slug}</h1>: <h1>You entered wrong</h1>
    }
    </>
  )
}

export default page