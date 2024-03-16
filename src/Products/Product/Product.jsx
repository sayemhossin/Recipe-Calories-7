import { CiClock2 } from "react-icons/ci";
import { GoFlame } from "react-icons/go";
import PropTypes from 'prop-types'; 


const Product = ({product,handleClick}) => {
    const {recipe_name,short_description,ingredients,preparing_time,calories,recipe_image} = product
    return (
        <div>
           <div className="card h-full border border-gray-200 bg-base-100 shadow-xl">
  <figure><img className="w-full h-full p-4 " src={recipe_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <div className="border"></div>
    <div className="ml-4">
       <h1 className="text-xl font-semibold">InteGrants: {ingredients.length}</h1>
       {
        ingredients.map((i,idx)=>(
            <p key={idx}><li>{i}</li></p>
        ))
       }
    </div>
    <div className="divider"></div>
    <div className="flex justify-around">
        <div className="flex items-center gap-2">
        <CiClock2 />
          <p>{preparing_time} min</p>
        </div>
        <div className="flex items-center gap-2">
        <GoFlame />
           <p>{calories} calories</p>
        </div>
    </div>
    <div className="card-actions mt-6">
      <button onClick={()=>handleClick(product)} className="btn btn-primary rounded-lg bg-[#0BE58A] hover:bg-[#32bb82] border-0 text-black">Want To Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};
Product.propTypes ={
  product: PropTypes.array,
  handleClick: PropTypes.func
}



export default Product;