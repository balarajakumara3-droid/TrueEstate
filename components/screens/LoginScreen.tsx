import React from 'react';
import { Mail, Lock, ArrowRight, Home } from 'lucide-react';

const LoginScreen: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 bg-white animate-fade-in">
      <div className="mt-12">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
          <Home className="text-white" />
        </div>
        <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-2">Welcome Back 👋</h2>
        <p className="text-neutral-500 mb-8">Sign in to find your dream home today.</p>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-neutral-600 ml-1">Email</label>
            <div className="relative">
              <div className="absolute left-3 top-3.5 text-neutral-400">
                <Mail size={18} />
              </div>
              <input
                type="text"
                value="user@example.com"
                readOnly
                className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-neutral-600 ml-1">Password</label>
            <div className="relative">
              <div className="absolute left-3 top-3.5 text-neutral-400">
                <Lock size={18} />
              </div>
              <input
                type="password"
                value="********"
                readOnly
                className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <span className="text-xs text-primary font-medium">Forgot Password?</span>
        </div>
      </div>

      <div className="space-y-4 mb-4">
        <button className="w-full bg-primary text-white py-4 rounded-2xl font-semibold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-transform">
          Sign In <ArrowRight size={18} />
        </button>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink-0 mx-4 text-gray-400 text-xs">Or continue with</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="py-3 border border-gray-200 rounded-xl flex items-center justify-center">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
          </button>
          <button className="py-3 border border-gray-200 rounded-xl flex items-center justify-center">
            <img src="https://www.svgrepo.com/show/475638/apple-color.svg" className="w-5 h-5" alt="Apple" />
          </button>
        </div>

        <p className="text-center text-xs text-neutral-500 mt-4">
          Don't have an account? <span className="text-primary font-bold">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;