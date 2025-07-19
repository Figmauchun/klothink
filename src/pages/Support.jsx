import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
function Support() {
  return (
    <>
      <div className="Klothink">
        <div className="klo-text-box">
          <h1>Klothink Support.</h1>
          <p>
            24/7 Assistance for Seamless Shopping and Unmatched Customer
            Satisfaction.
          </p>
        </div>
        <div className="klo-cards-box">
          <div className="klo">
            <h3>Email</h3>
            <span>support@klothink.com</span>
          </div>
          <div className="klo">
            <h3>Call Us On</h3>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="klo">
            <h3>Working Hours</h3>
            <span>Available 24/7 </span>
          </div>
        </div>
      </div>
      <div className="global-help">
        <span>Office Locations</span>
        <div className="glo-cards">
          <div className="glo-card">
            <h3>New York City, USA</h3>
            <p>123 Fashion Avenue, Suite 456, New York, NY 10001</p>
            <div className="directions">
              <button>
                <IoCall />
                Call Now
              </button>
              <button>
                Get Direction
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
          <div className="glo-card">
            <h3>New York City, USA</h3>
            <p>123 Fashion Avenue, Suite 456, New York, NY 10001</p>
            <div className="directions">
              <button>
                <IoCall />
                Call Now
              </button>
              <button>
                Get Direction
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
          <div className="glo-card">
            <h3>New York City, USA</h3>
            <p>123 Fashion Avenue, Suite 456, New York, NY 10001</p>
            <div className="directions">
              <button>
                <IoCall />
                Call Now
              </button>
              <button>
                Get Direction
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Policy">
        <div className="pp">
          <div className="policy-h-box">
            <h1>Return Policy</h1>
            <p>
              Explore our hassle-free return policy designed to ensure your
              satisfaction with every purchase.
            </p>
          </div>
          <div className="pbtn-box">
            <button>
              Read Return Policy <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <div className="policy-cards-box">
          <div className="policy-card">
            <h3>Eligibility</h3>
            <p>
              Items must be unused, with tags attached, and returned within 30
              days of delivery.
            </p>
          </div>
          <div className="policy-card">
            <h3>Process</h3>
            <p>
              Initiate returns through our Return Center for a smooth and
              efficient process.
            </p>
          </div>
          <div className="policy-card">
            <h3>Refund</h3>
            <p>
              Expect a refund to your original payment method within 7-10
              business days .
            </p>
          </div>
        </div>
      </div>
      <div className="Cancellation">
        <div className="cc">
          <div className="Cancellation-h-box">
            <h1>Cancellation Policy</h1>
            <p>
              Familiarize yourself with our cancellation policy to make changes
              to your order with ease.
            </p>
          </div>
          <div className="Cancellation-box">
            <button>
              Read Cancellation Policy
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <div className="Cancellation-cards-box">
          <div className="Cancellation-card">
            <h3>Cancellation Window</h3>
            <p>
              Orders can be canceled within 24 hours of placement for a full
              refund.
            </p>
          </div>
          <div className="Cancellation-card">
            <h3>Cancellation Process</h3>
            <p>
              Visit our Order Management section to cancel your order
              effortlessly.
            </p>
          </div>
          <div className="Cancellation-card">
            <h3>Refund Timeline</h3>
            <p>
              Refunds for canceled orders are processed within 5-7 business
              days.
            </p>
          </div>
        </div>
      </div>
      <div className="questions">
        <h1>Questions? We Have Answers.</h1>
        <p className="que-p">
          Ease into the world of Klothink with clarity. Our FAQs cover a
          spectrum of topics, ensuring you have the information you need for a
          seamless shopping experience.
        </p>
        <ul>
          <li>All</li>
          <li>Ordering</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Customer Support</li>
        </ul>
        <div className="que-accordion">
          <div className="accs">
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Can I modify my order after placing it?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How do I initiate a return?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How can I unsubscribe from the newsletter?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Do you offer exchanges for products?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
          </div>
          <div className="accs">
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How can I place an order on Klothink?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>What payment methods do you accept?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How can I track my order?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>What is your shipping policy?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
          </div>
          <div className="accs">
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Are there any additional fees for returns?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How do I create an account on Klothink?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Can I change my account information?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Are my personal details secure on Klothink?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
