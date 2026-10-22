import React, { useState } from 'react';
import { 
  ArrowUpRight, Check, Sparkles, Sliders, 
  Lock, ArrowRight, Menu, X, Plus, Minus 
} from 'lucide-react';

// Reusable Components
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block border border-gray-200 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-gray-500 bg-white shadow-sm">
    {children}
  </span>
);

const FeatureCard = ({ title, desc, icon: Icon, number }: { title: string, desc: string, icon: any, number: string }) => (
  <div className="bg-[#f8f9fc] p-8 md:p-10 rounded-[2.5rem] border border-gray-100 flex flex-col h-full hover:bg-white hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 group">
    <div className="flex justify-between items-start mb-12">
      <Pill>Advantage</Pill>
      <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-2xl bg-white group-hover:border-purple-200 group-hover:bg-purple-50 transition-colors">
        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
      </div>
    </div>
    <div className="mt-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl font-light text-gray-300 font-mono tracking-tighter">{number}</div>
        <div className="p-2 rounded-xl bg-purple-100/50 text-purple-600"><Icon className="w-6 h-6" /></div>
      </div>
      <h3 className="text-2xl font-medium tracking-tight mb-4 pr-4 leading-tight text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How does the rule engine work?", a: "Our rule engine allows you to define strict parameters for brand voice, vocabulary, and formatting that the AI must follow unconditionally." },
    { q: "Is my data secure?", a: "Yes. Your proprietary data moat is completely siloed. We never train public models on your private data." },
    { q: "Can it integrate with our CMS?", a: "Semantiq offers a robust API and native integrations with popular CMS platforms including WordPress, Contentful, and Sanity." },
    { q: "What makes Semantiq different from ChatGPT?", a: "Unlike generic LLMs, Semantiq is constrained by your brand rules and powered by your proprietary data, ensuring every output is unique to your brand and factually accurate." }
  ];

  return (
    <div className="min-h-screen bg-[#D6C6FF] font-sans selection:bg-purple-300 selection:text-purple-900 flex flex-col items-center">
      
      {/* Navigation */}
      <nav className="w-full top-0 z-50 py-6 px-6 lg:px-12 max-w-[1600px]">
        <div className="flex justify-between items-center bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/50 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-gray-900">Semantiq</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition-colors">Platform</a>
            <a href="#solutions" className="hover:text-gray-900 transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Book Demo
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-gray-900" /> : <Menu className="text-gray-900" />}
          </button>
        </div>
      </nav>

      {/* a. Hero Section & b. Statement */}
      <div className="w-full px-6 lg:px-12 pt-16 pb-12 max-w-[1600px] flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="flex flex-col gap-4">
          <Pill>AI for Enterprise</Pill>
          <h1 className="text-6xl md:text-[6.5rem] font-medium tracking-tighter text-white drop-shadow-sm leading-[0.9]">
            The AI Content <br className="hidden md:block"/> Engine.
          </h1>
        </div>
        <div className="max-w-sm text-purple-950 text-sm font-medium leading-relaxed md:pb-4 border-l-2 border-purple-400 pl-4">
          <strong>Statement:</strong> The fusion of rule-based precision and modern AI at Semantiq goes beyond content generation. We enforce strict brand constraints, making complex guidelines perfectly accessible and flawlessly executed.
        </div>
      </div>

      {/* Main White Canvas */}
      <main className="w-full bg-white rounded-t-[3rem] md:rounded-t-[4rem] mx-auto shadow-2xl relative z-10 flex-grow max-w-[1600px] mb-6 border border-white">
        
        {/* c. Problem & d. Solution */}
        <section className="px-6 lg:px-16 pt-20 pb-12">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            <div className="bg-red-50 p-10 rounded-[2rem] border border-red-100 flex flex-col gap-4">
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs">The Problem</span>
              <h3 className="text-2xl font-medium text-gray-900">Generic AI hallucinates and dilutes your brand.</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Most LLMs lack the ability to strictly follow complex, multi-layered enterprise style guides, leading to inconsistent tone, factual errors, and massive editing overhead.</p>
            </div>
            <div className="bg-purple-50 p-10 rounded-[2rem] border border-purple-100 flex flex-col gap-4">
              <span className="text-purple-600 font-bold uppercase tracking-widest text-xs">The Semantiq Solution</span>
              <h3 className="text-2xl font-medium text-gray-900">Constrained generation via symbolic logic.</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We layer a deterministic rule engine over top-tier LLMs. It acts as an unbreakable firewall, ensuring every output matches your precise vocabulary, formatting, and factual guardrails.</p>
            </div>
          </div>
        </section>

        {/* e. Features / f. USPs */}
        <section className="px-6 lg:px-16 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 border-b border-gray-100 pb-16">
            <div>
              <p className="text-gray-900 font-semibold mb-6 tracking-wide text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Unique Selling Propositions
              </p>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="text-5xl md:text-7xl font-medium tracking-tighter max-w-2xl leading-[1.05] text-gray-900">
                  Core Advantages
                </h2>
                <div className="flex gap-3 justify-end mt-4">
                  <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <ArrowRight className="w-5 h-5 rotate-180 text-gray-400" />
                  </button>
                  <button className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5 text-gray-900 hover:text-white" />
                  </button>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              number="01"
              title="Deterministic Rule Engine"
              desc="Set unbreakable rules for terminology, tone, and structure. Ensure 100% compliance with your brand guidelines every time."
              icon={Sliders}
            />
            <FeatureCard 
              number="02"
              title="Brand-Aware Content Generation"
              desc="Our AI ingests your style guides and past content to learn your exact voice, producing drafts that require zero stylistic editing."
              icon={Sparkles}
            />
            <FeatureCard 
              number="03"
              title="Proprietary Data Moat"
              desc="Your enterprise data is securely siloed. Turn your unique knowledge base into a competitive advantage safely."
              icon={Lock}
            />
          </div>
        </section>

        {/* Section: Problem / Science Behind (Matching the large image section) */}
        <section className="px-6 lg:px-16 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
            <h2 className="text-4xl md:text-[4rem] font-medium tracking-tighter max-w-2xl leading-[1.05] text-gray-900">
              The Science Behind Our Engine
            </h2>
            <div className="lg:max-w-sm flex flex-col items-start lg:items-end gap-8 pt-4">
                <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50"><div className="w-2 h-2 rounded-full bg-gray-900"></div></button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white"><div className="w-2 h-2 rounded-full bg-gray-300"></div></button>
                </div>
                <button className="border border-gray-300 rounded-full px-6 py-2 text-xs font-semibold tracking-widest uppercase hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
                  Read Whitepaper
                </button>
            </div>
          </div>
          
          <div className="flex justify-center mb-16">
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed text-center max-w-3xl">
              Pioneering enterprise AI innovation, we leverage cutting-edge LLMs constrained by <strong className="text-gray-900 font-medium">symbolic rule engines</strong> to eliminate hallucinations.
            </p>
          </div>

          {/* Progress dots mapping to reference image */}
          <div className="flex justify-center items-center gap-4 md:gap-12 mb-8 text-gray-300">
             <div className="w-4 h-4 rounded-full border-[4px] border-purple-200 bg-purple-500"></div>
             <div className="h-px bg-gray-200 w-8 md:w-24"></div>
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
             <div className="h-px bg-gray-200 w-8 md:w-24"></div>
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
             <div className="h-px bg-gray-200 w-8 md:w-24"></div>
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
             <div className="h-px bg-gray-200 w-8 md:w-24"></div>
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>

          {/* Large Abstract Image Container */}
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-gray-100 w-full group">
            <img 
              src="/hero-abstract.jpg" 
              alt="Semantiq AI Engine" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent flex items-center justify-center">
              <h3 className="text-6xl md:text-[10rem] font-bold text-white tracking-tighter drop-shadow-xl opacity-90">SEMANTIQ</h3>
            </div>
          </div>
        </section>

        {/* g. We vs Everyone else & h. Why choose us */}
        <section className="px-6 lg:px-16 py-16 bg-gray-900 text-white rounded-[3rem] mx-4 md:mx-8 mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-16 text-center">Semantiq vs. Everyone Else</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="border border-white/10 bg-white/5 rounded-[2rem] p-8">
                <div className="text-gray-400 mb-6 font-medium uppercase tracking-widest text-sm">Generic LLMs</div>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-300 items-start"><X className="w-5 h-5 text-red-400 shrink-0" /> Requires complex prompt engineering</li>
                  <li className="flex gap-3 text-gray-300 items-start"><X className="w-5 h-5 text-red-400 shrink-0" /> Ignores edge-cases in style guides</li>
                  <li className="flex gap-3 text-gray-300 items-start"><X className="w-5 h-5 text-red-400 shrink-0" /> Prone to hallucinating brand facts</li>
                  <li className="flex gap-3 text-gray-300 items-start"><X className="w-5 h-5 text-red-400 shrink-0" /> Public data mixture risks</li>
                </ul>
              </div>
              
              <div className="border border-purple-500/30 bg-purple-500/10 rounded-[2rem] p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-bl-xl">Why Choose Us</div>
                <div className="text-purple-300 mb-6 font-medium uppercase tracking-widest text-sm">Semantiq Engine</div>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white items-start"><Check className="w-5 h-5 text-purple-400 shrink-0" /> Zero prompt engineering required</li>
                  <li className="flex gap-3 text-white items-start"><Check className="w-5 h-5 text-purple-400 shrink-0" /> 100% deterministic rule adherence</li>
                  <li className="flex gap-3 text-white items-start"><Check className="w-5 h-5 text-purple-400 shrink-0" /> Factually anchored to your isolated data</li>
                  <li className="flex gap-3 text-white items-start"><Check className="w-5 h-5 text-purple-400 shrink-0" /> Enterprise-grade proprietary data moat</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* i. How to start */}
        <section id="how-to-start" className="px-6 lg:px-16 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl md:text-[3rem] font-medium tracking-tight leading-tight max-w-lg text-gray-900 mb-6">
                  Getting Started with <span className="text-gray-400">Semantiq</span>
                </h2>
                <p className="text-gray-500 text-lg">Integrate our rule engine into your workflow in three straightforward steps.</p>
             </div>
             
             <div className="flex flex-col items-start lg:items-end">
                <button className="bg-[#9F85FF] text-white rounded-full px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#8b6dfc] transition-colors shadow-lg shadow-purple-200">
                  Book Onboarding
                </button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-100">
             {[
               { num: "1", title: "Connect Data", desc: "Securely upload your brand guidelines, past content, and style manuals to your isolated data silo.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=200&auto=format&fit=crop" },
               { num: "2", title: "Define Rules", desc: "Use our visual engine to set mandatory vocabulary, structural templates, and strict tone constraints.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop" },
               { num: "3", title: "Generate at Scale", desc: "Produce thousands of perfectly on-brand assets instantly via our robust API or intuitive web interface.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop" }
             ].map((item, i) => (
               <div key={i} className="flex flex-col gap-6 group cursor-pointer">
                 <div className="relative w-20 h-20">
                   <img src={item.img} className="w-full h-full rounded-full object-cover shadow-md group-hover:scale-110 transition-transform duration-300" alt={item.title} />
                   <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#9F85FF] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">
                     {item.num}
                   </div>
                 </div>
                 <div>
                   <h4 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h4>
                   <p className="text-sm text-gray-400 leading-relaxed pr-8">{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* Pricing & FAQ Section (added to fulfill anatomy requirements) */}
        <section className="px-6 lg:px-16 py-24 bg-gray-50 border-t border-gray-100 rounded-b-[3rem] md:rounded-b-[4rem]">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-4xl font-medium tracking-tight mb-4 text-gray-900">Transparent Pricing</h2>
               <p className="text-gray-500 text-lg">Scale your content generation predictably.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">
                <div className="bg-white border border-gray-200 p-10 rounded-[2rem] shadow-sm">
                  <h3 className="text-2xl font-medium mb-2">Professional</h3>
                  <div className="text-5xl font-light mb-6">$499<span className="text-xl text-gray-400 font-normal">/mo</span></div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-gray-600"><Check className="w-5 h-5 text-purple-500" /> 10 Brand Voices</li>
                    <li className="flex items-center gap-3 text-gray-600"><Check className="w-5 h-5 text-purple-500" /> Core Rule Engine</li>
                    <li className="flex items-center gap-3 text-gray-600"><Check className="w-5 h-5 text-purple-500" /> Standard Support</li>
                  </ul>
                  <button className="w-full py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors font-medium text-gray-900">Start Free Trial</button>
                </div>
                <div className="bg-gray-900 text-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-bl-xl">Enterprise</div>
                  <h3 className="text-2xl font-medium mb-2">Custom</h3>
                  <div className="text-5xl font-light mb-6">Let's Talk</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-gray-300"><Check className="w-5 h-5 text-purple-400" /> Unlimited Voices</li>
                    <li className="flex items-center gap-3 text-gray-300"><Check className="w-5 h-5 text-purple-400" /> Advanced Logic Rules</li>
                    <li className="flex items-center gap-3 text-gray-300"><Check className="w-5 h-5 text-purple-400" /> Dedicated Data Silo</li>
                    <li className="flex items-center gap-3 text-gray-300"><Check className="w-5 h-5 text-purple-400" /> Custom Integrations</li>
                  </ul>
                  <button className="w-full py-4 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition-colors font-medium">Contact Sales</button>
                </div>
             </div>

             {/* FAQ */}
             <div className="max-w-3xl mx-auto">
               <h2 className="text-3xl font-medium tracking-tight mb-10 text-center text-gray-900">Frequently Asked Questions</h2>
               <div className="space-y-4">
                 {faqs.map((faq, i) => (
                   <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                     <button 
                       className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                       onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                     >
                       <span className="font-medium text-gray-900 pr-8">{faq.q}</span>
                       {openFaq === i ? <Minus className="w-5 h-5 text-gray-400 shrink-0" /> : <Plus className="w-5 h-5 text-gray-400 shrink-0" />}
                     </button>
                     {openFaq === i && (
                       <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                         {faq.a}
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </section>

        {/* l. CTA */}
        <section className="px-6 lg:px-16 py-20 bg-purple-100 rounded-b-[3rem] md:rounded-b-[4rem] text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900">
              Ready to automate on-brand content?
            </h2>
            <p className="text-gray-600 text-lg">
              Join leading enterprises securing their brand voice and eliminating hallucinations with Semantiq.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-gray-900 text-white rounded-full px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors">
                Book a Demo
              </button>
              <button className="bg-white text-gray-900 border border-gray-200 rounded-full px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors shadow-sm">
                View Documentation
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* m. Footer */}
      <footer className="w-full text-center text-gray-700 text-sm font-medium py-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6 lg:px-12">
          <p>© 2026 Semantiq Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
