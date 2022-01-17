/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import api from "./Api";

const Update = (props) => {
  const [user, setValue] = useState("Nothing");

  const view_user = () => {
    // console.log(props.value);
    const userId = props.value;
    api
      .viewUser(userId)
      .then((response) => {
        setValue(response.data.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    view_user();
  }, [view_user]);

 

  const submit = (e) => {
    e.preventDefault();

    // console.log(e.target.gender.value);
    let name = e.target.name.value;
    let email = e.target.email.value;
    let gender = e.target.gender.value;
    let status = e.target.status.value;

    //for filtering the real data
    if (name === "") name = user.name;
    if (email === "") email = user.email;
    if (gender === "") gender = user.gender;
    if (status === "") status = e.target.status.value;

    const data = {
      name: name,
      email: email,
      gender: gender,
      status: status,
    };

    api
      .updateUser(user.id, data)
      .then((response) => {
        // console.log(response.data,data);
        props.refresh();
        props.close();
      })
      .catch((err) => {
        // console.log(err);
        
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

        <h1 className="text-center">Update</h1>
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
              placeholder={user.name}
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
              placeholder={user.email}
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
                  {user.gender}
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
                  {user.status}
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

export default Update;
