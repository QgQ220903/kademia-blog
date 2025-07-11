import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="relative my-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-2xl opacity-5 dark:opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-50/80 via-purple-50/80 to-blue-50/80 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-blue-900/20 rounded-2xl" />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 rounded-2xl border border-violet-200 dark:border-gray-700 shadow-xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Subscribe to Our Newsletter
          </h3>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Join thousands of tech enthusiasts and get the latest articles,
            tutorials, and exclusive insights delivered straight to your inbox
            every week.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-grow px-6 py-4 rounded-xl border-2 border-violet-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
            />
            <button
              type="submit"
              disabled={isSubscribed}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 disabled:from-green-600 disabled:to-green-600 text-white rounded-xl transition-all duration-300 font-medium whitespace-nowrap shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
            >
              {isSubscribed ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Subscribed!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Subscribe
                </>
              )}
            </button>
          </form>

          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <span>🔒</span>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
