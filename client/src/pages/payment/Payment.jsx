import qrImage from "../../assets/payment-qr.jpeg";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="relative bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition cursor-pointer"
        >
          <FaTimes />
        </button>

        <h1 className="text-3xl font-bold text-gray-900">
          Scan & Pay
        </h1>

        <p className="text-gray-600 mt-3">
          Pay securely using any UPI app
        </p>

        <img
          src={qrImage}
          alt="UPI QR Code"
          className="w-72 h-72 object-contain mx-auto mt-6 rounded-xl"
        />

        <div className="mt-6">
          <h3 className="font-semibold text-lg text-black">
            Chandra Enterprises
          </h3>

          <p className="text-gray-500 mt-2">
            Google Pay • PhonePe • Paytm • BHIM
          </p>
        </div>

        <a
          href="https://wa.me/919694578476"
          target="_blank"
          rel="noreferrer"
          className="block mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
        >
          Confirm Payment on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Payment;