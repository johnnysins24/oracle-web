import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { config } from "@/lib/config";
import { Header } from "@/components/Header";
import { CodeTabs } from "@/components/CodeTabs";
import { FadeInSection } from "@/components/FadeInSection";

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
          <FadeInSection>
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
          </FadeInSection>
        </section>

        {/* Code Example - Working tabs with all snippets */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium mb-2">INTEGRATION</p>
              <h2 className="text-2xl font-medium">ใช้งานง่าย</h2>
            </div>

            <CodeTabs />

            <p className="text-center text-sm text-muted-foreground mt-6">
              ดูเอกสาร API เต็มรูปแบบที่{" "}
              <Link href={config.apiDocsUrl} className="text-primary hover:underline" target="_blank">
                API Documentation
              </Link>
            </p>
          </div>
        </section>

        {/* Use Cases - Visual examples */}
        <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium mb-2">USE CASES</p>
              <h2 className="text-2xl font-medium">เอาไปใช้ทำอะไรได้บ้าง?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* LINE Bot */}
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">LINE Bot ดูดวง</CardTitle>
                      <CardDescription className="text-xs">Chatbot สำหรับร้านค้า</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-slate-950 rounded-lg p-4 text-sm font-mono">
                    <p className="text-green-400">ผู้ใช้: "ดูดวงความรักหน่อย"</p>
                    <p className="text-slate-400 mt-2">Bot → API → Response</p>
                    <p className="text-violet-400 mt-2">"ไพ่ The Lovers บ่งบอกว่า..."</p>
                  </div>
                </CardContent>
              </Card>

              {/* Daily App */}
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">App ดูดวงประจำวัน</CardTitle>
                      <CardDescription className="text-xs">Push notification ทุกเช้า</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-slate-950 rounded-lg p-4 text-sm font-mono">
                    <p className="text-blue-400">🔔 Daily Horoscope</p>
                    <p className="text-slate-400 mt-2">วันอังคาร × ปีมะเมีย</p>
                    <p className="text-violet-400 mt-2">"วันนี้เหมาะแก่การเริ่มต้นใหม่..."</p>
                  </div>
                </CardContent>
              </Card>

              {/* Tarot Game */}
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🎴</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">เกม Tarot Online</CardTitle>
                      <CardDescription className="text-xs">Interactive web experience</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-slate-950 rounded-lg p-4 text-sm text-center">
                    <div className="inline-block border border-violet-500/50 rounded-lg p-3 mb-2">
                      <span className="text-3xl">🃏</span>
                    </div>
                    <p className="text-violet-400">"The Tower บ่งบอกว่าการเปลี่ยนแปลง..."</p>
                  </div>
                </CardContent>
              </Card>

              {/* Content Creator */}
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">📰</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Content Generator</CardTitle>
                      <CardDescription className="text-xs">สร้างเนื้อหาอัตโนมัติ</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-slate-950 rounded-lg p-4 text-sm font-mono">
                    <p className="text-orange-400">📝 ดวงราศีประจำสัปดาห์</p>
                    <p className="text-slate-400 mt-2">API × 12 ราศี × Schedule</p>
                    <p className="text-violet-400 mt-2">"ปีมะโรงธาตุดินสัปดาห์นี้..."</p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50 cursor-pointer">
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
              <Card className="border-primary shadow-lg relative transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
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
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50 cursor-pointer">
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

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <p className="text-sm text-primary font-medium mb-2">CONTACT</p>
              <h2 className="text-2xl font-medium">ติดต่อเรา</h2>
            </div>

            <Card className="p-8">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">📧</span>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">สอบถามข้อมูล หรือติดต่อ Support</p>
                  <a
                    href="mailto:oracleengine.api@gmail.com"
                    className="text-xl font-medium text-primary hover:underline"
                  >
                    oracleengine.api@gmail.com
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  ตอบกลับภายใน 24 ชั่วโมง
                </p>
              </div>
            </Card>
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
                <a href="mailto:oracleengine.api@gmail.com" className="text-muted-foreground hover:text-primary">
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
