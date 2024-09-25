const Aboutus = () => {
    return ( <div className="flex flex-col md:flex-row w-full mx-auto justify-evenly my-24  ">
        <div className="h-[80vh] flex-[3] mx-10 flex-col items-center sticky top-10 hidden md:flex ">
            <h2 className="text-4xl p-12 font-semibold mb-10">About Us</h2>
            <img src="https://www.sinciitd.in/static/media/stairs-illustration.fb9184d173390b4a67389deeaeb9f5c5.svg" alt="" className="w-[30vw]" />
        </div>
        <div className="text-5xl p-12 font-semibold mb-10 block md:hidden w-full text-center pt-0">About Us</div>
                <div className="bg-white px-6 py-8 md:px-8  lg:px-16 lg:py-12 rounded-3xl border-gray-200 border-[1px] shadow-primary" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                    <h3 className="text-xl lg:text-2xl font-semibold">Mission</h3>
                    <p className="text-sm  sm:text-base  lg:text-lg mt-2 lg:mt-4 tracking-wide">Our mission is to empower every student on campus who aims high to turn their ideas into a real-world startup in every manner feasible and assist them in making a smooth transition through each stage of the process. As they say, It is not about ideas; it is about making ideas happen, and we are committed to paving the path for them with every step they take. Our motto is to create an ecosystem that encourages students to explore their ideas freely by fostering constructive discussions with professors, industry veterans, investors, and peers. We aspire to aid all budding entrepreneurs at IIT Delhi to become established, successful and independent entrepreneurs.</p>
                </div>
                <div className="bg-white px-6 py-8 md:px-8  lg:px-16 lg:py-12 rounded-3xl border-gray-200 border-[1px] shadow-primary" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                    <h3 className="text-xl lg:text-2xl font-semibold">Vision</h3>
                    <p className="text-sm  sm:text-base  lg:text-lg mt-2 lg:mt-4 tracking-wide">We want IIT Delhi to become the flag bearer, not just in India but across the world. We will provide students with a plethora of amenities, including mentorship, incubation space of which most startups are bereft of, and the much-needed legal expertise, which is as imperative as anything to launch a successful startup and funds. We connect students with industry experts and investors, provide incubation facilities and easy access to resources for product creation, and make them pitch-ready. We encourage individuals to engage in design thinking, planful ideation and foster the self-inculcation of new ideas.</p>
                    </div>
                <div className="bg-white px-6 py-8 md:px-8  lg:px-16 lg:py-12 rounded-3xl border-gray-200 border-[1px] shadow-primary" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                    <h3 className="text-xl lg:text-2xl font-semibold">Values</h3>
                    <p className="text-sm  sm:text-base  lg:text-lg mt-2 lg:mt-4 tracking-wide">Well, we construct roadmaps and keep to the deadlines we set. We never back down and always follow through on our promises. We believe in transparency; thus, our startup members and acquaintances are always updated on the latest events and happenings.</p>
                    </div>
                
        {/* </div> */}
    </div> );
}
 
export default Aboutus;