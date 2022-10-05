import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
            <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"></link>
                <MDBContainer className='pt-4'>
                    <section className='mb-4'>
                        <MDBBtn
                            rippleColor="dark"
                            link
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='https://wa.me/34628170097'
                            role='button'
                        >
                            <MDBIcon fab className='fa-whatsapp' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            link
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='mailto:cristianmatias52@gmail.com'
                            role='button'
                        >
                            <MDBIcon className='fa-envelope' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            link
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='https://www.instagram.com/crismat18/'
                            role='button'
                        >
                            <MDBIcon fab className='fa-instagram' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            link
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='https://www.linkedin.com/in/cristian-david-m-019449135/'
                            role='button'
                        >
                            <MDBIcon fab className='fa-linkedin' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            link
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='https://github.com/CristianMatias'
                            role='button'
                        >
                            <MDBIcon fab className='fa-github' />
                        </MDBBtn>
                    </section>
                </MDBContainer>


                © 2022
            </div>
        </MDBFooter>
    );
}