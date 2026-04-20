import NavBar from '../components/NavBar';
import Button from '../components/Button';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-warm-50">
      <NavBar />
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-12 text-center">
        <span className="bg-accent-100 text-accent-700 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
          Now in Beta for Nairobi Labs
        </span>
        <h1 className="text-6xl font-extrabold text-warm-900 mt-8 mb-6 leading-tight">
          Modern File Management for <br /> 
          <span className="text-accent-600">Clinical Excellence.</span>
        </h1>
        <p className="text-xl text-warm-600 max-w-2xl mx-auto mb-10">
          NexusLab provides a seamless interface for uploading diagnostics and managing laboratory workflow with warm, intuitive design.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary">Get Started Free</Button>
          <Button variant="secondary">Watch Demo</Button>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;