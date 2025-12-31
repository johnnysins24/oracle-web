"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { config } from "@/lib/config";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section - Clean, focused */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-primary font-medium mb-4 tracking-wide">FORTUNE TELLING API</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground leading-tight">
              The Oracle Engine
            </h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              API สำหรับไพ่ทาโรต์ โหราศาสตร์ไทย และโหราศาสตร์สากล<br />
              พร้อม AI ทำนายในตัว
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gradient-purple text-white px-8">
                เริ่มใช้งานฟรี
              </Button>
              <Link href={config.apiDocsUrl} target="_blank">
                <Button size="lg" variant="outline" className="px-8">
                  API Docs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* API Services - Card grid with hover effects */}
        <section id="services" className="py-20 px-6 bg-muted/30 scroll-mt-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium mb-2">SERVICES</p>
              <h2 className="text-2xl font-medium">API Endpoints</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/tarot" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl">🎴</span>
                    </div>
                    <CardTitle className="text-lg">Tarot API</CardTitle>
                    <CardDescription className="font-mono text-xs">/v1/ai/tarot</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      ไพ่ทาโรต์ 78 ใบ Rider-Waite รองรับ 1, 3, 10 ใบ พร้อม AI แม่หมอยิปซีทำนาย
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/thai" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl">🔮</span>
                    </div>
                    <CardTitle className="text-lg">Thai Fortune API</CardTitle>
                    <CardDescription className="font-mono text-xs">/v1/ai/thai</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      คำนวณปีนักษัตร วันเกิด ลัคนา ตามหลักโหราศาสตร์ไทย + AI อาจารย์หมอดูทำนาย
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <CardTitle className="text-lg">Natal Chart API</CardTitle>
                  <CardDescription className="font-mono text-xs">/v1/ai/natal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    คำนวณ Sun Sign, Moon Sign, และ Ascendant จากพิกัดเกิด + AI วิเคราะห์บุคลิกภาพ
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Code Example - Working tabs with all snippets */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium mb-2">INTEGRATION</p>
              <h2 className="text-2xl font-medium">ใช้งานง่าย</h2>
            </div>

            <Card className="overflow-hidden">
              <div className="flex border-b bg-muted/50">
                <button
                  id="tab-curl"
                  className="px-6 py-3 text-sm font-medium border-b-2 border-primary text-primary"
                  onClick={() => {
                    document.querySelectorAll('[id^=code-]').forEach(el => el.classList.add('hidden'));
                    document.querySelectorAll('[id^=tab-]').forEach(el => {
                      el.classList.remove('border-primary', 'text-primary');
                      el.classList.add('text-muted-foreground');
                    });
                    document.getElementById('code-curl')?.classList.remove('hidden');
                    document.getElementById('tab-curl')?.classList.add('border-primary', 'text-primary');
                    document.getElementById('tab-curl')?.classList.remove('text-muted-foreground');
                  }}
                >
                  cURL
                </button>
                <button
                  id="tab-python"
                  className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    document.querySelectorAll('[id^=code-]').forEach(el => el.classList.add('hidden'));
                    document.querySelectorAll('[id^=tab-]').forEach(el => {
                      el.classList.remove('border-primary', 'text-primary');
                      el.classList.add('text-muted-foreground');
                    });
                    document.getElementById('code-python')?.classList.remove('hidden');
                    document.getElementById('tab-python')?.classList.add('border-primary', 'text-primary');
                    document.getElementById('tab-python')?.classList.remove('text-muted-foreground');
                  }}
                >
                  Python
                </button>
                <button
                  id="tab-js"
                  className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    document.querySelectorAll('[id^=code-]').forEach(el => el.classList.add('hidden'));
                    document.querySelectorAll('[id^=tab-]').forEach(el => {
                      el.classList.remove('border-primary', 'text-primary');
                      el.classList.add('text-muted-foreground');
                    });
                    document.getElementById('code-js')?.classList.remove('hidden');
                    document.getElementById('tab-js')?.classList.add('border-primary', 'text-primary');
                    document.getElementById('tab-js')?.classList.remove('text-muted-foreground');
                  }}
                >
                  JavaScript
                </button>
              </div>

              {/* cURL */}
              <div id="code-curl" className="p-6 bg-slate-950 text-slate-50 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  {`curl -X POST "https://oracle-engine-production.up.railway.app/v1/ai/tarot" \\
  -H "Content-Type: application/json" \\
  -d '{
    "count": 3,
    "question": "ความรักปีหน้า",
    "lang": "th"
  }'`}
                </pre>
              </div>

              {/* Python */}
              <div id="code-python" className="hidden p-6 bg-slate-950 text-slate-50 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  {`import requests

url = "https://oracle-engine-production.up.railway.app/v1/ai/tarot"
data = {
    "count": 3,
    "question": "ความรักปีหน้า",
    "lang": "th"
}

response = requests.post(url, json=data)
result = response.json()

print(result["interpretation"])`}
                </pre>
              </div>

              {/* JavaScript */}
              <div id="code-js" className="hidden p-6 bg-slate-950 text-slate-50 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  {`const response = await fetch(
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
console.log(data.interpretation);`}
                </pre>
              </div>
            </Card>

            <p className="text-center text-sm text-muted-foreground mt-6">
              ดูเอกสาร API เต็มรูปแบบที่{" "}
              <Link href={config.apiDocsUrl} className="text-primary hover:underline" target="_blank">
                API Documentation
              </Link>
            </p>
          </div>
        </section>

        {/* Pricing - Cleaner cards with better hierarchy */}
        <section id="pricing" className="py-20 px-6 bg-muted/30 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium mb-2">PRICING</p>
              <h2 className="text-2xl font-medium">แพ็คเกจ</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Free */}
              <Card>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Free</CardTitle>
                  <div className="py-4">
                    <span className="text-4xl font-semibold">฿0</span>
                    <span className="text-muted-foreground">/เดือน</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> 50 requests/day
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Tarot + Thai API
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span>✗</span> Priority support
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">เริ่มใช้งาน</Button>
                </CardContent>
              </Card>

              {/* Pro - Highlighted */}
              <Card className="border-primary shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-4 py-1 rounded-full">
                  แนะนำ
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-base font-medium text-primary">Pro</CardTitle>
                  <div className="py-4">
                    <span className="text-4xl font-semibold">฿299</span>
                    <span className="text-muted-foreground">/เดือน</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> 5,000 requests/day
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> All APIs included
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Email support
                    </li>
                  </ul>
                  <Button className="w-full gradient-purple text-white">สมัครเลย</Button>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Enterprise</CardTitle>
                  <div className="py-4">
                    <span className="text-4xl font-semibold">Custom</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Unlimited requests
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Custom AI prompts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Dedicated support
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">ติดต่อเรา</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ - Accordion style */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium mb-2">FAQ</p>
              <h2 className="text-2xl font-medium">คำถามที่พบบ่อย</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "API Key ได้มาอย่างไร?", a: "สมัครสมาชิกและรับ API Key ได้ทันที ใช้งานได้เลยไม่ต้องรอ" },
                { q: "รองรับภาษาอะไรบ้าง?", a: "รองรับทั้งภาษาไทยและอังกฤษ ระบุ lang: 'th' หรือ 'en'" },
                { q: "มี Rate Limit ไหม?", a: "Free: 50 req/day, Pro: 5,000 req/day พร้อม AI ทำนาย" },
                { q: "ไพ่ทาโรต์มีกี่ใบ?", a: "78 ใบตามมาตรฐาน Rider-Waite สุ่มได้ 1, 3 หรือ 10 ใบ" },
                { q: "ต่างจาก ChatGPT wrap เองยังไง?", a: "เรามี engine คำนวณโหราศาสตร์จริง + prompt ที่ fine-tune มาแล้ว ประหยัดเวลา dev" },
              ].map((item, i) => (
                <Card key={i} className="hover:shadow-sm transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Simple and clean */}
        <section className="py-20 px-6 bg-primary/5">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-medium mb-4">พร้อมเริ่มใช้งาน?</h2>
            <p className="text-muted-foreground mb-8">
              เริ่มต้นฟรี ไม่ต้องใช้บัตรเครดิต
            </p>
            <Button size="lg" className="gradient-purple text-white px-10">
              สมัครใช้งานฟรี
            </Button>
          </div>
        </section>

        {/* Footer - Minimal */}
        <footer className="py-12 px-6 border-t">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="font-medium">The Oracle Engine</p>
                <p className="text-sm text-muted-foreground">Fortune Telling API</p>
              </div>
              <div className="flex gap-8 text-sm">
                <Link href={config.apiDocsUrl} className="text-muted-foreground hover:text-primary" target="_blank">
                  API Docs
                </Link>
                <Link href="/tarot" className="text-muted-foreground hover:text-primary">
                  Demo
                </Link>
                <a href="mailto:support@oracle-engine.com" className="text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </div>
            </div>
            <div className="text-center text-xs text-muted-foreground mt-8 pt-8 border-t">
              © 2024 The Oracle Engine
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
