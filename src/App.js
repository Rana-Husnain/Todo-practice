import React from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";



function App() {
  const [data, setData] = useState([{ username: "husnain", discription: "I am rana" }, { username: "umer", discription: "I am rana" }, { username: "murtaza", discription: "I am muslim" }])
  const [name, setName] = useState("")
  const [disc, setDisc] = useState("")
  const [btn, setBtn] = useState(false)
  const [updateindex, setUpdateindex] = useState()



  const addtodo = () => {



    if (name.length < 3 || disc.length == 0) {
      alert("Enter correct data")
    }
    else {
      const obj = {
        username: name,
        discription: disc
      }
      const newData = [...data, obj]

      setData(newData)



      setName('')
      setDisc('')
    }
  }


  const deleteTodo = (proops) => {
    const newarray = data.filter((item, index) => proops !== index)
    setData([...newarray])
  }




  const editTodo = (item,index) => {
    setName(item.username)
    setDisc(item.discription)
    setBtn(true)
    setUpdateindex(index)
  }








  return (
    <div className="App">
      <div className="inputField">
        <h1>Todo App</h1>

        <input type="text" placeholder="Enter you name"
          onChange={(e) => { setName(e.target.value) }}
          value={name}
        />
        {" "}
        <input type="text" placeholder="Enter your discription"
          onChange={(e) => { setDisc(e.target.value) }}
          value={disc}
        />
        {" "}
        {
          btn ? <button className="btn-success"
            onClick={addtodo}
          >Update todo</button> :
            <button className="btn-dark "
              onClick={addtodo}
            >Add todo</button>
        
        }
      </div>



      <div >
        {
          data.map((item, index) => {
            return (
              <>
                <div className="displayDiv">
                  <p>{item.username}</p>
                  <p>{item.discription}</p>
                  <div>
                    <button className="btn-info"
                      onClick={() => { editTodo(item,index) }}>
                      Edit</button> {" "}
                    <button className="btn-danger"
                      onClick={() => { deleteTodo(index) }}
                    >delete</button>
                  </div>
                </div>
              </>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
