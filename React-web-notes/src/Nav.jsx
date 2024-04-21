const Nav = () => {
    return (
        <nav className="nav px-12 mt-2 ml-2">

            <div className="title-nav px-3 py-1 ">
                <svg className="h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <div className="title-name-div flex">
                    <h1 className="text-1xl uppercase text-indigo-950 underline decoration-2 decoration-n-9 ">
                        <a href="#">Books.</a>
                    </h1>
                    <h2 className="text-md text-n-4">
                        <a href="#">Mark</a>
                    </h2>
                </div>
            </div>

            <ul className=" list-nav">
                <li className=" border border-n-6 p-1 ">
                    <a href="/">Home</a>
                </li>
                <li className=" border border-n-6 p-1 ">
                    <a href="/about">About</a>
                </li>
                <li  className=" border border-n-6 p-1">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
export default Nav