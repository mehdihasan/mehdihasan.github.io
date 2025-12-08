---
title: "A New Architecture Is Emerging: Inside the Agentic AI Shift in Software Engineering"
date: "2025-12-8"
tags: ["AI Agents", "Software Engineering", "Multi-Agent Systems", "System Design"]
coverImage: "/images/agents/cover.jpg"
author: "Mehdi Hasan"
---

A few days ago, I had the opportunity to attend an [**5-Day AI Agents Intensive Course with Google**](https://www.kaggle.com/learn-guide/5-day-agents) arranged by Kaggle in collaboration with Google. Today, I want to share what the course covered, what I learned, and why I believe agentic systems are going to shape the future of software development.

## The Course Structure

The course was organized into **five modules across five days**, each focused on one core pillar of agentic AI development. Every day included a rich set of learning materials: a summary podcast, a detailed whitepaper, hands-on codelabs in Python using ADK, and a one-hour YouTube livestream featuring managers, engineers, and researchers from Google discussing the day’s topic. This blend of theory, practice, and expert insight made the learning experience both deep and practical.

### **Day 1: Introduction to AI Agents**

The first day laid the foundation. We explored what AI agents are, why they matter, and how they differ from standalone LLM applications. Using the Agent Development Kit, we built our very first agent - and even a simple multi-agent system. It was surprisingly approachable: a bit of Python, some orchestration, and an LLM under the hood.

The accompanying whitepaper introduced a taxonomy of agent capabilities and emphasized the importance of **AgentOps**, reliability, governance, and secure interoperability using identity and constrained policies.

In the codelabs, we built a basic agent powered by Gemini, and a small multi-agent system capable of using Google Search for real-time information retrieval.

These early exercises highlighted the power of combining reasoning (LLMs) with tools and structured workflows.

### **Day 2: Building Tools for Agents**

Day two focused on the tool ecosystem that enables agents to act rather than just reason. We learned how [MCP](https://modelcontextprotocol.io/docs/getting-started/intro) servers and standardized protocols let agents call external APIs, retrieve real-time data, and perform actions that go beyond the LLM’s training data.

The whitepaper covered best practices for designing high-quality tools and introduced the architecture, communication layers, and enterprise-readiness considerations of MCP.

In the codelabs, we converted Python functions into tools agents could call, built custom MCP-based capabilities, and implemented long-running tool operations where an agent pauses execution and requests human approval before continuing.

### **Day 3: Context Engineering**

The third module was all about giving agents **memory**, continuity, and personalization. We explored how context engineering enables agents to maintain working memory within a session and persist long-term memory across sessions - crucial for multi-step or long-running tasks.

The whitepaper introduced “Sessions” as the container for immediate conversational history and “Memory” as the persistence layer for long-term state retention.

The codelabs demonstrated how to manage conversation history in ADK, enable multi-turn reasoning, and give agents long-term memory that survives across different interactions.

By the end of the day, agents felt more like persistent digital assistants rather than single-request responders.

### **Day 4: Reliability and Observability**

This module addressed one of the most important challenges in AI engineering: ensuring agents behave predictably and transparently. We explored logging, tracing, metrics, and evaluation methods to monitor agent behavior and manage costs over time.

The whitepaper presented a comprehensive evaluation framework built on:

* **Logs** (the diary),
* **Traces** (the narrative), and
* **Metrics** (the health report),

and discussed scalable evaluation techniques like LLM-as-a-Judge and Human-in-the-Loop(HITL) workflows.

In the codelabs, we learned to debug agent behavior using detailed logs and traces, understand why an agent made a particular decision, and evaluate the quality of responses and tool usage using structured scoring methods.

This day provided the essential “production mindset” needed for trustworthy deployment.

### **Day 5: Production-Grade Multi-Agent Systems**

The final module brought everything together. We moved from prototypes to production-ready architecture, learning how to design scalable systems composed of multiple cooperating agents.

The whitepaper explored the operational lifecycle of enterprise-grade agents, focusing on deployment, scaling, and the **Agent2Agent (A2A) protocol**, which enables agents to communicate and collaborate directly with other agents.

In the codelabs, we: built multi-agent systems using A2A, enabled agents to exchange messages and delegate tasks, and deployed an agent to the **Vertex AI Agent Engine** to run as a scalable service on Google Cloud.

This was the moment where all the concepts matured into a clear picture of how a team of agents can function like specialized human teams - each agent doing its part to achieve a complex collective goal.

## The Tech Stack Behind the Agents

From a software engineering perspective, the technology wasn’t entirely new.
The course relied on:

* Jupyter Notebooks
* Python
* MCP client–server architecture
* API and protocol design
* Logging, tracing, and metrics
* Databases for storing context and memory

What stood out as new was the ADK (Agent Development Kit). It functions much like the SDKs we’ve seen in other technology ecosystems - Android, iOS, cloud frameworks, and more. ADK provides a structured environment for defining agent behavior, attaching tools, and connecting agents to LLMs securely through API keys.

## How AI Agents Actually Work

LLMs, by themselves, can only reason over the information they’ve been trained on. They cannot take actions, fetch real-time data, or call external systems.
Agents bridge this gap.

They extend an LLM’s capabilities by:

* gathering fresh, real-world information through tools,
* executing functions or programs,
* performing calculations,
* calling APIs,
* searching the internet, and
* feeding the results back into the LLM for analysis.

In this model, the **LLM acts as the reasoner** - interpreting goals, understanding context, and making decisions - while the **agent functions as the executor**, carrying out steps, coordinating tools, and managing workflows.

This separation of roles is what allows complex, multi-step, and even multi-agent systems to function reliably and continuously, far beyond what a standalone LLM can achieve.

## A Practical Example: Content Creation With Agents

Consider something as common as producing a full article. Traditionally, this involves several steps:

1. researching the topic,
2. gathering reference material,
3. structuring and drafting the piece,
4. creating visuals,
5. editing and refining,
6. and finally publishing it.

A process like this usually demands hours of focused work - or the coordination of multiple people.

With agents, this workflow can be split into a team of specialists working together:

* a **research agent** gathering reliable contemporary information,
* a **title and SEO agent** generating headlines and keywords,
* a **drafting agent** turning findings into structured content,
* an **image-generation agent** creating visuals,
* an **editor agent** refining clarity and tone,
* and a **publishing agent** formatting and posting the final piece.

Each agent has a narrow responsibility, similar to microservices in software systems. This orchestration - driven by an LLM as the “reasoner” and powered by tools as the “executors” - lets machines automate large, multi-step creative workflows with a level of coordination that was never practical before.

What’s interesting is how this reflects a broader industry shift.

## My Final Project: Smart Property Discovery

For the course project, I built a multi-agent system that helps users find housing properties matching their preferences.

Here’s how it worked:

* One agent scraped property data from different sources.
* Specialized tools calculated features such as distance to the nearest station, water body, or bus stop.
* Another agent evaluated whether a property met the client’s requirements.
* If a property scored above a certain threshold, a notification agent emailed the user.

This solution saved significant time in manually filtering through endless property listings - a perfect example of real-world value from agentic systems.

## The Future of Work: What’s About to Shift?

Working through these agent-driven workflow patterns makes it obvious how quickly automated systems are moving from experimental to foundational. I think the shift isn’t about replacing individual tasks here and there - it’s about restructuring *how* work gets done.

### Where Automation Will Accelerate

The workflows denoted in the course - sequential pipelines, parallel research teams, refinement loops - highlight the kinds of tasks that are first-class for automation:

* processes built on repeatable, well-defined steps,
* information gathering that scales with volume,
* decisions shaped by consistent rules rather than deep judgment,
* work that benefits from predictable execution over creativity.

These are exactly the domains where agents outperform traditional manual approaches.

### Roles That Will Grow, Not Shrink

In my opinion, as systems will become increasingly agentic, entirely new categories of work will emerge around:

* designing and composing complex agents,
* building custom tools and function interfaces,
* maintaining long-running agent systems,
* orchestrating workflows across sequential, parallel, and loop structures,
* monitoring and debugging multi-agent pipelines.

We’re moving toward a world where “agent engineer” or “workflow orchestrator” becomes as common a title as “backend developer” is today.

Given the current trajectory, it's reasonable to expect broad adoption within the next **5–10 years**, not because AI is “taking over,” but because organizations will automate any process that can be reliably broken into agent-friendly steps. In fact, I am starting to see this happening in the organization I work for, right in front of my own eyes.

For anyone entering software development now, learning to architect and operate agent systems will be a career advantage for sure.

### A New Development Ecosystem Taking Shape

One of the clearest insights from the course is that we’re watching a new platform era begin. Major companies aren’t just releasing models - they’re introducing full ecosystems for agent construction.

Google’s stack is a prime example: the Gemini models, the [Agent Development Kit (ADK)](https://google.github.io/adk-docs/), workflow-specific agent types (Sequential, Parallel, Loop), custom tools, and orchestration layers. This ecosystemization is familiar in tech:

* Android → Android SDK
* iOS → Xcode and platform frameworks
* Cloud → AWS/GCP/Azure
* Web → React, Angular, Vue

I guess, agentic AI will follow the same path. Each vendor will assemble its own “agent stack,” and developers will choose the one that best suits their workflows, constraints, and integration needs - much like selecting a cloud provider or web framework today.

We’re still early in this shift, but the competition and cross-pollination that follow will shape how agent systems are built for years to come.

### The Foundations Still Matter

Even as agents automate more of the surface-level work, the underlying engineering remains critical. Everything demonstrated in the course - passing state between agents, controlling execution order, managing tools, and handling refinement loops - depends on reliable systems beneath the surface.

Core skills still form the backbone - algorithms and data structures, database and API design distributed system fundamentals, reliability engineering, performance optimization etc.

Agents can coordinate workflows, but they still rely on well-architected infrastructure, predictable interfaces, and resilient systems. The fundamentals aren’t being replaced - they remain the bedrock that makes large-scale agentic automation possible.

## Final Thoughts

Overall, the Agentic AI course by Google on the Kaggle platform was incredibly insightful. It gave me a practical understanding of how agentic systems operate, how the ecosystem is evolving, and what software development might look like in the near future.

I walked away not just with new skills, but with a new perspective on how AI agents will transform workflows, industries, and our roles as developers.
