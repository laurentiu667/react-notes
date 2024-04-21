import Blob from "./Blob";
const Middle = () => {
    return (
        <div className=" middleflex grid grid-cols-1 md:grid-cols-2 md:h-96 px-6 lg:mb-32">
            <div className="text-info-middle flex flex-col content-center justify-center gap-5 md:mx-8 lg:mx-10">
                <h1 className="text-2xl">Episode 1</h1>
                <h2>Le commencement</h2>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam ullam rerum expedita vero alias placeat cupiditate
                    nobis inventore dolorem repudiandae minima explicabo,
                    dolorum eum neque eaque officiis tenetur. Aperiam,
                    voluptatum?
                </p>
                <button className="border w-36">Commencer</button>
            </div>

            <div className="image-info relative">
                <Blob />
            </div>
        </div>
    );
};

export default Middle;
