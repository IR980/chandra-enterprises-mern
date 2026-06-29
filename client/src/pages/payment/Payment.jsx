import qrImage from "../../assets/payment-qr.jpeg";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 z-10"
          >
            <FaTimes />
          </button>

          {/* Header */}
          <div className="text-center py-8 px-6 bg-gradient-to-r from-green-500 to-green-400">
            <h1 className="text-4xl font-extrabold text-white">
              Secure Payment
            </h1>

            <p className="mt-3 text-white">
              Scan QR or use bank account details below
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-10 p-8 lg:p-12">
            {/* QR Section */}
            <div className="text-center">
              <div className="bg-gray-50 rounded-3xl p-6 border">
                <img
                  src={qrImage}
                  alt="UPI QR Code"
                  className="w-90 h-90 mx-auto object-contain"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Scan & Pay
              </h3>

              <p className="mt-2 text-gray-500">
                Google Pay • PhonePe • Paytm • BHIM
              </p>
            </div>

            {/* Bank Details */}
            <div>
              <div className="bg-gray-50 rounded-3xl p-8 h-full border">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Bank Account Details
                </h2>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-gray-500">Account Holder Name</p>
                    <p className="font-semibold text-gray-900">
                      Chandra Enterprises
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Bank Name</p>
                    <p className="font-semibold text-gray-900">
                      Bank of India
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Account Number</p>
                    <p className="font-semibold text-gray-900">685630120000005</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">IFSC Code</p>
                    <p className="font-semibold text-gray-900">BKID0006856</p>
                  </div>

                </div>

                <div className="mt-8 bg-yellow-300 border border-yellow-200 rounded-2xl p-4">
                  <p className="text-sm text-gray-700">
                    After completing the payment, please share the payment
                    screenshot on WhatsApp for verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="px-8 pb-10">
            <a
              href="https://wa.me/919694578476"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
            >
              Confirm Payment on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
