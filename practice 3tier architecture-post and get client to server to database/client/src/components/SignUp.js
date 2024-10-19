import React, { useRef } from 'react'

function SignUp() {
    let firstNameInputRef= useRef();
    let lastnameInputRef= useRef();
    let ageInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef= useRef();
    let mobileNoInputRef = useRef();

    let postDataToDataBase=async()=>{
        let dataToSend={
          firstName:firstNameInputRef.current.value,
          lastName:lastnameInputRef.current.value,
          age:ageInputRef.current.value,
          email:emailInputRef.current.value,
          password:passwordInputRef.current.value,
          mobileNo:mobileNoInputRef.current.value,


        };
        console.log(dataToSend);
        let dataToSendJSON = JSON.stringify(dataToSend);
        console.log(dataToSend);

        let myHeaders = new Headers();
        myHeaders.append("content-type","application/json");

       let reqOptions={
        method:"POST",
        body:dataToSendJSON,
        headers:myHeaders,
       };

        try {
        let JSONData = await fetch("http://localhost:4678/signup",reqOptions);
        let JSOData = await JSONData.json();
        
        alert(JSOData.msg);
        console.log(JSOData.Status);
        } catch (error) {
        alert(error);
        }

    };
  return (
    
    <div>
        <form>
            <label>FirstName</label>
            <input ref={firstNameInputRef}></input>
            <label>LastName</label>
            <input ref={lastnameInputRef}></input>
            <label>Age</label>
            <input ref={ageInputRef}></input>
            <label>Email</label>
            <input ref={emailInputRef}></input>
            <label>Password</label>
          <input ref={passwordInputRef }></input>
            <label>MobileNo</label>
            <input ref={mobileNoInputRef} ></input>
       <div>
        <button type="button" onClick={()=>{
            postDataToDataBase();
        }}>SignUp</button></div>
         </form>
      
    </div>
  )
}

export default SignUp


