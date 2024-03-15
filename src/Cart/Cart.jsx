

const Cart = ({cart,handleDelete,handleAdd,cook}) => {
    return (
        <div className="border  border-gray-300 shadow-xl rounded-xl">
            <h1 className="text-center text-3xl font-semibold mt-5 text-[#282828]">Want to Cook:{cart.length}</h1>
            <div className="divider"></div>
            <div className="flex gap-12 ml-12 md:ml-24
              text-[#878787]">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <div className="divider mb-0"></div>
            <div>
           {
            cart.map((item,index) =>( 
                <div key={index} className="flex text-[14px] md:text-[18px]  bg-gray-200  p-5  justify-between text-[#878787]">
                    <p className="flex items-center font-semibold text-black">{index+1}</p>
                     <p className="w-8">{item.recipe_name}</p>
                <p className="w-8">{item.preparing_time} min</p>
                <p className="w-8">{item.calories} calories</p>
                <button onClick={()=>{handleDelete(item); handleAdd(item);}} className="rounded-lg h-full bg-[#0BE58A] hover:bg-[#32bb82] border-0 text-black p-1 md:p-2 ">Preparing</button>
                </div>
            ))
           }
            </div>
            <h1 className="text-center  text-3xl text-[#282828] font-semibold mt-20">Currently cooking: {cook.length}</h1>
            <div className="divider"></div>
            <div className="flex gap-16 ml-28 md:justify-around text-[#878787]">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
                  <div>
                      {
                       cook.map((item,index) =>( 
                        <div key={index} className="flex   bg-gray-200  p-5  justify-around text-[#878787]">
                            <p className="flex items-center font-semibold text-black">{index+1}</p>
                             <p className="w-8">{item.recipe_name}</p>
                        <p className="w-8">{item.preparing_time} min</p>
                        <p className="w-8">{item.calories} calories</p>
                       
                        </div>

                        ))
                      }
                  </div>
            <div className="flex justify-end gap-8 mt-9 mr-7 text-[#878787]">
                <h1>Total Time =</h1>
                <h1>Total Calories =</h1>
            </div>
            <div className="flex justify-end gap-20 mb-10 mr-7 text-[#878787]">
              
               <h1>{cook.reduce((p,a) => p+ a.preparing_time,0)} min</h1>
                <h1>{cook.reduce((p,a) => p+ a.calories,0)} calories</h1>
              
            </div>

        </div>
    );
};

export default Cart;