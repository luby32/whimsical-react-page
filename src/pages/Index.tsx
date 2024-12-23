import { TestCard } from "@/components/TestCard";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            React Test Page
          </h1>
          <p className="text-lg text-white/80">
            A simple demonstration of React components and styling
          </p>
        </div>
        
        <div className="flex justify-center">
          <TestCard />
        </div>
      </div>
    </div>
  );
};

export default Index;