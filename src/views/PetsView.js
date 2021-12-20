export default function PetsView (props) {

    // Only for test
    function getPet(pet) {
        return (
            <>
                <li>{pet.name}</li>
                <li>{pet.sex}</li>
                <li>{pet.birthday}</li>
                <hr/>
            </>
        )
    }

    return (
        <div>
            {props.pets.map((pet) => getPet(pet))}
        </div>
    )
}