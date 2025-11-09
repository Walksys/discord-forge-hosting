import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Crown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
          <Crown className="h-4 w-4" />
          <span>Premium Discord Bot Hosting</span>
        </div>
        
        <h1 className="mb-6 text-5xl md:text-7xl font-bold text-foreground">
          Host Your Discord Bots
          <span className="block text-primary">With Confidence</span>
        </h1>
        
        <p className="mb-10 text-xl text-muted-foreground max-w-2xl mx-auto">
          Fast, reliable, and affordable hosting for your Discord bots. 
          Get started in minutes with our powerful infrastructure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            View Plans
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
            <Zap className="h-10 w-10 text-primary" />
            <h3 className="font-semibold text-lg text-foreground">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">99.9% uptime guaranteed</p>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
            <Shield className="h-10 w-10 text-primary" />
            <h3 className="font-semibold text-lg text-foreground">Secure</h3>
            <p className="text-sm text-muted-foreground">DDoS protection included</p>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
            <Crown className="h-10 w-10 text-primary" />
            <h3 className="font-semibold text-lg text-foreground">Premium Support</h3>
            <p className="text-sm text-muted-foreground">24/7 expert assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
