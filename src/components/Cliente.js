

function Cliente({ children, cliente }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{cliente.nombre}</strong></p>
            <p>{cliente.localidad}</p>
            <p>{cliente.fechaNacimiento?.toString()}</p>
            {children}
        </div>
    )
}

export default Cliente