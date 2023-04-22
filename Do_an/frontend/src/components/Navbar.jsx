import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleNaming = () => {
        navigate("/naming");
    };
    const handleParenting = () => {
        navigate("/parenting");
    };
    const handleHome = () => {
        navigate("/");
    };
    return (
        <div className="w-full h-[100px] flex item-center justify-center fixed top-0 left-0 right-0 z-10">
            <div className="w-full h-[100px] bg-[#de4b7f] flex md:flex-row flex-col items-center justify-center md:justify-around text-white">
                <span
                    className="hidden md:block xl:ml-5 xl:cursor-pointer xl:hover:opacity-70"
                    onClick={handleHome}
                >
                    naming.com
                </span>
                <div className="flex ">
                    <ul className="flex items-center justify-between">
                        <li
                            className="hover:opacity-70 mx-[8px] cursor-pointer text-[16px]"
                            onClick={handleHome}
                        >
                            Home
                        </li>
                        <li
                            className="hover:opacity-70 mx-[8px] cursor-pointer text-[16px]"
                            onClick={handleNaming}
                        >
                            Naming
                        </li>
                        <li
                            className="hover:opacity-70 mx-[8px] cursor-pointer text-[16px]"
                            onClick={handleParenting}
                        >
                            Parenting
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
