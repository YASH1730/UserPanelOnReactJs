import React, { useState } from "react";
import api from "./Api";

const CreateNewUser = (props) => {
 
  const submit = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let gender = e.target.gender.value;
    let status = e.target.status.value;

    //for filtering the real data
    if (name === "" || email === "" || gender === "" || status === "")
    {
        alert("All fields are mendotory !!! ");
        return 0;
    }

    const data = {
      name: name,
      email: email,
      gender: gender,
      status: status,
    };

    api
      .createNewUser(data)
      .then((response) => {
          if(response.data.code === 422)
          {
              alert(`Email "(${email})" ${response.data.data[0].message}`)
          }
        props.refresh();
        props.close();
      })
      .catch((response) => {
          alert(response)
        
      });
  };

  return (
    <>
      {/* Update Form */}
      <div
        className={`container d-${props.dis} container  p-1 ml-5 mr-5 my_width position-fixed bg-secondry  my_bg animate__animated animate__fadeInDown`}
      >
        <button
          type="button"
          onClick={props.close}
          className="p-2 btn-close position-absolute top-0 end-0"
          aria-label="Close"
        ></button>

        <h1 className="text-center">Create New User</h1>
        <form method="post" className="p-2" action="" onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
               
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              name="email"
               
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Gender
            </label>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Options
              </label>
              <select
                name="gender"
                className="form-select"
                id="inputGroupSelect01"
              >
                <option disabled value="" selected>
                  Choose Gender...
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Status
            </label>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Options
              </label>
              <select
                name="status"
                className="form-select"
                id="inputGroupSelect01"
              >
                <option disabled selected>
                  Choose Status...
                </option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary d-block m-auto">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateNewUser;
