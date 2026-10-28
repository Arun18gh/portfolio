import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Shield, Terminal, Activity, Server, FileText, Database, Lock,
  ExternalLink, Mail, MapPin, CheckCircle,
  Code, Cpu, ChevronRight, BarChart3, Zap, BookOpen, Bug, Award,
  Radio, HardDrive, Send, Check, User, Briefcase, GraduationCap,
  Sliders, Compass, Sparkles, ArrowUpRight, ShieldCheck, TerminalSquare,
  MonitorDot, Workflow, CornerDownRight, Crosshair, Target, Loader2
} from 'lucide-react';

const GithubIcon = ({ className = "w-3.5 h-3.5 text-emerald-400" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-3.5 h-3.5 text-cyan-400" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function App() {
  const [activePage, setActivePage] = useState('about');
  const [selectedSubTab, setSelectedSubTab] = useState('all');
  const [certFilter, setCertFilter] = useState('all');
  const [selectedDomainIndex, setSelectedDomainIndex] = useState(0);

  // Live Terminal Sandbox State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: 'ARUN_SEC_OS v4.2 [Kernel: Ubuntu 24.04-LTS / SOC-Node]' },
    { type: 'sys', text: 'Cyber Defense Grid active. Biometric Sentinel: ONLINE. Type "help" or click presets.' },
  ]);
  const terminalEndRef = useRef(null);

  // Mouse coordinate tracker for interactive Cyber Eye look-around
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cyber Security Canvas: Circuit Lines, Defense Core & Biometric Mesh
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const nodes = Array.from({ length: 38 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 2 + 1,
      isCore: Math.random() > 0.8,
    }));

    const render = () => {
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.03)';
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.fillStyle = n.isCore ? '#38bdf8' : 'rgba(6, 182, 212, 0.45)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - dist / 130) * 0.12})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Incident Dispatch Form State
  const [ticketForm, setTicketForm] = useState({ 
    title: "", 
    reporter: "", 
    email: "", 
    description: "" 
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const EMAILJS_CONFIG = {
    serviceId: "service_2xs8kx5",
    adminTemplateId: "template_ia1v1cm",
    autoReplyTemplateId: "template_a8apv85",
    publicKey: "ZG9jM1JksaSJmb-II"
  };

  const handleSubmitIncident = async (e) => {
    e.preventDefault();
    if (!ticketForm.title || !ticketForm.reporter || !ticketForm.email || !ticketForm.description) return;

    setIsSending(true);
    setErrorMessage("");
    const generatedRef = `SEC-DISPATCH-${Math.floor(100000 + Math.random() * 900000)}`;

    const templateParams = {
      ticket_ref: generatedRef,
      from_name: ticketForm.reporter,
      reply_to: ticketForm.email,
      subject: ticketForm.title,
      message: ticketForm.description
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.adminTemplateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.autoReplyTemplateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setTicketRef(generatedRef);
      setFormSubmitted(true);
      setTicketForm({ title: "", reporter: "", email: "", description: "" });
    } catch (err) {
      console.error("Email dispatch failed:", err);
      setErrorMessage("Network dispatch encountered an error. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const executeCommand = (cmdText) => {
    const cmd = (cmdText || terminalInput).trim().toLowerCase();
    const newLogs = [...terminalLogs, { type: 'user', text: `$ ${cmd}` }];

    if (cmd === 'help') {
      newLogs.push({ type: 'res', text: 'ACTIVE PROTOCOLS:' });
      newLogs.push({ type: 'res', text: '  snort-benchmark   - Replay CICIDS-2017 detection matrix' });
      newLogs.push({ type: 'res', text: '  forensic-audit    - Carve M57 Jean EnCase acquisition' });
      newLogs.push({ type: 'res', text: '  trace-asyncrat    - Extract C2 streams (Stream 61 & 162)' });
      newLogs.push({ type: 'res', text: '  firewall-status   - Dump nftables default-drop forward chain' });
      newLogs.push({ type: 'res', text: '  clear             - Reset telemetry output console' });
    } else if (cmd === 'snort-benchmark') {
      newLogs.push({ type: 'res', text: '[+] Loading CICIDS-2017 PCAP replays (200 packets / scenario)...' });
      newLogs.push({ type: 'res', text: '[>] Snort 2.9 GRE: ICMP 75% | PortScan 75% | BruteForce 95% | TCPSYN 75%' });
      newLogs.push({ type: 'res', text: '[>] Suricata 7.0: ICMP 1% (Rate-drop) | PortScan 100% | BruteForce 100% | TCPSYN 0%' });
      newLogs.push({ type: 'res', text: '[*] Verdict: Snort deterministic baseline vs Suricata protocol inspection depth.' });
    } else if (cmd === 'forensic-audit') {
      newLogs.push({ type: 'res', text: '[+] Mounting Jean.E01 + Jean.E02 in Autopsy (20,971,520 sectors)...' });
      newLogs.push({ type: 'res', text: '[+] MD5: 78a52b5bac78f4e711607707ac0e3f93 [VERIFIED]' });
      newLogs.push({ type: 'res', text: '[!] USBSTOR Key: CB&M Flash Drive attached 2008-07-20 07:11:28 IST' });
      newLogs.push({ type: 'res', text: '[!] Recovered m57biz.xls from unallocated clusters. Prefetch cmd.exe run count: 11' });
    } else if (cmd === 'trace-asyncrat') {
      newLogs.push({ type: 'res', text: '[+] Dissecting ARat.pcap (26.12 MB, 39,427 packets)...' });
      newLogs.push({ type: 'res', text: '[>] Compromised Host: 10.1.17.215 (DESKTOP-L8C5GSJ)' });
      newLogs.push({ type: 'res', text: '[>] C2 Server 1: 185.188.32.26:80 (10 periodic bursts, /din.aspx polling)' });
      newLogs.push({ type: 'res', text: '[>] C2 Server 2: 5.252.153.241:80 (Stream 61: 5.0 MB payload transferred in 460s)' });
      newLogs.push({ type: 'res', text: '[*] RAT Classification: DynGate backdoor abusing TeamViewer HTTP URIs.' });
    } else if (cmd === 'firewall-status') {
      newLogs.push({ type: 'res', text: '[+] Parsing /etc/nftables.conf...' });
      newLogs.push({ type: 'res', text: '    chain forward { type filter hook forward priority 0; policy drop; }' });
      newLogs.push({ type: 'res', text: '    ct state { established, related } accept' });
      newLogs.push({ type: 'res', text: '    iif "enp0s3" oif "enp0s8" tcp dport { 80, 443 } ct state new accept' });
      newLogs.push({ type: 'res', text: '[*] NFQUEUE Inline IPS: Dropping SQLi & ICMP sweeps prior to server socket.' });
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      newLogs.push({ type: 'err', text: `Command not recognized: "${cmd}". Type "help" for options.` });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  const domainProjects = [
    {
      title: "Snort 2.9 vs Suricata 7.0 Empirical Benchmark",
      badge: "MSc Dissertation",
      category: "Network Defense & Detection",
      summary: "Benchmarked both leading open-source rule-based engines on 200-packet offline replays across four attack categories from CICIDS-2017 using Scapy PCAP generation.",
      metrics: [
        { label: "Snort Consistency", val: "75% - 95%" },
        { label: "Suricata Port Scan", val: "100% (600 alerts)" },
        { label: "Suricata ICMP Flood", val: "1% (Rule Drop)" }
      ],
      details: "Demonstrated that Snort maintains predictable alert-to-packet correlation without analyst alert fatigue, while Suricata offers deeper multi-threaded packet inspection but demands active rule tuning to avoid blind spots."
    },
    {
      title: "Workstation Disk Forensics & AsyncRAT Malware Triage",
      badge: "Digital Forensics",
      category: "Host & Packet Forensics",
      summary: "Segmented EnCase image (M57 Jean) disk acquisition in FTK Imager & Autopsy, recovering unallocated spreadsheets and cross-referencing USBSTOR connections with Wireshark C2 streams.",
      metrics: [
        { label: "Hash State", val: "MD5/SHA256 Match" },
        { label: "Execution Trace", val: "11x cmd.exe runs" },
        { label: "Malware C2", val: "5MB Payload (460s)" }
      ],
      details: "Extracted confidential payroll records from unallocated sectors, proved exfiltration timing with USB insertion timestamps, and decoded unencrypted DynGate HTTP beaconing on port 80."
    },
    {
      title: "Isolated Gateway: nftables, Suricata Inline IPS & ELK SIEM",
      badge: "Defensive Engineering",
      category: "SIEM & Traffic Engineering",
      summary: "Constructed a 3-tier isolated sensor routing traffic between Kali Linux and a DVWA server, dropping SQLi and ICMP probes inline via NFQUEUE while forwarding eve.json to Kibana.",
      metrics: [
        { label: "Topology", val: "3-Tier Sensor" },
        { label: "Action", val: "NFQUEUE Drop" },
        { label: "Forwarder", val: "Filebeat to ELK" }
      ],
      details: "Enforced default-drop forward policies in /etc/nftables.conf, created custom Suricata signatures for SQLi and ICMP sweeps, and visualized malicious IP spikes in Kibana."
    },
    {
      title: "Static & Dynamic AppSec Remediation (WebGoat 2023.4)",
      badge: "Software Security",
      category: "Application Security",
      summary: "Executed SAST (Semgrep, Snyk) and DAST (OWASP ZAP) against Java Spring WebGoat 2023.4, neutralizing path traversal and SQL injections directly at the source code layer.",
      metrics: [
        { label: "Semgrep Findings", val: "245 Analyzed" },
        { label: "Remediated", val: "Path Traversal & SQLi" },
        { label: "Method", val: "PreparedStatements" }
      ],
      details: "Sanitized profile photo retrievals using FilenameUtils.getName(), decoupled SQL statements from user inputs via parameterized queries, and restricted registration parameters with regex whitelisting."
    },
    {
      title: "Deception Honeypot & Controlled Penetration Testing",
      badge: "Offensive & Deception",
      category: "Threat Intelligence",
      summary: "Captured live SSH dictionary attacks using Cowrie on port 2222, conducted SEToolkit DVWA login cloning, and initiated staged Meterpreter reverse shells.",
      metrics: [
        { label: "Decoy Port", val: "TCP 2222" },
        { label: "Hydra Output", val: "15 Cracked Passwords" },
        { label: "Interactive Trace", val: "uname, ls, passwd" }
      ],
      details: "Monitored automated brute-forcing with rockyou.txt in real time, recorded post-compromise commands in isolated sandbox shells, and established secure verification controls."
    },
    {
      title: "Automated AWS Cloud Hardening & GitHub Actions CI/CD",
      badge: "DevSecOps",
      category: "Cloud Infrastructure",
      summary: "Provisioned AWS EC2 in Dublin (eu-west-1) with least-privilege security groups using Terraform, hardened the Linux host via Ansible, and deployed containerized apps on commit.",
      metrics: [
        { label: "IaC Engine", val: "Terraform (AWS)" },
        { label: "Config Mgmt", val: "Ansible Playbooks" },
        { label: "Pipeline", val: "GitHub Actions CI/CD" }
      ],
      details: "Automated server setup idempotently, eliminated manual SSH configurations, enforced ingress restriction to essential ports (22, 80), and built reproducible delivery pipelines."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Dynamic Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40" />
      
      {/* Ambient Lighting Orbs */}
      <div className="fixed top-0 left-1/4 w-[42rem] h-[42rem] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none z-0 animate-pulse"></div>
      <div className="fixed bottom-10 right-10 w-[38rem] h-[38rem] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Main Tactical Header Navigation */}
      <header className="border-b border-cyan-500/20 bg-[#03081a]/95 backdrop-blur-xl sticky top-0 z-40 shadow-xl shadow-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          <div className="flex items-center gap-2.5 cursor-pointer select-none" onClick={() => setActivePage('about')}>
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-950 to-slate-950 border border-cyan-400/60 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Shield className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex items-center gap-2 font-mono">
              <span className="text-sm font-bold text-white tracking-widest uppercase">SYSTEM</span>
              <span className="text-slate-600">//</span>
              <span className="text-xs text-cyan-400 font-semibold tracking-wider">CONSOLE</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping ml-1"></span>
            </div>
          </div>

          <nav className="flex items-center flex-wrap gap-1.5 p-1 bg-[#020617]/90 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-md">
            {[
              { id: 'about', label: 'Operative Profile', icon: User },
              { id: 'certs', label: 'Credentials', icon: Award },
              { id: 'dissertation', label: 'Dissertation', icon: Activity },
              { id: 'forensics', label: 'Forensics', icon: HardDrive },
              { id: 'defensive', label: 'Defense & Cloud', icon: Shield },
              { id: 'governance', label: 'Governance & BCDR', icon: BookOpen },
              { id: 'incident-report', label: 'Dispatch', icon: Terminal }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activePage === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePage(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 flex items-center gap-1.5 relative select-none ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500/25 via-emerald-500/20 to-cyan-500/25 text-white border border-cyan-400/90 shadow-[0_0_18px_rgba(6,182,212,0.35)] scale-[1.02]' 
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-transparent'
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_8px_#06b6d4]"></span>
                  )}
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]' : 'text-slate-500'}`} /> 
                  <span className={isActive ? 'font-bold text-cyan-100' : ''}>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full relative z-10">

        {/* =========================================================================
            TAB 1: OPERATIVE PROFILE
           ========================================================================= */}
        {activePage === 'about' && (
          <div className="space-y-10 animate-fadeIn" ref={heroRef}>
            
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/40 shadow-2xl shadow-cyan-950/40 bg-[#02081c]">
              
              <div className="absolute inset-y-0 left-0 w-full md:w-3/5 pointer-events-none select-none overflow-hidden opacity-95">
                <svg className="w-full h-full min-h-[360px]" viewBox="0 0 700 400" preserveAspectRatio="xMinYMid slice" fill="none">
                  <defs>
                    <radialGradient id="eyeSclera3D" cx="35%" cy="45%" r="65%">
                      <stop offset="0%" stopColor="#0b2447" stopOpacity="0.8" />
                      <stop offset="45%" stopColor="#04122d" stopOpacity="0.9" />
                      <stop offset="85%" stopColor="#02081c" stopOpacity="0.98" />
                      <stop offset="100%" stopColor="#020617" stopOpacity="1" />
                    </radialGradient>
                    
                    <radialGradient id="iris3DCore" cx="40%" cy="38%" r="60%">
                      <stop offset="0%" stopColor="#7dd3fc" stopOpacity="1" />
                      <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.95" />
                      <stop offset="55%" stopColor="#0284c7" stopOpacity="0.85" />
                      <stop offset="80%" stopColor="#034574" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#02142d" stopOpacity="0.95" />
                    </radialGradient>

                    <radialGradient id="pupil3D" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#0f172a" />
                      <stop offset="35%" stopColor="#020617" />
                      <stop offset="80%" stopColor="#000000" />
                      <stop offset="100%" stopColor="#0369a1" stopOpacity="0.4" />
                    </radialGradient>

                    <linearGradient id="corneaGlassHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.15" />
                      <stop offset="70%" stopColor="#0284c7" stopOpacity="0" />
                    </linearGradient>

                    <linearGradient id="fadeToRight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="45%" stopColor="#02081c" stopOpacity="0" />
                      <stop offset="80%" stopColor="#02081c" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#02081c" stopOpacity="1" />
                    </linearGradient>

                    <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                      <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>

                    <filter id="hologramGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  <path d="M 0 200 Q 220 20 460 200 Q 220 380 0 200 Z" fill="url(#eyeSclera3D)" />
                  <path d="M 5 200 Q 220 35 450 200 Q 220 365 5 200 Z" stroke="#0284c7" strokeWidth="1.2" opacity="0.35" />

                  <g opacity="0.45">
                    <path d="M 25 185 Q 110 155 190 178" stroke="#0ea5e9" strokeWidth="0.8" strokeDasharray="4 4" />
                    <path d="M 40 215 Q 125 240 200 215" stroke="#38bdf8" strokeWidth="0.7" strokeDasharray="6 3" />
                    <path d="M 370 165 Q 310 180 255 190" stroke="#06b6d4" strokeWidth="0.8" strokeDasharray="3 5" />
                    <path d="M 360 235 Q 295 220 250 210" stroke="#0ea5e9" strokeWidth="0.6" strokeDasharray="5 4" />
                  </g>

                  <g style={{ transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 10}px)`, transition: 'transform 0.15s cubic-bezier(0.2, 0, 0, 1)' }}>
                    <circle cx="225" cy="200" r="130" fill="url(#iris3DCore)" filter="url(#hologramGlow)" />
                    <circle cx="225" cy="200" r="124" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="14 8 4 8" opacity="0.85" />
                    <circle cx="225" cy="200" r="110" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" opacity="0.6" />
                    <circle cx="225" cy="200" r="95" stroke="#22d3ee" strokeWidth="2" strokeDasharray="20 10 5 10" opacity="0.75" />
                    <circle cx="225" cy="200" r="82" stroke="#0284c7" strokeWidth="1.2" opacity="0.5" />
                    <circle cx="225" cy="200" r="68" stroke="#7dd3fc" strokeWidth="1.5" strokeDasharray="10 5" opacity="0.8" />
                    
                    {Array.from({ length: 48 }).map((_, i) => {
                      const angle = (i * 7.5 * Math.PI) / 180;
                      const r1 = 44;
                      const r2 = 96 + (i % 4) * 8;
                      return (
                        <line 
                          key={i}
                          x1={225 + Math.cos(angle) * r1}
                          y1={200 + Math.sin(angle) * r1}
                          x2={225 + Math.cos(angle) * r2}
                          y2={200 + Math.sin(angle) * r2}
                          stroke={i % 3 === 0 ? "#7dd3fc" : i % 2 === 0 ? "#38bdf8" : "#0284c7"}
                          strokeWidth={i % 6 === 0 ? "1.8" : "0.75"}
                          opacity={0.35 + (i % 5) * 0.12}
                        />
                      );
                    })}

                    <circle cx="225" cy="200" r="42" fill="url(#pupil3D)" stroke="#0ea5e9" strokeWidth="2" />
                    <line x1="205" y1="200" x2="245" y2="200" stroke="#38bdf8" strokeWidth="0.9" opacity="0.8" />
                    <line x1="225" y1="180" x2="225" y2="220" stroke="#38bdf8" strokeWidth="0.9" opacity="0.8" />
                    <circle cx="225" cy="200" r="16" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4 2" />
                    <circle cx="225" cy="200" r="4" fill="#38bdf8" className="animate-ping" style={{ transformOrigin: '225px 200px' }} />
                    <circle cx="225" cy="200" r="2.5" fill="#ffffff" />
                    <ellipse cx="202" cy="182" rx="14" ry="7" fill="url(#corneaGlassHighlight)" transform="rotate(-30 202 182)" />
                    <circle cx="242" cy="214" r="3.5" fill="#ffffff" opacity="0.6" />
                  </g>

                  <line x1="0" y1="200" x2="520" y2="200" stroke="url(#laserBeam)" strokeWidth="1.4" opacity="0.75" />
                  <rect x="0" y="0" width="700" height="400" fill="url(#fadeToRight)" />
                </svg>
              </div>

              {/* Foreground Hero Content */}
              <div className="relative z-10 px-6 sm:px-10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="hidden md:block md:col-span-5 lg:col-span-6 pointer-events-none"></div>

                <div className="md:col-span-7 lg:col-span-6 space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.25)] backdrop-blur-md">
                    <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> LIVE TELEMETRY & INCIDENT TRIAGE
                  </div>

                  <div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#facc15] drop-shadow-[0_4px_18px_rgba(250,204,21,0.35)]">
                      Arun Sudhakar
                    </h2>
                    <p className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight mt-2.5">
                      Detecting threats <br className="hidden sm:inline" />
                      <span className="text-cyan-300">Before they become incidents.</span>
                    </p>
                  </div>

                  <div className="pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans space-y-2">
                    <p>
                      MSc in Cybersecurity from Dublin Business School with a technical foundation in Computer Science and full-stack software development.
                    </p>
                    <p className="text-slate-400 text-xs">
                      Practical expertise in rule-based detection engineering (Snort & Suricata), disk and network forensics (FTK Imager, Autopsy, Wireshark), SIEM traffic pipelines (ELK Stack), and secure DevSecOps automation.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-3 font-mono text-xs">
                    <button 
                      onClick={() => setActivePage('incident-report')}
                      className="inline-flex items-center gap-2 bg-[#facc15] hover:bg-[#eab308] text-slate-950 font-bold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95"
                    >
                      <Terminal className="w-3.5 h-3.5" /> Dispatch Alert
                    </button>
                    <a 
                      href="mailto:arunsudhakar.ie@gmail.com" 
                      className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-4 py-2.5 rounded-xl transition-all border border-slate-700 hover:border-amber-500/60 hover:text-amber-300 hover:scale-105 shadow-md"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-400" /> Email
                    </a>
                    <a 
                      href="https://linkedin.com/in/arun-sudhakar" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-4 py-2.5 rounded-xl transition-all border border-slate-700 hover:border-cyan-500/60 hover:text-cyan-300 hover:scale-105 shadow-md"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" /> LinkedIn
                    </a>
                    <a 
                      href="https://github.com/Arun18gh" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-4 py-2.5 rounded-xl transition-all border border-slate-700 hover:border-emerald-500/60 hover:text-emerald-300 hover:scale-105 shadow-md"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-emerald-400" /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-cyan-500/20 bg-[#020617]/90 px-6 sm:px-10 py-3 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-4">
                <span className="flex items-center gap-2 text-cyan-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Dublin, Ireland
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" /> MSc in Cybersecurity (NFQ Level 9, QQI)
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Check className="w-3 h-3" /> SIEM & FORENSIC CERTIFIED
                </span>
              </div>
            </div>

            {/* CYBERNETIC OPERATIVE DOSSIER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="relative group rounded-3xl bg-gradient-to-br from-[#06122c]/90 via-[#03091e]/90 to-[#020617]/95 border border-cyan-500/30 p-6 md:p-8 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400/80"></div>
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400/80"></div>
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400/80"></div>
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400/80"></div>
                  
                  <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        <TerminalSquare className="w-5 h-5 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">SECURITY OPERATIVE DOSSIER // PROFILE_ID: ARUN_S</span>
                        <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-white via-cyan-100 to-emerald-400 bg-clip-text text-transparent">
                          Operational Philosophy & Defensive Instinct
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      STATUS: ONLINE // CLEARED
                    </span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    <p>
                      In modern security operations, defending critical systems goes far beyond reviewing automated alerts. Real defensive resilience happens when you understand the exact byte-level mechanics: how an attacker crafts half-open TCP handshakes to starve a socket, where unallocated clusters store exfiltrated spreadsheets on a disk image, and why a pre-authentication SQL injection can slip past network inspection without immediate notice.
                    </p>
                    <p className="text-slate-400 text-xs">
                      My work bridges full-stack engineering with low-level cyber defense. Having built backend services in Python and SQL before diving into deep packet dissection, I don't just triage vulnerabilities—I trace them back to the source code, author custom intrusion detection signatures that eliminate alert fatigue, and automate containment pipelines to protect data before breaches materialize.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-slate-800/80">
                    {[
                      { title: "DETECTION ENG", sub: "Snort & Suricata", icon: ShieldCheck, color: "text-cyan-400", border: "border-cyan-500/30" },
                      { title: "HOST FORENSICS", sub: "FTK & Autopsy", icon: HardDrive, color: "text-emerald-400", border: "border-emerald-500/30" },
                      { title: "PACKET TRIAGE", sub: "Wireshark PCAP", icon: Activity, color: "text-sky-400", border: "border-sky-500/30" },
                      { title: "SECURE CI/CD", sub: "Terraform & Ansible", icon: Workflow, color: "text-indigo-400", border: "border-indigo-500/30" },
                    ].map((badge, idx) => {
                      const BIcon = badge.icon;
                      return (
                        <div key={idx} className={`p-3 rounded-2xl bg-slate-950/80 border ${badge.border} flex flex-col items-center text-center space-y-1 hover:scale-105 transition-all duration-300 shadow-md`}>
                          <BIcon className={`w-5 h-5 ${badge.color} mb-1`} />
                          <span className="text-[10px] font-mono font-bold text-white tracking-wider">{badge.title}</span>
                          <span className="text-[9px] font-mono text-slate-400">{badge.sub}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative group rounded-3xl bg-gradient-to-br from-[#050f24]/90 via-[#03091e]/90 to-[#020617]/95 border border-slate-800 p-6 md:p-8 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-emerald-500/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">Full-Stack Developer Intern</h4>
                        <div className="text-xs text-slate-400 font-mono">Trishana Technologies • Bangalore, India</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-xl self-start sm:self-auto shadow-sm">
                      May 2024 – Nov 2024
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    Worked across full-cycle software delivery, building responsive React.js frontends, Python server logic, and normalized relational database schemas. Experiencing real-world development highlighted the critical importance of secure-by-design engineering—specifically sanitizing user inputs at the perimeter, enforcing strict data typing, and using parameterized queries to neutralize SQL injections before code reaches staging.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {["React.js", "Python Logic", "Database Schemas", "Input Sanitization", "REST Endpoints", "Secure Coding"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="rounded-3xl bg-gradient-to-b from-[#050f24] to-[#02081c] border border-cyan-500/30 p-5 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-cyan-400 animate-spin" /> SENTINEL TELEMETRY
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      SEC_NODE // OK
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <span className="text-slate-400 flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-cyan-400" /> IDS Profile</span>
                      <span className="text-cyan-300 font-bold">Dual Snort/Suri</span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <span className="text-slate-400 flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-emerald-400" /> Traffic Engine</span>
                      <span className="text-emerald-300 font-bold">Scapy Replay</span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <span className="text-slate-400 flex items-center gap-1.5"><HardDrive className="w-3.5 h-3.5 text-indigo-400" /> Disk Image</span>
                      <span className="text-indigo-300 font-bold">E01/E02 EnCase</span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <span className="text-slate-400 flex items-center gap-1.5"><Server className="w-3.5 h-3.5 text-amber-400" /> Gateway Filter</span>
                      <span className="text-amber-300 font-bold">nftables Inline</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-gradient-to-b from-[#050f24] to-[#02081c] border border-slate-800 p-5 space-y-3.5 shadow-xl">
                  <div className="flex items-center gap-2 text-white font-bold text-sm border-b border-slate-800 pb-3">
                    <GraduationCap className="w-4 h-4 text-amber-400" /> Academic Qualifications
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="font-bold text-slate-100">MSc in Cybersecurity</div>
                    <div className="text-[11px] font-mono text-cyan-400">Dublin Business School • Dublin, Ireland</div>
                    <div className="text-[10px] font-mono text-slate-400">NFQ Level 9, Awarded by QQI (2025–2026)</div>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs">
                    <div className="font-bold text-slate-100">BSc in Computer Science</div>
                    <div className="text-[11px] font-mono text-slate-400">2021 – 2024 • CGPA: 8.21 / 10</div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE TERMINAL SANDBOX */}
            <div className="bg-[#03091e] border border-cyan-500/40 rounded-3xl p-5 shadow-2xl relative overflow-hidden space-y-4 shadow-cyan-950/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm shadow-rose-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm shadow-amber-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-cyan-500/80 inline-block shadow-sm shadow-cyan-500/50"></span>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-bold ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> Interactive Security Research Console
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400">Click preset commands to query research telemetry:</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                {[
                  { label: 'Snort vs Suricata', cmd: 'snort-benchmark' },
                  { label: 'Jean Disk Forensics', cmd: 'forensic-audit' },
                  { label: 'AsyncRAT C2 Analysis', cmd: 'trace-asyncrat' },
                  { label: 'nftables Firewall', cmd: 'firewall-status' },
                  { label: 'Clear Console', cmd: 'clear' },
                ].map((btn, i) => (
                  <button
                    key={i}
                    onClick={() => executeCommand(btn.cmd)}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-950/40 transition-all flex items-center gap-1 active:scale-95 shadow-sm"
                  >
                    <CornerDownRight className="w-3 h-3 text-cyan-400" /> {btn.label}
                  </button>
                ))}
              </div>

              <div className="h-48 overflow-y-auto font-mono text-xs space-y-1.5 p-3 rounded-2xl bg-slate-950/90 border border-slate-800/80 text-slate-300">
                {terminalLogs.map((log, index) => (
                  <div key={index} className={`leading-relaxed ${
                    log.type === 'user' ? 'text-cyan-300 font-bold' :
                    log.type === 'res' ? 'text-emerald-300' :
                    log.type === 'err' ? 'text-rose-400' : 'text-slate-400'
                  }`}>
                    {log.text}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              <form 
                onSubmit={(e) => { e.preventDefault(); executeCommand(); }}
                className="flex items-center gap-2 pt-1 font-mono text-xs"
              >
                <span className="text-cyan-400 font-bold">$</span>
                <input 
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type 'help', 'snort-benchmark', 'forensic-audit', 'trace-asyncrat', or 'clear'..."
                  className="flex-1 bg-transparent border-none text-slate-200 placeholder-slate-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-3 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[11px] transition-colors"
                >
                  Execute
                </button>
              </form>
            </div>

            {/* BALANCED SIDE-BY-SIDE INTERACTIVE PROJECT COCKPIT */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-500/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <MonitorDot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      Interactive Project Cockpit
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Select a project module on the left to inspect architectural parameters and deliverables on the right.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-xl border border-cyan-500/40 flex items-center gap-1.5">
                    <Crosshair className="w-3 h-3 text-cyan-400 animate-spin" /> 6 Verified Academic Workflows
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {domainProjects.map((proj, idx) => {
                    const isSelected = selectedDomainIndex === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedDomainIndex(idx)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#0c264d] via-[#05142e] to-[#03091e] border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] scale-[1.01]'
                            : 'bg-[#040c21]/90 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_10px_#06b6d4]"></div>
                        )}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400 font-bold bg-cyan-950/80 border border-cyan-800/50 px-2 py-0.5 rounded-md">
                              {proj.badge}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500">
                              0{idx + 1}
                            </span>
                          </div>
                          <h4 className={`text-xs font-bold leading-snug transition-colors ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                            {proj.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                            {proj.summary}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono">
                          <span className={`${isSelected ? 'text-cyan-300 font-semibold' : 'text-slate-500'}`}>
                            {isSelected ? '● Active in Console' : 'Click to inspect'}
                          </span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="lg:col-span-5 bg-gradient-to-b from-[#05112b] to-[#020718] border border-cyan-500/40 rounded-3xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between border-b border-cyan-500/20 pb-3">
                      <div>
                        <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-wider flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> Active Inspection Console
                        </div>
                        <h4 className="text-sm font-bold text-white mt-1 leading-snug">
                          {domainProjects[selectedDomainIndex].title}
                        </h4>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 whitespace-nowrap">
                        DOC-0{selectedDomainIndex + 1}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                        Category: {domainProjects[selectedDomainIndex].category}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {domainProjects[selectedDomainIndex].summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      {domainProjects[selectedDomainIndex].metrics.map((m, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-0.5">
                          <div className="text-[9px] font-mono uppercase text-slate-400">{m.label}</div>
                          <div className="text-xs font-bold text-cyan-300 font-mono">{m.val}</div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-950/90 border border-cyan-500/20 space-y-1.5">
                      <div className="font-mono text-cyan-400 uppercase text-[10px] font-bold flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-cyan-400" /> Operational Context
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
                        {domainProjects[selectedDomainIndex].details}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 text-[10px]">Verified Deliverable</span>
                    <button 
                      onClick={() => {
                        const targetTabs = ['dissertation', 'forensics', 'defensive', 'defensive', 'governance', 'defensive'];
                        setActivePage(targetTabs[selectedDomainIndex]);
                      }}
                      className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium group transition-colors"
                    >
                      <span>Read Deep-Dive Tab</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* =========================================================================
            TAB 2: CREDENTIALS & WORKSHOPS (ALL 11 ENTRIES RESTORED)
           ========================================================================= */}
        {activePage === 'certs' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span> Credentials & Ongoing Learning
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-emerald-400 bg-clip-text text-transparent">
                  Certifications, Technical Courses & Academic Workshops
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Verified professional certifications, technical programs, and state-level technical symposiums
                </p>
              </div>

              <div className="flex items-center gap-2 p-1.5 bg-[#03081a]/95 rounded-2xl border border-slate-800 shadow-xl self-start md:self-auto">
                {[
                  { id: 'all', label: 'All Credentials' },
                  { id: 'core', label: 'Certifications' },
                  { id: 'workshops', label: 'Symposiums & Workshops' }
                ].map(f => {
                  const isCurrent = certFilter === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setCertFilter(f.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
                        isCurrent 
                          ? 'bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 text-white border border-cyan-400/80 shadow-md shadow-cyan-500/20' 
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                      }`}
                    >
                      <span>{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* 1. Google Cybersecurity */}
              {(certFilter === 'all' || certFilter === 'core') && (
                <div className="p-6 rounded-3xl bg-[#050f24]/90 border border-slate-800 space-y-3 transition-all duration-300 hover:border-cyan-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 group relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">Google Cybersecurity Professional Certificate</h3>
                      <div className="text-xs text-slate-400 font-mono">Google Career Certificates (Coursera Verified)</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Practical foundation covering enterprise threat landscapes, SIEM workflow basics, Linux terminal administration, SQL database querying, packet filtering, and incident escalation procedures.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Risk Management", "Network Security", "Linux CLI", "SQL Security", "Incident Response"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Python Full Stack */}
              {(certFilter === 'all' || certFilter === 'core') && (
                <div className="p-6 rounded-3xl bg-[#050f24]/90 border border-slate-800 space-y-3 transition-all duration-300 hover:border-cyan-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 group relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">Python Full Stack Course Completion</h3>
                      <div className="text-xs text-slate-400 font-mono">Trishana Technologies (CID: TT1898) • June 2024 – October 2024</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Intensive software engineering training covering backend development with Python, relational data schemas with SQL, REST API architecture, and frontend UI integration with React.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Python Core", "Full Stack Web", "Database Design", "REST APIs", "Modern JS"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Java Programming */}
              {(certFilter === 'all' || certFilter === 'core') && (
                <div className="p-6 rounded-3xl bg-[#050f24]/90 border border-slate-800 space-y-3 transition-all duration-300 hover:border-amber-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 group relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">Diploma in Java Programming (Grade 'A')</h3>
                      <div className="text-xs text-slate-400 font-mono">Certified Course Completion • August 2023 – November 2023</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Formal study of Object-Oriented Programming (OOP) principles, JVM architecture, exception handling, data structures, and multi-threaded application design.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Java OOP", "JVM Memory", "Multi-threading", "Exception Handling", "Data Structures"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-amber-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Python GUVI */}
              {(certFilter === 'all' || certFilter === 'core') && (
                <div className="p-6 rounded-3xl bg-[#050f24]/90 border border-slate-800 space-y-3 transition-all duration-300 hover:border-emerald-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-500/10 group relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">Python Programming Certification</h3>
                      <div className="text-xs text-slate-400 font-mono">GUVI (Incubated by IIT-Madras & IIM-Ahmedabad)</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Programming certification focusing on algorithmic efficiency, socket networking, string parsing, and Python automation used in network analysis tools like Scapy.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Data Structures", "Socket Networking", "Scripting", "Automation", "Scapy Parsing"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-emerald-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. DDP */}
              {(certFilter === 'all' || certFilter === 'core') && (
                <div className="p-6 rounded-3xl bg-[#050f24]/90 border border-slate-800 space-y-3 transition-all duration-300 hover:border-indigo-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 group relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">Diploma in Desktop Publishing (Grade 'A')</h3>
                      <div className="text-xs text-slate-400 font-mono">January 2015 – June 2015 (Issued July 2015)</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Foundational training in computer operations, operating system environments (DOS, Windows), file storage structures, hardware peripherals, and digital document workflows.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["IT Fundamentals", "DOS & Windows", "File Architectures", "Hardware & Peripherals"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-indigo-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. Shaastra 2024 */}
              {(certFilter === 'all' || certFilter === 'workshops') && (
                <div className="p-6 rounded-3xl bg-[#050f24]/90 border border-slate-800 space-y-3 transition-all duration-300 hover:border-cyan-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 group relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">Fullstack Development Workshop – Shaastra 2024</h3>
                      <div className="text-xs text-slate-400 font-mono">IIT Madras (Indian Institute of Technology Madras) • January 2024</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Participated in full-stack architecture sessions at Shaastra 2024, focusing on cloud integration, scalable client-server models, and containerized runtime environments.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["IIT Madras Shaastra", "Fullstack Engineering", "Scalable Systems", "Cloud Concepts"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. Generative AI */}
              {(certFilter === 'all' || certFilter === 'workshops') && (
                <div className="p-6 rounded-3xl bg-[#050f24]/90 border border-slate-800 space-y-3 transition-all duration-300 hover:border-cyan-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 group relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">National Workshop on Generative AI & AI Tools</h3>
                      <div className="text-xs text-slate-400 font-mono">Department of Artificial Intelligence • July 2023</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Two-day intensive workshop covering AI productivity workflows, prompt engineering, generative models, and integration of automated assistants into development cycles.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Generative AI", "AI Workflows", "Automated Productivity", "AI Integration"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 8. Droid Combat 2K24 */}
              {(certFilter === 'all' || certFilter === 'workshops') && (
                <div className="p-6 rounded-3xl bg-[#050f24]/90 border border-slate-800 space-y-3 transition-all duration-300 hover:border-amber-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 group relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">Droid Combat 2K24 State Level Symposium</h3>
                      <div className="text-xs text-slate-400 font-mono">Voorhees College • February 2024</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Competed in technical computing and hardware-software logic challenges, evaluating automated system response times and embedded control routines.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["State Symposium", "System Logic", "Technical Challenges", "Algorithmic Speed"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-amber-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 9. RPA '23 Seminar */}
              {(certFilter === 'all' || certFilter === 'workshops') && (
                <div className="p-6 rounded-3xl bg-[#050f24]/90 border border-slate-800 space-y-3 transition-all duration-300 hover:border-purple-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/10 group relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">State Level Seminar on Robotic Process Automation (RPA '23)</h3>
                      <div className="text-xs text-slate-400 font-mono">Technical Computing Seminar • October 2023</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Technical study of software robotics, orchestration pipelines, and automating repetitive data flows across enterprise systems.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["RPA Systems", "Workflow Automation", "Process Pipelines", "Task Orchestration"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-purple-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 10. NSDARIS '23 */}
              {(certFilter === 'all' || certFilter === 'workshops') && (
                <div className="p-6 rounded-3xl bg-[#050f24]/90 border border-slate-800 space-y-3 transition-all duration-300 hover:border-cyan-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 group relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">National Seminar on Data Analytics & ReactJS (NSDARIS '23)</h3>
                      <div className="text-xs text-slate-400 font-mono">National Technical Seminar • March 2023</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Explored big data aggregation, interactive UI dashboards in React, and building real-time data visualizers for telemetry feeds.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Data Analytics", "ReactJS", "Telemetry Dashboards", "State Flow"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 11. NCAIML '22 */}
              {(certFilter === 'all' || certFilter === 'workshops') && (
                <div className="p-6 rounded-3xl bg-[#050f24]/90 border border-slate-800 space-y-3 transition-all duration-300 hover:border-emerald-500/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-500/10 group relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">National Conference on AI & Machine Learning (NCAIML '22)</h3>
                      <div className="text-xs text-slate-400 font-mono">National Research Conference • March 2022</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Attended peer-reviewed presentations on pattern recognition, statistical classifiers, neural networks, and algorithmic problem-solving.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Machine Learning", "Pattern Recognition", "Statistical Modeling", "Research Conference"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-emerald-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: DISSERTATION DEEP DIVE
           ========================================================================= */}
        {activePage === 'dissertation' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="border-b border-slate-800 pb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span> MSc Applied Research Project & Dissertation
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-emerald-400 bg-clip-text text-transparent">
                Comparing Snort and Suricata for Rule-Based Cyber-Attack Detection
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Applied Research Methods & Design Science Framework • Master of Science in Cybersecurity
              </p>
            </div>

            <div className="bg-[#050e24]/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-4 hover:border-cyan-500/40 transition-colors shadow-2xl relative overflow-hidden">
              <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-cyan-400 flex items-center gap-2">
                <FileText className="w-4 h-4" /> Academic Abstract & Research Rationale
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                While machine learning approaches dominate academic literature on intrusion detection, real-world Security Operations Centers (SOCs) remain fundamentally anchored in deterministic, rule-based detection engines. Rule-based systems execute with complete explainability: when an alert fires, a security analyst knows exactly which header, threshold, or signature triggered it—eliminating the opaque, black-box ambiguity of ML classifiers.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                This study established an empirical, controlled benchmark evaluating the two most widely deployed open-source engines: <strong>Snort 2.9.20 GRE</strong> and <strong>Suricata 7.0.3 RELEASE</strong>. Using the benchmark <strong>CICIDS-2017</strong> dataset, raw labeled CSV traffic flows across four attack scenarios (ICMP Flood, Port Scanning, Brute Force Authentication, and TCP SYN Flood) were converted into re-playable PCAP packet captures via a Python script utilizing <strong>Scapy</strong>. Both engines were tested across identical 200-packet offline streams on isolated Ubuntu virtual machines.
              </p>
            </div>

            <div className="bg-[#050e24]/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-4 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-cyan-400" /> Empirical Findings: Snort vs. Suricata Detection Matrix
                </h3>
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-xl border border-slate-800">Normalized Sample: 200 Packets per Scenario</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs font-mono text-left">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="py-3 px-3">Attack Scenario</th>
                      <th className="py-3 px-3">Total Packets</th>
                      <th className="py-3 px-3 text-cyan-400">Snort Alerts</th>
                      <th className="py-3 px-3 text-cyan-400">Snort Detection Rate</th>
                      <th className="py-3 px-3 text-emerald-400">Suricata Alerts</th>
                      <th className="py-3 px-3 text-emerald-400">Suricata Detection Rate</th>
                      <th className="py-3 px-3">Operational Takeaway</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-200">
                    <tr className="hover:bg-slate-900/60 transition-colors">
                      <td className="py-3.5 px-3 font-bold text-white">ICMP Flood (DoS)</td>
                      <td className="py-3.5 px-3">200</td>
                      <td className="py-3.5 px-3 text-cyan-400 font-bold">150</td>
                      <td className="py-3.5 px-3 text-cyan-300 font-bold">0.75 (75%)</td>
                      <td className="py-3.5 px-3 text-rose-400 font-bold">1</td>
                      <td className="py-3.5 px-3 text-rose-300 font-bold">0.01 (1%)</td>
                      <td className="py-3.5 px-3 text-slate-400 text-[11px]">Suricata defaulted to rate-suppression; Snort triggered reliable threshold alerts.</td>
                    </tr>
                    <tr className="hover:bg-slate-900/60 transition-colors">
                      <td className="py-3.5 px-3 font-bold text-white">Port Scanning</td>
                      <td className="py-3.5 px-3">200</td>
                      <td className="py-3.5 px-3 text-cyan-400 font-bold">150</td>
                      <td className="py-3.5 px-3 text-cyan-300 font-bold">0.75 (75%)</td>
                      <td className="py-3.5 px-3 text-emerald-400 font-bold">600</td>
                      <td className="py-3.5 px-3 text-emerald-300 font-bold">1.00 (100%)</td>
                      <td className="py-3.5 px-3 text-slate-400 text-[11px]">Suricata flagged 100% of probes with multiple alert hits per packet; Snort remained steady.</td>
                    </tr>
                    <tr className="hover:bg-slate-900/60 transition-colors">
                      <td className="py-3.5 px-3 font-bold text-white">Brute Force Authentication</td>
                      <td className="py-3.5 px-3">200</td>
                      <td className="py-3.5 px-3 text-cyan-400 font-bold">190</td>
                      <td className="py-3.5 px-3 text-cyan-300 font-bold">0.95 (95%)</td>
                      <td className="py-3.5 px-3 text-emerald-400 font-bold">600</td>
                      <td className="py-3.5 px-3 text-emerald-300 font-bold">1.00 (100%)</td>
                      <td className="py-3.5 px-3 text-slate-400 text-[11px]">Both engines demonstrated superior performance on repetitive credential stuffing patterns.</td>
                    </tr>
                    <tr className="hover:bg-slate-900/60 transition-colors">
                      <td className="py-3.5 px-3 font-bold text-white">TCP Flood (SYN Flood)</td>
                      <td className="py-3.5 px-3">200</td>
                      <td className="py-3.5 px-3 text-cyan-400 font-bold">150</td>
                      <td className="py-3.5 px-3 text-cyan-300 font-bold">0.75 (75%)</td>
                      <td className="py-3.5 px-3 text-slate-500 font-bold">0</td>
                      <td className="py-3.5 px-3 text-slate-500 font-bold">Failed (0%)</td>
                      <td className="py-3.5 px-3 text-slate-400 text-[11px]">Snort detected half-open SYN spikes; Suricata missed in standard offline configuration.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div className="p-6 rounded-3xl bg-[#050e24]/80 border border-slate-800 space-y-2.5 transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-1 shadow-xl">
                <div className="font-bold text-cyan-400 uppercase font-mono flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Snort: Predictable Baseline & Low Noise
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Snort provided reliable baseline consistency (75% to 95% detection) across all tested categories. Its alert-to-packet ratio was closely proportional, avoiding analyst fatigue from alert duplication while reliably detecting volumetric threats like TCP SYN floods.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#050e24]/80 border border-slate-800 space-y-2.5 transition-all duration-300 hover:border-emerald-500/50 hover:-translate-y-1 shadow-xl">
                <div className="font-bold text-emerald-400 uppercase font-mono flex items-center gap-2">
                  <Shield className="w-4 h-4" /> Suricata: Protocol Depth & Threshold Sensitivity
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Suricata excelled in deep protocol inspections, capturing 100% of port scan probes and brute force attempts. However, static default thresholds resulted in near-zero detection on raw ICMP floods, demonstrating that Suricata requires tailored rule tuning in live environments.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: FORENSICS & MALWARE INVESTIGATION
           ========================================================================= */}
        {activePage === 'forensics' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="border-b border-slate-800 pb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span> Host & Packet Forensic Investigations
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-emerald-400 bg-clip-text text-transparent">
                Workstation Disk Reconstruction (M57 Jean) & AsyncRAT Network Analysis
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-mono">Complete forensic analysis covering physical acquisition, file system carving, and packet triage</p>
            </div>

            <div className="bg-[#050e24]/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-5 hover:border-cyan-500/30 transition-colors shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent flex items-center gap-2">
                  <HardDrive className="w-5 h-5 text-cyan-400" /> Part 1: Workstation Disk Image Examination (Jean.E01)
                </h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-xl border border-cyan-800/50 shadow-sm">
                  FTK Imager Hash: Verified
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-2">
                <div className="text-slate-400 font-bold uppercase text-[11px]">Evidentiary Hash Verification:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-300">
                  <div>Image: <span className="text-white">Jean.E01 & Jean.E02 (Segmented EnCase)</span></div>
                  <div>Sectors: <span className="text-white">20,971,520 sectors</span></div>
                  <div>MD5: <span className="text-cyan-400">78a52b5bac78f4e711607707ac0e3f93</span></div>
                  <div>SHA256: <span className="text-cyan-400">ba7dc57e08bb6e3393aee15c713ae04feadcd181</span></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
                  <div className="text-cyan-400 font-bold uppercase text-[11px]">1. File System & Profile</div>
                  <p className="text-slate-300 font-sans text-xs">
                    Identified Windows XP configured to IST (UTC+5:30). Out of 13 local OS accounts, activity centered on user <strong>Jean</strong> (C:\Documents and Settings\Jean\).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
                  <div className="text-cyan-400 font-bold uppercase text-[11px]">2. Confidential File Access</div>
                  <p className="text-slate-300 font-sans text-xs">
                    Recovered <strong>m57biz.xls</strong> from Desktop/Recent shortcuts containing executive payroll, employee salaries, and Social Security Numbers used for background checks.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
                  <div className="text-cyan-400 font-bold uppercase text-[11px]">3. USB Storage Correlated</div>
                  <p className="text-slate-300 font-sans text-xs">
                    SYSTEM registry (USBSTOR) revealed connection of CB&M and Generic USB drives on July 20, 2008 at 07:11 IST, minutes prior to opening m57biz.xls and AIM chat exfiltration.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-2">
                <div className="text-amber-400 font-bold uppercase text-[11px]">Execution Artifacts & Obfuscation:</div>
                <div className="text-slate-300 space-y-1">
                  <div>• <strong>cmd.exe Invocations:</strong> Windows Prefetch Analyzer confirmed cmd.exe executed 11 times (CMD.EXE-0B7B4001.pf) on July 19, indicative of script-driven track-covering.</div>
                  <div>• <strong>Mismatched Extensions:</strong> Autopsy signature analysis identified file <strong>A0003824.rbf</strong>; magic headers revealed it was an authentic PDF document masquerading as a database backup.</div>
                </div>
              </div>
            </div>

            <div className="bg-[#050e24]/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-5 hover:border-cyan-500/30 transition-colors shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400" /> Part 2: Network Forensics & AsyncRAT Malware Traffic (ARat.pcap)
                </h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-xl border border-cyan-800/50 shadow-sm">
                  PCAP Volume: 26.12 MB / 39,427 Packets
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
                  <div className="text-cyan-400 font-bold uppercase text-[11px]">1. Infected Host Identification</div>
                  <div className="space-y-1 text-slate-300">
                    <div>Infected Internal IP: <span className="text-white">10.1.17.215 (RFC 1918 Private LAN)</span></div>
                    <div>Source MAC: <span className="text-white">00:00:b7:26:4a:74</span></div>
                    <div>Host Machine Name: <span className="text-cyan-400">DESKTOP-L8C5GSJ</span> (NBNS & LLMNR registered)</div>
                    <div>Dominant Protocols: <span className="text-white">TCP (93.2% packets), TLS (61.3% bytes)</span></div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
                  <div className="text-cyan-400 font-bold uppercase text-[11px]">2. C2 Endpoints & Trojan Delivery</div>
                  <div className="space-y-1 text-slate-300">
                    <div>C2 Server 1: <span className="text-rose-400">185.188.32.26:80</span> (10 short bursts, port 49690-49707)</div>
                    <div>C2 Server 2: <span className="text-rose-400">5.252.153.241:80</span> (Stream 61: 5MB payload transferred in 460s)</div>
                    <div>Spoofed User-Agent: <span className="text-amber-300">Mozilla/4.0 (compatible; MSIE 6.0; DynGate)</span></div>
                    <div>Payload URIs: <span className="text-slate-400">GET /din.aspx? (polling), GET /dout.aspx? (data exfil)</span></div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-2">
                <div className="text-emerald-400 font-bold uppercase text-[11px]">Threat Intelligence & VirusTotal Matching:</div>
                <p className="text-slate-300 font-sans text-xs">
                  Exported binary payloads (.aspx with application/octet-stream headers) and TeamViewer spoofing binaries matched 22/70 security vendor detections on VirusTotal as <strong>Trojan.Win32.Generic.4lc / Win32.Injector / DynGate RAT</strong>. Unencrypted HTTP polling confirmed active C2 beaconing.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 5: DEFENSE & CLOUD INFRASTRUCTURE
           ========================================================================= */}
        {activePage === 'defensive' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span> Defensive Engineering & DevSecOps
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-emerald-400 bg-clip-text text-transparent">
                  Network Defense, Honeypots, AppSec Remediation & Cloud CI/CD
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Multi-stage defensive implementations across perimeter firewalls, sensors, codebases, and cloud topologies
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#03081a]/95 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-md">
              {[
                { id: 'all', label: 'All Defensive Labs' },
                { id: 'siem', label: 'nftables & Suricata ELK SIEM' },
                { id: 'honeypot', label: 'Cowrie Honeypot Deception' },
                { id: 'appsec', label: 'WebGoat SAST/DAST Remediation' },
                { id: 'cloud', label: 'Cloud CI/CD Terraform & Ansible' },
              ].map(tab => {
                const isCurrent = selectedSubTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedSubTab(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
                      isCurrent
                        ? 'bg-gradient-to-r from-cyan-500/30 via-emerald-500/20 to-cyan-500/30 text-white border border-cyan-400/90 shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-[1.02]'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {(selectedSubTab === 'all' || selectedSubTab === 'siem') && (
              <div className="bg-[#050e24]/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-4 hover:border-cyan-500/40 transition-colors shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent flex items-center gap-2">
                      <Shield className="w-5 h-5 text-cyan-400" /> Enterprise Gateway: nftables, Suricata Inline IPS & ELK SIEM Stack
                    </h3>
                    <div className="text-xs text-slate-400 font-mono">Isolated 3-Tier Security Architecture</div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-xl border border-cyan-800/50 shadow-sm">
                    Dual-NIC Sensor Gateway (192.168.10.1 / 192.168.20.1)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Engineered an isolated three-tier defensive topology comprising Kali Linux (Attacker), an Ubuntu Sensor running stateful nftables firewall and inline Suricata IPS with NFQUEUE support, and an Ubuntu DVWA server (Victim).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-cyan-500/30 transition-all">
                    <div className="text-cyan-400 font-bold uppercase text-[11px]">nftables Firewall Enforcement</div>
                    <p className="text-slate-300 font-sans text-xs">
                      Enforced default-deny forward policy in /etc/nftables.conf. Verified stateful filtering by dropping unauthorized ICMP sweeps, permitting established/related sessions, and restricting HTTP/HTTPS to port 80/443.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-cyan-500/30 transition-all">
                    <div className="text-cyan-400 font-bold uppercase text-[11px]">Suricata IPS & Kibana Visualization</div>
                    <p className="text-slate-300 font-sans text-xs">
                      Implemented custom detection rules for ICMP pings, HTTP GET, and SQLi (' OR 1=1). Configured Filebeat to forward eve.json logs into Elasticsearch, visualizing alert spikes, signature distributions, and attacker IPs in Kibana.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {(selectedSubTab === 'all' || selectedSubTab === 'honeypot') && (
              <div className="bg-[#050e24]/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-4 hover:border-cyan-500/40 transition-colors shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-cyan-400" /> Threat Intelligence Deception: Cowrie SSH Honeypot & Hydra Brute-Force
                    </h3>
                    <div className="text-xs text-slate-400 font-mono">Decoy System Telemetry & Post-Exploitation Tracking</div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-xl border border-cyan-800/50 shadow-sm">
                    Port 2222 Fake Service Decoy
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Deployed a low-interaction Cowrie SSH honeypot on an isolated Ubuntu virtual machine (192.168.56.105) to capture attacker reconnaissance, credential brute force, and post-exploitation interactive commands safely.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-cyan-500/30 transition-all">
                    <div className="text-cyan-400 font-bold uppercase text-[11px]">Attacker Replay (Kali Linux)</div>
                    <p className="text-slate-300 font-sans text-xs">
                      Executed Nmap port scan identifying exposed TCP 2222, followed by automated dictionary attack with THC Hydra and rockyou.txt wordlist, identifying 15 compromised credentials (iloveyou, password123, babygirl, rockyou).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-cyan-500/30 transition-all">
                    <div className="text-cyan-400 font-bold uppercase text-[11px]">Honeypot Forensic Capture</div>
                    <p className="text-slate-300 font-sans text-xs">
                      Cowrie presented an emulated Debian shell, recording timestamps, source IP (192.168.56.106), and post-compromise commands: uname -a (kernel exploration), ls /etc (system inspection), and cat /etc/passwd before session timeout.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {(selectedSubTab === 'all' || selectedSubTab === 'appsec') && (
              <div className="bg-[#050e24]/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-4 hover:border-amber-500/40 transition-colors shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent flex items-center gap-2">
                      <Bug className="w-5 h-5 text-amber-400" /> Application Security: WebGoat 2023.4 SAST/DAST Analysis & Source Patching
                    </h3>
                    <div className="text-xs text-slate-400 font-mono">Secure Software Development & Root-Cause Remediation</div>
                  </div>
                  <span className="text-xs font-mono text-amber-400 bg-amber-950/60 px-3 py-1 rounded-xl border border-amber-800/50 shadow-sm">
                    245 Semgrep Findings Remediated
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Conducted comprehensive static analysis (Semgrep, Snyk) and runtime dynamic assessment (OWASP ZAP) against WebGoat 2023.4 Java Spring codebase, implementing root-cause defensive code remediation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-amber-500/30 transition-all">
                    <div className="text-amber-400 font-bold uppercase text-[11px]">Path Traversal Fix</div>
                    <p className="text-slate-300 font-sans text-xs">
                      Sanitized user input in ProfileUploadRetrieval.java by enforcing FilenameUtils.getName() and stripping non-numeric characters, preventing ../ traversal attacks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-amber-500/30 transition-all">
                    <div className="text-amber-400 font-bold uppercase text-[11px]">SQL Injection Patch</div>
                    <p className="text-slate-300 font-sans text-xs">
                      Replaced raw string concatenations in SqlInjectionChallenge.java with parameterized PreparedStatements (ps.setString(1, username)), separating SQL instructions from untrusted data.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-amber-500/30 transition-all">
                    <div className="text-amber-400 font-bold uppercase text-[11px]">Endpoint Whitelisting</div>
                    <p className="text-slate-300 font-sans text-xs">
                      Remediated OWASP ZAP active scan SQL injection on /register.mvc by constraining the agree parameter with strict regex whitelist @Pattern(regexp = '^(agree)$').
                    </p>
                  </div>
                </div>
              </div>
            )}

            {(selectedSubTab === 'all' || selectedSubTab === 'cloud') && (
              <div className="bg-[#050e24]/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-4 hover:border-indigo-500/40 transition-colors shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent flex items-center gap-2">
                      <Server className="w-5 h-5 text-indigo-400" /> Cloud Security Infrastructure: AWS, Terraform, Ansible & CI/CD
                    </h3>
                    <div className="text-xs text-slate-400 font-mono">Automated Container Deployment & Hardening</div>
                  </div>
                  <a href="https://github.com/Arun18gh/cloud-deployment-project" target="_blank" rel="noreferrer" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1">
                    github.com/Arun18gh/cloud-deployment-project <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Constructed an end-to-end cloud provisioning pipeline: provisioned AWS EC2 in Dublin (eu-west-1) with Terraform, configured and hardened the Docker server environment idempotently via Ansible, and connected GitHub Actions CI/CD to redeploy containerized microservices automatically upon code commit.
                </p>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 6: GOVERNANCE, RISK & OFFENSIVE LABS
           ========================================================================= */}
        {activePage === 'governance' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="border-b border-slate-800 pb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span> Organisational Security, Pentesting & Governance
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-emerald-400 bg-clip-text text-transparent">
                Cybercrime Law, Enterprise BCDR Resilience, Breach Case Studies & Offensive Testing
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-mono">Strategic governance frameworks, compliance mandates, and controlled penetration testing</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#050e24]/80 border border-slate-800 p-6 md:p-8 rounded-3xl space-y-4 flex flex-col justify-between transition-all duration-300 hover:border-rose-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-500/10 shadow-xl">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/30">
                      Zero-Day Case Study
                    </span>
                    <span className="text-xs font-mono text-slate-500">CVE-2023-34362</span>
                  </div>
                  <h3 className="text-base font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">MOVEit Transfer Breach: Technical Exploitation & Governance Failures</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Detailed analysis of the CLOP/TA505 campaign exploiting a critical pre-authentication SQL injection in MOVEit Transfer's moveitisapi.dll endpoint. Evaluated how attackers gained arbitrary file write access, deployed obfuscated ASP.NET web shells (human2.aspx / LEMURLOOT), and exfiltrated millions of PII records from over 600 global enterprises.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800 pt-3">
                  Key Learnings: Defense-in-depth failure, lack of outbound egress filtering, missing File Integrity Monitoring (FIM), and GDPR/DPC liability.
                </div>
              </div>

              <div className="bg-[#050e24]/80 border border-slate-800 p-6 md:p-8 rounded-3xl space-y-4 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 shadow-xl">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      BCDR & ISO 22301
                    </span>
                    <span className="text-xs font-mono text-slate-500">NIST SP 800-34</span>
                  </div>
                  <h3 className="text-base font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Business Continuity & Disaster Recovery Strategy: RapidRoute Logistics</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Architected an enterprise BCDR framework for a 1,800-employee freight provider. Executed a Business Impact Analysis (BIA) quantifying maximum allowable outages (LMS: RTO 4h, RPO 24h; Dispatch Engine: RTO 2h, RPO 4h) and designed multi-region Azure Traffic Manager failover with immutable backup stores to neutralize ransomware extortion.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800 pt-3">
                  Key Learnings: PPRR emergency response command structure, automated failover triggers, and crisis communications aligned with GDPR 72h notifications.
                </div>
              </div>

              <div className="bg-[#050e24]/80 border border-slate-800 p-6 md:p-8 rounded-3xl space-y-4 flex flex-col justify-between transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 shadow-xl">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
                      Legal & Ethical Frameworks
                    </span>
                    <span className="text-xs font-mono text-slate-500">Irish Law & ECHR</span>
                  </div>
                  <h3 className="text-base font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Insider Threats: Legal Liability, Human Rights & Corporate Compliance</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Research report mapping malicious, negligent, and compromised insiders against the Irish Criminal Justice (Offences Relating to Information Systems) Act 2017 and EU Directive 2013/40/EU. Synthesized European Court of Human Rights (ECHR) Article 8 privacy jurisprudence (Bărbulescu, Köpke, López Ribalda) to govern ethical workplace monitoring.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800 pt-3">
                  Key Learnings: Defined proportionality safeguards for event-driven employee auditing vs blanket surveillance and mapped Irish DPC healthcare breaches.
                </div>
              </div>

              <div className="bg-[#050e24]/80 border border-slate-800 p-6 md:p-8 rounded-3xl space-y-4 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 shadow-xl">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      Offensive Security
                    </span>
                    <span className="text-xs font-mono text-slate-500">PTES Aligned</span>
                  </div>
                  <h3 className="text-base font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Controlled Penetration Testing: SEToolkit & Meterpreter Shell Execution</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Reconnaissance and social engineering simulation on an isolated DVWA server (192.168.220.133). Enumerated vulnerable Apache/PHP components via Nmap and Nikto, cloned the login portal via SEToolkit to harvest credentials, generated an x64 reverse TCP payload with msfvenom, and established a Metasploit handler obtaining full user shell access.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800 pt-3">
                  Key Learnings: Human factor exploitation, reverse TCP session establishment, and implementation of HTTP security headers and MFA mitigations.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 7: SECURE PUBLIC INCIDENT REPORTING PORTAL
           ========================================================================= */}
        {activePage === 'incident-report' && (
          <div className="space-y-8 animate-fadeIn max-w-2xl mx-auto">
            <div className="border-b border-slate-800 pb-5 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-3">
                <ShieldCheck className="w-4 h-4" /> Authenticated Secure Channel (TLS 1.3)
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-emerald-400 bg-clip-text text-transparent">
                Log a Security Concern or IT Incident
              </h2>
              <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto font-mono">
                Use this secure submission channel to report suspicious emails, observed malware alerts, authentication anomalies, or general IT support requests.
              </p>
            </div>

            <div className="bg-[#050e24]/90 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-cyan-500/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-4 animate-fadeIn">
                  <div className="h-12 w-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Incident Successfully Transmitted</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your report has been encrypted and committed to the security triage queue under reference code:
                  </p>
                  <div className="inline-block bg-slate-950 px-4 py-2 rounded-xl border border-cyan-500/40 font-mono text-sm text-cyan-400 font-bold tracking-wider shadow-inner">
                    {ticketRef}
                  </div>
                  <p className="text-[11px] text-emerald-400 font-mono pt-1">
                    ✓ Confirmation email and unique telemetry receipt dispatched to your address.
                  </p>
                  <p className="text-[11px] text-slate-400 pt-1">
                    An analyst will review your submission and initiate triage protocols shortly.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-xs text-slate-200 transition-colors shadow-sm"
                  >
                    Submit Another Report
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitIncident} className="space-y-5 text-xs">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="text-slate-300 block mb-1.5 font-medium font-mono">Incident Subject / Title</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter a brief summary of the issue (e.g. Suspicious email from unknown sender)"
                      value={ticketForm.title}
                      onChange={(e) => setTicketForm({...ticketForm, title: e.target.value})}
                      className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-300 block mb-1.5 font-medium font-mono">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter your name"
                        value={ticketForm.reporter}
                        onChange={(e) => setTicketForm({...ticketForm, reporter: e.target.value})}
                        className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="text-slate-300 block mb-1.5 font-medium font-mono">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="Enter your email address"
                        value={ticketForm.email}
                        onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                        className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1.5 font-medium font-mono">Detailed Observation & Technical Indicators</label>
                    <textarea 
                      required 
                      rows={5}
                      placeholder="Please include any observed symptoms, error messages, suspicious URLs, IPs, file names, or relevant context..."
                      value={ticketForm.description}
                      onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                      className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={isSending}
                      className="w-full bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] font-mono disabled:opacity-50"
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Transmitting Encrypted Telemetry...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Transmit Incident Report Securely
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 text-center pt-2">
                    Protected by client-side data validation • Automated confirmation receipt dispatched on receipt
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#010410] py-8 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Arun Sudhakar • MSc in Cybersecurity • Dublin, Ireland
          </div>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/arun-sudhakar" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/Arun18gh" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="mailto:arunsudhakar.ie@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}