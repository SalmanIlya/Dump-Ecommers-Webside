import React from 'react'

const SideNav = ({allProduct,fetchdata}) => {
  const item=[...new Set(allProduct.map(item=>item.category ))]

  return (
    <div className='w-25 p-5 bg-light'>
      <h4 className='m-4'>side nave</h4>
{
  item.map((categery)=>{
    return(
      <div key={categery.id}>
        <button  className='btn btn-warning m-1' onClick={()=>{
          fetchdata(categery)
        console.log("side nav",categery)
        }}>{categery}</button>
        </div>
    )
  })
}
    </div>
  )
}

export default SideNav