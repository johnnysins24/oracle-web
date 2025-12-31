"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { config } from "@/lib/config";

const endpoints = [
    {
        name: "Tarot AI Reading",
        method: "POST",
        path: "/v1/ai/tarot",
        description: "จั่วไพ่ทาโรต์และรับคำทำนายจาก AI",
        request: {
            count: "number (1, 3, or 10)",
            question: "string (optional) - คำถามที่ต้องการถาม",
            lang: "string ('th' or 'en') - default: 'th'"
        },
        response: {
            interpretation: "string - คำทำนายจาก AI",
            data: {
                cards: "array - รายชื่อไพ่ที่จั่วได้",
                spread_type: "string - รูปแบบการจั่ว",
                positions: "array - ตำแหน่งของไพ่"
            }
        },
        example: `curl -X POST "https://api.oracle-engine.com/v1/ai/tarot" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "count": 3,
    "question": "ความรักปีหน้า",
    "lang": "th"
  }'`
    },
    {
        name: "Thai Fortune AI Reading",
        method: "POST",
        path: "/v1/ai/thai",
        description: "ดูดวงไทยตามปีนักษัตร วันเกิด ลัคนา พร้อม AI ทำนาย",
        request: {
            birth_date: "string (YYYY-MM-DD) - วันเกิด",
            birth_time: "string (HH:MM) optional - เวลาเกิด",
            question: "string (optional) - คำถามที่ต้องการถาม"
        },
        response: {
            interpretation: "string - คำทำนายจาก AI",
            data: {
                year_animal: "string - ปีนักษัตร",
                birth_day: "string - วันเกิด",
                lagna: "string - ลัคนา (ถ้ามีเวลาเกิด)"
            }
        },
        example: `curl -X POST "https://api.oracle-engine.com/v1/ai/thai" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "birth_date": "1995-05-15",
    "birth_time": "14:30",
    "question": "ดวงการเงินปีหน้า"
  }'`
    },
    {
        name: "Natal Chart AI Reading",
        method: "POST",
        path: "/v1/ai/natal",
        description: "วิเคราะห์ดวงชะตาตาม Western Astrology พร้อม AI",
        request: {
            birth_date: "string (YYYY-MM-DD) - วันเกิด",
            birth_time: "string (HH:MM) - เวลาเกิด",
            latitude: "number - ละติจูด สถานที่เกิด",
            longitude: "number - ลองจิจูด สถานที่เกิด",
            timezone_offset: "string - เช่น '+07:00'",
            lang: "string ('th' or 'en')"
        },
        response: {
            interpretation: "string - คำวิเคราะห์จาก AI",
            data: {
                sun_sign: "string - Sun Sign",
                moon_sign: "string - Moon Sign",
                ascendant: "string - Ascendant"
            }
        },
        example: `curl -X POST "https://api.oracle-engine.com/v1/ai/natal" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "birth_date": "1995-05-15",
    "birth_time": "14:30",
    "latitude": 13.7563,
    "longitude": 100.5018,
    "timezone_offset": "+07:00",
    "lang": "th"
  }'`
    },
    {
        name: "Draw Tarot Cards (No AI)",
        method: "GET",
        path: "/test/draw/{count}",
        description: "จั่วไพ่ทาโรต์โดยไม่ใช้ AI (สำหรับ testing)",
        request: {
            count: "number (path param) - จำนวนไพ่ 1-10"
        },
        response: {
            cards: "array - รายชื่อไพ่ที่จั่วได้",
            spread_type: "string",
            positions: "array"
        },
        example: `curl "https://api.oracle-engine.com/test/draw/3"`
    },
    {
        name: "Get Thai Naksat",
        method: "GET",
        path: "/v1/thai/naksat",
        description: "ดูปีนักษัตรจากปีเกิด",
        request: {
            birth_year: "number (query param) - ปี พ.ศ. หรือ ค.ศ."
        },
        response: {
            id: "number",
            name_th: "string - ชื่อปีนักษัตร",
            animal_th: "string - สัตว์ประจำปี",
            element_th: "string - ธาตุประจำตัว"
        },
        example: `curl "https://api.oracle-engine.com/v1/thai/naksat?birth_year=1995"`
    },
    {
        name: "Get Thai Birth Day",
        method: "GET",
        path: "/v1/thai/birth-day",
        description: "ดูข้อมูลวันเกิดตามหลักโหราศาสตร์ไทย",
        request: {
            birth_date: "string (query param) - YYYY-MM-DD"
        },
        response: {
            name_th: "string - วันเกิด",
            ruling_planet_th: "string - ดาวประจำวัน",
            color_th: "string - สีประจำวัน"
        },
        example: `curl "https://api.oracle-engine.com/v1/thai/birth-day?birth_date=1995-05-15"`
    }
];

export default function DocsPage() {
    const [activeEndpoint, setActiveEndpoint] = useState(0);

    return (
        <main className="min-h-screen">
            {/* Header */}
            <header className="border-b">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="font-medium">The Oracle Engine</Link>
                    <div className="flex gap-4">
                        <Link href={config.apiDocsUrl} target="_blank">
                            <Button variant="outline" size="sm">OpenAPI Docs</Button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Title */}
                <div className="mb-12">
                    <h1 className="text-3xl font-semibold mb-4">API Documentation</h1>
                    <p className="text-muted-foreground">
                        เอกสารการใช้งาน The Oracle Engine API
                    </p>
                </div>

                {/* Quick Start */}
                <section className="mb-16">
                    <h2 className="text-xl font-medium mb-6">Quick Start</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">1. รับ API Key</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                สมัครสมาชิกเพื่อรับ API Key สำหรับใช้งาน
                            </p>
                            <Button className="gradient-purple text-white">สมัครรับ API Key</Button>
                        </CardContent>
                    </Card>

                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle className="text-base">2. ใส่ API Key ใน Header</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                                {`Authorization: Bearer YOUR_API_KEY`}
                            </pre>
                        </CardContent>
                    </Card>

                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle className="text-base">3. เรียก API</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                                {`POST https://api.oracle-engine.com/v1/ai/tarot
Content-Type: application/json

{"count": 3, "question": "ความรัก", "lang": "th"}`}
                            </pre>
                        </CardContent>
                    </Card>
                </section>

                {/* Base URL */}
                <section className="mb-16">
                    <h2 className="text-xl font-medium mb-6">Base URL</h2>
                    <Card>
                        <CardContent className="py-4">
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-muted-foreground">Production:</span>
                                <code className="bg-muted px-3 py-1 rounded text-sm font-mono">
                                    https://api.oracle-engine.com
                                </code>
                            </div>
                            <div className="flex items-center gap-4 mt-3">
                                <span className="text-sm text-muted-foreground">Local Dev:</span>
                                <code className="bg-muted px-3 py-1 rounded text-sm font-mono">
                                    {config.apiUrl}
                                </code>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Endpoints */}
                <section className="mb-16">
                    <h2 className="text-xl font-medium mb-6">API Endpoints</h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {/* Sidebar */}
                        <div className="space-y-2">
                            {endpoints.map((ep, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveEndpoint(i)}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${activeEndpoint === i
                                        ? "bg-primary text-white"
                                        : "hover:bg-muted"
                                        }`}
                                >
                                    <span className={`font-mono text-xs mr-2 ${activeEndpoint === i ? "text-white/70" : "text-primary"
                                        }`}>
                                        {ep.method}
                                    </span>
                                    {ep.name}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="md:col-span-3">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="bg-primary text-white text-xs px-2 py-1 rounded font-mono">
                                            {endpoints[activeEndpoint].method}
                                        </span>
                                        <code className="font-mono text-sm">
                                            {endpoints[activeEndpoint].path}
                                        </code>
                                    </div>
                                    <CardDescription>
                                        {endpoints[activeEndpoint].description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Request */}
                                    <div>
                                        <h4 className="text-sm font-medium mb-3">Request Parameters</h4>
                                        <div className="bg-muted rounded-lg p-4">
                                            <table className="w-full text-sm">
                                                <tbody>
                                                    {Object.entries(endpoints[activeEndpoint].request).map(([key, value]) => (
                                                        <tr key={key} className="border-b border-border/50 last:border-0">
                                                            <td className="py-2 font-mono text-primary">{key}</td>
                                                            <td className="py-2 text-muted-foreground">{value as string}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Response */}
                                    <div>
                                        <h4 className="text-sm font-medium mb-3">Response</h4>
                                        <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                                            {JSON.stringify(endpoints[activeEndpoint].response, null, 2)}
                                        </pre>
                                    </div>

                                    {/* Example */}
                                    <div>
                                        <h4 className="text-sm font-medium mb-3">Example</h4>
                                        <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                                            {endpoints[activeEndpoint].example}
                                        </pre>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Error Codes */}
                <section className="mb-16">
                    <h2 className="text-xl font-medium mb-6">Error Codes</h2>
                    <Card>
                        <CardContent className="py-4">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2">Code</th>
                                        <th className="text-left py-2">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 font-mono">200</td>
                                        <td className="py-3 text-muted-foreground">Success</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 font-mono">400</td>
                                        <td className="py-3 text-muted-foreground">Bad Request - Invalid parameters</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 font-mono">401</td>
                                        <td className="py-3 text-muted-foreground">Unauthorized - Missing or invalid API Key</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 font-mono">429</td>
                                        <td className="py-3 text-muted-foreground">Rate Limit Exceeded</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-mono">500</td>
                                        <td className="py-3 text-muted-foreground">Internal Server Error</td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </section>

                {/* Rate Limits */}
                <section className="mb-16">
                    <h2 className="text-xl font-medium mb-6">Rate Limits</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">Free</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-semibold">100</p>
                                <p className="text-sm text-muted-foreground">requests/day</p>
                            </CardContent>
                        </Card>
                        <Card className="border-primary">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base text-primary">Pro</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-semibold">10,000</p>
                                <p className="text-sm text-muted-foreground">requests/day</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">Enterprise</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-semibold">Unlimited</p>
                                <p className="text-sm text-muted-foreground">requests/day</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Support */}
                <section>
                    <h2 className="text-xl font-medium mb-6">Support</h2>
                    <Card>
                        <CardContent className="py-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div>
                                    <h4 className="font-medium mb-2">Email</h4>
                                    <a href="mailto:support@oracle-engine.com" className="text-primary hover:underline text-sm">
                                        support@oracle-engine.com
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">OpenAPI Docs</h4>
                                    <Link href={config.apiDocsUrl} className="text-primary hover:underline text-sm" target="_blank">
                                        Swagger UI
                                    </Link>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">GitHub</h4>
                                    <a href="#" className="text-primary hover:underline text-sm">
                                        github.com/oracle-engine
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>

            {/* Footer */}
            <footer className="py-8 px-6 border-t mt-12">
                <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
                    © 2024 The Oracle Engine
                </div>
            </footer>
        </main>
    );
}
