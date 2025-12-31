"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

const codeExamples = {
    curl: `curl -X POST "https://oracle-engine-production.up.railway.app/v1/ai/tarot" \\
  -H "Content-Type: application/json" \\
  -d '{
    "count": 3,
    "question": "ความรักปีหน้า",
    "lang": "th"
  }'`,
    python: `import requests

url = "https://oracle-engine-production.up.railway.app/v1/ai/tarot"
data = {
    "count": 3,
    "question": "ความรักปีหน้า",
    "lang": "th"
}

response = requests.post(url, json=data)
result = response.json()

print(result["interpretation"])`,
    javascript: `const response = await fetch(
  "https://oracle-engine-production.up.railway.app/v1/ai/tarot",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      count: 3,
      question: "ความรักปีหน้า",
      lang: "th"
    })
  }
);

const data = await response.json();
console.log(data.interpretation);`
};

type TabName = keyof typeof codeExamples;

export function CodeTabs() {
    const [activeTab, setActiveTab] = useState<TabName>("curl");

    const tabs: { name: TabName; label: string }[] = [
        { name: "curl", label: "cURL" },
        { name: "python", label: "Python" },
        { name: "javascript", label: "JavaScript" },
    ];

    return (
        <Card className="overflow-hidden">
            <div className="flex border-b bg-muted/50">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === tab.name
                                ? "border-b-2 border-primary text-primary"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-6 bg-slate-950 text-slate-50 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="whitespace-pre-wrap">{codeExamples[activeTab]}</pre>
            </div>
        </Card>
    );
}
