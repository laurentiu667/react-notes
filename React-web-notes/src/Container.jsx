import Button from "./components/Button";
import Episode from "./components/Episode";
import Nav from "./Nav";
import Middle from "./Middle";
const Container = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen" >
            <Nav/>
            <Middle />
            <div className="episode grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 my-10 ">
                <Episode text="Episode 1" />
                <Episode text="Episode 2" />
                <Episode text="Episode 3" />
                <Episode text="Episode 4" />
            </div>
        </div>
    );
};
export default Container;