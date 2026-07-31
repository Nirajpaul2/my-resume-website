"use client";

import React from "react";
import { Download, ArrowLeft, Printer } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-black py-10 px-4 sm:px-6 font-sans">
      {/* Top Floating Control Bar */}
      <div className="max-w-[850px] mx-auto mb-6 flex items-center justify-between print:hidden">
        <a
          href="/"
          className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl flex items-center gap-2 transition-all shadow-md"
          >
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>

          <a
            href="/Niraj_Paul_Senior_iOS_Developer_Resume.pdf"
            download="Niraj_Paul_Senior_iOS_Developer_Resume.pdf"
            className="px-5 py-2 text-xs font-semibold bg-[#0A84FF] hover:bg-[#0066CC] text-white rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-[#0A84FF]/20"
          >
            <Download className="w-4 h-4" /> Download Original PDF
          </a>
        </div>
      </div>

      {/* Exact PDF Paper Document Replica */}
      <div className="max-w-[850px] mx-auto bg-white text-[#222] p-8 sm:p-14 shadow-2xl rounded-sm text-[13px] leading-[1.45] font-sans print:shadow-none print:p-0 print:max-w-none print:w-full">
        
        {/* Document Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-[#111] uppercase font-sans">
            NIRAJ PAUL
          </h1>
          <p className="text-xs font-bold text-[#444] mt-0.5 tracking-wide">
            SENIOR iOS DEVELOPER | 11+ YEARS EXPERIENCE
          </p>
          <p className="text-xs text-[#444] mt-1.5 font-normal">
            Bangalore, India | +91-9942419837 | nirajpaul.ios@gmail.com |{" "}
            <a href="https://www.linkedin.com/in/nirajpaul" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] underline font-medium">LinkedIn</a> |{" "}
            <a href="https://github.com/nirajpaul" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] underline font-medium">GitHub</a>
          </p>
        </header>

        {/* Section 1: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-[#111] uppercase tracking-wide border-b border-[#333] pb-1 mb-2 font-sans">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-[13px] text-[#333] leading-relaxed text-justify">
            Senior iOS Developer with 11+ years architecting and shipping high-performance iOS and tvOS applications for major media, retail, and e-commerce brands, including Tegna Inc., Sony Pictures Network (SonyLIV), Purplle, and Fabindia. Deep expertise in Swift, SwiftUI, and Combine, with a track record of optimizing media streaming engines (HLS, AVPlayer, client/server-side DAI), hardening application security (SSL Pinning, OAuth, Keychain), and applying Clean Architecture/MVVM to reduce engineering cycle time. Known for mentoring engineers, improving sprint velocity, and converting design and product requirements into modular, maintainable codebases under Agile delivery.
          </p>
        </section>

        {/* Section 2: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-[#111] uppercase tracking-wide border-b border-[#333] pb-1 mb-2 font-sans">
            TECHNICAL SKILLS
          </h2>
          <ul className="space-y-1.5 text-[13px] text-[#333]">
            <li className="flex items-start gap-2">
              <span className="text-[#111] select-none">•</span>
              <div>
                <strong>Languages:</strong> Swift, Objective-C, Dart (Flutter)
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#111] select-none">•</span>
              <div>
                <strong>Frameworks &amp; SDKs:</strong> SwiftUI, UIKit, tvOS, Combine, AVFoundation (AVPlayer, AVKit), Core Data, Realm, Core Location, MapKit, CoreML, WebRTC
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#111] select-none">•</span>
              <div>
                <strong>Architecture &amp; Patterns:</strong> MVVM, VIPER, Clean Architecture, MVC, SOLID Principles, Creational/Structural/Behavioral Design Patterns
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#111] select-none">•</span>
              <div>
                <strong>Security:</strong> SSL Pinning, Token-based Authentication, Keychain Services, secure storage, OAuth, Encryption
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#111] select-none">•</span>
              <div>
                <strong>Tools &amp; DevOps:</strong> Fastlane, GitHub Actions, GitLab CI/CD, Xcode, <strong>CocoaPods</strong>, Swift Package Manager (SPM), Git, XCTest (Unit Testing)
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#111] select-none">•</span>
              <div>
                <strong>Integrations &amp; Analytics:</strong> Juspay Payment, Stripe, PayPal, Braintree (Merchant Integrations), PubNub, XMPP, Socket.io, Firebase FCM &amp; Analytics, NPAW, Comscore, RudderStack, OneTrust
              </div>
            </li>
          </ul>
        </section>

        {/* Section 3: Professional Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-[#111] uppercase tracking-wide border-b border-[#333] pb-1 mb-3 font-sans">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-5">
            {/* Job 1 */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[#111] text-[13px] mb-1">
                <span>
                  Senior iOS Developer (Contract) |{" "}
                  <a href="https://www.wipro.com" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] underline font-medium">Wipro Limited</a>{" "}
                  <em>(Client: <a href="https://www.tegna.com" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] underline font-medium">Tegna Inc.</a>)</em>
                </span>
                <span className="font-semibold text-[#444]">May 2025 – March 2026</span>
              </div>
              <ul className="space-y-1 text-[13px] text-[#333] pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Architected and developed high-performance iOS and AppleTV (tvOS) OTT media streaming applications from scratch using Swift and SwiftUI, delivering content to millions of active viewers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Successfully developed and launched three major regional streaming news applications: <a href="https://www.king5.com" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] underline font-medium">KING 5 NEWS</a>, <a href="https://www.wbir.com" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] underline font-medium">WBIR</a>, and <a href="https://www.9news.com" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] underline font-medium">9News</a>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Integrated and optimized AVPlayer with HTTP Live Streaming (HLS) for video playback, supporting client-side and server-side Dynamic Ad Insertion (DAI).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Implemented advanced analytics and compliance SDKs including NPAW, Comscore, RudderStack, and OneTrust for user tracking and consent management.</span>
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[#111] text-[13px] mb-1">
                <span>
                  Senior iOS Developer |{" "}
                  <a href="https://www.neosofttech.com" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] underline font-medium">NeoSoft Technology</a>
                </span>
                <span className="font-semibold text-[#444]">June 2021 – April 2025</span>
              </div>
              <ul className="space-y-1 text-[13px] text-[#333] pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Worked as a Senior Developer collaborating with key clients (<a href="https://www.sonyliv.com" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] underline font-medium">Sony Pictures Network</a>, <a href="https://www.purplle.com" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] underline font-medium">purplle.com</a>, <a href="https://www.fabindia.com" target="_blank" rel="noopener noreferrer" className="text-[#0056b3] underline font-medium">Fabindia</a>) to build and scale flagship iOS and tvOS apps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span><strong>Sony Pictures Network</strong> - Built and maintained the SonyLIV AppleTV app (Sony Pictures Network) in Swift and SwiftUI, implementing custom UI components and optimizing data fetching for high-concurrency live sports and show streaming, reducing content load time by 20%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span><strong>purplle.com</strong> - Enhanced core shopping and checkout flows for Purplle.com, integrating the Juspay payment SDK and resolving checkout friction points that contributed to a 30% reduction in cart abandonment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span><strong>Fabindia</strong> - Architected core retail features for Fabindia using MVVM and Combine, powering real-time catalog updates, search suggestions, and wishlist flows across the app.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Designed and shipped modular, reusable components across all three client codebases, decreasing feature development cycle time by 30%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Hardened application security across client apps by implementing biometric login, token-based authentication, SSL Pinning, and encrypted Keychain storage.</span>
                </li>
              </ul>
            </div>

            {/* Job 3 */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[#111] text-[13px] mb-1">
                <span>
                  Senior iOS Developer | Sakha Global <em>(Client: Spectra Logic)</em>
                </span>
                <span className="font-semibold text-[#444]">October 2020 – June 2021</span>
              </div>
              <ul className="space-y-1 text-[13px] text-[#333] pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Engineered the SpectraLogix application, building custom UI components and advanced animations that enhanced app visual appeal and responsiveness.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Collaborated closely with the UX/UI team to conduct design feasibility reviews, converting design mockups into fluid layouts and decreasing customer UI complaints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Partnered with QA teams to implement XCTest unit tests, troubleshoot memory leaks, and profile code to optimize CPU usage.</span>
                </li>
              </ul>
            </div>

            {/* Job 4 */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[#111] text-[13px] mb-1">
                <span>
                  Senior iOS Developer | Aquarious Technology
                </span>
                <span className="font-semibold text-[#444]">June 2017 – July 2020</span>
              </div>
              <ul className="space-y-1 text-[13px] text-[#333] pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Promoted to Senior iOS Developer after building foundational client applications; took on architecture ownership and led delivery of 5 distinct apps for a crowdsourced geofencing client (including <a href="#" className="text-[#0056b3] underline">See it, Say it, Send it</a>, <a href="#" className="text-[#0056b3] underline">The Pet Detective</a>, <a href="#" className="text-[#0056b3] underline">ToDone</a>, <a href="#" className="text-[#0056b3] underline">Take Stock in Children</a>, and <a href="#" className="text-[#0056b3] underline">S3 Law Enforcement</a>).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Integrated CoreLocation-based geofencing to trigger real-time dispatch of emergency media (images, video, PDFs) to localized police centers, supporting time-critical law enforcement workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Implemented biometric authentication (Face ID / Touch ID) and secure Keychain services across all five apps, reducing unauthorized access incidents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Mentored junior developers, introduced code review pipelines, and regularly delivered products ahead of schedule, enhancing overall team sprint velocity.</span>
                </li>
              </ul>
            </div>

            {/* Job 5 */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[#111] text-[13px] mb-1">
                <span>iOS Developer | Unified Infotech</span>
                <span className="font-semibold text-[#444]">December 2016 – April 2017</span>
              </div>
              <ul className="space-y-1 text-[13px] text-[#333] pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Built and maintained customer-facing iOS applications using Swift and UIKit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Designed responsive, adaptive interfaces using Auto Layout and Size Classes, supporting seamless layouts across portrait and landscape orientations.</span>
                </li>
              </ul>
            </div>

            {/* Job 6 */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[#111] text-[13px] mb-1">
                <span>iOS Developer | Brainium Information Technologies</span>
                <span className="font-semibold text-[#444]">January 2016 – December 2016</span>
              </div>
              <ul className="space-y-1 text-[13px] text-[#333] pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Developed and optimized consumer applications utilizing Swift, Objective-C, and UIKit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Worked on UI design execution, API integration, and debugging complex threading issues.</span>
                </li>
              </ul>
            </div>

            {/* Job 7 */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-[#111] text-[13px] mb-1">
                <span>Junior iOS Developer | WebTech Software Solution</span>
                <span className="font-semibold text-[#444]">November 2014 – December 2015</span>
              </div>
              <ul className="space-y-1 text-[13px] text-[#333] pl-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Programmed custom user interfaces programmatically and integrated REST APIs using Objective-C.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#111] select-none">•</span>
                  <span>Maintained legacy applications, resolving memory leaks and updating layouts for newer iOS versions.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Education */}
        <section>
          <h2 className="text-sm font-bold text-[#111] uppercase tracking-wide border-b border-[#333] pb-1 mb-2 font-sans">
            EDUCATION
          </h2>
          <div className="flex justify-between items-baseline text-[13px] text-[#333]">
            <div>
              <strong>Bachelor of Technology in Information Technology</strong>
              <div className="italic text-[#555]">B.P. Poddar Institute of Management and Technology</div>
            </div>
            <span className="font-semibold text-[#444]">April 2010 – July 2014</span>
          </div>
        </section>

      </div>
    </div>
  );
}
