import React from "react";
import { FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  console.log(activeAccordion)

  return (
    <>
      {/* faq */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              Find answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="font-bold text-gray-900">
                  How long does shipping take?
                </h3>
                {activeAccordion === 0 ? (
                  <FaChevronUp className="text-indigo-600" />
                ) : (
                  <FaChevronUp className="text-indigo-600" />
                )}
              </button>
              {activeAccordion === 0 && (
                <div className="px-6 pb-6 text-gray-600">
                    <p>Standard shipping typically takes
                        3-5 business days within the continental US.
                        We also offer expedited shipping options
                        at checkout for faster delivery.
                    </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
