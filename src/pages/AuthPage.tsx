"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        {/* Toggle Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-indigo-600 dark:text-indigo-400 font-semibold"
          >
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </div>

        {/* Animated Form Container */}
        <motion.div
          key={isSignUp ? "sign-up" : "sign-in"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {isSignUp ? <SignUpForm /> : <SignInForm />}
        </motion.div>
      </div>
    </div>
  );
};

// External Google Logo URL
const googleLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png";

// Sign In Form
const SignInForm = () => {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
      />
      <div className="flex justify-between items-center">
        <label className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <input type="checkbox" className="mr-2" /> Remember me
        </label>
        <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot password?</a>
      </div>
      <button className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Sign In
      </button>

      {/* Google Sign-In Button */}
      <div className="flex items-center justify-center my-4">
        <button className="w-full p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 flex items-center justify-center">
          <img src="/images/Google.png" alt="Google Logo" className="w-6 h-6 mr-2" />
          Sign in with Google
        </button>
      </div>
    </form>
  );
};

// Sign Up Form
const SignUpForm = () => {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">Sign Up</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
      />
      <div className="flex justify-between items-center">
        <label className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <input type="checkbox" className="mr-2" /> I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
        </label>
      </div>
      <button className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Sign Up
      </button>

      {/* Google Sign-Up Button */}
      <div className="flex items-center justify-center my-4">
        <button className="w-full p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 flex items-center justify-center">
          <img src="/images/Google.png" alt="Google Logo" className="w-6 h-6 mr-2" />
          Sign up with Google
        </button>
      </div>
    </form>
  );
};

export default AuthPage;
