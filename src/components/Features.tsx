import { Server, Gauge, Lock, HeadphonesIcon, RotateCw, Globe } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Powerful Servers",
    description: "High-performance servers with the latest hardware to keep your bots running smoothly."
  },
  {
    icon: Gauge,
    title: "99.9% Uptime",
    description: "Reliable infrastructure ensuring your Discord bots are always online and responsive."
  },
  {
    icon: Lock,
    title: "DDoS Protection",
    description: "Advanced security measures to protect your bots from malicious attacks."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Expert support team available around the clock to help with any issues."
  },
  {
    icon: RotateCw,
    title: "Auto Restart",
    description: "Automatic restart functionality to keep your bots running without interruption."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Multiple server locations worldwide for optimal performance and low latency."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need for reliable Discord bot hosting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
              >
                <Icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
