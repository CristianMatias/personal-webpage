
function CoursesCards(props) {
    const courses = props.courses;
    const listItems = courses.map((course) => <li key={course}>{course}</li>);
    return(
        <>
            <div><img src={props.logo} height={50} width={props.width}/>{props.title}</div>
            <ul>{listItems}</ul>
        </>
    );
}

export default CoursesCards;