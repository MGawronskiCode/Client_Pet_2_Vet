import PetCard from "../components/PetCard";
import {MDBRow} from "mdb-react-ui-kit";
import "../assets/styles/Card.css"
import PetImage from "../assets/images/Pet.png"

export default function UserView(props) {

    function getPets() {
        return props.pets.map((pet) => {
            return <PetCard pet={pet}/>
        })
    }

    return (
        <>
            <MDBRow id="card" className='row-cols-md-4 g-4 justify-content-center'>
                {getPets()}
                <PetCard pet={null} image={PetImage}/>
            </MDBRow>
        </>
    )
}