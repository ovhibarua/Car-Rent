import Image from "../Image"
import Pick from "../../assets/Icons/mark.png";
import Line from "../../assets/Icons/Line 2.png"


function Dropbox(add) {
    const { DropTitle } = add;
    return (
        <div className="px-12 py-7 bg-white rounded-[10px] shadow-xs w-full">
            <div className="flex items-center gap-2 mb-4">
                <Image addImg={Pick} animate={"pulsate-fwd"} />
                <h4 className="paraDark">{DropTitle}</h4>
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="mb-2">Locations</h3>
                        <div className="flex items-center gap-5 cursor-pointer">
                            <h6 className="paraSkys">Select your city</h6>
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                        </div>
                    </div>
                    <Image addImg={Line} />
                    <div>
                        <h3 className="mb-2">Date</h3>
                        <div className="flex items-center gap-5 cursor-pointer">
                            <h6 className="paraSkys">Select your date</h6>
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                        </div>
                    </div>
                    <Image addImg={Line} />
                    <div>
                        <h3 className="mb-2">Time</h3>
                        <div className="flex items-center gap-5 cursor-pointer">
                            <h6 className="paraSkys">Select your time</h6>
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropbox