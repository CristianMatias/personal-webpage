import phone from '../img/phone.png'
import email from '../img/email.png'

function Contact() {
    return (
        <>
            <h5>Información de contacto</h5>
            <ul style={{listStyleType: 'none'}}>
                <li><img width={25} height={25} src={phone} alt='' /> +34 628 17 00 97</li>
                <li><img width={25} height={25} src={email} alt='' /> cristianmatias52@gmail.com</li>
            </ul>
        </>
    );
}

export default Contact;