import personService from '../services/persons'

const Person = ({id, nombre, numero, delPerson}) => {

    return (
        <tr className='person'>
            <td>{nombre}</td> 
            <td>{numero}</td>
            <td><button onClick={() => delPerson(id)} >Borrar</button></td>
        </tr>
    )
}

export default Person
