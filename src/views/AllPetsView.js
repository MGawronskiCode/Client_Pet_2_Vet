export default function AllPetsView (props) {

    // Only for test
    function getPet(pet) {
        return (
            <div key={pet.id}>
                <li>{pet.name}</li>
                <li>{pet.sex}</li>
                <li>{pet.birthday}</li>
                <hr/>
            </div>
        )
    }

    return (
        <div>
            {props.pets.map((pet) => getPet(pet))}
        </div>
    )
}