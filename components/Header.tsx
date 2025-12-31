"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Fix hydration mismatch by only rendering dynamic content after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        { label: "Services", href: "#services" },
        { label: "Pricing", href: "#pricing" },
        { label: "Docs", href: "/docs" },
        { label: "Demo", href: "/tarot" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="font-semibold text-lg text-primary">
                        The Oracle Engine
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href={config.apiDocsUrl} target="_blank">
                            <Button variant="ghost" size="sm">API Docs</Button>
                        </Link>
                        <Button size="sm" className="gradient-purple text-white">
                            เริ่มใช้งาน
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {/* Always render hamburger icon on server, toggle on client */}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={mounted && mobileMenuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu - only render after mount to avoid hydration mismatch */}
                {mounted && mobileMenuOpen && (
                    <nav className="md:hidden pt-4 pb-2 border-t mt-4">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-primary"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link href={config.apiDocsUrl} target="_blank">
                                <Button variant="outline" size="sm" className="w-full">API Docs</Button>
                            </Link>
                            <Button size="sm" className="w-full gradient-purple text-white">
                                เริ่มใช้งาน
                            </Button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
