import Chat from "@/components/Chat";
import { Toaster } from 'sonner';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">AI Content Creator Assistant</h1>
          <p className="text-xl text-gray-600">Your personal AI companion for content creation and influence</p>
        </div>
        <Chat />
        <Toaster richColors position="top-right" />
      </div>
    </div>
  );
};

export default Index;