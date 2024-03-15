

const Cart = () => {
    return (
        <div className="border  border-gray-300 shadow-xl rounded-xl">
            <h1 className="text-center text-3xl font-semibold mt-5 text-[#282828]">Want to Cook: 0</h1>
            <div className="divider"></div>
            <div className="flex justify-around text-[#878787]">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <div>
           
            </div>
            <h1 className="text-center  text-3xl text-[#282828] font-semibold mt-20">Currently cooking: 02</h1>
            <div className="divider"></div>
            <div className="flex justify-around text-[#878787]">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>

            <div className="flex justify-end gap-8 mt-9 mr-7 text-[#878787]">
                <h1>Total Time =</h1>
                <h1>Total Calories =</h1>
            </div>
            <div className="flex justify-end gap-8 mb-10 mr-7 text-[#878787]">
                <h1></h1>
                <h1></h1>
            </div>

        </div>
    );
};

export default Cart;