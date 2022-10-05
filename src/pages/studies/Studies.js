import Courses from './Courses';
import Language from './Languages';
import Schools from './Schools';

function Studies() {
    return (
        <div>
            <h3>Estudios</h3>
            <Schools />
            <Language />
            <Courses />
        </div>
    );
}

export default Studies;