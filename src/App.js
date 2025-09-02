              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="correo@ejemplo.com"
            />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#555', fontSize: '0.9rem' }}>
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="••••••••"
            />
          </div>
          
          <button
            onClick={handleLogin}
          >
            Iniciar Sesión
          </button>
          
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: '#f5f5f5',
            borderRadius: '0.5rem',
            fontSize: '0.85rem',
            color: '#666'
          }}>
            <strong>Demo:</strong><br/>
            Email: AmeliA@sistema.com<br/>
            Contraseña: Camilo123
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      <header style={{
        background: '#667eea',
        color: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            borderRadius: '0.5rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📦</div>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>Inventario</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea', margin: 0 }}>150</p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Productos</p>
          </div>
          
          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</div>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>Ventas Hoy</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', margin: 0 }}>$1,250</p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>12 ventas</p>
          </div>
          
          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>Ganancia Mes</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#764ba2', margin: 0 }}>$28,450</p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>+15% vs mes anterior</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
