import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khutba Evaluation - Dar al Islam Boston",
  description: "Help us improve our Friday sermons by participating in our anonymous Khutba evaluation program. Your feedback helps enhance the quality of our religious services.",
  openGraph: {
    title: "Khutba Evaluation - Dar al Islam Boston",
    description: "Participate in our anonymous feedback program to help improve the quality of Friday sermons. Your input matters to our community.",
    url: "/khutba-evaluation",
  },
};

export default function KhutbaEvaluation() {
  const ratingQuestions = [
    {
      id: "mix",
      text: "The khutba had the right mix of Arabic and English."
    },
    {
      id: "topic",
      text: "The topic was relevant and interesting."
    },
    {
      id: "preparation",
      text: "The khateeb was well-prepared, articulate and engaging."
    },
    {
      id: "timing",
      text: "The khateeb finished the khutba on time."
    },
    {
      id: "impact",
      text: "The khutba motivated me and affected my behavior."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="hero min-h-[50vh] relative flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/fakeMosqueImage.webp"
            alt="Mosque Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        <div className="text-center max-w-4xl mx-auto relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Khutba Evaluation
          </h1>
          <p className="text-xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
            Help us improve our Friday sermons
          </p>
          <Button className="w-40">
            <a href="#evaluation-form">Start Evaluation</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg mb-12 text-center">
            <p className="text-lg">
              Thank you and may Allah SWT reward you for accepting to participate in the 
              Khutba Evaluation Program. Please help us improve the quality of the Khutbas 
              to promote our Deen to everyone.
            </p>
            <p className="text-sm text-gray-600">
              The form is anonymous. We don't collect personal identification information.
            </p>
          </div>

          {/* Evaluation Form */}
          <div id="evaluation-form" className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <form className="space-y-8">
              {/* Date Selection */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Date of the Khutba *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                />
              </div>

              {/* Rating Questions */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  How strongly do you agree with the following statements?
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left w-1/2">Statement</th>
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <th key={rating} className="px-4 py-2 text-center">
                            <div className="text-sm font-medium">{rating}</div>
                            <div className="text-xs text-gray-500">
                              {rating === 1 ? "strongly disagree" : 
                               rating === 3 ? "neutral" :
                               rating === 5 ? "strongly agree" : ""}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ratingQuestions.map((question, index) => (
                        <tr key={question.id} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                          <td className="px-4 py-4">{question.text}</td>
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <td key={rating} className="px-4 py-4 text-center">
                              <input
                                type="radio"
                                name={question.id}
                                value={rating}
                                required
                                className="w-4 h-4 text-brand-green focus:ring-brand-green/50"
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Comments */}
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                  Notes/Suggestions/Comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                ></textarea>
              </div>

              {/* Form Actions */}
              <div className="flex gap-4">
                <Button type="submit" className="w-32">
                  Submit
                </Button>
                <Button type="reset" variant="outline" className="w-32">
                  Clear Form
                </Button>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-brand-blue/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Your Feedback Matters</h2>
            <p className="text-sm text-gray-600">
              Your evaluation helps us maintain and improve the quality of our Friday sermons. 
              We appreciate your time and honest feedback.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 