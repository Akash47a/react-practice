import HTML from "./assets/sta-je-html.jpg"
import CSS from "./assets/css.png"
import JS from "./assets/js.jpg"
import Course from './Course'


function Courselist(){



    const courses=[{image:HTML,name:"html",price:199},
        {image:CSS,name:"css",price:199},
        {image:JS,name:"javascript",price:499}
    ]
    //courses.sort((x,y)=> y.price-x.price)

    //const filtercourses=courses.filter((course)=>course.price<200)
    const courselist=courses.map((course,index) => <Course key={index} name={course.name} image={course.image} price={course.price}/>)
    return(
        <>
            {courselist}
        </>
        
    )
}
export default Courselist