import React from 'react'

const BoostP = (props) => {
  return (
    <div>
      <p className="mt-2">Select The post you want to boost      
</p>

      {props?.products?.map((p,_) => (
   
       <div key={_} class="max-h-96 overflow-y-auto">
        <div class="block max-w-sm p-4 border border-gray-200 rounded-lg shadow mt-2 bg-white relative">
          <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-800">
           {p.content}
          </h5>
          <center>
          
          {p?.media && (
            /\.(jpg|jpeg|png|gif)$/i.test(p?.media) ? (
              <img src={p?.media} alt="Post media" className="w-96 rounded-lg mb-4" />
            ) : (
              <video controls className="w-96 rounded-lg mb-4">
                <source src={p?.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
            
        </center>
        </div>

      </div>

     ))} 
    </div>
  )
}

export default BoostP