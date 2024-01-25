import React, { useState } from "react";

import giftImg from "../assets/image/giftCounselling.webp";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const GiftCard = () => {
  // payment-----------------------------
  const paymentHandler = async (event) => {
    const amount = 500;
    const currency = "INR";
    const receiptID = "qwsaq1";

    const response = await fetch("http://localhost:4000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const order = await response.json();
    console.log(order);
    // var options = {
    //   key: "rzp_test_c4hShO3F4IFfC4", // Enter the Key ID generated from the Dashboard
    //   amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //   currency,
    //   name: "Asmi", //your business name
    //   description: "Test Transaction",
    //   image: "https://example.com/your_logo",
    //   order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //   handler: async function (response) {
    //     const body = {
    //       ...response,
    //     };

    //     const validateRes = await fetch(
    //       "http://localhost:4000/order/validate",
    //       {
    //         method: "POST",
    //         body: JSON.stringify(body),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );

    //     const jsonRes = await validateRes.json();
    //     console.log(jsonRes);
    //   },
    //   prefill: {
    //     //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
    //     name: "Bharat", //your customer's name
    //     email: "test@gmail.com",
    //     contact: "9000090000", //Provide the customer's phone number for better conversion rates
    //   },
    //   notes: {
    //     address: "Razorpay Corporate Office",
    //   },
    //   theme: {
    //     color: "#3399cc",
    //   },
    // };

    const razorpayKey = await fetch("http://localhost:4000/getKey");

    const razorpayKeyData = await razorpayKey.json();

    var options = {
      key: razorpayKeyData.key, // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Asmi Health", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/order/validate",
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Bharat", //your customer's name
        email: "test@gmail.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    // rzp1.on("payment.failed", function (response) {
    //   alert(response.error.code);
    //   alert(response.error.description);
    //   alert(response.error.source);
    //   alert(response.error.step);
    //   alert(response.error.reason);
    //   alert(response.error.metadata.order_id);
    //   alert(response.error.metadata.payment_id);
    // });

    rzp1.open();
    event.preventDefault();
  };
  // end of payment-----------------------------

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const amount = 650 * quantity;

  return (
    <>
      <div className="container px-[5%] mx-auto">
        <div className="w-full mx-auto max-w-7xl py-28">
          <section className="text-xl">
            <div className="gap-x-20 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center grid">
              <div className="flex flex-col items-center w-full h-full rounded-xl">
                <img src={giftImg} alt="" />
              </div>
              <div className=" w-full max-w-[35rem]">
                <div className="text-5xl font-semibold leading-[1.2] font-sans text-neutral-900">
                  Gift Card
                </div>
                <div className="text-4xl my-4 font-medium leading-[1.2] font-sans text-neutral-900">
                  ₹650
                </div>
                <p className="text-xl">
                  The best Gift you can give your loved ones this festive
                  season, is a window to happiness! Gift them a free counselling
                  session today!
                </p>

                <div className="grid grid-cols-2 mt-6">
                  <div>
                    <h1>Amount</h1>
                    <div className="bg-[#e8effd] border-[#1a6aff] border w-fit px-2 py-1 ">
                      ₹{amount}
                    </div>
                  </div>
                  <div>
                    <h1>Quantity</h1>
                    <div className="flex gap-2 px-3 py-1 border border-black opacity-90 w-fit">
                      <button onClick={handleDecrease}>
                        <FiMinus />
                      </button>
                      <span>{quantity}</span>
                      <button onClick={handleIncrease}>
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6">Who's the gift card for?</h1>
                <div class="grid grid-cols-2 gap-x-2 my-2">
                  <div class="px-5 py-2 border border-black grid-cols-1 text-center">
                    For someone else
                  </div>
                  <div class="px-5 py-2 border bg-[#e8effd] border-[#1a6aff] text-center">
                    For myself
                  </div>
                </div>

                <button
                  onClick={paymentHandler}
                  className="w-full p-3 mt-4 text-white bg-black"
                >
                  Buy now
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GiftCard;
