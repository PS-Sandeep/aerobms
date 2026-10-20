# AeroBMSCE Website Redesign

## 1. Flaws in the Original Website

The original website had several areas that could be improved in terms of visual design, navigation, and user experience. The presentation of information lacked a strong visual hierarchy, making important details about the club's activities, achievements, and technical work less prominent than they should be. The overall design also lacked a consistent visual identity that reflected AeroBMSCE's focus on aerospace engineering, UAVs, and aircraft development.

Additionally, the content could be organized more effectively to help visitors navigate between the club's background, projects, achievements, partners, and contact information. The website needed a more engaging landing page and a clearer structure that would make it easier for prospective members, collaborators, and visitors to understand what the club does.

## 2. Design Approach and UI/UX Decisions

My design approach was to create a modern, aerospace-inspired website that communicates the technical identity of AeroBMSCE while keeping the interface clean, intuitive, and easy to navigate. I took inspiration from aviation dashboards, aircraft instrumentation, and cinematic aerospace website designs.

I used a deep navy and slate-blue colour palette with contrasting accent colours to establish a professional, technical atmosphere. The typography, spacing, and layout were chosen to maintain readability while giving the website a distinctive visual identity. The landing page was designed to make a strong first impression, with aircraft-inspired visuals and a clear introduction to the club.

I also organized the content across dedicated pages so that the club's journey, achievements, partners, and contact information could be explored without overwhelming the landing page. Consistent navigation and working links were incorporated throughout the website. Background animations and visual transitions were used to make the experience more dynamic without making the interface unnecessarily distracting. A gallery was also included to present the club's members, drones, and related activities visually, while partner logos and achievement sections help communicate the club's work and accomplishments.

Throughout the design process, the goal was to balance visual appeal with usability, preserve the essential information from the original website, and avoid adding unsupported claims about the club.

## 3. Problem Encountered and How I Solved It

One of the main problems I encountered during development was a JavaScript syntax error in the contact form's event handler. When I tried to preview the website, the inline preview failed to load correctly. Initially, this made it difficult to determine whether the issue was with the page structure, styling, or JavaScript functionality.

After inspecting the code, I identified that some strings in the contact form's JavaScript contained literal line breaks where properly formatted strings were required. This caused the script to fail during parsing, preventing the relevant functionality from executing correctly.

I fixed the issue by correcting the string formatting in the form handler and then checking the JavaScript for syntax errors. I also reduced the website's dependence on an externally loaded font so that the site could be previewed more reliably in a standalone environment. Finally, I rechecked the website to ensure that the correction did not interfere with the rest of the implementation.

This experience reinforced the importance of debugging systematically rather than assuming that a broken preview is necessarily caused by HTML or CSS. It also highlighted the value of keeping external dependencies to a minimum when building a website that needs to run reliably in different environments.
