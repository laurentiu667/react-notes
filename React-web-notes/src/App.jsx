import Container from "./Container";
import CardCombo from "./CardCombo";
import Blob from "./Blob";
import Description from "./Description";
import macImage from './assets/images/mac.jpg';

// ...

<CardCombo backgroundImage={macImage} />
const App = () => {
    return (
        <>
            <Container className="relative" />
            <div className="container-card flex flex-row flex-wrap justify-center py-12 gap-12">
                <CardCombo backgroundImage={macImage} />
                <CardCombo backgroundImage={macImage} />
                <Blob className="blob" style={{ top: "1400px", left: "300px" }} />
                <CardCombo backgroundImage={macImage} />
                <CardCombo backgroundImage={macImage} />
            </div>
            <Description />
        </>
    );
};

export default App;
