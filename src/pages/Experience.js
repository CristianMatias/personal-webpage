import ExperienceCard from '../components/cards/ExperienceCard'
import aptitude from '../img/aptitude.png'
import bitbox from '../img/bitbox.png'
import holasoft from '../img/holasoft.png'
import verypops from '../img/verypops.png'
import CardGroup from 'react-bootstrap/CardGroup';

function Experience() {
    return (
        <div>
        <h3>Experiencia</h3>
        <CardGroup>
          <ExperienceCard
            logo={holasoft}
            link={'https://www.holasoft.es'}
            companyName={'Holasoft'}
            title={'Junior Web Developer'}
            startDate={'March 2020'}
            endDate={'June 2020'}
          />
          <ExperienceCard
            logo={bitbox}
            link={'https://www.bitboxonline.com'}
            companyName={'Bitbox SL'}
            title={'Junior Fullstack Developer'}
            startDate={'August 2020'}
            endDate={'July 2021'}
          />
          <ExperienceCard
            logo={verypops}
            link={'https://www.verypops.com'}
            companyName={'Very Pops!'}
            title={'Backend Engineer'}
            startDate={'March 2021'}
            endDate={'May 2022'}
          />
          <ExperienceCard
            logo={aptitude}
            link={'https://www.aptitudeglobal.com'}
            companyName={'Aptitude Global'}
            title={'API Engineer'}
            startDate={'July 2021'}
            endDate={'Currently'}
          />
        </CardGroup>
        <br />
      </div>
    );
}

export default Experience;