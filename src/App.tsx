/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Bot, 
  Terminal, 
  Code2, 
  Braces, 
  Cpu, 
  Brain, 
  Users, 
  Presentation, 
  BookOpen,
  Trophy,
  Award,
  ArrowRight,
  Menu,
  X,
  Github,
  Monitor
} from "lucide-react";
import React, { useState, useEffect } from "react";
import sumoRobotImg from "./assets/images/SUMO_ver01.png";

const NavItem = ({ href, children, active, onClick }: { href: string; children: React.ReactNode; active?: boolean; onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`text-label-md font-mono transition-all duration-300 px-3 py-1 rounded-lg hover:bg-primary/10 ${
      active ? "text-primary border-b-2 border-primary" : "text-secondary hover:text-primary"
    }`}
  >
    {children}
  </a>
);

const SectionHeading = ({ number, title, subtitle }: { number: string; title: string; subtitle: string }) => (
  <div className="flex flex-col items-center text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-4xl md:text-5xl font-bold mb-4"
    >
      <span className="text-primary mr-4">{number}.</span>
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-secondary max-w-2xl"
    >
      {subtitle}
    </motion.p>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-surface/90 border border-primary/20 rounded-3xl shadow-heavy-glow overflow-hidden flex flex-col"
        >
          <div className="flex justify-between items-center px-8 py-6 border-b border-primary/10">
            <h3 className="text-2xl font-display font-bold text-primary">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-primary/10 rounded-full transition-colors">
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
            {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "skills", "certifications", "portfolio"];
      const current = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      year: "2025 Robot Challenge",
      title: "SUMO",
      desc: "SUMO 종목에 참가했다",
      active: true
    },
    {
      year: "2025 RoboCup Korea Open",
      title: "CoSpace Rescue U12",
      desc: "코스페이스 종목 참가, 리더로 활약, 팀명: K.F.C.Playwell",
      active: false
    },
    {
      year: "2025 RoboCup Singapore Open",
      title: "CoSpace Rescue U12",
      desc: "코스페이스 종목 참가, 리더로 활약, 팀명: K.F.C.Playwell",
      active: false
    },
    {
      year: "2026 RoboCup Korea Open",
      title: "CoSpace Rescue U12",
      desc: "코스페이스 종목 참가, 리더로 활약, 팀명: K.F.C.Playwell",
      active: true
    }
  ];

  const skills = [
    { icon: Terminal, name: "C Coding" },
    { icon: Code2, name: "Micro Python Coding" },
    { icon: Braces, name: "Block Coding" },
    { icon: Cpu, name: "Robot Building" },
    { icon: Brain, name: "Problem Solving", tertiary: true },
    { icon: Users, name: "Teamwork", tertiary: true },
    { icon: Presentation, name: "PPT Presentation", tertiary: true },
    { icon: BookOpen, name: "Instruction Making", tertiary: true },
  ];

  const awards = [
    {
      icon: Trophy,
      year: "2026",
      title: "RoboCup Korea Open",
      subtitle: "CoSpace U12",
      prize: "1st Place",
      primary: true
    },
    {
      icon: Award,
      year: "2026",
      title: "RoboCup Singapore Open",
      subtitle: "CoSpace U12",
      prize: "Influencer Awards",
      primary: false
    }
  ];

  const projects = [
    {
      id: "TRACER-X",
      title: "Line Tracing Robot",
      desc: "컬러 센서를 사용해 검은 선을 따라가는 로봇 프로젝트입니다.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeVmT0TUWj5sPy7WFzgR5upNWaZZ5WZ7-PaLBv_FmNOa-WDpMhyYXR6DaDPCqqPBP0LH4h-dsktSlgc_3yXmUJjP47r9gYXSt384FwV8dVFTH0UWqRIqTS8aN7zSp3YkrQaIAmrp8BK7pgtH1tJTsFD91OeXOHGSqfceVSPghIYvemyrfc7xDM5_OzOyhv5Jdz4xZWobchupn07GqnfcXgo7AHSTntn1OkKBZ76QXcKBxD7lAh_AQoJ4H8H9FT4G_WdVVGOZDECAGL",
      tags: ["Color Sensor", "Motor Control", "Block Coding"]
    },
    {
      id: "SUMO-V1",
      title: "Sumo Robot",
      desc: "상대 로봇을 감지하고 밀어내는 로봇 프로젝트입니다.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsiV7d9pmdJUCdeek69OGY1RBEwKdadHeX8REEQiQoxSKgDl59Fij1mLMbC5ypvqg51B_gwe_GKOCRUV18eSGR_n-Xinm5TiUPQXqRxjFnz3WcV4IcXbT896kODEQo4tYBV52n5dOrvOI6DcFaGHqVeblJjiE8lnlfa2BCtQeF2Rsl_-oUPOzuahEGoT8bCP5P9IBVXdEdez37CCSc21jek8-GbbEPqHTvR-tOYDYSYAGmmMEvVAsevbhaXPVRFIjtkTbfalVIn8zk",
      tags: ["Ultrasonic Sensor", "Motor Power", "Robot Design"]
    },
    {
      id: "RESCUE-09",
      title: "Mission Robot",
      desc: "정해진 미션을 수행하기 위해 구조와 코드를 설계한 프로젝트입니다.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQxhOD-jslX5yn3MnkfZByzhKglo7eb0RnDKBrFJcCF9f5nFd7SVheZbwXRhnBRRs3A48DspL43KhKqN9dHlPQt0TKM4fjn183_Iw1ty6zHd0Ar2TexIWPzAvLeAPZPpdxKI223mhIxKY2nN3c0H1Jz4fzsp_Hnj947cQuycwyn-g3mDSZGgUcU5bMiaVlZJV4MzDVjPIdSSwhiEgl0QG_i73FplRO7kydwmvhw3ZND0Vw_f7gDeXxW_iHt6J4BCTavOwJhu3IM7-G",
      tags: ["Mission Strategy", "Sensor Control", "Debugging"]
    },
    {
      id: "WEB-APP",
      title: "Robot Portfolio Web App",
      desc: "나의 로봇 프로젝트를 소개하기 위해 만든 웹앱입니다.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfxQPTjvsinQ9WMps5JpxJtEVj_kW17kUryIUL_pCVhCoQEmuUjvCG0cLVzV0bt47mufSwizPbW9K_a3bbBTXLStYUXzCgy3gsb2tyieGtSUswHrCvqU6rh-zR1phNTWbjcRDb9uLz5whTn05zgXpN9IcE6TVW56N9ndHj8jpHGN6jYMltce_V17ZnrC9O0otZCU2roBWkY1f1nDmKcI893hGDpUia-xXE3FpbF89a53WXEe8hiswNyC2IyQd06oxB9hweHLyjaTAR",
      tags: ["Web Design", "AI Tool", "Portfolio Design"]
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-primary/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#about" 
            className="flex items-center gap-2 group"
          >
            <div className="p-2 rounded-full bg-primary/10 group-hover:shadow-glow transition-all">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl text-primary tracking-tight">My Robot Portfolio</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4">
            <NavItem href="#about" active={activeSection === "about"}>About</NavItem>
            <NavItem href="#experience" active={activeSection === "experience"}>Experience</NavItem>
            <NavItem href="#skills" active={activeSection === "skills"}>Skills</NavItem>
            <NavItem href="#certifications" active={activeSection === "certifications"}>Awards</NavItem>
            <NavItem href="#portfolio" active={activeSection === "portfolio"}>Portfolio</NavItem>
          </nav>

          <div className="hidden md:block">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="bg-primary text-on-primary px-6 py-2 rounded-lg font-mono text-sm hover:shadow-glow transition-all"
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/20 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-4">
                <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>About</NavItem>
                <NavItem href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</NavItem>
                <NavItem href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavItem>
                <NavItem href="#certifications" onClick={() => setIsMenuOpen(false)}>Awards</NavItem>
                <NavItem href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</NavItem>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-24 md:py-32 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase">[ SYSTEM // INIT ]</span>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                Building Robots, <br/>
                <span className="text-primary text-glow">Solving Problems</span>
              </h1>
              <p className="text-xl text-secondary border-l-2 border-primary pl-4 py-2 italic font-light">
                로봇을 만들고 코딩하며 문제를 해결한 과정을 소개합니다.
              </p>
              <div className="glass-panel p-8 rounded-2xl">
                <p className="text-secondary leading-relaxed mb-6">
                  저는 로봇을 만들고 코딩하며 문제를 해결하는 것을 좋아합니다. 
                  센서와 모터를 활용해 로봇이 스스로 움직이도록 만드는 과정에 관심이 있습니다. 
                  실패한 로봇을 다시 수정하고 테스트하면서 더 나은 해결 방법을 찾는 과정을 배우고 있습니다.
                </p>
                <p className="text-primary font-medium">
                  앞으로 다양한 로봇 프로젝트에 도전하며 창의적인 문제 해결 능력을 키우고 싶습니다.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden glass-panel group"
            >
              <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/40 z-10">[ 00.12 // 88.43 ]</div>
              <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary/40 z-10 uppercase">[ STATUS: ACTIVE ]</div>
              
              <img 
                src={sumoRobotImg} 
                alt="LEGO Sumo Robot"
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40"></div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeading 
            number="01" 
            title="Experience" 
            subtitle="로봇 수업과 프로젝트를 통해 경험한 활동들을 정리했습니다." 
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-[17px] md:left-1/2 top-0 bottom-0 w-[1px] bg-primary/20"></div>

            <div className="space-y-12">
              {experiences.slice(0, 3).map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -ml-[4.5px] w-[9px] h-[9px] rounded-full bg-background border-2 border-primary z-10 shadow-glow"></div>
                  
                  {/* Card container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className={`glass-panel p-6 rounded-2xl glow-hover ${exp.active ? 'border-primary/40' : ''}`}>
                      <span className="font-mono text-xs text-accent mb-2 block">{exp.year}</span>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-secondary text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                  
                  {/* Empty space for alignment */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>

            {experiences.length > 3 && (
              <div className="flex justify-center mt-16">
                <button 
                  onClick={() => setIsExpModalOpen(true)}
                  className="group flex items-center gap-2 px-8 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-sm hover:shadow-glow transition-all"
                >
                  전체 경험 보기
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-surface/30 py-24 mb-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading 
              number="02" 
              title="Skills" 
              subtitle="로봇 프로젝트를 진행하며 배운 기술과 역량입니다." 
            />

            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`glass-panel px-6 py-3 rounded-full flex items-center gap-3 cursor-default transition-all group ${
                    skill.tertiary ? "hover:border-tertiary-dim" : "hover:border-primary"
                  }`}
                >
                  <skill.icon className={`w-5 h-5 ${skill.tertiary ? "text-secondary" : "text-primary"}`} />
                  <span className="font-mono text-sm font-medium tracking-wide">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Awards */}
        <section id="certifications" className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeading 
            number="03" 
            title="Certifications & Awards" 
            subtitle="로봇 대회 참가 및 수상 내용을 정리했습니다." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-${award.primary ? 'primary' : 'secondary'}/50 transition-all`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${award.primary ? 'primary' : 'secondary'}/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-all duration-500`}></div>
                
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl ${award.primary ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                    <award.icon className={`w-10 h-10 ${award.primary ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-primary/60 mb-2 block">[ {award.year} ]</span>
                    <h3 className="text-2xl font-display font-bold mb-1">{award.title}</h3>
                    <p className="text-secondary mb-4">{award.subtitle}</p>
                    <span className={`inline-block px-4 py-1 rounded-full font-mono text-xs border ${
                      award.primary ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-secondary/10 border-secondary/30 text-secondary'
                    }`}>
                      {award.prize}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="max-w-7xl mx-auto px-6 py-24 mb-24">
          <SectionHeading 
            number="04" 
            title="Portfolio" 
            subtitle="완성한 로봇 프로젝트와 웹앱 결과물을 소개합니다." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute top-4 left-4 font-mono text-[10px] bg-background/80 px-2 py-1 rounded backdrop-blur-sm border border-primary/20 text-accent">
                    MODEL: {project.id}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                  <p className="text-secondary text-sm mb-6 flex-grow leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-mono text-[10px] bg-primary/5 border border-primary/20 px-2 py-1 rounded text-primary/80">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline underline-offset-8 transition-all group/link"
                  >
                    자세히 보기 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {projects.length > 3 && (
            <div className="flex justify-center mt-16">
              <button 
                onClick={() => setIsPortfolioModalOpen(true)}
                className="group flex items-center gap-2 px-8 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-sm hover:shadow-glow transition-all"
              >
                전체 프로젝트 보기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-surface/20 border-t border-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <Bot className="w-8 h-8 text-primary" />
                <span className="font-display font-bold text-2xl text-primary">My Robot Portfolio</span>
              </div>
              <p className="text-secondary text-sm text-center md:text-left">
                © 2026 My Robot Portfolio. All rights reserved. <br/>
                Engineering the future of autonomous systems.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="text-center md:text-right">
                <p className="font-display font-bold text-lg mb-1">Student Name</p>
                <p className="text-secondary font-mono text-sm">student@email.com</p>
              </div>
              
              <div className="flex gap-6">
                <a href="#" className="p-3 rounded-xl glass-panel hover:shadow-glow transition-all group">
                  <Github className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="p-3 rounded-xl glass-panel hover:shadow-glow transition-all group">
                  <Monitor className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Background Ambience */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Experience Modal */}
      <Modal 
        isOpen={isExpModalOpen} 
        onClose={() => setIsExpModalOpen(false)} 
        title="전체 경험 (Experience)"
      >
        <div className="relative max-w-4xl mx-auto py-8">
          <div className="absolute left-[17px] top-0 bottom-0 w-[1px] bg-primary/20"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 flex flex-col md:flex-row gap-8 items-start">
                <div className="absolute left-4 -ml-[4.5px] w-[9px] h-[9px] rounded-full bg-background border-2 border-primary z-10 shadow-glow mt-2"></div>
                <div className={`glass-panel p-6 rounded-2xl glow-hover w-full ${exp.active ? 'border-primary/40' : ''}`}>
                  <span className="font-mono text-xs text-accent mb-2 block">{exp.year}</span>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* Portfolio Modal */}
      <Modal 
        isOpen={isPortfolioModalOpen} 
        onClose={() => setIsPortfolioModalOpen(false)} 
        title="전체 프로젝트 (Portfolio)"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-panel rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300">
               <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute top-4 left-4 font-mono text-[10px] bg-background/80 px-2 py-1 rounded backdrop-blur-sm border border-primary/20 text-accent">
                    MODEL: {project.id}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                  <p className="text-secondary text-sm mb-6 flex-grow leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-mono text-[10px] bg-primary/5 border border-primary/20 px-2 py-1 rounded text-primary/80">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline underline-offset-8 transition-all group/link"
                  >
                    자세히 보기 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
