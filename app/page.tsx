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
                      จั่วไพ่ 1-10 ใบ พร้อม AI ทำนายความหมาย
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
                      ดูดวงไทย ปีนักษัตร วันเกิด ลัคนา
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
                    Western Astrology พร้อม AI วิเคราะห์
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Code Example - Single focused example with tabs look */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium mb-2">INTEGRATION</p>
              <h2 className="text-2xl font-medium">ใช้งานง่าย</h2>
            </div>

            <Card className="overflow-hidden">
              <div className="flex border-b bg-muted/50">
                <button className="px-6 py-3 text-sm font-medium border-b-2 border-primary text-primary">
                  cURL
                </button>
                <button className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground">
                  Python
                </button>
                <button className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground">
                  JavaScript
                </button>
              </div>
              <div className="p-6 bg-slate-950 text-slate-50 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  {`curl -X POST "https://api.oracle-engine.com/v1/ai/tarot" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "count": 3,
    "question": "ความรักปีหน้า",
    "lang": "th"
  }'`}
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
                      <span className="text-primary">✓</span> 100 requests/day
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
                      <span className="text-primary">✓</span> 10,000 requests/day
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
                { q: "มี Rate Limit ไหม?", a: "Free: 100/day, Pro: 10,000/day, Enterprise: Unlimited" },
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
