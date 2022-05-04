function Test() { 
     // Test function to display user variables on front end
  const setInfo = () => {
    sessionStorage.setItem("test","true");
    console.log("Setting");
  }; 
  const displayInfo = () => {
    // console.log("Displaying Test variable " + sessionStorage.getItem("test"));
    console.log("Hello " + sessionStorage.getItem("fname"));
    console.log("Your UserID is: " + sessionStorage.getItem("id"));
    console.log("Your sessions are active: " + sessionStorage.getItem("loggedIn"));
  }; 
  const clearSession = () =>{
    sessionStorage.clear();
  };


    return (
        <div>
        {/* <button onClick={setInfo}>Set Info</button> */}
        <button onClick={displayInfo}>Display Session</button>
        <button onClick={clearSession}>Clear Session</button>
        </div>
    );

}
export default Test;