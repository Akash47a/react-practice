
function Course(props) {
    return (
        <div className="card">
            <img src={props.image} alt="img" />
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <button onClick={()=> {console.log(props.name+" buy now")}}>Buy Now</button>
        </div>
    );
}

export default Course;