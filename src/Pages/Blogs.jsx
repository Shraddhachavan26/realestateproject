import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import blogHeader from "../Images/BlogsBack.png"; 
import blogImage1 from "../Images/Blogs.png";
import blogImage2 from "../Images/blog2.jpeg";
import blogImage3 from "../Images/smarthome.jpg";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="blogs-wrapper">
        {/* Full-size background header image */}
        <header
          className="blogs-banner"
          style={{
            backgroundImage: `url(${blogHeader})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px", // Adjust height as needed
            marginTop: "80px", // Push below navbar (adjust based on navbar height)
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></header>

        <main className="blogs-content">
          <article className="blog-card">
            <h2>1) First-Time Home Buyers</h2>
            <div className="blog-details">
              <img src={blogImage1} alt="First-Time Home Buyers" />
              <p>
                Purchasing a home for the first time can be exciting but challenging. 
                It's important to understand your budget and what additional costs come with buying a property. 
                Getting pre-approved for a mortgage helps you know how much you can afford. Take the time to research different neighborhoods 
                and their amenities. Don’t forget to factor in future expenses like utilities and home maintenance.
              </p>
            </div>
          </article>

          <article className="blog-card">
            <h2>2) Eco-Friendly Home Buyers</h2>
            <div className="blog-details">
              <img src={blogImage2} alt="Eco Friendly Home Buyers" />
              <p>
                An eco-friendly home is not just good for the environment but also for the wallet in the long term. 
                Look for energy-efficient features like solar panels, smart thermostats, and high-quality insulation. 
                Consider homes built with sustainable materials, which help reduce your carbon footprint. Green homes often 
                have water-saving features and use non-toxic paints, reducing your exposure to harmful chemicals.
              </p>
            </div>
          </article>

          <article className="blog-card">
            <h2>3) Digital Home Buyers</h2>
            <div className="blog-details">
              <img src={blogImage3} alt="Digital Home Buyers" />
              <p>
                Digital homes offer smart systems that allow you to control lighting, temperature, security, and entertainment with ease. 
                Digital décor can include customizable LED lighting, smart mirrors, or digital artwork that changes based on mood or preference. 
                Homes designed with digital elements provide convenience and a futuristic feel, making it easy to adjust your living environment 
                to suit your lifestyle.
              </p>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
