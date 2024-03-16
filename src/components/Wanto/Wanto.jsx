import Cook from "../Cook/Cook";

const Wanto = ({cooks, handlePreparing, }) => {
    return (
        <div className="md:w-1/3 bg-gray-100 rounded-lg mr-6">
            <h2 className="text-3xl font-semibold text-[#282828] text-center mb-4 ">Want to cook: {cooks.length}</h2>
            <div className="flex gap-16 ml-12 text-lg font-semibold">
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
            </div>
        {
            cooks.map((cook, idx) => <Cook key={idx} idx={idx+1} handlePreparing={handlePreparing} cooks={cook}
            ></Cook>)
        }
             <div>
             <h2 className="text-3xl font-semibold text-[#282828] text-center mb-4 ">Currently cooking:</h2>
             <div className="flex gap-24 ml-12 text-lg font-semibold">
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
            </div>
            </div>
           
            <div className="text-[16px] font-semibold mt-20 ml-8">
                <div className="flex gap-7 ml-32 ">
                <p>Total Time =</p>
                <p>Total Calories =</p>
                </div>
                <div className=" flex gap-10 ml-40 opacity-80">
                    <p>0 minutes</p>
                    <p>0 Calories</p>
                </div>
            </div>
        </div>
    );
};

export default Wanto;