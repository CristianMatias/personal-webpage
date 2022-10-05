import ExperienceCard from '../components/cards/ExperienceCard'
import CardGroup from 'react-bootstrap/CardGroup';

import cloudGuru from '../img/cloud-guru.png'
import neo4j from '../img/neo4j.png'
import openwebinars from '../img/openwebinars.png'
import udemy from '../img/udemy.png'
import CoursesCards from '../components/cards/CoursesCard';


function Courses() {
    var openWebinarList = ['Introduction to Programming Using Python','Desarrollador de Sitios Web dinámicos con PHP y MySQL',
                            'Curso de PHP basico', 'C# for begginers', 'Javascript for Begginers',
                            'Asynchronous programming with Promises in Javascript', 'Test Driven Development',
                            'Node.js y Express', 'Curso de Spring Core', 'Curso de Clean Code'];

    var neo4jList = ['Using Indexes and Query Best Practices in Neo4j', 'Querying with Cypher in Neo4j',
                        'Importing Data with Neo4j', 'Graph Data Modeling for Neo4j', 
                        'Creating Nodes and Relationships in Neo4j', 'Basic Neo4j 4.x Administration'];

    var cloudGuruList = ['Introduction to Amazon Cognito', 'EKS Basics'];

    var udemyList = ['Microservicios con spring boot Docker Open API y Swagger', 
                        'Node.js - Creando API con Express y MongoDB (Incl. Deno)'];

    return (
        <>
            <h5>Cursos y Especializaciones</h5>

            <CoursesCards logo={openwebinars} title={'Open Webinars'} width={50} courses={openWebinarList} />
            <CoursesCards logo={neo4j} width={100} courses={neo4jList} />
            <CoursesCards logo={cloudGuru} title={'A Cloud Guru'} width={50} courses={cloudGuruList} />
            <CoursesCards logo={udemy} width={50} courses={udemyList} />

        </>
    );
}

export default Courses;