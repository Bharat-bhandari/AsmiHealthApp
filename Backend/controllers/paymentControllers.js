const Razorpay = require("razorpay");
const crypto = require("crypto");

const Payment = require("../models/PaymentModel");

exports.postOrder = async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZOR_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error in Payment");
    }

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("err");
  }
};

exports.postOrderValidate = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

  const digest = sha.digest("hex");

  // console.log("diefet", digest);
  // console.log("sign", razorpay_signature);

  const isAuthentic = digest === razorpay_signature;

  if (isAuthentic) {
    // database

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect("http://localhost:5173/");

    // res.json({
    //   msg: "success",
    //   orderId: razorpay_order_id,
    //   paymentId: razorpay_payment_id,
    // });
  } else {
    return res.status(400).json({ msg: "Transaction is not valid!" });
  }
};

exports.getKey = (req, res) => {
  res.status(200).json({ key: process.env.RAZOR_KEY_ID });
};
