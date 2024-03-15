import Cook from "../Cook/Cook";


const Wanto = ({cooks}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 rounded-lg mr-6">
            <h2 className="text-3xl font-semibold text-[#282828] text-center mb-4 ">Want to cook: {cooks.length}</h2>
            <div className="flex gap-20 justify-center text-lg font-semibold">
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
            </div>
        {
            cooks.map((cook, idx) => <Cook key={idx} cooks={cook}></Cook>)
        }


        </div>
    );
};

export default Wanto;