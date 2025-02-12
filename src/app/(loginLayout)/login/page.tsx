"use client";
import { Button } from "@heroui/button";
import Link from "next/link";
import React, { useState } from "react";

import TTInput from "@/src/components/Form/TTInput";
import TTForm from "@/src/components/Form/TTForm";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = () => {
    // submit form logic here
  };

  return (
    <div className="relative ">
      <div className="flex justify-center bg-slate-100 items-center h-screen">
        <div className="w-10/12  md:w-6/12 lg:w-4/12 backdrop-blur-lg bg-white bg-opacity-80 px-4 py-6 rounded-lg">
          <h1 className="text-center text-lg font-semibold">Login</h1>
          <div>
            <TTForm onSubmit={handleSubmit}>
              <TTInput label="email" name="email" type="email" />
              <TTInput label="Password" name="password" type="password" />
              <Button
                className="w-full bg-[#17D893] font-bold text flex-1"
                isLoading={loading}
                type="submit"
              >
                Login
              </Button>
            </TTForm>
          </div>
          <div>
            <p className="text-sm text-gray-600 mt-4">
              Forgot your password?{" "}
              <button
                className="text-blue-500 underline"
                onClick={() => setIsModalOpen(true)}
              >
                Reset Password
              </button>
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="border-b border-gray-400 w-full" />
            <p className="px-2 text-sm font-medium">OR</p>
            <div className="border-b border-gray-400 w-full" />
          </div>
          <p className="text-slate-600 mt-3">
            Don&apos;t have an account ?{" "}
            <Link className="text-blue-500 underline " href="/register">
              Register here
            </Link>
          </p>
        </div>
      </div>
      <div>
        {/* {isModalOpen && (
                    <Modal width={400} onClose={() => setIsModalOpen(false)}>
                        <h1 className="text-lg font-medium">
                            Enter your email for reset password
                        </h1>
                        <TTForm onSubmit={handleResetPassword}>
                            <TTInput label="email" name="email" type="email" />
                            <Button
                                className="w-full bg-[#17D893] font-bold text flex-1"
                                isLoading={modalLoading}
                                type="submit"
                            >
                                Reset Password
                            </Button>
                        </TTForm>
                    </Modal>
                )} */}
      </div>
    </div>
  );
};

export default Login;
