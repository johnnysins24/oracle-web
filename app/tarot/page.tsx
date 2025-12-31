"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getTarotReading } from "@/lib/api";

export default function TarotPage() {
    const [count, setCount] = useState(3);
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{
        interpretation: string;
        cards: { name_th: string; name_en: string }[];
        positions: string[];
    } | null>(null);
    const [error, setError] = useState("");

    const handleDraw = async () => {
        setLoading(true);
        setError("");
        setResult(null);

        try {
            const response = await getTarotReading(count, question || undefined);
            setResult({
                interpretation: response.interpretation,
                cards: response.data.cards,
                positions: response.data.positions
            });
        } catch (err) {
            setError("ไม่สามารถเชื่อมต่อกับ API ได้ กรุณาตรวจสอบว่า Backend ทำงานอยู่");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen py-12 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/" className="text-muted-foreground hover:text-primary mb-4 inline-block">
                        ← กลับหน้าหลัก
                    </Link>
                    <h1 className="text-4xl font-bold text-primary">ดูไพ่ทาโรต์</h1>
                    <p className="text-muted-foreground mt-2">จั่วไพ่และรับคำทำนายจาก AI</p>
                </div>

                {/* Controls */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>เลือกรูปแบบการดู</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Card Count */}
                        <div>
                            <Label className="mb-3 block">จำนวนไพ่</Label>
                            <div className="flex gap-3">
                                {[1, 3, 10].map((num) => (
                                    <Button
                                        key={num}
                                        variant={count === num ? "default" : "outline"}
                                        onClick={() => setCount(num)}
                                        className={count === num ? "gradient-purple text-white" : ""}
                                    >
                                        {num === 1 ? "1 ใบ" : num === 3 ? "3 ใบ (อดีต-ปัจจุบัน-อนาคต)" : "10 ใบ (Celtic Cross)"}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Question */}
                        <div>
                            <Label htmlFor="question" className="mb-2 block">คำถาม (ไม่บังคับ)</Label>
                            <Textarea
                                id="question"
                                placeholder="เช่น ความรักปีหน้าจะเป็นอย่างไร, การงานจะราบรื่นไหม..."
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                className="min-h-[80px]"
                            />
                        </div>

                        {/* Draw Button */}
                        <Button
                            size="lg"
                            onClick={handleDraw}
                            disabled={loading}
                            className="w-full gradient-purple text-white"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <span className="spinner" />
                                    กำลังจั่วไพ่...
                                </span>
                            ) : "จั่วไพ่"}
                        </Button>
                    </CardContent>
                </Card>

                {/* Error */}
                {error && (
                    <Card className="mb-8 border-destructive">
                        <CardContent className="pt-6 text-destructive">
                            {error}
                        </CardContent>
                    </Card>
                )}

                {/* Result */}
                {result && (
                    <Card>
                        <CardHeader>
                            <CardTitle>ผลการทำนาย</CardTitle>
                            <CardDescription>
                                ไพ่ที่จั่วได้: {result.cards.map(c => c.name_th).join(", ")}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* Cards Display */}
                            <div className="flex flex-wrap gap-4 mb-6">
                                {result.cards.map((card, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="w-24 h-36 bg-gradient-to-b from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-primary/30 mb-2">
                                            <span className="text-2xl">🎴</span>
                                        </div>
                                        <p className="text-sm font-medium">{card.name_th}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {result.positions[idx] || card.name_en}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Interpretation */}
                            <div className="prose prose-purple max-w-none">
                                <h3 className="text-lg font-semibold mb-3 text-primary">คำทำนาย</h3>
                                <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                                    {result.interpretation}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </main>
    );
}
