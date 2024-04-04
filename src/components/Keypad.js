// Code Keypad Component Here

function Keypad (){
    return (
        <div>
          <input onChange={() => console.log("Entering password...")} type="password" name="password"></input>  
        </div>
    )
}

export default Keypad;