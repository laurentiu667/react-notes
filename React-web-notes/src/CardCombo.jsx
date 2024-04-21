const CardCombo = ({ backgroundImage }) => {
    return (
        <div
            className="card bg-n-11 opacity-50 min-w-96 border border-n-7"
            
        >
            <div className="image-card" style={{
                backgroundImage: `url(${backgroundImage})`,
                
                backgroundSize: "cover",
                mixBlendMode: "screen",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "40%",
                width: "100%"
            }}></div>
        </div>
    );
};

export default CardCombo;
