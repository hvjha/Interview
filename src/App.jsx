
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Test from './component/Test';
import Todo from './component/Todo';


function App() {
  return (
    <>
   <BrowserRouter>
      <Link to="/todo">Go to Todo Page</Link>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/test" element={<Test />} />
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
