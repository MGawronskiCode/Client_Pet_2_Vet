export default function DietView (props) {

    // Only for test
    function getDiet(diet) {
        return (
            <div key={diet.id}>
                <li>{diet.id}</li>
                <li>{diet.food}</li>
                <li>{diet.foodAmount}</li>
                <li>{diet.expectedFeedingTime}</li>
                <li>{diet.actualFeedingTime}</li>
                <hr/>
            </div>
        )
    }

    return (
        <div>
            {props.dietData.map((diet) => getDiet(diet))}
        </div>
    )
}