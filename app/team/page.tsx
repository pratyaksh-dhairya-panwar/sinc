import Tile from "./tile";

const team = () => {
    return ( <div className="w-full border-t-[0.5px] flex flex-col items-center justify-center py-14 gap-4 px-8 ">
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-center leading-snug tracking-wider">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 pt-6 lg:px-8 xl:px-32">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </div>
    </div> );
}
 
export default team;