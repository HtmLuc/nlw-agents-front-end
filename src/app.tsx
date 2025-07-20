import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateRoom } from './pages/create-room'
import { Room } from './pages/room'

const quertyClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={quertyClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:roomId" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
