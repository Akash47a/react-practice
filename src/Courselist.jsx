import HTML from "./assets/sta-je-html.jpg"
import CSS from "./assets/css.png"
import JS from "./assets/js.jpg"
import Course from './Course'
import { useState } from "react"

function Courselist(){



    const [courses,setCourses]=useState([{id:1,image:HTML,name:"html",price:199},
        {id:2,image:CSS,name:"css",price:199},
        {id:3,image:JS,name:"javascript",price:499}
    ]);
    //courses.sort((x,y)=> y.price-x.price)
    
    function deleteCard(id){
        const newCourses=courses.filter((course)=>course.id!=id);
        setCourses(newCourses);
    }
    //const filtercourses=courses.filter((course)=>course.price<200)
    const courselist=courses.map((course) => <Course key={course.id} name={course.name} image={course.image} price={course.price} id={course.id} delete={deleteCard}/>)
    return(
        <>
            {courselist}
        </>
        
    )
}
export default Courselist