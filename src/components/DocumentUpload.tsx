import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, Image, FileSpreadsheet, X } from "lucide-react";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
}

const DocumentUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      processFiles(selectedFiles);
    }
  };

  const processFiles = (newFiles: File[]) => {
    const processedFiles = newFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
    }));

    setFiles((prev) => [...prev, ...processedFiles]);

    // Simulate file processing
    processedFiles.forEach((file) => {
      simulateFileProcessing(file.id);
    });

    toast({
      title: "Files uploaded",
      description: `${newFiles.length} file(s) are being processed`,
    });
  };

  const simulateFileProcessing = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        toast({
          title: "Processing complete",
          description: "Document analysis and assessment generation finished",
        });
      }
      
      setFiles((prev) =>
        prev.map((file) =>
          file.id === fileId ? { ...file, progress: Math.min(progress, 100) } : file
        )
      );
    }, 300);
  };

  const removeFile = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.includes("image")) return Image;
    if (type.includes("spreadsheet") || type.includes("excel")) return FileSpreadsheet;
    return FileText;
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upload Your Documents</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload PDFs, Word documents, PowerPoint presentations, or images. Our AI will
            analyze content and generate personalized assessments automatically.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card
            className={`p-8 border-2 border-dashed transition-all duration-300 ${
              isDragOver
                ? "border-primary bg-primary/5 shadow-medium"
                : "border-muted-foreground/25 hover:border-primary/50"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                <Upload className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Drop your files here</h3>
                <p className="text-muted-foreground">
                  Or click to browse and select files from your device
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports PDF, DOC, DOCX, PPT, PPTX, JPG, PNG (Max 20MB each)
                </p>
              </div>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => fileInputRef.current?.click()}
                className="mx-auto"
              >
                Browse Files
              </Button>
              
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </Card>

          {files.length > 0 && (
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold">Processing Files</h3>
              {files.map((file) => {
                const FileIcon = getFileIcon(file.type);
                return (
                  <Card key={file.id} className="p-4">
                    <div className="flex items-center gap-4">
                      <FileIcon className="w-8 h-8 text-primary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium truncate">{file.name}</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFile(file.id)}
                            className="h-6 w-6 text-muted-foreground hover:text-destructive"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <span>{formatFileSize(file.size)}</span>
                          <span>•</span>
                          <span>{file.progress.toFixed(0)}% complete</span>
                        </div>
                        <Progress value={file.progress} className="h-2" />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DocumentUpload;