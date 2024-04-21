import Container from "./Container";
import CardCombo from "./CardCombo";
const App = () => {
    return (
        <>
            <Container/>
            <div className="container-card flex flex-col gap-20 px-6">
                <CardCombo/>
                <CardCombo/>
                <CardCombo/>
                <CardCombo/>
            </div>
        </>
    );
};

export default App;
