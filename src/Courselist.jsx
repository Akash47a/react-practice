
import Course from './Course'
import useFetch from './useFetch';


function Courselist(){

    const [courses,error]=useFetch("http://localhost:3000/courses")


    //courses.sort((x,y)=> y.price-x.price)
    
    // function deleteCard(id){
    //     const newCourses=courses.filter((course)=>course.id!=id);
    //     setCourses(newCourses);
    // }

    //const filtercourses=courses.filter((course)=>course.price<200)
    if(!courses){
        return(<>
            {error?<p>{error}</p>:<p>Loading...</p>}        
        </>)
    }
    const courselist=courses.map((course) => <Course key={course.id} name={course.name} image={course.image} price={course.price} id={course.id}/>) //delete={deleteCard}
    return(
        <>
            {courselist}
        </>
        
    )
    
}
export default Courselist