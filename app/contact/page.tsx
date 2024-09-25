const events = () => {
    return ( <div className="w-full border-t-[0.5px] flex flex-col items-center justify-center py-14 gap-4 px-8 ">
        <h2 className="lg:text-7xl md:text-5xl text-4xl font-bold text-center leading-snug tracking-wider">Get in touch today.</h2>
        <p className=" text-md md:text-lg font-semibold text-gray-700 text-center tracking-wider md:max-w-[60vw]">Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentes.</p>
        <div className="flex gap-4 justify-evenly py-10 md:py-20 flex-col relative items-center lg:flex-row">
            <div className="flex items-center gap-2 md:gap-6 flex-col sm:flex-row max-w-[500px] lg:w-[30vw] justify-evenly ">
                <img className="h-16 md:h-24 aspect-square" src="https://cdn.prod.website-files.com/643f0885bbed8e6ec6291235/644017490c4ade0ff1e5ae16_phone-peaceful-x-webflow-template.png" alt="" />
                <div className="flex flex-col items-center">
                    <h4 className="font-bold text-2xl tracking-wider">Office:</h4>
                    <p className="font-semibold text-slate-800 text-xl tracking-wider text-center">2C3,Research & Innovation Park,Indian Institute of Technology, Delhi, 110016</p>
                </div>
            </div>
            <div className="w-[80vw] h-[2px] lg:w-[2px] lg:h-48 bg-slate-300"></div>
            <div className="flex items-center gap-2 md:gap-6 flex-col sm:flex-row max-w-[500px] lg:w-[30vw] justify-evenly">
                <img className="h-16 md:h-24 aspect-square" src="https://cdn.prod.website-files.com/643f0885bbed8e6ec6291235/64401745b00b7d193955c44c_location-peaceful-x-webflow-template.png" alt="" />
                <div className="flex flex-col items-center">
                    <h4 className="font-bold text-2xl tracking-wider">Phone:</h4>
                    <p className="font-semibold text-slate-800 text-xl tracking-wider text-center">+91 7037871248</p>
                </div>
            </div>
            <div className="w-[80vw] h-[2px] lg:w-[2px] lg:h-48 bg-slate-300"></div>
            <div className="flex items-center gap-2 md:gap-6 flex-col sm:flex-row max-w-[500px] lg:w-[30vw] justify-evenly">
                <img className="h-16 md:h-24 aspect-square" src="https://cdn.prod.website-files.com/643f0885bbed8e6ec6291235/644017423d6ee351071601f8_email-peaceful-x-webflow-template.png" alt="" />
                <div className="flex flex-col items-center">
                    <h4 className="font-bold text-2xl tracking-wider">Email:</h4>
                    <p className="font-semibold text-slate-800 text-xl tracking-wider text-center">contact@sinciitd.in</p>
                <div />
            </div>
        </div>
    </div>
</div>
 );
}
 
export default events;