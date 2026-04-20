import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

const LoginForm = () => {
  return (
    <div className="min-h-screen bg-warm-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-warm-lg p-10 border border-warm-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-warm-900">Welcome Back</h1>
          <p className="text-warm-500 mt-2">Log in to manage your lab records</p>
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <InputField label="Email Address" placeholder="name@nexuslab.com" type="email" />
          <InputField label="Password" placeholder="••••••••" type="password" />
          <Button variant="primary" className="w-full py-4">Sign In</Button>
        </form>
        <p className="text-center mt-8 text-sm text-warm-600">
          Don't have an account? <Link to="/signup" className="text-accent-600 font-bold hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;