export default function PetsView (props) {

    // Only for test
    function getDiet(diet) {
        return (
            <>
                <li>{diet.id}</li>
                <li>{diet.food}</li>
                <li>{diet.foodAmount}</li>
                <li>{diet.expectedFeedingTime}</li>
                <li>{diet.actualFeedingTime}</li>
                <hr/>
            </>
        )
    }

    return (
        <div>
            {props.dietData.map((diet) => getDiet(diet))}
        </div>
    )
}