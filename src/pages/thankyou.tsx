import { Link } from "react-router-dom";
import { CheckCircle, Home, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const ThankYou = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-10">
            <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-4xl font-bold mb-3">
              Thanks for reaching out!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We received your message and will get back to you within 24 hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link to="/">
                <Button className="w-full bg-gradient-primary text-white">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </Link>

              <Link to="/contact">
                <Button variant="outline" className="w-full glass-button">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Another Message
                </Button>
              </Link>

              <Link to="/resume-builder">
                <Button variant="outline" className="w-full glass-button">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Try Resume Builder
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Need something urgent? Call us at{" "}
              <a className="text-primary underline" href="tel:+919059086142">
                +91 9059086142
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
