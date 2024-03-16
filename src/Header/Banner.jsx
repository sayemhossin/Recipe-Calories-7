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
      <p className="mb-5 md:text-xl ">Following the instructions and techniques presented in cooking videos requires cognitive engagement. This mental activity stimulates your brain and can help improve focus, concentration, and cognitive function.</p>
     <div className="space-x-6 ">
     <button className="btn rounded-full md:text-xl bg-[#0BE58A] hover:bg-[#32bb82] border-0 btn-primary text-black">Explore Now</button>
      <button className="btn rounded-full md:text-xl hover:bg-[#32bb82] text-white btn-outline">Our Feedback</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;