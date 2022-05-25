import {useState} from 'react'

const UseState = () => {

    //! Vanila JavaScript
    // let name = "Singh";
    // document.getElementsByClassname("name").innerHTML = name;

    //* useState Hook
    // const [name, setName ] = useState("Rohan");

    const [count, setCount] = useState(0)

    const [inputName, setInputName] = useState("")


  return (
    <div>
        {/* <div className="name">{name}</div>
        <button onClick={() => {
            setName("Singh")
        }}> Change Name </button> */}


        <button onClick={() => {
            // setCount(count-1)
            setCount((currentNO) => {
                return currentNO-1;
            })
        }}>Decrease count</button>

        <div>{count}</div>

        <button onClick={() => {
            // setCount(count+1)
            setCount((currentNO) => {
                return currentNO+1;
            })
        }}>Increase count</button>

        <div>
            <input type="text" placeholder='Name....' 
            onChange={(event) => {
                setInputName(event.target.value)
            }}  />
            <h1> {inputName} </h1>
        </div>


    </div>
  )
}

export default UseState