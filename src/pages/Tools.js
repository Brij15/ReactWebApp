import React, {useState, useEffect} from "react";
import '../components/Tools.css'
import TodoAdd from "../components/TodoAdd";
import TodoList from "../components/TodoList";
import WeatherCard from "../components/Weather"; 
import { Dimmer, Loader } from 'semantic-ui-react';

function ToolPage(){
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
    
          await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log(result);
          });
        }
        fetchData();
      }, [lat,long])

    return (
        <div className="Tool">
            <header>
                <h2>Todo List</h2>
            </header>
            <TodoAdd inputText={inputText} todos={todos} setInputText={setInputText} setTodos={setTodos}/>
            <TodoList setTodos={setTodos} todos={todos} />

            <header>
                <h2>Weather App</h2>
            </header>
            
            <div className="Weather">
            {(typeof data.main != 'undefined') ? (
                    <WeatherCard weatherData={data}/>
                ): (
                <div>
                <Dimmer active>
                    <Loader>Loading..</Loader>
                </Dimmer>
            </div>
            )}
            </div>
        </div>
    );
}

export default ToolPage;