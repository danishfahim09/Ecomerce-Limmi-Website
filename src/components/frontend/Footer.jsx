"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function Footer() {
    return (
        <footer className="bg-card border-t border-border mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                width={300}
                                height={78}
                                src="/applogo.png"
                                alt="Limmi E-commerce"
                                className="w-auto h-9 dark:brightness-0 dark:invert"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                            Your trusted marketplace for fresh produce and quality products. Connecting farmers, vendors, and customers.
                        </p>
                        <div className="flex items-center gap-3">
                            <Link 
                                href="#" 
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-lime-600 dark:hover:bg-lime-700 text-foreground hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link 
                                href="#" 
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-lime-600 dark:hover:bg-lime-700 text-foreground hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link 
                                href="#" 
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-lime-600 dark:hover:bg-lime-700 text-foreground hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link 
                                href="#" 
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-lime-600 dark:hover:bg-lime-700 text-foreground hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                                aria-label="Github"
                            >
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    href="/" 
                                    className="text-sm text-muted-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-200"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/category" 
                                    className="text-sm text-muted-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-200"
                                >
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/register-farmer" 
                                    className="text-sm text-muted-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-200"
                                >
                                    Become a Farmer
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/blogs" 
                                    className="text-sm text-muted-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-200"
                                >
                                    Community Training
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-base font-semibold text-foreground mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    href="/contact" 
                                    className="text-sm text-muted-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-200"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/faq" 
                                    className="text-sm text-muted-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-200"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/terms" 
                                    className="text-sm text-muted-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-200"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/privacy" 
                                    className="text-sm text-muted-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-200"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-base font-semibold text-foreground mb-4">Newsletter</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to get updates on new products and special offers.
                        </p>
                        <form className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="shadow-sm"
                                required
                            />
                            <Button 
                                type="submit"
                                className="w-full bg-lime-600 hover:bg-lime-700 dark:bg-lime-600 dark:hover:bg-lime-700 text-white shadow-md hover:shadow-lg transition-shadow duration-200"
                            >
                                <Mail className="w-4 h-4 mr-2" />
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-12 pt-8 border-t border-border">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Phone</p>
                                <p className="text-sm font-medium text-foreground">+256 700 000 000</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Email</p>
                                <p className="text-sm font-medium text-foreground">info@limmi.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Address</p>
                                <p className="text-sm font-medium text-foreground">Kampala, Uganda</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-border">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground text-center sm:text-left">
                            © {new Date().getFullYear()} Limmi E-commerce. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link 
                                href="/terms" 
                                className="text-sm text-muted-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-200"
                            >
                                Terms
                            </Link>
                            <Link 
                                href="/privacy" 
                                className="text-sm text-muted-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-200"
                            >
                                Privacy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
