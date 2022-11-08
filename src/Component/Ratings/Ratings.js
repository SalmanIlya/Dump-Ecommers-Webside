import React from 'react'
import "./style.css"
const Ratings = (props) => {
  const {ratings}=props
  return (
    <div>
      <span>
 <i className={ratings>=1 ?'fas fa-star text-warning     ':
ratings>=1.5 ? 'fas fa-star-half-alt text-warning':
'far fa-star text-warning'
}></i> 
</span>
<span>
 <i className={ratings>=2 ?'fas fa-star text-warning':
ratings>=1.5 ? 'fas fa-star-half-alt text-warning':
'far fa-star text-warning'
}></i> 
</span>
<span>
 <i className={ratings>=3 ?'fas fa-star text-warning':
ratings>=2.5 ? 'fas fa-star-half-alt text-warning':
'far fa-star text-warning'
}></i> 
</span>
<span>
 <i className={ratings>=4 ?'fas fa-star text-warning':
ratings>=3.5 ? 'fas fa-star-half-alt text-warning':
'far fa-star text-warning'
}></i> 
</span>
<span>
 <i className={ratings===5 ?'fas fa-star text-warning':
ratings>=4.5 ? 'fas fa-star-half-alt text-warning':
'far fa-star text-warning'
}></i> 
</span>

    </div>
  )
}

export default Ratings