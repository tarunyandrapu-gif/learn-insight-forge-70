import HeroSection from "@/components/HeroSection";
import DocumentUpload from "@/components/DocumentUpload";
import StudyDashboard from "@/components/StudyDashboard";
import FeatureGrid from "@/components/FeatureGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DocumentUpload />
      <StudyDashboard />
      <FeatureGrid />
    </div>
  );
};

export default Index;
