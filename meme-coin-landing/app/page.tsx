import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Rocket, Shield, TrendingUp, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Uet Unemployment Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold">Uet Unemployment</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#tokenomics" className="text-sm font-medium hover:text-primary">
              Tokenomics
            </Link>
            <Link href="#roadmap" className="text-sm font-medium hover:text-primary">
              Roadmap
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Whitepaper
            </Button>
            <Button size="sm">Buy Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0"></div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
              The Next Generation Digital Asset
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Revolutionizing Digital <span className="text-primary">Finance</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl mb-8">
              Join thousands of investors who have already discovered the potential of our innovative digital asset
              ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
              <Button size="lg" className="w-full">
                Buy Tokens
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                View Chart <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl">
              <div className="flex flex-col items-center p-4 rounded-lg bg-card">
                <span className="text-3xl font-bold">$10M+</span>
                <span className="text-sm text-muted-foreground">Market Cap</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-card">
                <span className="text-3xl font-bold">50K+</span>
                <span className="text-sm text-muted-foreground">Holders</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-card">
                <span className="text-3xl font-bold">100%</span>
                <span className="text-sm text-muted-foreground">Secure</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-card">
                <span className="text-3xl font-bold">24/7</span>
                <span className="text-sm text-muted-foreground">Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Uet Unemployment?</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Our digital asset combines innovative technology with community-driven development to create a unique
                value proposition.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Rapid Growth</h3>
                <p className="text-muted-foreground">
                  Our strategic development roadmap ensures sustainable growth and increasing token value.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                <p className="text-muted-foreground">
                  Audited smart contracts and multi-layered security protocols protect your investment.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Market Potential</h3>
                <p className="text-muted-foreground">
                  Positioned to capture significant market share in the rapidly expanding digital asset space.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovative Technology</h3>
                <p className="text-muted-foreground">
                  Leveraging cutting-edge blockchain solutions for optimal performance and scalability.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Strong Community</h3>
                <p className="text-muted-foreground">
                  A dedicated global community of supporters, developers, and strategic partners.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Liquidity Assurance</h3>
                <p className="text-muted-foreground">
                  Locked liquidity pools and transparent tokenomics ensure market stability and investor confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tokenomics</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Our token distribution is designed to ensure long-term sustainability and value appreciation.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="h-[80%] w-[80%] rounded-full bg-card flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold">Total Supply</div>
                        <div className="text-3xl font-bold text-primary">1,000,000,000</div>
                        <div className="text-sm text-muted-foreground">Uet Unemployment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Public Sale</span>
                    <span className="font-bold">40%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Team & Advisors</span>
                    <span className="font-bold">15%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Marketing & Partnerships</span>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Liquidity Pool</span>
                    <span className="font-bold">10%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Ecosystem Development</span>
                    <span className="font-bold">15%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-20 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Strategic Roadmap</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Our development plan outlines key milestones and strategic initiatives for sustainable growth.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    <div className="bg-card p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-2">Phase 1: Foundation</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Token launch and initial exchange listings</li>
                        <li>Community building initiatives</li>
                        <li>Security audits and compliance</li>
                        <li>Strategic partnerships establishment</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative z-10 order-1 md:order-2">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <ChevronRight className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="md:w-1/2 order-3"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2 order-2"></div>
                  <div className="relative z-10 order-1">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <ChevronRight className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="md:w-1/2 md:text-left order-3">
                    <div className="bg-card p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-2">Phase 2: Expansion</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Major exchange listings</li>
                        <li>Enhanced marketing campaigns</li>
                        <li>Development of proprietary technology</li>
                        <li>Expansion of use cases</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    <div className="bg-card p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-2">Phase 3: Integration</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Cross-chain functionality</li>
                        <li>DeFi ecosystem integration</li>
                        <li>Advanced staking mechanisms</li>
                        <li>Governance implementation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative z-10 order-1 md:order-2">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <ChevronRight className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="md:w-1/2 order-3"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2 order-2"></div>
                  <div className="relative z-10 order-1">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <ChevronRight className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="md:w-1/2 md:text-left order-3">
                    <div className="bg-card p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-2">Phase 4: Innovation</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Proprietary blockchain development</li>
                        <li>Enterprise solutions launch</li>
                        <li>Global adoption initiatives</li>
                        <li>Advanced ecosystem expansion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Find answers to common questions about our token and ecosystem.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How can I purchase Uet Unemployment?</AccordionTrigger>
                  <AccordionContent>
                  Uet Unemployment can be purchased on several major exchanges including DEXs like Uniswap and CEXs like
                    Binance. You can also purchase directly through our website using the "Buy Now" button.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What makes Uet Unemployment different from other tokens?</AccordionTrigger>
                  <AccordionContent>
                  Uet Unemployment combines innovative technology with a strong community focus. Our unique tokenomics model,
                    strategic partnerships, and clear development roadmap set us apart from other projects in the space.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is Uet Unemployment secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, Uet Unemployment has undergone multiple security audits by leading blockchain security firms. Our smart
                    contracts are verified and our liquidity is locked to ensure maximum security for our investors.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What are the use cases for Uet Unemployment?</AccordionTrigger>
                  <AccordionContent>
                  Uet Unemployment serves multiple functions within our ecosystem, including governance, staking rewards,
                    transaction fees, and access to premium features. As we expand, additional utility will be added.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How can I join the Uet Unemployment community?</AccordionTrigger>
                  <AccordionContent>
                    You can join our vibrant community through our official Telegram group, Discord server, and by
                    following us on Twitter. We also host regular AMAs and community events.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>What is the long-term vision for Uet Unemployment?</AccordionTrigger>
                  <AccordionContent>
                    Our vision is to establish Uet Unemployment as a leading digital asset with real-world utility and
                    widespread adoption. We aim to bridge traditional finance with decentralized solutions while
                    creating value for our community.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Join the Uet Unemployment Revolution
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl mb-8">
                Don't miss your opportunity to be part of this groundbreaking digital asset ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Buy Uet Unemployment</Button>
                <Button variant="outline" size="lg">
                  View Whitepaper
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/logo.jpg" alt="Uet Unemployment Logo" width={32} height={32} className="rounded-full" />
                <span className="text-lg font-bold">Uet Unemployment</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The next generation digital asset revolutionizing the cryptocurrency space.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#tokenomics" className="text-muted-foreground hover:text-foreground">
                    Tokenomics
                  </Link>
                </li>
                <li>
                  <Link href="#roadmap" className="text-muted-foreground hover:text-foreground">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Medium
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Uet Unemployment. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
