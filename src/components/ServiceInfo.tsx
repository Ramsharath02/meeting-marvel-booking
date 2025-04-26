
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Calendar, UserRound, ChevronDown } from "lucide-react";

const ServiceInfo = () => {
  return (
    <Card className="shadow-lg rounded-xl overflow-hidden bg-white border-0 h-full">
      <CardHeader className="bg-primary text-white pb-6">
        <CardTitle className="text-3xl font-bold">Professional Interview Sessions</CardTitle>
        <CardDescription className="text-white text-lg opacity-90 mt-2">
          Book a personalized interview preparation session with our experts
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-8 px-6">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Expert Guidance</h3>
              <p className="text-gray-600">
                Get personalized feedback and coaching from industry professionals
                with years of interviewing experience.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Choose a time that works for you with our convenient scheduling system.
                Appointments available 7 days a week.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Instant Confirmation</h3>
              <p className="text-gray-600">
                Receive immediate confirmation with calendar invites and
                pre-interview preparation materials.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <UserRound className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Personalized Experience</h3>
              <p className="text-gray-600">
                Sessions tailored to your specific needs, industry, and experience level.
                Get the practice you need to succeed.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full flex items-center justify-center text-primary hover:text-primary/80 font-medium py-2">
              Learn more about our services <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceInfo;
