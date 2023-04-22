import React, { useState } from "react";
import Filter from "./Filter";
import NameList from "./NameList";

const Body = () => {
    const [gender, setGender] = useState("");
    const [theme, setTheme] = useState("");
    const [origin, setOrigin] = useState("");
    const genderHandler = (gen) => {
        setGender(gen);
    };
    const themeHandler = (thm) => {
        setTheme(thm);
    };
    const originHandler = (org) => {
        setOrigin(org);
    };
    return (
        <div className="w-full flex flex-col md:flex-row md:items-center justify-around mt-[60px]">
            <div className="flex-[1]">
                <Filter
                    onGender={genderHandler}
                    onTheme={themeHandler}
                    onOrigin={originHandler}
                />
            </div>
            <div className="flex-[1]">
                <NameList gen={gender} thm={theme} ori={origin} />
            </div>
        </div>
    );
};

export default Body;
