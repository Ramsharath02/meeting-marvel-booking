
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ConfirmationScreenProps {
  date: Date;
  time: string;
  onReturnToCalendar: () => void;
}

const ConfirmationScreen = ({ date, time, onReturnToCalendar }: ConfirmationScreenProps) => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-8 animate-scale-in">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">
        Interview Scheduled!
      </h2>
      
      <p className="text-lg text-gray-600 mb-6 dark:text-gray-300">
        Your interview has been scheduled for{" "}
        <span className="font-medium">{format(date, "EEEE, MMMM d, yyyy")}</span> at{" "}
        <span className="font-medium">{time}</span>
      </p>
      
      <div className="space-y-4 mb-8">
        <p className="text-gray-600 dark:text-gray-300">
          We've sent a confirmation email with all the details.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          You'll receive a meeting link 30 minutes before your scheduled time.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="gap-2">
          <Calendar className="h-4 w-4" />
          Add to Google Calendar
        </Button>
        <Button variant="outline" className="gap-2">
          <Mail className="h-4 w-4" />
          Resend Confirmation
        </Button>
      </div>

      <div className="mt-6">
        <Button 
          variant="ghost" 
          onClick={onReturnToCalendar}
          className="gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to Calendar
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
