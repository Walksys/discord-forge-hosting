import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "500",
    points: "500 Points",
    features: [
      "1 Discord Bot",
      "512MB RAM",
      "1 CPU Core",
      "5GB Storage",
      "Basic Support"
    ]
  },
  {
    name: "Pro",
    price: "1000",
    points: "1000 Points",
    popular: true,
    features: [
      "3 Discord Bots",
      "2GB RAM",
      "2 CPU Cores",
      "20GB Storage",
      "Priority Support",
      "Auto Restart"
    ]
  },
  {
    name: "Premium",
    price: "2000",
    points: "2000 Points",
    features: [
      "Unlimited Bots",
      "4GB RAM",
      "4 CPU Cores",
      "50GB Storage",
      "24/7 Premium Support",
      "Auto Restart",
      "Custom Domain"
    ]
  }
];

const Plans = () => {
  return (
    <section id="plans" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground">
            Select the perfect plan for your Discord bot hosting needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">Points</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
