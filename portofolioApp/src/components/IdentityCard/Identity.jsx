import myFoto from "../.././assets/pasfoto.png";
import instagram_icon from "../.././assets/instagram_icon.png";
import github_icon from "../.././assets/github_icon.png";
import arrow_down from "../.././assets/svg/arrow_down.svg";

function IdentityCard() {
    return (
        <>
            <div className="min-h-screen grid grid-cols-2 [&>div]:h-full [&>div]:w-full [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:items-center">
                <div>
                    <img
                        src={myFoto}
                        alt="fotoku"
                        className="w-64 h-96 rounded-3xl transition-all animate-in duration-3s fade-in-0"
                    />
                </div>
                <div>
                    <h1 className="text-5xl mt-4 font-mono self-start transition-all animate-in duration-3s slide-in-from-top fade-in-0">
                        Hello, My Name is Muhammad Farhan Pulungan
                    </h1>
                    <h2 className="text-4xl mt-4 font-mono self-start transition-all animate-in duration-3s slide-in-from-right fade-in-0">
                        I'm a{" "}
                        <span className="text-red-500 italic">
                            Junior Web Developer
                        </span>
                    </h2>
                    <h1 className="text-2xl mt-4 font-bold self-start transition-all animate-in duration-3s slide-in-from-right fade-in-0">
                        Connect With Me :
                    </h1>
                    <div className="flex justify-center items-center gap-2 self-start mt-4 transition-all animate-in duration-5s slide-in-from-bottom fade-in-0 [&>a]:transition-all [&>a:hover]:scale-125 [&>a:hover]:cursor-pointer">
                        <a
                            href="https://www.instagram.com/han.godek/"
                            target="_blank"
                        >
                            <img
                                src={instagram_icon}
                                alt=""
                                className="w-10 h-10"
                            />
                        </a>
                        <a href="https://github.com/hangodek" target="_blank">
                            <img src={github_icon} alt="" className="w-9 h-9" />
                        </a>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex flex-col justify-center items-center animate-in animate-pulse duration-5s slide-in-from-top fade-in-0">
                        <p>Scroll Down</p>
                        <img src={arrow_down} alt="" className="w-10 h-10" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default IdentityCard;
