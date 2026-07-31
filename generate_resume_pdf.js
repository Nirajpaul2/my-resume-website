const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

async function createResumePDF() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const margin = 40;
  const width = 612;
  const height = 792;

  let page = pdfDoc.addPage([width, height]);
  let y = height - margin;

  const drawHeader = () => {
    page.drawText("NIRAJ PAUL", { x: margin, y, size: 20, font: fontBold, color: rgb(0.04, 0.52, 1.0) });
    y -= 18;
    page.drawText("SENIOR iOS DEVELOPER | 11+ YEARS EXPERIENCE", { x: margin, y, size: 10, font: fontBold, color: rgb(0.3, 0.3, 0.35) });
    y -= 14;
    page.drawText("Bangalore, India | +91-9942419837 | nirajpaul.ios@gmail.com | LinkedIn: linkedin.com/in/nirajpaul", { x: margin, y, size: 9, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });
    y -= 16;
    page.drawLine({ start: { x: margin, y }, end: { x: width - margin, y }, thickness: 1, color: rgb(0.8, 0.8, 0.8) });
    y -= 18;
  };

  drawHeader();

  const checkNewPage = (neededHeight = 25) => {
    if (y - neededHeight < margin) {
      page = pdfDoc.addPage([width, height]);
      y = height - margin;
    }
  };

  const drawSectionHeading = (title) => {
    checkNewPage(30);
    page.drawText(title, { x: margin, y, size: 12, font: fontBold, color: rgb(0.04, 0.52, 1.0) });
    y -= 4;
    page.drawLine({ start: { x: margin, y }, end: { x: width - margin, y }, thickness: 0.75, color: rgb(0.04, 0.52, 1.0) });
    y -= 14;
  };

  const wrapText = (text, maxWidth, size, font) => {
    const words = text.split(" ");
    let lines = [];
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth > maxWidth) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  };

  const drawParagraph = (text, isBold = false, size = 9, indent = 0) => {
    const font = isBold ? fontBold : fontRegular;
    const maxWidth = width - margin * 2 - indent;
    const lines = wrapText(text, maxWidth, size, font);
    for (const line of lines) {
      checkNewPage(14);
      page.drawText(line, { x: margin + indent, y, size, font, color: rgb(0.15, 0.15, 0.15) });
      y -= 12;
    }
  };

  const drawBullet = (text, indent = 12) => {
    const font = fontRegular;
    const maxWidth = width - margin * 2 - indent - 10;
    const lines = wrapText(text, maxWidth, 9, font);
    if (lines.length === 0) return;

    checkNewPage(14);
    page.drawText("•", { x: margin + indent, y, size: 9, font: fontBold, color: rgb(0.04, 0.52, 1.0) });
    page.drawText(lines[0], { x: margin + indent + 10, y, size: 9, font, color: rgb(0.15, 0.15, 0.15) });
    y -= 12;

    for (let i = 1; i < lines.length; i++) {
      checkNewPage(14);
      page.drawText(lines[i], { x: margin + indent + 10, y, size: 9, font, color: rgb(0.15, 0.15, 0.15) });
      y -= 12;
    }
  };

  // 1. PROFESSIONAL SUMMARY
  drawSectionHeading("PROFESSIONAL SUMMARY");
  drawParagraph(
    "Senior iOS Developer with 11+ years architecting and shipping high-performance iOS and tvOS applications for major media, retail, and e-commerce brands, including Tegna Inc., Sony Pictures Network (SonyLIV), Purplle, and Fabindia. Deep expertise in Swift, SwiftUI, and Combine, with a track record of optimizing media streaming engines (HLS, AVPlayer, client/server-side DAI), hardening application security (SSL Pinning, OAuth, Keychain), and applying Clean Architecture/MVVM to reduce engineering cycle time. Known for mentoring engineers, improving sprint velocity, and converting design and product requirements into modular, maintainable codebases under Agile delivery."
  );
  y -= 8;

  // 2. TECHNICAL SKILLS
  drawSectionHeading("TECHNICAL SKILLS");
  drawBullet("Languages: Swift, Objective-C, Dart (Flutter)");
  drawBullet("Frameworks & SDKs: SwiftUI, UIKit, tvOS, Combine, AVFoundation (AVPlayer, AVKit), Core Data, Realm, Core Location, MapKit, CoreML, WebRTC");
  drawBullet("Architecture & Patterns: MVVM, VIPER, Clean Architecture, MVC, SOLID Principles, Creational/Structural/Behavioral Design Patterns");
  drawBullet("Security: SSL Pinning, Token-based Authentication, Keychain Services, secure storage, OAuth, Encryption");
  drawBullet("Tools & DevOps: Fastlane, GitHub Actions, GitLab CI/CD, Xcode, CocoaPods, Swift Package Manager (SPM), Git, XCTest (Unit Testing)");
  drawBullet("Integrations & Analytics: Juspay Payment, Stripe, PayPal, Braintree, PubNub, XMPP, Socket.io, Firebase FCM & Analytics, NPAW, Comscore, RudderStack, OneTrust");
  y -= 8;

  // 3. PROFESSIONAL EXPERIENCE
  drawSectionHeading("PROFESSIONAL EXPERIENCE");

  // Role 1
  drawParagraph("Senior iOS Developer (Contract) | Wipro Limited (Client: Tegna Inc.)      May 2025 – March 2026", true, 9.5);
  drawBullet("Architected and developed high-performance iOS and AppleTV (tvOS) OTT media streaming applications from scratch using Swift and SwiftUI, delivering content to millions of active viewers.");
  drawBullet("Successfully developed and launched three major regional streaming news applications: KING 5 NEWS, WBIR, and 9News.");
  drawBullet("Integrated and optimized AVPlayer with HTTP Live Streaming (HLS) for video playback, supporting client-side and server-side Dynamic Ad Insertion (DAI).");
  drawBullet("Implemented advanced analytics and compliance SDKs including NPAW, Comscore, RudderStack, and OneTrust for user tracking and consent management.");
  y -= 6;

  // Role 2
  drawParagraph("Senior iOS Developer | NeoSoft Technology      June 2021 – April 2025", true, 9.5);
  drawBullet("Worked as a Senior Developer collaborating with key clients (Sony Pictures Network, purplle.com, Fabindia) to build and scale flagship iOS and tvOS apps.");
  drawBullet("Sony Pictures Network: Built and maintained the SonyLIV AppleTV app in Swift and SwiftUI, implementing custom UI components and optimizing data fetching for high-concurrency live sports and show streaming, reducing content load time by 20%.");
  drawBullet("purplle.com: Enhanced core shopping and checkout flows for Purplle.com, integrating the Juspay payment SDK and resolving checkout friction points that contributed to a 30% reduction in cart abandonment.");
  drawBullet("Fabindia: Architected core retail features for Fabindia using MVVM and Combine, powering real-time catalog updates, search suggestions, and wishlist flows across the app.");
  drawBullet("Designed and shipped modular, reusable components across all three client codebases, decreasing feature development cycle time by 30%.");
  drawBullet("Hardened application security across client apps by implementing biometric login, token-based authentication, SSL Pinning, and encrypted Keychain storage.");
  y -= 6;

  // Role 3
  drawParagraph("Senior iOS Developer | Sakha Global (Client: Spectra Logic)      October 2020 – June 2021", true, 9.5);
  drawBullet("Engineered the SpectraLogix application, building custom UI components and advanced animations that enhanced app visual appeal and responsiveness.");
  drawBullet("Collaborated closely with the UX/UI team to conduct design feasibility reviews, converting design mockups into fluid layouts and decreasing customer UI complaints.");
  drawBullet("Partnered with QA teams to implement XCTest unit tests, troubleshoot memory leaks, and profile code to optimize CPU usage.");
  y -= 6;

  // Role 4
  drawParagraph("Senior iOS Developer | Aquarious Technology      June 2017 – July 2020", true, 9.5);
  drawBullet("Promoted to Senior iOS Developer after building foundational client applications; took on architecture ownership and led delivery of 5 distinct apps for a crowdsourced geofencing client (including See it, Say it, Send it, The Pet Detective, ToDone, Take Stock in Children, and S3 Law Enforcement).");
  drawBullet("Integrated CoreLocation-based geofencing to trigger real-time dispatch of emergency media (images, video, PDFs) to localized police centers, supporting time-critical law enforcement workflows.");
  drawBullet("Implemented biometric authentication (Face ID / Touch ID) and secure Keychain services across all five apps, reducing unauthorized access incidents.");
  drawBullet("Mentored junior developers, introduced code review pipelines, and regularly delivered products ahead of schedule, enhancing overall team sprint velocity.");
  y -= 6;

  // Role 5
  drawParagraph("iOS Developer | Unified Infotech      December 2016 – April 2017", true, 9.5);
  drawBullet("Built and maintained customer-facing iOS applications using Swift and UIKit.");
  drawBullet("Designed responsive, adaptive interfaces using Auto Layout and Size Classes, supporting seamless layouts across portrait and landscape orientations.");
  y -= 6;

  // Role 6
  drawParagraph("iOS Developer | Brainium Information Technologies      January 2016 – December 2016", true, 9.5);
  drawBullet("Developed and optimized consumer applications utilizing Swift, Objective-C, and UIKit.");
  drawBullet("Worked on UI design execution, API integration, and debugging complex threading issues.");
  y -= 6;

  // Role 7
  drawParagraph("Junior iOS Developer | WebTech Software Solution      November 2014 – December 2015", true, 9.5);
  drawBullet("Programmed custom user interfaces programmatically and integrated REST APIs using Objective-C.");
  drawBullet("Maintained legacy applications, resolving memory leaks and updating layouts for newer iOS versions.");
  y -= 10;

  // 4. EDUCATION
  drawSectionHeading("EDUCATION");
  drawParagraph("Bachelor of Technology in Information Technology      April 2010 – July 2014", true, 9.5);
  drawParagraph("B.P. Poddar Institute of Management and Technology", false, 9, 0);

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, "public", "Niraj_Paul_Senior_iOS_Developer_Resume.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log("PDF created successfully at:", outputPath);
}

createResumePDF().catch(console.error);
