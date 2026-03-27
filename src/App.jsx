
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Test from './component/Test';
import Todo from './component/Todo';
import UserContextProvider from './context/UserContextProvider';
import Login from './component/Login';
import Profile from './component/Profile';


function App() {
  return (
    <UserContextProvider>
   {/* <BrowserRouter>
      <Link to="/todo">Go to Todo Page</Link>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/test" element={<Test />} />
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </BrowserRouter> */}
    <h1>React with chai and code </h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
