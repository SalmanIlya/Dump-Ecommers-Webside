import React from 'react'
import "./style.css"
const Ratings = ({newitem}) => {
  return (
    <div>
      <span>
 <i className={newitem>=1 ?'fas fa-star text-warning     ':
newitem>=1.5 ? 'fas fa-star-half-alt text-warning':
'far fa-star text-warning'
}></i> 
</span>
<span>
 <i className={newitem>=2 ?'fas fa-star text-warning':
newitem>=1.5 ? 'fas fa-star-half-alt text-warning':
'far fa-star text-warning'
}></i> 
</span>
<span>
 <i className={newitem>=3 ?'fas fa-star text-warning':
newitem>=2.5 ? 'fas fa-star-half-alt text-warning':
'far fa-star text-warning'
}></i> 
</span>
<span>
 <i className={newitem>=4 ?'fas fa-star text-warning':
newitem>=3.5 ? 'fas fa-star-half-alt text-warning':
'far fa-star text-warning'
}></i> 
</span>
<span>
 <i className={newitem===5 ?'fas fa-star text-warning':
newitem>=4.5 ? 'fas fa-star-half-alt text-warning':
'far fa-star text-warning'
}></i> 
</span>

    </div>
  )
}

export default Ratings