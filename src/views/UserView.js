import PetCard from "../components/PetCard";
import {MDBContainer, MDBRow} from "mdb-react-ui-kit";
import "../assets/styles/Card.css"
import PetImage from "../assets/images/Pet.png"
import {useState} from "react";
import AddPetModal from "../components/AddPetModal";

export default function UserView(props) {

    const [isShow, setShow] = useState(false);

    function getPetsCards() {
        return props.pets.map((pet) => {
            return <PetCard key={pet.id} pet={pet}/>
        })
    }

    return (
        <MDBContainer id="container" >
            <MDBRow id="row">
                {isShow &&
                    <AddPetModal
                        isShow={isShow}
                        setShow={setShow}
                        toggleShow={() => setShow(!isShow)}/>
                }

                {getPetsCards()}
                <PetCard
                    pet={null}
                    image={PetImage}
                    toggleShow={() => setShow(!isShow)}/>
            </MDBRow>
        </MDBContainer>
    )
}