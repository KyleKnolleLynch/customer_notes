import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'


const RequireAuth = () => {
    const location = useLocation()
    const { roles } = useAuth()
}

export default RequireAuth