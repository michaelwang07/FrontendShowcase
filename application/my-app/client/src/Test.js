function Test() {
    
     // Test function to display user variables on front end
  const setInfo = () => {
    sessionStorage.setItem("name","mike");
    console.log("Setting");
  }; 
  const displayInfo = () => {
    console.log("Displaying " + sessionStorage.getItem("name"));
  }; 

    return (
        <div><button onClick={setInfo}>Set Info</button>
         <button onClick={displayInfo}>Display Info</button></div>
    );

}
export default Test;