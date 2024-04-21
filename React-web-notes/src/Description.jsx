import Blob from "./Blob";
const Description = () => {
    return (
        <section
            className="description bg-n-11 opacity-20 border-y-2 border-n-4 
                            grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2  py-8 "
        >
            <div className="article article1">
                <Blob className="blob" style={{ top: "0px", right: "0px" }} />
                
                <div className=" art art-sub-1"></div>
            </div>
            <div className="article article2">
                <div className="art art-sub-2"></div>
            </div>
            <div className="article article3">
                <div className=" art art-sub-3"></div>
            </div>
            <div className="article article4">
                <Blob className="blob" style={{ bottom: "0px", top: "0px" }} />
                <div className="art art-sub-4"></div>
            </div>
        </section>
    );
};

export default Description;
