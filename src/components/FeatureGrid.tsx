import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Upload, 
  Brain, 
  BarChart3, 
  Target, 
  Zap, 
  Shield,
  Clock,
  Globe,
  ArrowRight
} from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: Upload,
      title: "Smart Document Processing",
      description: "Upload any document format and get instant AI-powered content analysis with automatic topic extraction and summary generation.",
      color: "text-primary",
      gradient: "gradient-primary",
    },
    {
      icon: Brain,
      title: "AI Assessment Generation",
      description: "Automatically create personalized quizzes, flashcards, and practice tests based on your uploaded materials.",
      color: "text-accent",
      gradient: "gradient-accent",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track learning patterns, identify knowledge gaps, and monitor progress with detailed performance metrics and insights.",
      color: "text-success",
      gradient: "gradient-primary",
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Get AI-driven study suggestions, optimal timing recommendations, and customized learning paths for maximum efficiency.",
      color: "text-warning",
      gradient: "gradient-accent",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Receive immediate detailed explanations for answers, helping reinforce learning and correct misconceptions in real-time.",
      color: "text-primary",
      gradient: "gradient-primary",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your documents and data are encrypted and stored securely with enterprise-grade privacy protection and GDPR compliance.",
      color: "text-accent",
      gradient: "gradient-accent",
    },
  ];

  const additionalFeatures = [
    { icon: Clock, title: "Smart Scheduling", description: "AI-optimized study sessions" },
    { icon: Globe, title: "Multi-language", description: "Support for 50+ languages" },
    { icon: Target, title: "Goal Tracking", description: "Set and achieve learning objectives" },
  ];

  return (
    <section className="py-20 bg-muted/10">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features for Modern Learning</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our AI-powered platform combines cutting-edge technology with proven learning 
            methodologies to create the ultimate study experience.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-soft hover:shadow-medium transition-slow border-0 gradient-card group hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-slow`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              
              <Button variant="ghost" size="sm" className="p-0 h-auto font-medium group">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-base" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="p-6 text-center shadow-soft border-0 gradient-card">
              <feature.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="inline-block p-8 shadow-medium border-0 gradient-card">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Learning?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join thousands of students who have already improved their study efficiency by 47% on average.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;