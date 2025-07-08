import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateRoom } from './components/pages/create-room'
import { Room } from './components/pages/room'

export function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route element={<CreateRoom />} index />
        <Route element={<Room />} path="/room" />
      </Routes>
    </BrowserRouter>
  )
}
