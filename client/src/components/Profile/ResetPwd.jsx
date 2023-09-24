import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendResetPassword, resetPassword } from "../../redux/auth/authActions";

const ResetPwd = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    emailSent: false,
    otp: "",
    newPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendEmail = (event) => {
    event.preventDefault();
    dispatch(sendResetPassword(formData.email));
    setTimeout(() => {
      setFormData({
        ...formData,
        emailSent: true,
      });
    }, 1000);
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    console.log("otp submit");
    await dispatch(resetPassword(formData));
  };

  return (
    <div>
      <div className="antialiased w-full">
        <div className="max-w-full mx-auto my-10 bg-white p-3 rounded-xl border-2 shadow-xl border-gray-300">
          <h1 className="text-4xl font-medium">Reset password</h1>
          <p className="text-slate-500">Fill up the form to reset the password</p>
          {formData.emailSent ? (
            <form onSubmit={handleOtpSubmit} className="my-10">
              <div className="flex flex-col space-y-5">
                <label htmlFor="otp">
                  <p className="font-medium text-slate-700 pb-2">OTP code</p>
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter OTP code"
                    value={formData.otp}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="newPassword">
                  <p className="font-medium text-slate-700 pb-2">New Password</p>
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter new password"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                </label>
                <button
                  type="submit"
                  className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                >
                  Submit OTP
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSendEmail} className="my-10">
              <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                  <p className="font-medium text-slate-700 pb-2">Email address</p>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
                <button
                  type="submit"
                  className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                >
                  <span>Send Email</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPwd;
