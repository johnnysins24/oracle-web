"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getThaiReading } from "@/lib/api";

export default function ThaiPage() {
    const [birthDate, setBirthDate] = useState("");
    const [birthTime, setBirthTime] = useState("");
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{
        interpretation: string;
        year_animal: string;
        birth_day: string;
        lagna: string | null;
    } | null>(null);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        if (!birthDate) {
            setError("กรุณาระบุวันเกิด");
            return;
        }

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const response = await getThaiReading(birthDate, birthTime || undefined, question || undefined);
            setResult({
                interpretation: response.interpretation,
                year_animal: response.data.year_animal,
                birth_day: response.data.birth_day,
                lagna: response.data.lagna
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
                    <h1 className="text-4xl font-bold text-primary">ดูดวงไทย</h1>
                    <p className="text-muted-foreground mt-2">วิเคราะห์ดวงชะตาตามปีนักษัตร วันเกิด และลัคนา</p>
                </div>

                {/* Form */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>กรอกข้อมูลวันเกิด</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            {/* Birth Date */}
                            <div>
                                <Label htmlFor="birthDate" className="mb-2 block">
                                    วันเกิด <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="birthDate"
                                    type="date"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                />
                            </div>

                            {/* Birth Time */}
                            <div>
                                <Label htmlFor="birthTime" className="mb-2 block">
                                    เวลาเกิด (ถ้าทราบ)
                                </Label>
                                <Input
                                    id="birthTime"
                                    type="time"
                                    value={birthTime}
                                    onChange={(e) => setBirthTime(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Question */}
                        <div>
                            <Label htmlFor="question" className="mb-2 block">คำถาม (ไม่บังคับ)</Label>
                            <Textarea
                                id="question"
                                placeholder="เช่น ดวงการเงินปีหน้า, ความรักจะสมหวังไหม..."
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                className="min-h-[80px]"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            size="lg"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full gradient-purple text-white"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <span className="spinner" />
                                    กำลังวิเคราะห์ดวง...
                                </span>
                            ) : "ดูดวง"}
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
                            <CardTitle>ผลการวิเคราะห์ดวง</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {/* Birth Data Summary */}
                            <div className="grid md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                                    <p className="text-sm text-muted-foreground mb-1">ปีนักษัตร</p>
                                    <p className="font-semibold text-primary">{result.year_animal}</p>
                                </div>
                                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                                    <p className="text-sm text-muted-foreground mb-1">วันเกิด</p>
                                    <p className="font-semibold text-primary">{result.birth_day}</p>
                                </div>
                                {result.lagna && (
                                    <div className="bg-secondary/50 rounded-lg p-4 text-center">
                                        <p className="text-sm text-muted-foreground mb-1">ลัคนา</p>
                                        <p className="font-semibold text-primary">{result.lagna}</p>
                                    </div>
                                )}
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
