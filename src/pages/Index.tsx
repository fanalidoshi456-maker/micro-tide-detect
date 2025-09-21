import { ProcessOverview } from "@/components/ProcessOverview";
import { PlasticMaterialChart } from "@/components/PlasticMaterialChart";
import { SizeConcentrationChart } from "@/components/SizeConcentrationChart";
import { ThresholdComparisonChart } from "@/components/ThresholdComparisonChart";
import { RealTimeStatus } from "@/components/RealTimeStatus";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="bg-primary/95 backdrop-blur-sm shadow-lg border-b border-primary/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground">
                🌊 Microplastic Detection System
              </h1>
              <p className="text-primary-foreground/80 mt-2">
                Multi-Modal Real-Time Water Quality Analysis
              </p>
            </div>
            <RealTimeStatus />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Process Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Detection Processes
          </h2>
          <ProcessOverview />
        </section>

        {/* Analytics Dashboard */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Real-Time Analytics
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📊 Plastic Material Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PlasticMaterialChart />
              </CardContent>
            </Card>

            <Card className="shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📈 Size Concentration Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SizeConcentrationChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ⚖️ Threshold vs Observed Quantities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ThresholdComparisonChart />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;