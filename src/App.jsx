import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue.trim() }])
      setInputValue('')
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h2 className="mb-0">📝 Lista de Tareas</h2>
            </div>
            <div className="card-body">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Escribe una nueva tarea y presiona Enter..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={addTask}
                  disabled={!inputValue.trim()}
                >
                  Agregar
                </button>
              </div>

              <div className="task-list">
                {tasks.length === 0 ? (
                  <div className="text-center text-muted py-5">
                    <i className="fas fa-clipboard-list fa-3x mb-3"></i>
                    <p className="fs-5">No hay tareas, añadir tareas</p>
                  </div>
                ) : (
                  <ul className="list-group">
                    {tasks.map((task) => (
                      <li 
                        key={task.id} 
                        className="list-group-item d-flex justify-content-between align-items-center task-item"
                      >
                        <span className="task-text">{task.text}</span>
                        <button
                          className="btn btn-danger btn-sm delete-btn"
                          onClick={() => deleteTask(task.id)}
                          title="Eliminar tarea"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {tasks.length > 0 && (
                <div className="mt-3 text-center">
                  <small className="text-muted">
                    {tasks.length} {tasks.length === 1 ? 'tarea' : 'tareas'} pendiente{tasks.length === 1 ? '' : 's'}
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App