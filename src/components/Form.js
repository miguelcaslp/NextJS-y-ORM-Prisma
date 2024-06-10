import Button from '@/components/Button'

function Form({ action, title, cliente, disabled = false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={cliente?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={cliente?.nombre} autoFocus ></input>
                <label htmlFor='localidad'>Localidad</label>
                <input type='text' id='localidad' name='localidad'
                    placeholder='Localidad'
                    defaultValue={cliente?.localidad} />
                <label htmlFor='fechaNacimiento'>fecha Nacimiento</label>
                <input type='date' id='fechaNacimiento' name='fechaNacimiento'
                    placeholder='Fecha Nacimiento'
                    defaultValue={cliente?.fechaNacimiento} />

            </fieldset>
            <Button title={title} />
        </form>
    )
}

export default Form