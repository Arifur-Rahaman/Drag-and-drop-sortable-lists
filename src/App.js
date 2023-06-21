import './App.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./Container";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    (
      async () => {
        try {
          const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
          setTasks(data)
          setLoading(false)
        } catch (error) {
          console.log(error)
        }
      }
    )()
  }, [])
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', marginTop:'16px' }}>
      {
        loading ? <p>Loading....</p> : (
          <DndProvider backend={HTML5Backend}>
            <Container tasks={tasks} setTasks={setTasks}/>
          </DndProvider>
        )
      }
    </div>
  );
}

export default App;
