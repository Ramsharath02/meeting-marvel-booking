
import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe, MapPin } from "lucide-react";

interface InterviewFormProps {
  selectedDate: Date;
  selectedTime: string;
  onSubmit: () => void;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  notes: z.string().optional(),
  country: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const InterviewForm = ({ selectedDate, selectedTime, onSubmit }: InterviewFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      notes: "",
      country: "United States",
    },
  });

  const handleSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would send this data to your backend to:
    // 1. Send a confirmation email
    // 2. Create a calendar event
    // 3. Store the appointment in your database
    console.log("Form data:", {
      ...data,
      date: format(selectedDate, "yyyy-MM-dd"),
      time: selectedTime,
    });
    
    setIsLoading(false);
    onSubmit();
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Complete Your Booking</h3>
        <p className="text-gray-600">
          Please provide your details to confirm your interview session.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex items-center gap-3 text-sm text-gray-600 my-3">
            <MapPin className="h-4 w-4" />
            <select
              className="bg-transparent border-none focus:outline-none p-0"
              value={form.watch("country")}
              onChange={(e) => form.setValue("country", e.target.value)}
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Japan">Japan</option>
              <option value="India">India</option>
              <option value="Brazil">Brazil</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meeting Notes</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add any specific topics you'd like to discuss or questions you have about the interview process."
                    className="min-h-24 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full mt-6"
            disabled={isLoading}
          >
            {isLoading ? "Scheduling..." : "Schedule Interview"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InterviewForm;
