import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

const SignUpForm = () => {
  return (
    <div className="min-h-screen bg-warm-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-warm-lg p-10 border border-warm-100">
        <h2 className="text-2xl font-bold text-warm-900 mb-2">Create Account</h2>
        <p className="text-warm-500 mb-8 text-sm">Join NexusLab for automated diagnostics management.</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <InputField label="Full Name" placeholder="Dr. John Doe" />
          <InputField label="Email" placeholder="john@nexuslab.com" type="email" />
          <InputField label="Password" placeholder="••••••••" type="password" />
          <Button variant="primary" className="w-full mt-4">Start Your Journey</Button>
        </form>
        <p className="text-center mt-6 text-xs text-warm-400">
          By signing up, you agree to our Terms of Service.
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;