import React, { useState, useEffect } from "react";
import View from "./View";
import Update from "./Update";
import api from "./Api";
import CreateNewUser from "./CreateNewUser";

export default function DataTable(props) {
  const [userData, setuserData] = useState([]);
  const [showV, setShowV] = useState("none");
  const [showU, setShowU] = useState("none");
  const [showC, setShowC] = useState("none");
  const [value, setValue] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    get_user();
  }, []);

  const change_data_onPagination = (e) => {
    // console.log(e.target.innerText + "" + count);

    if (e.target.innerText === "Pre" && count > 1) setCount(count - 1);
    else setCount(count + 1);

    api
      .getUser(count)
      .then((response) => {
        let data = response.data.data;
        setuserData(data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const close = () => {
    if (showV !== "none") {
      setShowV("none");
      document.body.style.overflow = "scroll";
    } else if (showC !== "none") {
      setShowC("none");
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "scroll";
      setShowU("none");
    }
  };

  const set = (e) => {
    if (e.target.innerText === "View" && showV === "none") {
      document.body.style.overflow = "hidden";
      setShowV("block");
      view_user(e);
    } else if (e.target.innerText === "Update" && showU === "none") {
      document.body.style.overflow = "hidden";
      setShowU("block");
      setValue(e.target.parentNode.parentNode.children[0].outerText);
    } else if (e.target.innerText === "Create New User" && showC === "none") {
      document.body.style.overflow = "hidden";
      setShowC("block");
    } else {
      setShowU("none");
      setShowV("none");
    }
  };

  const get_user = () => {
    api
      .getUser()
      .then((response) => {
        let data = response.data.data;
        setuserData(data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const delete_user = (e) => {
    const userId = e.target.parentNode.parentNode.children[0].outerText;
    api
      .deleteUser(userId)
      .then((response) => {
        props.alert("true", userId);
        get_user();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const view_user = (e) => {
    const userId = e.target.parentNode.parentNode.children[0].outerText;
    api
      .viewUser(userId)
      .then((response) => {
        setValue(response.data.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className=" position-absolute top-0 end-0 p-4 mt-4" onClick={set}>
        <button className="btn btn-primary">Create New User</button>
      </div>
      <div className="container w-50 col-md-4 col-sm-4">
        <h1 className="text-center">Data Table </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                ID
              </th>
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td className="d-flex justify-content-center ">
                  <button className="btn btn-secondary mx-2 " onClick={set}>
                    View
                  </button>
                  <button className="btn btn-success mx-2" onClick={set}>
                    {" "}
                    Update
                  </button>
                  <button className="btn btn-danger mx-2" onClick={delete_user}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* conditions for dis the components */}
      {/* for view */}
      {showV === "block" && <View dis={showV} close={close} value={value} />}

      {/* //for update */}
      {showU === "block" && (
        <Update dis={showU} close={close} value={value} refresh={get_user} />
      )}

      {/* for CNU */}
      {showC === "block" && <CreateNewUser dis={showC} close={close} refresh={get_user} />}

      <div className="container-fluid m-auto position-fixed pre_next top-50 my_start">
        <button className="btn btn-primary" onClick={change_data_onPagination}>
          Pre
        </button>

        <button
          className="btn btn-primary float-end"
          onClick={change_data_onPagination}
        >
          Next
        </button>
      </div>

      {/* pagination */}
    </>
  );
}
