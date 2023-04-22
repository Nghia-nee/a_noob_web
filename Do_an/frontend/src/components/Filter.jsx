const Filter = ({ onGender, onTheme, onOrigin }) => {
    const genderHandler = (gen) => {
        onGender(gen);
    };
    const themeHandler = (thm) => {
        onTheme(thm);
    };
    const originHandler = (org) => {
        onOrigin(org);
    };
    return (
        <div>
            <p className="mb-2 text-center text-[#a22752] font-bold text-[20px]">
                CHOOSE CHARACTERISTICS
            </p>
            <div className="flex flex-col">
                <div className="w-full">
                    <h2 className="font-semibold text-[16px] mx-4">
                        By gender
                    </h2>
                    <div className="flex flex-wrap mt-4">
                        <button onClick={() => genderHandler('boy')} className="mx-2 min-w-[100px] max-w-[120px] bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Boy
                        </button>
                        <button onClick={() => genderHandler('girl')} className="mx-2 min-w-[100px] max-w-[120px] bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Girl
                        </button>
                        <button onClick={() => genderHandler('uni')} className="mx-2 min-w-[100px] max-w-[120px] bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Unisex
                        </button>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold text-[16px] mx-4 mt-8">
                        By theme
                    </h2>
                    <div className="flex flex-wrap mt-4">
                        <button onClick={() => themeHandler('cute')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Cute
                        </button>   
                        <button onClick={() => themeHandler('royal')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Royal
                        </button>
                        <button onClick={() => themeHandler('nature')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Nature
                        </button>
                        <button onClick={() => themeHandler('mythology')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Mythology
                        </button>
                        <button onClick={() => themeHandler('flowers')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Flowers
                        </button>
                        <button onClick={() => themeHandler('unique')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Unique
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="font-semibold text-[16px] mx-4 mt-8">
                        By origin
                    </h2>
                    <div className="flex flex-wrap mt-2">
                        <button onClick={() => originHandler('arabic')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Arabic
                        </button>
                        <button onClick={() => originHandler('dutch')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring  active:opacity-70px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Dutch
                        </button>
                        <button onClick={() => originHandler('english')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            English
                        </button>
                        <button onClick={() => originHandler('german')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            German
                        </button>
                        <button onClick={() => originHandler('italian')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Italian
                        </button>
                        <button onClick={() => originHandler('spanish')} className="mx-4 min-w-[100px] max-w-[120px] mt-2 bg-[#a22752] focus:opacity-70 focus:ring active:opacity-70 px-6 py-2 rounded-xl text-white hover:opacity-70">
                            Spanish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Filter;