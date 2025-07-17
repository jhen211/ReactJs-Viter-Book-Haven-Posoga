import React from "react";
import { FaStar } from "react-icons/fa";
import CardTestimonials from "../../../partials/CardTestimonials";

const Testimonials = () => {
  return (
    <>
      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              What Our Readers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1 */}
            <CardTestimonials
              icon={"text-yellow-400"}
              comment={
                "The best selection of books I've found online. Fast shipping and great customer service!"
              }
              image={"./images/sarah.webp"}
              name={"Sarah Johnson"}
              role={"Book Club Member"}
            />

            {/* 2 */}
            <CardTestimonials
              icon={"text-yellow-400"}
              comment={
                "I love the curated collections. Always find something interesting to read."
              }
              image={"./images/michael.webp"}
              name={"Michael Chen"}
              role={"Avid Reader"}
            />

            {/* 3 */}
            <CardTestimonials
              icon={"text-gray-300"}
              comment={
                "Great prices and frequent sales. My go-to place for new releases."
              }
              image={"./images/emily.webp"}
              name={"Emily Rodriguez"}
              role={"Loyal Customer"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
