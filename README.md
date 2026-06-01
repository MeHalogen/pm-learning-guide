# 🚀 MeHalogen's Product Management Roadmap (PM)
![Status](https://img.shields.io/badge/Status-Interactive_Portal_Ready-success?style=for-the-badge&logo=github)
![Focus](https://img.shields.io/badge/Focus-Strategy%20%7C%20Tech%20%7C%20Analytics%20%7C%20Design-indigo?style=for-the-badge)
![Audience](https://img.shields.io/badge/Audience-APM%20to%20Senior%20PM-orange?style=for-the-badge)

The definitive, best-in-class curriculum and practical playbook to mastering Product Management. Learn how modern digital software products are discovered, designed, built, prioritized, analyzed, and shipped at scale. 

This repository bridges the gap between **Software Engineering**, **User Experience (UX/UI) Design**, and **Business Strategy** — serving as the ultimate reference manual for aspiring and practicing PMs.

---

# 📖 Table of Contents

1. [The PM Persona & Mission](#1-the-pm-persona--mission)
   * [Why Does a PM Exist?](#why-does-a-pm-exist)
   * [The Critical Intersection](#the-critical-intersection)
   * [Product Manager vs. Project Manager vs. Product Owner](#product-manager-vs-project-manager-vs-product-owner)
2. [The Master Curriculum](#2-the-master-curriculum)
   * [Phase 1: Product Strategy & Business Models](#phase-1-product-strategy--business-models)
   * [Phase 2: Product Discovery & User Experience](#phase-2-product-discovery--user-experience)
   * [Phase 3: Technical Product Management (TPM)](#phase-3-technical-product-management-tpm)
   * [Phase 4: Sprints, Schedulers & Agile Execution](#phase-4-sprints-schedulers--agile-execution)
   * [Phase 5: Requirements, User Stories & Specifications](#phase-5-requirements-user-stories--specifications)
   * [Phase 6: Product Analytics, Metrics & Growth Loops](#phase-6-product-analytics-metrics--growth-loops)
   * [Phase 7: Bug Lifecycle & Release Engineering](#phase-7-bug-lifecycle--release-engineering)
   * [Phase 8: Strategic Case Studies](#phase-8-strategic-case-studies)
3. [The Interview & Career Launchpad](#3-the-interview--career-launchpad)
   * [PM Portfolio Blueprints](#pm-portfolio-blueprints)
   * [Fermi (Estimation) Questions Strategy](#fermi-estimation-questions-strategy)
   * [Behavioral Interviewing via the STAR Method](#behavioral-interviewing-via-the-star-method)
4. [🎮 Interactive Learning Suite](#4--interactive-learning-suite)
5. [📖 The Ultimate PM Glossary (50+ Terms)](#5--the-ultimate-pm-glossary-50-terms)

---

# 1. The PM Persona & Mission

### Why Does a PM Exist?
In modern technology companies, product development is complex. Software engineers write code, designers paint interfaces, and sales representatives secure accounts. **The Product Manager (PM) is the glue that binds these domains together.** 

Think of a PM as a **Movie Director**. The director doesn't act in front of the camera, operate the sound boom, or paint the scenery — but they ensure that all specialists collaborate cohesively to tell a unified story. The PM owns the **Product Strategy (Why & What)** while empowering cross-functional teams to own the **Execution (How & When)**.

### The Critical Intersection
The absolute sweet spot of product success sits at the intersection of three key pillars:

```
          ┌───────────────────┐
          │   DESIRABILITY    │
          │    (UX / User)    │
          └─────────┬─────────┘
                    │
         ┌──────────┴──────────┐
         ▼                     ▼
┌───────────────────┐ ┌───────────────────┐
│    FEASIBILITY    │ │     VIABILITY     │
│   (Tech / Eng)    │ │   (Business)      │
└───────────────────┘ └───────────────────┘
```

1. **Desirability (User/UX)**: Do customers actually need or want this? Does it solve a real pain point?
2. **Feasibility (Tech/Engineering)**: Can we realistically build this with our tech stack, talent, and database structures?
3. **Viability (Business)**: Does this align with our company's business model? Can we monetize it? Is the market size large enough?

> [!IMPORTANT]
> A brilliant technical idea that nobody wants is a waste of engineering resources. A popular user demand that is technically impossible or financially bankrupt is equally useless. The PM's primary mission is to navigate this intersection.

### Product Manager vs. Project Manager vs. Product Owner

| Dimension | 🎯 Product Manager (PM) | ⏱️ Project Manager | 🏃 Product Owner (PO) |
| :--- | :--- | :--- | :--- |
| **Primary Focus** | The **What** and **Why** (Strategy, roadmap, metrics) | The **When** and **How Much** (Schedules, budgets, resources) | The **Agile Backlog** (User stories, sprint grooming, tech inputs) |
| **Success Metric** | Product-Market Fit, Churn Reduction, LTV growth | On-time delivery, budget adherence, task completion | Velocity, sprint commitment delivery, backlog health |
| **Day-to-day** | Talking to users, reviewing analytics, aligning stakeholders | Coordinating milestones, resolving timeline bottlenecks | Writing criteria, grooming JIRA tickets, daily standups |
| **Horizon** | Long-term (1 - 3 year vision) | Mid-term (Project timeline) | Short-term (1 - 2 week sprints) |

---

# 2. The Master Curriculum

---

## Phase 1: Product Strategy & Business Models

Every software product must operate inside a commercial framework. The curriculum begins with understanding business models and product-market viability.

```
 Problem  ───►  Ideation  ───►  Build  ───►  Launch  ───►  Measure  ───►  Iterate ↺
```

### The 4 Major Software Product Classifications
1. **B2C (Business-to-Consumer)**: Software sold or offered directly to everyday people. Highly viral, relies on huge user volumes, and leverages engagement hooks.
   * *Examples:* Spotify, Netflix, Instagram, Zomato.
2. **B2B (Business-to-Business)**: Software sold to other corporations to help them run operations, automate processes, or compile data. Relies on high pricing tiers and strict security compliance.
   * *Examples:* Salesforce, Slack, JIRA, AWS.
3. **B2B2C (Business-to-Business-to-Consumer)**: Selling platform infrastructure to intermediary businesses, who then use it to serve their own consumers.
   * *Examples:* Shopify (helps merchants sell to users), Stripe.
4. **Internal Tools**: Dashboards and admin panels built for a company's internal staff to resolve operational bottlenecks (e.g., support portals, billing databases).

### The SaaS (Software as a Service) Revolution
Traditionally, software was distributed physically (e.g., boxed CD-ROMs) for a large one-time fee. Under the **SaaS** model:
* Applications are hosted in the cloud.
* Customers pay a predictable **recurring subscription** (monthly/annually) to log in.
* Developers can instantly push updates, patches, and security hotfixes to the cloud server without user intervention.

---

## Phase 2: Product Discovery & User Experience

Product Discovery is the process of figuring out **what to build** before committing expensive engineering resources to write production code.

```
       ┌────────────────────────────────────────────────────────┐
       │               THE DISCOVERY FUNNEL                     │
       │                                                        │
       │   [ 1. Empathize ] &─── User Interviews / Surveys       │
       │   [ 2. Define ]    &─── Customer Pain Points           │
       │   [ 3. Ideate ]    &─── Brainstorm Solutions           │
       │   [ 4. Prototype ] &─── Figma Mockups / Wireframes     │
       │   [ 5. Validate ]  &─── Kano / Concept Testing         │
       └────────────────────────────────────────────────────────┘
```

### Prioritization Frameworks
A PM is constantly flooded with feature requests from users, executives, sales agents, and engineers. You must prioritize using structured frameworks:

#### 1. RICE Scoring
Use RICE to evaluate and rank features using quantitative data:
$$\text{RICE Score} = \frac{\text{Reach} \times \text{Impact} \times \text{Confidence}}{\text{Effort}}$$

* **Reach**: How many users will this feature affect in a given timeframe? (e.g., 10,000 users/month).
* **Impact**: How much will this improve our core metric? (Scale: `3` = massive, `2` = high, `1` = medium, `0.5` = low, `0.25` = minimal).
* **Confidence**: How sure are you about your estimates? (Scale: `100%` = high data confidence, `80%` = medium data, `50%` = low data/guess).
* **Effort**: How many person-months will it take to build? (e.g., 3 developer-months = `3`).

#### 2. The MoSCoW Method
Divide features into scoping buckets for release:
* **Must Have**: Critical requirements without which the product cannot function (e.g., payment gateway for checkout).
* **Should Have**: Important requirements that add major value but the product works without them (e.g., order tracking).
* **Could Have**: Nice-to-have features that improve satisfaction but can be easily skipped if timelines compress (e.g., dark mode).
* **Won't Have (this time)**: Explicitly deprioritized features that will not be touched in the current sprint/release.

#### 3. The Impact-Effort Matrix
Map features on a 2x2 grid to identify easy wins:
* **High Impact, Low Effort &rarr; Quick Wins**: Build these first! (e.g., adding social login buttons).
* **High Impact, High Effort &rarr; Major Projects**: Plan, allocate resources carefully, and build incrementally.
* **Low Impact, Low Effort &rarr; Fill-ins**: Do these if developers have spare time between sprints.
* **Low Impact, High Effort &rarr; Thankless Tasks**: Skip or delete from the backlog.

---

## Phase 3: Technical Product Management (TPM)

PMs do not need to write production code, but they **must understand system engineering concepts** to communicate effectively with developers and navigate technical trade-offs.

### The Restaurant Analogy of Web Architecture
To easily communicate with technical teams, visualize the four layers of web architecture:

```
┌─────────────────────────────────────────────────────────────────┐
│                      THE RESTAURANT ANALOGY                     │
│                                                                 │
│  [ Frontend ] &─── The Dining Area (What the customer sees/UI)    │
│  [ API ]      &─── The Waiter (Carries orders to and from)       │
│  [ Backend ]  &─── The Kitchen (Where logic preparations occur)   │
│  [ Database ] &─── The Pantry (Where raw data ingredients reside)│
└─────────────────────────────────────────────────────────────────┘
```

### Cloud Engineering: AWS for Product Managers
Modern products do not run on physical server computers in the office; they lease virtual machines in the cloud. As a PM, you should understand these core AWS services:
* **EC2 (Elastic Compute Cloud)**: Virtual computers in the sky. Renting CPU and memory resources to run server code.
* **S3 (Simple Storage Service)**: An infinite, highly reliable filing cabinet. Used to store static media files like user profile photos, videos, and PDFs.
* **RDS (Relational Database Service)**: Managed databases (like PostgreSQL or MySQL) without the administrative headache.
* **Lambda**: Serverless compute logic. Tiny blocks of code that run only when triggered by specific events, billing you in milliseconds of active execution.
* **CloudFront (CDN)**: Content Delivery Network. Storing and caching media assets closer to users globally to keep page load times under 2 seconds.

---

## Phase 4: Sprints, Schedulers & Agile Execution

Agile is the software development philosophy; Scrum is the operational playbook. Cross-functional teams collaborate in small, repeated blocks called **Sprints** (typically 2 weeks).

```
   ┌────────────────────────────────────────────────────────┐
   │                    THE SCRUM LOOP                      │
   │                                                        │
   │   [ Product Backlog ] &─── Prioritized master to-do    │
   │            │                                           │
   │            ▼                                           │
   │   [ Sprint Planning ] &─── Commit to 2 weeks of work   │
   │            │                                           │
   │            ▼                                           │
   │   [ Active Sprint ]   &─── Daily Standups (15 min)     │
   │            │                                           │
   │            ▼                                           │
   │   [ Sprint Review ]   &─── Demo working software       │
   │            │                                           │
   │            ▼                                           │
   │   [ Sprint Retro ]    &─── Honest team process audit   │
   └────────────────────────────────────────────────────────┘
```

### Core Scrum Roles
1. **Product Owner (PO)**: Maximizes the value of the product. Manages the backlog, writes criteria, and acts as the gatekeeper of the "What".
2. **Scrum Master**: A process coach. Removes blocking impediments, protects the engineering team from external distractions, and ensures Scrum rituals run smoothly.
3. **Development Team**: Cross-functional specialists (developers, designers, QA engineers) who self-organize to build the actual code.

### Kanban & Work-in-Progress (WIP) Limits
Kanban is a visual project board displaying columns (To Do, In Progress, QA, Done). 
* **WIP Limits**: Set a maximum card count for a column (e.g., Max `3` tasks in QA). If the limit is reached, developers cannot push new tasks into QA; instead, the whole team must gather to resolve the bottleneck first.

---

## Phase 5: Requirements, User Stories & Specifications

A major task of the PM is writing requirements. A **Product Requirements Document (PRD)** is the shared source of truth detailing a feature's scope.

### The Anatomy of a PRD
* **Objective**: What problem are we solving? What is the business opportunity?
* **Personas**: Who is the target user?
* **Scope**: What features are included (In-Scope) and explicitly excluded (Out-of-Scope)?
* **User Stories**: The individual functional requirements.
* **Acceptance Criteria**: The rules that define when a feature works correctly.
* **Success Metrics**: How will we measure impact after launch (e.g., conversion, load speed)?

### Writing Acceptance Criteria with Gherkin Syntax
Acceptance criteria must be clear and testable. QA engineers use **Gherkin Syntax** to write automated test scripts. It follows a predictable, three-step structure:

```gherkin
Given [some initial system state or precondition]
When [the user performs a specific action]
Then [the expected outcome or assertion occurs]
```

* *Real-world Example:*
  ```gherkin
  Given the user is logged into their e-commerce account
  And their shopping cart has items worth ₹1,500
  When they apply the promo code "WELCOME10"
  Then the system should deduct 10% from the cart total
  And the shipping fee should remain unchanged
  ```

---

## Phase 6: Product Analytics, Metrics & Growth Loops

Product Analytics is the science of measuring how users interact with your software to make data-backed design and roadmap decisions.

### Core SaaS Growth Metrics
* **DAU/MAU (Stickiness)**: Daily Active Users divided by Monthly Active Users. Represents product engagement (e.g., a ratio of 50% means half of monthly users return daily).
* **Churn Rate**: The percentage of paying subscribers who cancel or stop using your product over a specific timeframe:
  $$\text{Churn Rate} = \frac{\text{Customers Lost during period}}{\text{Total Customers at start of period}}$$
* **CAC (Customer Acquisition Cost)**: The average total marketing, advertising, and sales expenditure required to acquire a single paying customer.
* **LTV (Lifetime Value)**: The projected net revenue a single customer will generate for your business throughout their entire relationship.
* **NPS (Net Promoter Score)**: Measures user brand loyalty and satisfaction by asking: *"How likely are you to recommend us to a friend?"* (Scale `0 - 10`).
  * **Promoters** (`9 - 10`), **Passives** (`7 - 8`), **Detractors** (`0 - 6`).
  * $$\text{NPS} = \% \text{ Promoters} - \% \text{ Detractors}$$

### Habit Formation: The Hook Model
Nir Eyal's Hook Model explains how applications build habit-forming loops without relying on expensive advertisements:

```
                  ┌───────────────┐
                  │  1. TRIGGER   │
                  │ (Alert/Crave) │
                  └───────┬───────┘
                          │
  ┌───────────────┐       │       ┌───────────────┐
  │ 4. INVESTMENT │◄──────┴──────►│   2. ACTION   │
  │ (Data/Effort) │               │(Frictionless) │
  └───────▲───────┘               └───────┬───────┘
          │                               │
          │       ┌───────────────┐       │
          └───────┤  3. VARIABLE  │◄──────┘
                  │    REWARD     │
                  │(Novel/Exciting│
                  └───────────────┘
```

1. **Trigger**: The cue that prompts action (External: push notification, email; Internal: loneliness, boredom).
2. **Action**: The frictionless, simple behavior driven in anticipation of a reward (e.g., tapping an app icon, typing a search term).
3. **Variable Reward**: An unpredictable, satisfying feedback loop that feeds the brain's dopamine pathways (e.g., infinite social feeds, likes, random recommendation drops).
4. **Investment**: Having the user put effort, data, custom options, or social capital back into the application. This increases the product's value to the user and primes the system to fire the next trigger.

---

## Phase 7: Bug Lifecycle & Release Engineering

When things go wrong in software development, a PM must act as a triager to evaluate bugs and run release deployments safely.

### The Bug Lifecycle
A reported bug undergoes a series of transitions in JIRA before resolution:

```
New (Reported) ──► Assigned (Developer) ──► Open (Investigation) ──► Fixed ──► QA Retest ──► Closed (Resolved)
```

### Bug Severity vs. Business Priority Matrix
PMs work with QA Leads and Engineering Managers to triage bugs on two axes:
1. **Severity (Technical Impact)**: How badly does the bug break the system architecture? (e.g., database crash, cosmetic misalignment).
2. **Priority (Business Urgency)**: How urgently must the business fix it? (e.g., affects key enterprise client, needs a PR fix before press release).

> [!TIP]
> * **High Severity, Low Priority**: A bug that crashes the system but only under an extremely rare edge case that real users almost never hit.
> * **Low Severity, High Priority**: A small typographical spelling mistake or layout misalignment directly on the pricing checkout page during a highly publicized launch.

### Release Deployments
* **Feature Flagging**: Wrapping code inside a boolean toggle. Developers deploy code to production in a dormant state, allowing PMs to turn features "On" or "Off" instantly for specific users without a fresh code deploy.
* **Canary Deployments**: Rolling out a new version to a tiny subset of users (e.g., 5%) first. PMs monitor crash logs and API performance, and if no anomalies occur, roll out to 100%. If bugs spike, they roll back instantly without affecting the wider population.

---

## Phase 8: Strategic Case Studies

Analyze historical business pivots and failures to shape your product instincts:

* **Airbnb's Craigslist Growth Hack**: Airbnb built a clever automation that cross-posted listings directly to Craigslist with a single click, immediately tapping into an established competitor's massive customer base to drive organic traffic back to Airbnb.
* **Netflix's Cloud & Subscription Pivot**: Recognizing the future of high-speed broadband, Netflix aggressively transitioned from a highly successful DVD-by-mail franchise to a cloud-hosted streaming SaaS model in 2007, enabling zero-friction global scaling.
* **Blockbuster's Failure to Adapt**: Blockbuster refused to buy Netflix for $50 million, ignored digital subscription-based mail channels, and held onto physical brick-and-mortar stores until they were forced to declare bankruptcy.
* **Zoom's Simplicity Conquest**: Zoom entered an extremely saturated market dominated by Skype and Cisco Webex. Zoom won by offering a friction-free, one-click browser-based join system, and a robust video-compression algorithm that worked on slow mobile connections.

---

# 3. The Interview & Career Launchpad

Prepare for product roles by mastering standard PM interviewing methodologies.

### PM Portfolio Blueprints
Aspiring PMs should construct a public portfolio demonstrating practical strategy skills:
1. **Product Tear-downs**: Pick an app you love or hate. Deconstruct its user experience, identify specific pain points, propose design mockups to resolve them, and define success metrics.
2. **Spec PRDs**: Write a comprehensive JIRA-ready spec for a hypothetical feature (e.g., adding a "split bill" button inside Zomato). Include user stories, Gherkin acceptance criteria, and technical architecture flows.
3. **Estimation Cases**: Write out structured quantitative solutions to highly ambiguous estimation problems.

### Fermi (Estimation) Questions Strategy
Interviewers use Fermi estimation questions (e.g., *"How many gas stations exist in London?"*) to evaluate your quantitative logic under high ambiguity. Follow a structured 4-step framework:

```
┌─────────────────────────────────────────────────────────────────┐
│                      FERMI QUESTION FRAMEWORK                   │
│                                                                 │
│   1. CLARIFY SCOPE   ──►   Define boundaries (e.g. London area) │
│   2. EQUATION        ──►   Write the mathematical model first   │
│   3. ASSUMPTIONS     ──►   State realistic rounded estimates    │
│   4. CALCULATION     ──►   Solve step-by-step & check sanity    │
└─────────────────────────────────────────────────────────────────┘
```

* *Real-world Example breakdown:*
  1. *Clarify*: "Are we counting passenger car gas stations only, or also bus/commercial truck depots?"
  2. *Equation*: $$\text{Total Stations} = \frac{\text{Total Cars in London} \times \text{Avg Refuels/Year}}{\text{Avg Capacity of a Station/Year}}$$
  3. *Assumptions*: Population of London = 9M. Assume 1 car per 3 people = 3M cars. Avg car refuels once every 2 weeks = 26 times/year. A station has 8 pumps, active 12 hours/day, averaging 4 cars/pump/hour = ~380 cars served daily &times; 365 = ~140,000 refuels/station/year.
  4. *Calculate*:
     $$\text{Total Refuels} = 3,000,000 \times 26 = 78,000,000 \text{ refuels/year}$$
     $$\text{Stations Required} = \frac{78,000,000}{140,000} \approx 550 \text{ stations}$$

---

# 4. 🎮 Interactive Learning Suite

Bridge theoretical markdown knowledge with hands-on, premium web applications included in this repository. Launch them locally in any browser:

* **📘 Interactive PM Learning Guide**: [index.html](file:///Users/mehalsrivastava/.gemini/antigravity/scratch/pm-learning-guide/index.html)
  * A comprehensive, beautifully designed web curriculum featuring responsive tabs, accordion panels, dynamic progress bar meters, live text searches, dark/light theme options, and chapter-wise knowledge checkups.
* **🧠 PM MCQ Examination Suite**: [mcq.html](file:///Users/mehalsrivastava/.gemini/antigravity/scratch/pm-learning-guide/mcq.html)
  * A premium, single-file interactive testing platform containing **3 unlocked sets of 30 randomized MCQs** (90 unique questions total). Features fluid keyboard navigators, a circular conic-gradient score dial, local high-score caching, achievement ranks, custom JS confetti animations, and detailed review panels with step-by-step explanations.

---

# 5. 📖 The Ultimate PM Glossary (50+ Terms)

Master the language of developers, designers, and business strategists:

* **A/B Testing**: Running an experiment comparing two versions of a screen (A and B) with a single variable changed to identify which drives higher conversion.
* **Acceptance Criteria**: The explicit, testable rules that a user story must satisfy to be declared "Done" by QA.
* **Agile**: A software development philosophy focused on iterative changes, cross-functional collaboration, and rapid user feedback.
* **API (Application Programming Interface)**: A set of protocols that allows different software applications to exchange data.
* **ARR (Annual Recurring Revenue)**: The value of a SaaS product's recurring subscription revenue projected over a full year.
* **Backlog**: A prioritized, dynamic queue of user stories, bugs, and technical enhancements maintained by the Product Owner.
* **Backend**: The server-side layer of an application managing logic, database connections, and security operations.
* **B2B (Business-to-Business)**: Software sold to other companies to support business operations.
* **B2C (Business-to-Consumer)**: Software sold directly to individual consumers.
* **B2B2C (Business-to-Business-to-Consumer)**: A model where a business sells to other businesses to help them serve consumers.
* **Blocker**: Any dependency or technical impediment that completely halts engineering progress on a task.
* **Bug**: A coding defect or error in software that causes it to behave incorrectly or return unexpected results.
* **CAC (Customer Acquisition Cost)**: The average cost required to acquire a single paying customer.
* **Canary Deployment**: Releasing software updates to a small fraction of users first to test stability before a full rollout.
* **Churn Rate**: The rate at which subscribers cancel or stop using your product over a given timeframe.
* **CDN (Content Delivery Network)**: A network of servers distributed globally to cache and deliver static content to users rapidly.
* **Confluence**: An industry-standard wiki and document collaboration tool owned by Atlassian, heavily used to draft PRDs.
* **Daily Standup**: A daily, time-boxed 15-minute sync meeting for Scrum teams to align on tasks and identify blockers.
* **Database**: The structured warehouse repository used to record, store, and manage application data.
* **DAU (Daily Active Users)**: The number of unique users who interact with an application in a single day.
* **DevOps**: A set of practices bridging software development and IT operations to automate software builds and deployments.
* **Docker**: A containerization technology used to package application environments consistently across different machines.
* **Effort**: The developmental cost, typically measured in developer-months or story points, required to build a feature.
* **Fermi Question**: A quantitative estimation problem designed to test structured logical reasoning under high uncertainty.
* **Feature Flag**: A software toggle that allows features to be enabled or disabled for users instantly without redeploying code.
* **Figma**: The leading vector-based collaborative design tool used to build wireframes and interactive prototypes.
* **Frontend**: The client-side interface of an application that users interact with directly.
* **Freemium**: A monetization strategy offering a free core product while charging for premium administrative or advanced features.
* **Gherkin**: A structured syntax using Given, When, Then keywords to write automated acceptance criteria test scripts.
* **Growth Loop**: A closed-loop system where user interactions automatically acquire or invite new users back into the app.
* **Hook Model**: A habit-formation framework comprising Trigger, Action, Variable Reward, and Investment.
* **Impact**: The quantitative value or metric improvement a feature delivers to the business.
* **Internal Tool**: Software built for use within the same company to solve internal operational bottlenecks.
* **JIRA**: The leading Agile project management tool used to track backlogs, sprints, stories, and bugs.
* **Kanban**: A visual framework for project management that organizes tasks into columns and enforces WIP limits.
* **Kano Model**: A prioritization framework grouping features into Must-haves, Performance features, and Delighters.
* **KPI (Key Performance Indicator)**: A quantifiable metric used to measure success in meeting business objectives.
* **LTV (Lifetime Value)**: The projected net revenue a customer will generate throughout their relationship with the business.
* **MAU (Monthly Active Users)**: The number of unique users who interact with an application in a 30-day window.
* **Miro**: A collaborative whiteboarding platform used for brainstorming, system maps, and user journey mapping.
* **MoSCoW**: A prioritization system categorizing requirements into Must-haves, Should-haves, Could-haves, and Won't-haves.
* **MVP (Minimum Viable Product)**: The earliest launchable version of a product with just enough features to solve a core problem and gather validated feedback.
* **NPS (Net Promoter Score)**: A metric measuring customer loyalty and willingness to recommend a product.
* **Postman**: A popular software application used to test, mock, and debug backend API endpoints directly.
* **PRD (Product Requirements Document)**: The source-of-truth document defining a feature's scope, flows, and acceptance rules.
* **Priority**: The business urgency or timeline importance assigned to resolving a task or bug.
* **QA (Quality Assurance)**: The team and process responsible for testing software to prevent bugs from reaching production.
* **Reach**: The estimated number of users affected by a feature over a specific timeframe.
* **Regression Testing**: Testing existing features to ensure that new code updates have not broken their functionality.
* **RDS (Relational Database Service)**: Managed relational databases hosted in the cloud.
* **RICE**: A prioritization framework based on Reach, Impact, Confidence, and Effort.
* **SaaS (Software as a Service)**: A cloud-based distribution model where applications are leased via a recurring subscription.
* **S3 (Simple Storage Service)**: Managed object file storage hosted in the cloud.
* **Scrum**: The most popular Agile framework, featuring time-boxed sprints and structured team ceremonies.
* **Severity**: The technical impact a bug has on the stability and functionality of the software system.
* **Sprint**: A time-boxed development cycle, typically running for 2 weeks, where a Scrum team commits to shipping a set backlog.
* **STAR Method**: A behavioral interviewing technique based on Situation, Task, Action, and Result.
* **Stickiness**: The DAU/MAU ratio, representing the frequency and engagement of a product's user base.
* **UAT (User Acceptance Testing)**: The final phase of the testing cycle where real users test the product to verify it meets business needs.
* **User Story**: A user-centric requirement format written as: *As a..., I want..., So that...*
* **UX (User Experience) Design**: The discipline of optimizing the overall usability, navigation, and satisfaction of a user's interaction with a product.
* **UI (User Interface) Design**: The visual styling, typography, component layout, and branding look of a software application.
* **Velocity**: A Scrum metric representing the average number of story points or tasks a team completes per sprint.
* **Waterfall**: A traditional, linear software development methodology where phases occur in strict sequential order.
* **WIP (Work in Progress) Limit**: A Kanban threshold limiting the number of active tasks allowed in a column to prevent bottlenecks.
