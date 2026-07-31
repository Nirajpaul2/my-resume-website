"use client";

import React from "react";
import { Download, ArrowLeft, Printer } from "lucide-react";
import { PERSONAL_DATA } from "@/data/portfolioData";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black">
      {/* Top Action Bar */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
        <a
          href="/"
          className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl flex items-center gap-2 transition-all"
          >
            <Printer className="w-4 h-4" /> Print Resume
          </button>

          <a
            href="/Niraj_Paul_Senior_iOS_Developer_Resume.pdf"
            download="Niraj_Paul_Senior_iOS_Developer_Resume.pdf"
            className="px-5 py-2 text-xs font-semibold bg-[#0A84FF] hover:bg-[#0066CC] text-white rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-[#0A84FF]/20"
          >
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </div>
      </div>

      {/* Resume Document Container */}
      <div className="max-w-4xl mx-auto bg-zinc-900/90 border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl space-y-8 font-sans print:border-none print:shadow-none print:p-0 print:text-black">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-6 print:border-black">
          <h1 className="text-3xl font-extrabold text-white tracking-tight uppercase print:text-black">
            Niraj Paul
          </h1>
          <p className="text-sm font-bold text-[#0A84FF] mt-1 print:text-black">
            SENIOR iOS DEVELOPER | 11+ YEARS EXPERIENCE
          </p>
          <p className="text-xs text-zinc-400 mt-2 font-mono print:text-gray-700">
            Bangalore, India | +91-9942419837 | nirajpaul.ios@gmail.com | LinkedIn: linkedin.com/in/nirajpaul | GitHub: github.com/nirajpaul
          </p>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold font-mono text-[#0A84FF] uppercase tracking-wider print:text-black">
            Professional Summary
          </h2>
          <p className="text-xs text-zinc-300 leading-relaxed print:text-black">
            Senior iOS Developer with 11+ years architecting and shipping high-performance iOS and tvOS applications for major media, retail, and e-commerce brands, including Tegna Inc., Sony Pictures Network (SonyLIV), Purplle, and Fabindia. Deep expertise in Swift, SwiftUI, and Combine, with a track record of optimizing media streaming engines (HLS, AVPlayer, client/server-side DAI), hardening application security (SSL Pinning, OAuth, Keychain), and applying Clean Architecture/MVVM to reduce engineering cycle time. Known for mentoring engineers, improving sprint velocity, and converting design and product requirements into modular, maintainable codebases under Agile delivery.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold font-mono text-[#0A84FF] uppercase tracking-wider print:text-black">
            Technical Skills
          </h2>
          <ul className="text-xs text-zinc-300 space-y-1 list-disc pl-4 print:text-black">
            <li><strong>Languages:</strong> Swift, Objective-C, Dart (Flutter)</li>
            <li><strong>Frameworks & SDKs:</strong> SwiftUI, UIKit, tvOS, Combine, AVFoundation (AVPlayer, AVKit), Core Data, Realm, Core Location, MapKit, CoreML, WebRTC</li>
            <li><strong>Architecture & Patterns:</strong> MVVM, VIPER, Clean Architecture, MVC, SOLID Principles, Creational/Structural/Behavioral Design Patterns</li>
            <li><strong>Security:</strong> SSL Pinning, Token-based Authentication, Keychain Services, secure storage, OAuth, Encryption</li>
            <li><strong>Tools & DevOps:</strong> Fastlane, GitHub Actions, GitLab CI/CD, Xcode, CocoaPods, Swift Package Manager (SPM), Git, XCTest (Unit Testing)</li>
            <li><strong>Integrations & Analytics:</strong> Juspay Payment, Stripe, PayPal, Braintree, PubNub, XMPP, Socket.io, Firebase FCM & Analytics, NPAW, Comscore, RudderStack, OneTrust</li>
          </ul>
        </div>

        {/* Professional Experience */}
        <div className="space-y-6">
          <h2 className="text-xs font-bold font-mono text-[#0A84FF] uppercase tracking-wider print:text-black">
            Professional Experience
          </h2>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-xs font-bold text-white print:text-black">
              <span>Senior iOS Developer (Contract) | Wipro Limited (Client: Tegna Inc.)</span>
              <span className="font-mono text-zinc-400 print:text-black">May 2025 – March 2026</span>
            </div>
            <ul className="text-xs text-zinc-300 space-y-1 list-disc pl-4 print:text-black">
              <li>Architected and developed high-performance iOS and AppleTV (tvOS) OTT media streaming applications from scratch using Swift and SwiftUI, delivering content to millions of active viewers.</li>
              <li>Successfully developed and launched three major regional streaming news applications: KING 5 NEWS, WBIR, and 9News.</li>
              <li>Integrated and optimized AVPlayer with HTTP Live Streaming (HLS) for video playback, supporting client-side and server-side Dynamic Ad Insertion (DAI).</li>
              <li>Implemented advanced analytics and compliance SDKs including NPAW, Comscore, RudderStack, and OneTrust for user tracking and consent management.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-xs font-bold text-white print:text-black">
              <span>Senior iOS Developer | NeoSoft Technology</span>
              <span className="font-mono text-zinc-400 print:text-black">June 2021 – April 2025</span>
            </div>
            <ul className="text-xs text-zinc-300 space-y-1 list-disc pl-4 print:text-black">
              <li>Worked as a Senior Developer collaborating with key clients (Sony Pictures Network, purplle.com, Fabindia) to build and scale flagship iOS and tvOS apps.</li>
              <li><strong>Sony Pictures Network:</strong> Built and maintained the SonyLIV AppleTV app in Swift and SwiftUI, implementing custom UI components and optimizing data fetching for high-concurrency live sports and show streaming, reducing content load time by 20%.</li>
              <li><strong>purplle.com:</strong> Enhanced core shopping and checkout flows for Purplle.com, integrating the Juspay payment SDK and resolving checkout friction points that contributed to a 30% reduction in cart abandonment.</li>
              <li><strong>Fabindia:</strong> Architected core retail features for Fabindia using MVVM and Combine, powering real-time catalog updates, search suggestions, and wishlist flows across the app.</li>
              <li>Designed and shipped modular, reusable components across all three client codebases, decreasing feature development cycle time by 30%.</li>
              <li>Hardened application security across client apps by implementing biometric login, token-based authentication, SSL Pinning, and encrypted Keychain storage.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-xs font-bold text-white print:text-black">
              <span>Senior iOS Developer | Sakha Global (Client: Spectra Logic)</span>
              <span className="font-mono text-zinc-400 print:text-black">October 2020 – June 2021</span>
            </div>
            <ul className="text-xs text-zinc-300 space-y-1 list-disc pl-4 print:text-black">
              <li>Engineered the SpectraLogix application, building custom UI components and advanced animations that enhanced app visual appeal and responsiveness.</li>
              <li>Collaborated closely with the UX/UI team to conduct design feasibility reviews, converting design mockups into fluid layouts and decreasing customer UI complaints.</li>
              <li>Partnered with QA teams to implement XCTest unit tests, troubleshoot memory leaks, and profile code to optimize CPU usage.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-xs font-bold text-white print:text-black">
              <span>Senior iOS Developer | Aquarious Technology</span>
              <span className="font-mono text-zinc-400 print:text-black">June 2017 – July 2020</span>
            </div>
            <ul className="text-xs text-zinc-300 space-y-1 list-disc pl-4 print:text-black">
              <li>Promoted to Senior iOS Developer after building foundational client applications; took on architecture ownership and led delivery of 5 distinct apps for a crowdsourced geofencing client (including See it, Say it, Send it, The Pet Detective, ToDone, Take Stock in Children, and S3 Law Enforcement).</li>
              <li>Integrated CoreLocation-based geofencing to trigger real-time dispatch of emergency media (images, video, PDFs) to localized police centers, supporting time-critical law enforcement workflows.</li>
              <li>Implemented biometric authentication (Face ID / Touch ID) and secure Keychain services across all five apps, reducing unauthorized access incidents.</li>
              <li>Mentored junior developers, introduced code review pipelines, and regularly delivered products ahead of schedule, enhancing overall team sprint velocity.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-xs font-bold text-white print:text-black">
              <span>iOS Developer | Unified Infotech</span>
              <span className="font-mono text-zinc-400 print:text-black">December 2016 – April 2017</span>
            </div>
            <ul className="text-xs text-zinc-300 space-y-1 list-disc pl-4 print:text-black">
              <li>Built and maintained customer-facing iOS applications using Swift and UIKit.</li>
              <li>Designed responsive, adaptive interfaces using Auto Layout and Size Classes, supporting seamless layouts across portrait and landscape orientations.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-xs font-bold text-white print:text-black">
              <span>iOS Developer | Brainium Information Technologies</span>
              <span className="font-mono text-zinc-400 print:text-black">January 2016 – December 2016</span>
            </div>
            <ul className="text-xs text-zinc-300 space-y-1 list-disc pl-4 print:text-black">
              <li>Developed and optimized consumer applications utilizing Swift, Objective-C, and UIKit.</li>
              <li>Worked on UI design execution, API integration, and debugging complex threading issues.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-xs font-bold text-white print:text-black">
              <span>Junior iOS Developer | WebTech Software Solution</span>
              <span className="font-mono text-zinc-400 print:text-black">November 2014 – December 2015</span>
            </div>
            <ul className="text-xs text-zinc-300 space-y-1 list-disc pl-4 print:text-black">
              <li>Programmed custom user interfaces programmatically and integrated REST APIs using Objective-C.</li>
              <li>Maintained legacy applications, resolving memory leaks and updating layouts for newer iOS versions.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold font-mono text-[#0A84FF] uppercase tracking-wider print:text-black">
            Education
          </h2>
          <div className="flex justify-between items-baseline text-xs text-zinc-300 print:text-black">
            <span><strong>Bachelor of Technology in Information Technology</strong> - B.P. Poddar Institute of Management and Technology</span>
            <span className="font-mono text-zinc-400 print:text-black">April 2010 – July 2014</span>
          </div>
        </div>

      </div>
    </div>
  );
}
