

function Producto({ children, producto }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{producto.nombre}</strong></p>
            <p>{(producto.precio / 100).toString()} €</p>
            {children}
        </div>
    )
}

export default Producto