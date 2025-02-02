
import Dropbox from "./Dropbox"




function Destination() {
    return (
        <section className="py-8 px-8 flex items-center justify-between gap-11">
            <Dropbox DropTitle={'Pick - Up'} />
            <button className="p-4 rounded-[10px] cursor-pointer shadow-xs">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4H21C21.5523 4 22 4.44772 22 5V12H20V6H6V9L1 5L6 1V4ZM18 20H3C2.44772 20 2 19.5523 2 19V12H4V18H18V15L23 19L18 23V20Z"></path></svg>
            </button>
            <Dropbox DropTitle={'Drop - Off'} />
        </section>
    )
}

export default Destination