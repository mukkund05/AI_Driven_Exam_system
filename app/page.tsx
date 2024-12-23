import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-5">
        <h1 className="text-2xl font-bold mb-6">Welcome to AI-Driven Exam System</h1>

        {/* Prerequisite Test Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Prerequisite Test</h2>
          <Card
            title="Prerequisite Test"
            description="Evaluate your current knowledge. This is the first step towards your personalized learning journey."
            buttonText="Take Test"
          />
        </section>

        {/* AI-Suggested Test Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">AI-Suggested Test</h2>
          <Card
            title="AI-Suggested Test"
            description="Based on your performance, take the test designed just for you."
            buttonText="Take Test"
          />
        </section>
      </div>
    </div>
  );
}
