import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [navigate])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '1rem',
        color: 'white',
      }}>
      <h1>404 - Pagina non trovata</h1>
      <p>Reindirizzamento alla home...</p>
    </div>
  )
}
