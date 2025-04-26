
import EventSchedulingForm from "@/components/EventSchedulingForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Event Scheduling</h1>
        <p className="text-lg text-gray-600">Schedule your meeting in just a few clicks</p>
      </div>
      <EventSchedulingForm />
    </div>
  );
};

export default Index;
