const Banner = () => {
    return (
        <div className="mb-11">
            <div className="hero rounded-2xl h-[400px] md:h-[700px]" style={{
                backgroundImage:'url(https://i.ibb.co/j8r47V4/Rectangle-1.png)'
            }}>
  <div className=" bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" space-y-9">
      <h1 className="mb-5 text-white text-2xl md:text-5xl font-bold">Discover an exceptional cooking <br className="hidden md:inline" /> class tailored for you!</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <div className="space-x-6 ">
     <button className="btn rounded-full bg-[#0BE58A] hover:bg-[#32bb82] border-0 btn-primary text-black">Explore Now</button>
      <button className="btn rounded-full hover:bg-[#32bb82] text-white btn-outline">Our Feedback</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;