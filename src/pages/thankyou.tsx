import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center glass-card p-10 rounded-3xl">
          <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-3">Thank you! 🎉</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your message has been sent successfully. We’ll get back to you within 24 hours.
          </p>

          <div className="flex gap-3 justify-center">
            <Link to="/">
              <Button className="bg-gradient-primary text-white">Go to Home</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="glass-button">
                Back to Contact
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
