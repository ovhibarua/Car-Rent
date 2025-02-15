import AsideList from "./AsideList"


function NavbarSide() {
    return (
        <div className="py-8 pr-8">
            <aside className="bg-white p-8 w-[280px] rounded-[10px] shadow-xs h-full">
                <AsideList />
            </aside>
        </div>
    )
}

export default NavbarSide