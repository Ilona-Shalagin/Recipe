function RecipeComponent({label,image,ingredients,calories,cuisine,time}){
    return(
        <div className="storage">
            <div className="box">
        <h2>{label}</h2>
        </div>
        <div className="box">
        <img src = {image} />
        </div><div className="box">
        <h4 className="top">"{cuisine}"</h4>
        </div>
        <ul className="box">
            {ingredients.map((ingredient,index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <div className="box">
        <h3>Calories</h3>
        <p>{calories.toFixed()}</p>
        </div>
        <div className="box">
        <h3>Prepare time</h3>
        <p>{time} min</p>
        </div>
        <hr></hr>
        </div>
        
    )
}
export default RecipeComponent;