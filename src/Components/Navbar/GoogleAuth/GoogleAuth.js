import React, { useState, useEffect, View, Text } from "react";
import { signInWithGoogle, signOutWithGoogle } from "./Firebase";
import InitialsAvatar from "react-initials-avatar";
import "react-initials-avatar/lib/ReactInitialsAvatar.css";
import { FcGoogle } from "react-icons/fc";
import Dropdown from 'react-bootstrap/Dropdown';

function GoogleAuth() {
  const [SignIn, setSignIn] = useState(false);
  const [Check, setCheck] = useState(false);

  useEffect(() => {
    console.log("Im useEffect");
    console.log(SignIn);
    setCheck(SignIn);
  }, [SignIn]);

  const onSubmitSignIn = () => {
    signInWithGoogle(setSignIn);
    console.log("Im On Sign In Submit");
    console.log(SignIn);
  };
  const onSubmitLogOut = () => {
    signOutWithGoogle(setSignIn);
    console.log("Im On Log out submit");
    setCheck(false)
    console.log(SignIn);
  };

  function getFirstCharacters(fullName) {
    const nameParts = fullName.trim().split(/\s+/);
    const initials = nameParts.map((name) => name.charAt(0).toUpperCase());
  
    return initials.slice(0, 2).join('');
  }

  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    const color = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
    return color;
  }
  
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  return (
    <div>
      {Check ? (
        <div>
          <Dropdown>
            <Dropdown.Toggle
              style={{height: "30px",margin: "5px",width:'30px',borderRadius:'30px',backgroundColor:`${getRandomColor()}`,display:'flex',alignItems:'center',paddingLeft:'3px'}}>
                {getFirstCharacters(localStorage.getItem("name")).toUpperCase()}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={onSubmitLogOut}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ) : (
        <FcGoogle style={{height: "20px",margin: "10px"}}
        onClick={onSubmitSignIn}/>
      )}
    </div>
  );
}

export default GoogleAuth;
