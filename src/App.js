import DataTable from "./components/DataTable";
import React,{useState} from "react";

function App() {
  const [dis,setDis] = useState('none');
  const [userId,setUid] = useState('');
  
  const alert = (bool = "flase",uId = "0")=>{
    // console.log(dis,uId)

    setUid(uId);
    if(dis === 'block' && bool !== "true")
      setDis('none');
    else
      setDis('block');
  }

  return (
    <>
    <div Style = {"z-index:1;"} className= {`d-${dis}  position-fixed top-0  w-100 alert alert-danger alert-dismissible fade show`} role='alert'><strong>{`${userId}`}</strong> has been deleted !!!<button type='button' className='btn-close' onClick = {alert} ></button></div>
    
      <div className=" my-5 container col col-md-6 col-sm-6 col-lg-6">
        <h1 className="text-center">Welcome To User Portal</h1>
      </div>
      
      <div className="constainer-fluid">
        <DataTable alert = {alert} />
      </div>
      
    </>
  );
}

export default App;
