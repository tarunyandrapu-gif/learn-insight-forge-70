import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, BarChart3, Brain, FileText } from "lucide-react";
import heroImage from "@/assets/hero-study-system.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      {/* Hero content */}
      <div className="container px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                AI-Powered{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Study System
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Upload documents, get instant assessments, track progress, and receive 
                personalized AI recommendations to optimize your learning journey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Learning
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Upload, label: "Upload Documents", count: "100+" },
                { icon: FileText, label: "Auto Assessment", count: "Smart" },
                { icon: BarChart3, label: "Progress Tracking", count: "Real-time" },
                { icon: Brain, label: "AI Recommendations", count: "Personal" },
              ].map((feature, index) => (
                <Card key={index} className="p-4 text-center gradient-card border-0 shadow-soft">
                  <feature.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">{feature.count}</div>
                  <div className="text-xs text-muted-foreground">{feature.label}</div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="AI-powered study system interface showing document analysis and progress tracking"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating stats */}
            <Card className="absolute -top-4 -left-4 p-4 gradient-card border-0 shadow-medium">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                <div>
                  <div className="text-sm font-semibold">98% Accuracy</div>
                  <div className="text-xs text-muted-foreground">AI Analysis</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 p-4 gradient-card border-0 shadow-medium">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-sm font-semibold">+47% Faster</div>
                  <div className="text-xs text-muted-foreground">Learning Speed</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;