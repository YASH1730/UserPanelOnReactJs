import React from "react";


const View = (props) => {

  return (
    <>

        
<div className={`d-${props.dis} container  p-1 ml-5 mr-5 my_width position-fixed bg-secondry  my_bg animate__animated animate__fadeInDown`}>
    <button type="button" onClick = {props.close} className="p-2 btn-close position-absolute top-0 end-0" aria-label="Close"></button>
        <h1 className="text-center">View </h1>
          <div className="mb-3 text-center">
            <label className="form-label">
              Name :: &nbsp;
            </label>
            <label className="form-label">
              {props.value.name}
            </label>

          </div>
          <div className="mb-3 text-center">
            <label   className="form-label">
              Email :: :: &nbsp;
            </label>
            <label   className="form-label">
            {props.value.email}
            </label>

          </div>
          <div className="mb-3 text-center">
            <label   className="form-label">
              Gender :: &nbsp;
            </label>
            <label   className="form-label">
            {props.value.gender}
            </label>
          </div>

          <div className=" mb-3 text-center">
            <label   className="form-label">
              Status :: &nbsp;
            </label>
            <label   className="form-label">
            {props.value.status} 
            </label>
          </div>
      </div>
      
    </>
  );
}


export default View;