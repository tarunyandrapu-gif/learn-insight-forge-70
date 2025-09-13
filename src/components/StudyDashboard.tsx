import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Target, 
  TrendingUp, 
  Clock, 
  Brain, 
  Award,
  FileText,
  BarChart3,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const StudyDashboard = () => {
  const recentDocuments = [
    { name: "Advanced Calculus Notes", progress: 85, questions: 12, completed: 10 },
    { name: "Biology Chapter 5", progress: 60, questions: 15, completed: 9 },
    { name: "History Research Paper", progress: 40, questions: 8, completed: 3 },
  ];

  const studyStats = [
    { label: "Documents Processed", value: "24", icon: FileText, color: "text-primary" },
    { label: "Assessments Completed", value: "156", icon: CheckCircle2, color: "text-success" },
    { label: "Study Streak", value: "12 days", icon: Target, color: "text-accent" },
    { label: "Avg. Score", value: "87%", icon: Award, color: "text-warning" },
  ];

  const aiRecommendations = [
    {
      type: "Focus Area",
      title: "Strengthen Molecular Biology",
      description: "Based on recent performance, spend more time on cellular processes",
      priority: "High",
    },
    {
      type: "Study Method",
      title: "Try Spaced Repetition",
      description: "Your retention could improve by 23% with this technique",
      priority: "Medium",
    },
    {
      type: "Time Management",
      title: "Optimal Study Time",
      description: "Your peak performance window is 2-4 PM",
      priority: "Low",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Study Dashboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your progress, view analytics, and get AI-powered recommendations 
            to optimize your learning experience.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {studyStats.map((stat, index) => (
            <Card key={index} className="p-6 gradient-card border-0 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Documents */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-medium">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Recent Documents
                </h3>
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentDocuments.map((doc, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-base">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium">{doc.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {doc.completed}/{doc.questions} questions completed
                        </p>
                      </div>
                      <Badge variant={doc.progress >= 80 ? "default" : "secondary"}>
                        {doc.progress}%
                      </Badge>
                    </div>
                    <Progress value={doc.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* AI Recommendations */}
          <div>
            <Card className="p-6 shadow-medium">
              <div className="flex items-center gap-2 mb-6">
                <Brain className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-semibold">AI Recommendations</h3>
              </div>
              
              <div className="space-y-4">
                {aiRecommendations.map((rec, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-base">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {rec.type}
                      </Badge>
                      <Badge 
                        variant={rec.priority === "High" ? "destructive" : rec.priority === "Medium" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {rec.priority}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-sm mb-1">{rec.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <Button variant="gradient" className="w-full mt-4">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Full Analysis
              </Button>
            </Card>
          </div>
        </div>

        {/* Progress Charts Placeholder */}
        <div className="mt-12">
          <Card className="p-8 gradient-card border-0 shadow-medium">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full gradient-accent flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced Analytics Coming Soon</h3>
                <p className="text-muted-foreground">
                  Detailed performance charts, learning patterns, and predictive insights 
                  will be available in the next update.
                </p>
              </div>
              <Button variant="outline">
                <Clock className="w-4 h-4 mr-2" />
                Notify Me
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudyDashboard;