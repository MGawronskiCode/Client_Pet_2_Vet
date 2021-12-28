import PetCard from "../components/PetCard";
import {MDBContainer, MDBRow} from "mdb-react-ui-kit";
import "../assets/styles/Card.css"
import PetImage from "../assets/images/Pet.png"
import {useContext, useState} from "react";
import {PageContext} from "../App";
import AddPetModal from "../components/AddPetModal";

export default function UserView(props) {

    const pageContext = useContext(PageContext)
    const saveUrl = "http://localhost:8080/users/" + pageContext.userId + "/pets";

    const [showAddModal, setShowAddModal] = useState(false);
    const toggleShowAddModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowAddModal(!showAddModal);
    }

    function getPetsCards() {
        return props.pets.map((pet) => {
            return <PetCard pet={pet}/>
        })
    }

    return (
        <MDBContainer id="container" >
            <MDBRow id="row">
                {showAddModal &&
                    <AddPetModal
                        isShow="true"
                        setShow={setShowAddModal}
                        saveUrl={saveUrl}
                        toggleShow={toggleShowAddModal}/>
                }

                {getPetsCards()}
                <PetCard
                    pet={null}
                    image={PetImage}
                    toggleShow={toggleShowAddModal}/>
            </MDBRow>
        </MDBContainer>
    )
}