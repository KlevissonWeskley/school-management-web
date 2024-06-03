import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Students } from '../pages/Students'
import { ProtectedRoute } from './ProtectedRoutes'
import { DefaultLayout } from '../layout/DefaultLayout'
import { Classrooms } from '../pages/Classrooms'

export function Router() {
  return (
    <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route 
            path='/students' 
            element={
              <ProtectedRoute>
                <Students />
              </ProtectedRoute>
            }
          />
          <Route 
            path='/classrooms'
            element={
              <ProtectedRoute>
                <Classrooms />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}
