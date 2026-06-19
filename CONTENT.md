# Cognito — Seed Content

> 25 scenarios for MVP. Each entry maps to the Scenario schema in PRD.md. Ready to copy into `data/scenarios.json`.

---

## Format Reference

```json
{
  "id": "slug",
  "type": "thought_experiment | real_world | puzzle",
  "scenario": "...",
  "highlights": ["phrase 1", "phrase 2"],
  "model": {
    "name": "...",
    "short_definition": "...",
    "what_it_is": "...",
    "why_it_matters": "...",
    "examples": ["...", "...", "..."],
    "common_misuse": "..."
  },
  "tags": ["..."]
}
```

---

## Scenarios

---

### 01 — Availability Heuristic

**Type:** Real-world case  
**Scenario:**
After a well-publicized plane crash, ticket sales for several airlines dropped by 30% for months — despite air travel remaining statistically safer per mile than driving. During the same period, highway fatalities increased, as many people chose to drive rather than fly. The people rerouting their travel weren't reckless; they genuinely believed they were making the safer choice.

**Highlights:** `well-publicized`, `statistically safer`, `genuinely believed`

**Model:**
- **Name:** Availability Heuristic
- **Short definition:** We judge the likelihood of events based on how easily examples come to mind — not on actual statistics.
- **What it is:** The availability heuristic is a mental shortcut where we estimate the probability of something based on how quickly a relevant example surfaces in memory. Recent, vivid, or emotionally charged events feel more probable simply because they're more mentally accessible.
- **Why it matters:** It systematically distorts risk perception. We overestimate dramatic, memorable risks (plane crashes, shark attacks) and underestimate mundane ones (heart disease, car accidents). Marketers, media, and politicians exploit this constantly — repeated exposure to a message makes it feel more true.
- **Examples:** ["Overestimating the frequency of murders after a true crime binge", "Buying insurance after a neighbor's house floods, then canceling it years later when it feels less relevant", "Assuming a startup is risky because you recently read about a high-profile failure"]
- **Common misuse:** Using 'availability' to dismiss someone's concern entirely. Sometimes vivid examples *do* track real risks. The heuristic biases judgment — it doesn't invalidate it. Always check the base rate.

**Tags:** cognitive bias, risk, probability, media

---

### 02 — Confirmation Bias

**Type:** Real-world case  
**Scenario:**
A hiring manager interviews twelve candidates for an engineering role. In the first five minutes, she forms an impression of each person. Afterward, when reviewing her notes, she finds she gave more detailed, positive annotations to candidates she initially liked — and noted ambiguous answers as "thoughtful" for them, but "unclear" for the ones she didn't. She considers herself a rigorous evaluator.

**Highlights:** `first five minutes`, `ambiguous answers`, `considers herself a rigorous evaluator`

**Model:**
- **Name:** Confirmation Bias
- **Short definition:** We tend to seek, interpret, and remember information in ways that confirm what we already believe.
- **What it is:** Confirmation bias is the tendency to favor information that validates our pre-existing beliefs and to discount information that challenges them. It operates unconsciously — we don't feel like we're filtering; we feel like we're noticing.
- **Why it matters:** It makes it extremely hard to update beliefs accurately. In science, it's why double-blind studies exist. In organizations, it's why diverse teams make better decisions. It's also how echo chambers self-reinforce: you don't need to be lied to, just surrounded by confirming signals.
- **Examples:** ["A doctor who diagnosed early becomes more confident with each test, even ambiguous ones", "An investor who loves a stock interprets bad earnings as 'a temporary blip'", "Two people reading the same study on a policy reaching opposite conclusions"]
- **Common misuse:** Calling everything someone does 'confirmation bias' when they simply disagree with you. Having strong priors isn't bias — the bias is the selective processing of evidence. Strong beliefs can still be correct.

**Tags:** cognitive bias, decision-making, belief, hiring

---

### 03 — Sunk Cost Fallacy

**Type:** Thought experiment  
**Scenario:**
You've been working on a side project for eight months. You're not enjoying it anymore. The market has shifted and the opportunity you were chasing has narrowed considerably. But you've put in hundreds of hours, turned down a vacation, and spent $2,000 on tools. You find yourself thinking: "I can't quit now. Not after everything I've already put in."

**Highlights:** `hundreds of hours`, `can't quit now`, `already put in`

**Model:**
- **Name:** Sunk Cost Fallacy
- **Short definition:** We continue investing in something because of resources already spent, even when stopping would be the rational choice.
- **What it is:** The sunk cost fallacy is the tendency to factor in past, unrecoverable investments (time, money, effort) when making forward-looking decisions. Those resources are gone regardless of what you do next — they should be irrelevant to the decision. But they rarely feel that way.
- **Why it matters:** It keeps people in bad jobs, bad relationships, bad projects, and bad investments long past the point where stopping is clearly better. Entire companies have gone bankrupt continuing product lines because of what had already been spent. Emotionally, it's tied to loss aversion and identity: quitting feels like admitting the past was wasted.
- **Examples:** ["Finishing a terrible movie because you already paid for the ticket", "A country continuing a war because 'our soldiers didn't die for nothing'", "Staying in a degree program you hate because you've already completed two years"]
- **Common misuse:** Using this as a reason to be a serial quitter. Sunk costs shouldn't drive decisions — but past experience and built skill are not sunk costs. There's a difference between 'I've already paid' and 'I've already learned.'

**Tags:** decision-making, loss aversion, psychology, economics

---

### 04 — Dunning-Kruger Effect

**Type:** Thought experiment  
**Scenario:**
Two people take an introductory statistics course. After the first week, Student A feels like she mostly understands the material and is ready for a test. Student B, who has a graduate degree in applied mathematics, is finding the course dense and wants more time to prepare. On the actual exam, Student B scores 97%. Student A scores 61% and is surprised.

**Highlights:** `ready for a test`, `wants more time`, `surprised`

**Model:**
- **Name:** Dunning-Kruger Effect
- **Short definition:** People with limited knowledge of a domain tend to overestimate their competence, while true experts tend to underestimate theirs.
- **What it is:** The Dunning-Kruger effect describes a metacognitive failure: to accurately evaluate your own skill, you need to have developed that skill enough to recognize what you don't know. Novices lack the mental map to locate their gaps. Experts have mapped the territory so thoroughly they see its full complexity.
- **Why it matters:** It has real consequences in hiring (confident incompetents outperform in interviews), in health (people self-diagnosing confidently from a Google search), and in public discourse (the loudest voice isn't the most informed). It also explains why feedback feels most threatening to the people who most need it.
- **Examples:** ["New drivers feeling more confident than experienced ones", "Amateur investors feeling certain about market moves", "Someone who has read one book on negotiation feeling ready to handle complex deals"]
- **Common misuse:** Using it to dismiss confident people generally. Confidence and competence can correlate — experts can also be confident. The effect describes a pattern at the population level, not a universal rule about any individual.

**Tags:** metacognition, expertise, learning, overconfidence

---

### 05 — Anchoring

**Type:** Thought experiment  
**Scenario:**
A real estate agent shows you a house listed at $850,000. You think it's worth $750,000. You offer $720,000. The seller counters at $810,000 and you settle at $775,000. Later, you learn that identical houses in the same neighborhood were selling for $680,000 — and that the $850,000 listing was a deliberate negotiating anchor set by the seller's agent.

**Highlights:** `listed at`, `deliberate`, `settling at`

**Model:**
- **Name:** Anchoring Bias
- **Short definition:** The first piece of information we encounter on a topic disproportionately influences all subsequent judgments about it.
- **What it is:** Anchoring is the tendency to rely too heavily on the first data point offered when making decisions. The anchor doesn't need to be relevant or even credible — it still pulls your estimate toward it. Negotiators, salespeople, and pricing strategists use this constantly.
- **Why it matters:** It affects salary negotiations (whoever names a number first sets the range), medical diagnoses (the first hypothesis influences how tests are interpreted), and legal sentencing (judges give shorter sentences after being shown low anchor numbers). The anchor is often arbitrary, and yet it feels like information.
- **Examples:** ["A product marked '50% off' still being expensive", "Opening a negotiation with a high number to shift the final settlement upward", "Seeing a 'was $200, now $120' label and feeling like you're getting value even if the $120 is still overpriced"]
- **Common misuse:** Thinking that knowing about anchoring makes you immune to it. Awareness reduces the effect but doesn't eliminate it. Studies show even people explicitly told they're being anchored are still influenced by the anchor.

**Tags:** negotiation, decision-making, pricing, cognitive bias

---

### 06 — Survivorship Bias

**Type:** Real-world case  
**Scenario:**
During World War II, the U.S. military wanted to add armor to bomber planes, but couldn't reinforce everything without making them too heavy. They studied returning bombers and found bullet holes clustered on the wings, fuselage, and tail. An engineer named Abraham Wald looked at the same data and suggested armoring the areas that had *no* bullet holes instead.

**Highlights:** `returning bombers`, `no bullet holes`, `suggested armoring`

**Model:**
- **Name:** Survivorship Bias
- **Short definition:** We draw conclusions from the things we can see while ignoring what we can't — the failures that didn't survive to be observed.
- **What it is:** Survivorship bias occurs when we analyze only the cases that made it through a filter and ignore the ones that didn't. The missing data is invisible, so it doesn't feel missing. Wald's insight: the planes that came back were the ones that *could* survive hits to the wings. The planes that didn't come back — the ones with fatal damage — were hit everywhere else.
- **Why it matters:** It distorts our understanding of success in almost every domain. Business advice from successful founders ignores the hundreds who followed identical advice and failed. Studies of healthy elderly people's habits don't account for those who lived the same way and died at 60. We learn from the wrong sample constantly.
- **Examples:** ["Startup advice from famous founders ignoring all the failed founders who did the same things", "A mutual fund's 10-year track record that only counts funds that are still open (closed funds are excluded)", "A school's alumni success stories that don't mention the many who left without graduating"]
- **Common misuse:** Assuming survivorship bias is always at work whenever you see positive examples. Sometimes the sample genuinely is representative. The question to ask is always: 'What would I see if the things that didn't survive were also included?'

**Tags:** statistics, systems thinking, epistemology, research

---

### 07 — Framing Effect

**Type:** Thought experiment  
**Scenario:**
Two hospitals publish their surgical outcomes. Hospital A says their procedure has a 90% survival rate. Hospital B says their procedure has a 10% mortality rate. The numbers are identical. In a study of patients choosing between them, Hospital A was preferred by a large majority — including by physicians who had reviewed both descriptions.

**Highlights:** `90% survival rate`, `10% mortality rate`, `numbers are identical`

**Model:**
- **Name:** Framing Effect
- **Short definition:** How information is presented — not just what information is presented — powerfully shapes how we respond to it.
- **What it is:** The framing effect describes how the same information can lead to different decisions depending on how it's framed. Gain frames ('you save 90%') and loss frames ('you lose 10%') activate different psychological responses even when mathematically equivalent. Loss aversion means loss frames feel more threatening.
- **Why it matters:** Every communication decision is a framing decision. Politicians, advertisers, doctors, and managers all know that presenting the same facts differently produces different outcomes. Understanding framing doesn't just make you a better thinker — it makes you more aware of when others are using it on you.
- **Examples:** ["'Beef that is 80% lean' vs '20% fat' — the same beef rated higher when framed as lean", "A tax described as a 'bonus for paying on time' vs a 'penalty for paying late'", "'Crime decreased by 10%' vs 'crime is still at 90% of last year's rate'"]
- **Common misuse:** Thinking that all framing is manipulation. Framing is unavoidable — every communication involves a frame. The ethical question is whether the frame is accurate and whether the communicator is choosing it to inform or to exploit.

**Tags:** persuasion, communication, cognitive bias, rhetoric

---

### 08 — First Principles Thinking

**Type:** Thought experiment  
**Scenario:**
A transport company wants to cut costs on long-haul shipping. Every analysis starts from the assumption that trucking is expensive. They optimize routes, negotiate fuel contracts, and renegotiate driver compensation. Costs improve marginally. Meanwhile, a new entrant to the logistics space asks a different question: What does it actually cost to move a kilogram of cargo from point A to B? They start from physics, not from trucks.

**Highlights:** `starts from the assumption`, `actually cost`, `starts from physics`

**Model:**
- **Name:** First Principles Thinking
- **Short definition:** Break a problem down to its most fundamental truths and reason upward from there, rather than from analogy or convention.
- **What it is:** First principles thinking is a reasoning method where you strip away all assumptions, conventions, and inherited beliefs until you reach the basic, undeniable facts. Then you build your reasoning back up from those facts. It's the opposite of reasoning by analogy ('this is how it's always been done').
- **Why it matters:** Almost every industry has accumulated layers of convention that nobody has questioned in decades. First principles thinking is how genuinely new things get built. It's cognitively expensive — analogy is much faster — so it should be reserved for high-stakes decisions where the existing framework might be the problem.
- **Examples:** ["SpaceX reasoning from the cost of raw materials for rockets, rather than from the cost of existing rockets", "A baker asking what bread actually needs to be (structure, leavening, flavor) before choosing ingredients", "A medical researcher treating a disease pathway rather than the disease category"]
- **Common misuse:** Applying it to every decision. First principles thinking is slow and draining. Most decisions are fine to make by analogy. The skill is knowing when the conventional framework is actually the problem.

**Tags:** reasoning, problem-solving, innovation, Elon Musk

---

### 09 — Inversion

**Type:** Thought experiment  
**Scenario:**
A product team wants to know how to make their app more successful. They've run growth hacks, A/B tests, and feature sprints. A consultant walks in and asks: "Have you tried asking what would make someone stop using the app?" The room goes quiet. The team has never approached the question from that direction. The consultant continues: "List every way someone could be deeply disappointed by this product. Now let's make sure none of those things happen."

**Highlights:** `stop using`, `approached the question`, `deeply disappointed`

**Model:**
- **Name:** Inversion
- **Short definition:** Instead of asking how to achieve a goal, ask what would guarantee failure — then avoid those things.
- **What it is:** Inversion is a problem-solving technique that reverses the direction of your thinking. Rather than reasoning toward success, you reason toward failure: What would make this go wrong? What would I need to do to definitely destroy this? Then you use that map of failure as a guide for what to avoid.
- **Why it matters:** We often have a clearer, more visceral sense of what bad looks like than what good looks like. Inverting the question surfaces constraints and risks that forward thinking misses. Charlie Munger popularized this as one of his core mental models: 'All I want to know is where I'm going to die, so I'll never go there.'
- **Examples:** ["Instead of 'how do I be a good parent?', ask 'what do bad parents consistently do?'", "Instead of 'how do I build a great career?', ask 'what behaviors reliably derail careers?'", "Instead of 'how do we improve team morale?', ask 'what would destroy trust in this team?'"]
- **Common misuse:** Treating inversion as purely defensive or negative. It's a reasoning tool, not a mindset. You invert *to get information*, then apply it alongside positive goals. Obsessing over failure without also pursuing success is pessimism, not inversion.

**Tags:** problem-solving, reasoning, Charlie Munger, strategy

---

### 10 — Second-Order Thinking

**Type:** Real-world case  
**Scenario:**
A city, struggling with a rat problem, announces a bounty: citizens will be paid for every dead rat they bring in. At first it works. Then something strange happens: people start breeding rats to collect the bounty. When the program ends, the rat population is higher than before it started.

**Highlights:** `at first it works`, `start breeding rats`, `higher than before`

**Model:**
- **Name:** Second-Order Thinking
- **Short definition:** Ask not just 'what happens next?' but 'what happens because of what happens next?'
- **What it is:** Second-order thinking means anticipating the consequences of consequences. First-order thinking stops at the immediate effect. Second-order thinking asks: if this works as intended, what new problems does it create? Who changes their behavior in response? What does the system look like after it has adapted?
- **Why it matters:** Almost every well-intentioned policy, feature, or decision has second-order effects that undermine or reverse the first-order gain. The rat bounty is a famous version of this — it's known as the Cobra Effect (from British India, where a similar program backfired with cobras). Systems are adaptive; they respond to interventions in ways the designer didn't anticipate.
- **Examples:** ["Uber lowering prices (1st order: more passengers) → more cars on the road → increased traffic (2nd order)", "Antibiotics killing infection (1st order) → selection pressure for resistant bacteria (2nd order)", "A company paying employees for lines of code → incentive to write more but worse code (2nd order)"]
- **Common misuse:** Using second-order thinking as a reason for paralysis. Some second-order effects are benign or manageable. The goal isn't to find a reason not to act — it's to build a more complete model before acting.

**Tags:** systems thinking, policy, unintended consequences, strategy

---

### 11 — Occam's Razor

**Type:** Thought experiment  
**Scenario:**
A researcher is reviewing data from a clinical trial. The treatment group improved significantly. She constructs three hypotheses: (1) the drug works, (2) the drug works, but only in combination with a previously undetected dietary variable specific to the trial population, (3) there's a placebo effect compounded by researcher expectancy bias that happened to align with a seasonal immune boost. Her supervisor asks which hypothesis she's leading with.

**Highlights:** `three hypotheses`, `previously undetected`, `leading with`

**Model:**
- **Name:** Occam's Razor
- **Short definition:** Among competing hypotheses, prefer the one that requires the fewest assumptions — all else being equal.
- **What it is:** Occam's Razor is a principle of parsimony attributed to William of Ockham. It doesn't say the simplest explanation is always correct — it says that when two explanations fit the evidence equally well, the one requiring fewer assumptions is more likely to be right. Complexity is only justified when simpler explanations fail.
- **Why it matters:** Complex explanations are easier to construct and harder to falsify. Preferring parsimony protects against post-hoc rationalization and conspiracy thinking, where adding more assumptions makes a theory feel more complete even as it becomes less testable. It's also a time-saving heuristic: start simple, add complexity only when needed.
- **Examples:** ["A doctor diagnosing the most common cause of symptoms before exotic diseases", "If someone is late to a meeting, assuming traffic before assuming they forgot you", "Physics preferring the mathematical model with fewer variables when both fit the data"]
- **Common misuse:** Conflating 'simple' with 'comfortable' or 'obvious.' Occam's Razor compares hypotheses that equally fit the evidence. If the simpler explanation doesn't actually fit, a more complex one is warranted — the razor doesn't apply.

**Tags:** epistemology, reasoning, science, problem-solving

---

### 12 — Feedback Loops

**Type:** Real-world case  
**Scenario:**
A social media platform adjusts its algorithm to show users more of what they engage with. Users spend more time on content that confirms their worldview. The algorithm serves more of it. Users engage more. The cycle continues. After six months, the platform reports record engagement. A researcher studying the same data reports record levels of political polarization.

**Highlights:** `more of what they engage with`, `serves more`, `record engagement`, `record levels of polarization`

**Model:**
- **Name:** Feedback Loops
- **Short definition:** A system where outputs circle back as inputs, amplifying (positive) or stabilizing (negative) the system's behavior.
- **What it is:** A feedback loop is a circular causal chain within a system. In a *positive* (reinforcing) feedback loop, outputs amplify the conditions that produced them — growth accelerates growth, or decline accelerates decline. In a *negative* (balancing) feedback loop, outputs counteract the conditions that produced them — like a thermostat maintaining temperature.
- **Why it matters:** Most complex systems — financial markets, ecosystems, social dynamics — are dominated by feedback loops. Failing to see them leads to surprise when systems spiral or snap. Understanding which loops are active helps predict tipping points, intervention points, and unintended consequences.
- **Examples:** ["A fire warming the air, which provides oxygen, which feeds the fire (positive loop)", "A body sweating when overheated, which cools it down (negative loop)", "A bank run: fear causes withdrawals, which causes fear, which causes more withdrawals (positive/reinforcing)"]
- **Common misuse:** Calling positive feedback loops 'good' and negative loops 'bad.' These are technical terms — positive means amplifying (can be good or bad), negative means self-correcting (also can be good or bad, e.g., a disease suppressing immune response).

**Tags:** systems thinking, dynamics, technology, complexity

---

### 13 — Incentive-Caused Bias

**Type:** Real-world case  
**Scenario:**
A pharmaceutical company hires a research team to study the effectiveness of their new drug. The team uses rigorous methodology. The company funds the study, has first right of publication, and the lead researcher receives a consulting contract upon completion. The study is positive. Five independent replications are mixed. The original researchers defend their findings vigorously.

**Highlights:** `funds the study`, `first right of publication`, `consulting contract`, `defend their findings`

**Model:**
- **Name:** Incentive-Caused Bias
- **Short definition:** People's judgment is systematically distorted by their material interests — even when they believe they're being objective.
- **What it is:** Incentive-caused bias is the tendency to perceive, interpret, and recommend in ways that align with one's own interests — financial, reputational, or otherwise. It doesn't require conscious dishonesty. Incentives shape what evidence we look for, how we weigh it, and what conclusions feel natural. Charlie Munger: 'Never ask a barber if you need a haircut.'
- **Why it matters:** It's one of the most powerful and underappreciated forces in human institutions. Understanding it lets you ask: Who benefits from this conclusion? What would this person say if their interests were reversed? It also means you should design systems that align incentives with desired outcomes, not just hire well-intentioned people.
- **Examples:** ["Financial advisors recommending high-commission products", "Doctors performing more procedures in fee-for-service systems", "Employees finding reasons that their department's budget should not be cut"]
- **Common misuse:** Using it to dismiss all interested parties. Someone can be both incentivized and correct. The bias is in the *reliability* of their judgment, not a proof that they're wrong. Evaluate the argument, not just the incentive structure.

**Tags:** incentives, decision-making, ethics, systems thinking

---

### 14 — Goodhart's Law

**Type:** Real-world case  
**Scenario:**
A hospital is evaluated on patient wait times. Leadership implements new processes, and wait times drop dramatically. A journalist investigating the story discovers that nurses had been told not to formally register patients until a bed was available — so the clock only started once patients were already admitted. Wait times fell on the metric. Patients waited just as long.

**Highlights:** `not to formally register`, `clock only started`, `fell on the metric`, `waited just as long`

**Model:**
- **Name:** Goodhart's Law
- **Short definition:** When a measure becomes a target, it ceases to be a good measure.
- **What it is:** Goodhart's Law, articulated by British economist Charles Goodhart, describes what happens when a proxy metric is treated as the goal itself. Once people know they're being evaluated on a measure, they optimize for the measure — which may no longer correlate with the underlying thing you cared about.
- **Why it matters:** It's one of the most important problems in management, policy, and AI alignment. Teaching to the test, hitting sales quotas by compromising service quality, publishing papers instead of doing science — these are all Goodhart's Law in action. The measure starts as a proxy for the thing; once it becomes the target, it divorces from it.
- **Examples:** ["Schools optimizing for test scores at the expense of deep learning", "Software teams measured on tickets closed rushing resolutions without fixing root causes", "Social media optimizing for engagement, which turns out to not correlate with user wellbeing"]
- **Common misuse:** Concluding that metrics are useless. Metrics are essential — the problem is conflating the metric with the goal, or using a single metric without context. The solution is multiple measures, qualitative evaluation, and maintaining sight of the underlying goal.

**Tags:** management, systems thinking, metrics, economics

---

### 15 — Base Rate Neglect

**Type:** Puzzle  
**Scenario:**
A medical test for a disease is 99% accurate. The disease affects 1 in 1,000 people. You test positive. What is the probability you have the disease? Most people say 99%. The actual answer is about 9%. How?

**Highlights:** `99% accurate`, `1 in 1,000`, `test positive`, `9%`

**Model:**
- **Name:** Base Rate Neglect
- **Short definition:** We overweight specific information about an individual case while ignoring the statistical frequency of events in the broader population.
- **What it is:** Base rate neglect occurs when we ignore prior probabilities (base rates) when evaluating new evidence. In the puzzle: out of 1,000 people, 1 has the disease and will almost certainly test positive. But 999 don't have it — and with a 1% false positive rate, about 10 of them will also test positive. So in the group of ~11 positives, only 1 actually has the disease: roughly 9%.
- **Why it matters:** It explains why individually compelling evidence can still be weak given a low prior probability. It's foundational to Bayesian reasoning and medical diagnosis. False confessions that sound convincing, eyewitness testimony, and personality profiles all suffer from this when evaluators forget to ask: 'But how often does this occur in the general population?'
- **Examples:** ["Profiling for rare crimes based on behavioral indicators (high false positive rate at low base rates)", "Being surprised your cancer screening came back positive (most positives in low-risk populations are false)", "Assuming a person is a librarian because they seem quiet and bookish (ignoring that there are far more farmers)"]
- **Common misuse:** Treating base rates as always dispositive. Strong specific evidence can legitimately update a prior substantially. The error is *neglecting* the base rate — not being influenced by it at all.

**Tags:** probability, statistics, Bayesian thinking, medicine

---

### 16 — Regression to the Mean

**Type:** Thought experiment  
**Scenario:**
A flight instructor notices that when he praises a student for an exceptional landing, their next landing is usually worse. When he criticizes a student for a poor landing, their next one is usually better. He concludes that praise hurts performance and criticism helps. He's been teaching for thirty years with this belief.

**Highlights:** `next landing is usually worse`, `next one is usually better`, `concludes`

**Model:**
- **Name:** Regression to the Mean
- **Short definition:** Extreme performances — good or bad — tend to be followed by more average ones, regardless of any intervention.
- **What it is:** Regression to the mean is a statistical phenomenon: extreme values in a data set are often followed by values closer to the average. When someone performs exceptionally well, luck likely contributed. The next performance is likely to be closer to their typical level — not because of anything you did, but because extreme luck rarely repeats. The instructor is observing regression, not the effect of feedback.
- **Why it matters:** It creates false lessons everywhere. Coaches who yell see improvement and credit yelling. A company acquires a poorly-performing division and it improves — crediting the acquisition. A doctor gives an unproven treatment to very ill patients who then recover. All of these may be regression, not causation.
- **Examples:** ["Sports 'sophomore slumps' — players whose outstanding rookie seasons revert to their true baseline", "The Sports Illustrated cover jinx — athletes featured after exceptional seasons tend to have more average ones next", "Drug trials without control groups 'working' because subjects enrolled at their worst point"]
- **Common misuse:** Assuming all improvement after an intervention is regression. Regression is a statistical tendency, not a certainty. Real interventions can produce real improvements. The test is whether a control group shows the same rate of improvement.

**Tags:** statistics, probability, performance, causation

---

### 17 — Social Proof

**Type:** Real-world case  
**Scenario:**
A researcher studying emergency bystander behavior finds a disturbing pattern. In simulated emergencies on a crowded street, bystanders are far less likely to help than in the same emergency witnessed by a single person. The more people present, the longer it takes for anyone to act — and the more likely no one acts at all.

**Highlights:** `far less likely to help`, `more people present`, `no one acts at all`

**Model:**
- **Name:** Social Proof
- **Short definition:** In ambiguous situations, we look to others' behavior as a guide for what we should do.
- **What it is:** Social proof is the tendency to infer the correct action by observing what others are doing — particularly in uncertain situations. In the emergency scenario, bystanders interpret each other's inaction as a signal that there's no emergency, creating a cascade of false calm. This is the bystander effect: diffusion of responsibility meets social proof.
- **Why it matters:** It's one of the most powerful drivers of human behavior. It explains fashion, financial bubbles, adoption of new technologies, and why we read reviews before buying. Understanding it matters both for predicting behavior and for designing systems — including knowing when social proof can be weaponized and when it can be harnessed for good.
- **Examples:** ["Laughing at a joke you don't find funny because everyone else is laughing", "Lines forming outside restaurants, which attract more customers, which lengthen the line", "Charities showing '10,000 donors' to increase donation rates"]
- **Common misuse:** Treating it as purely irrational. In many situations, what other people do is genuinely informative. The problem is when social proof substitutes for your own evaluation in high-stakes situations where the crowd is wrong.

**Tags:** social psychology, influence, behavior, persuasion

---

### 18 — Margin of Safety

**Type:** Real-world case  
**Scenario:**
An engineer designing a bridge calculates that the maximum load it will ever carry is 50 tons. She specs the structure to hold 150 tons. A colleague says this seems wasteful. The engineer replies: "Our model of maximum load is itself uncertain. Our materials have small variations. Construction isn't perfect. The world is unpredictable. I don't build to the line of what I expect — I build to survive what I don't expect."

**Highlights:** `model is itself uncertain`, `variations`, `don't expect`

**Model:**
- **Name:** Margin of Safety
- **Short definition:** Build in a buffer beyond what your best analysis says you need, to protect against the errors in your analysis.
- **What it is:** The margin of safety is a concept from both engineering and investing (popularized by Benjamin Graham and Warren Buffett). The core insight is that our estimates of what will happen are always uncertain — models simplify, data is incomplete, surprises occur. A margin of safety is the gap between your conservative estimate and your actual threshold, designed to absorb the difference between the world you modeled and the world that actually exists.
- **Why it matters:** It's one of the most important concepts in any domain with consequential uncertainty. In engineering: why structures don't collapse under normal loads even if there's a flaw. In finance: why buying a stock at a large discount to intrinsic value protects you if your valuation is wrong. In life: why keeping 6 months of expenses in cash protects you if your income assumptions are wrong.
- **Examples:** ["Bridges built to 3x expected load, aircraft built to withstand stresses well beyond normal flight", "Investors buying only when price is far below their estimate of value", "Software teams planning projects with time buffers because estimates are always optimistic"]
- **Common misuse:** Using 'margin of safety' to justify unlimited conservatism. There is an opportunity cost to excess safety: too large a buffer in investing means too little exposure to returns; too large a safety margin in design means expensive overengineering. The margin should be calibrated to the uncertainty, not made infinite.

**Tags:** engineering, investing, uncertainty, risk management

---

### 19 — The Map Is Not the Territory

**Type:** Thought experiment  
**Scenario:**
A city planner uses a detailed urban model to predict how residents will move if a new transit line is built. The model predicts a 30% reduction in traffic on a major corridor. The transit line is built. Traffic drops by 8%. The planner is baffled until a researcher points out that the model assumed people lived, worked, and shopped where the previous census said they did — but in the three years since, a major employer had relocated and two new neighborhoods had been built.

**Highlights:** `the model assumed`, `three years since`, `baffled`

**Model:**
- **Name:** The Map Is Not the Territory
- **Short definition:** Our models, categories, and representations of reality are not reality itself — they simplify, exclude, and become outdated.
- **What it is:** This concept, from Alfred Korzybski's general semantics, points to the gap between a model and what it models. A map of a city is useful precisely because it leaves things out — but if you forget it's a simplification and treat it as the truth, you'll be surprised by what the map doesn't show. All mental models, theories, forecasts, and frameworks are maps.
- **Why it matters:** It's a foundational epistemic principle. Overconfidence in models — economic models, scientific theories, business frameworks, personal worldviews — is one of the most consistent sources of catastrophic error. The 2008 financial crisis was partly a map-territory problem: risk models treated historical data as a complete map of the future.
- **Examples:** ["A medical model that excludes women and non-white patients giving wrong guidance when applied to them", "Economic growth models that treat GDP as equivalent to wellbeing", "A person whose self-model is ten years out of date, acting on assumptions about their abilities that no longer hold"]
- **Common misuse:** Using this as a reason to distrust all models. Models are essential — we can't act without them. The principle is a reminder to hold them lightly, test them against reality, and update them when they diverge from what actually happens.

**Tags:** epistemology, systems thinking, modeling, philosophy

---

### 20 — Expected Value

**Type:** Puzzle  
**Scenario:**
You're offered a choice: Option A gives you $50 with certainty. Option B gives you a 60% chance of winning $100 and a 40% chance of winning nothing. Most people choose A. Now the same choices, but scaled: Option A is $50,000 certain. Option B is a 60% chance of $100,000. Most people still choose A. A mathematician would choose B both times.

**Highlights:** `60% chance`, `certainty`, `mathematician would choose B`

**Model:**
- **Name:** Expected Value
- **Short definition:** The probability-weighted average of all possible outcomes — the value you'd get 'on average' if you could run the scenario many times.
- **What it is:** Expected value is calculated by multiplying each possible outcome by its probability and summing the results. Option B: (0.6 × $100) + (0.4 × $0) = $60. Option A: $50. Option B has higher expected value. The reason most people prefer Option A is loss aversion and risk aversion — the psychological pain of getting nothing outweighs the mathematical upside. Over many decisions, EV-maximizing beats certainty-seeking.
- **Why it matters:** It's the foundation of rational decision-making under uncertainty. Insurance, gambling, investing, and medical decisions all reduce to expected value calculations. Understanding when to use it (repeated decisions over time) and when it fails (one-time, catastrophic-downside scenarios) is the real skill.
- **Examples:** ["Venture investing: most investments return nothing; a few return 100x; the expected value of a diversified portfolio is positive", "Medical screening: the expected value of early detection outweighs the cost and inconvenience of regular tests", "A poker player calling a bet based on pot odds even when they might lose the hand"]
- **Common misuse:** Applying expected value to single, catastrophic-downside scenarios. If Option B had a 60% chance of $1M and a 40% chance of death, maximizing EV doesn't make sense — you can't average across lives. EV is a tool for repeated, bounded decisions, not for existential risks.

**Tags:** probability, decision-making, mathematics, rationality

---

### 21 — Loss Aversion

**Type:** Thought experiment  
**Scenario:**
A researcher gives participants $50 and then offers them a gamble: flip a coin. Heads, they win $60. Tails, they lose $50. Mathematically, this is a slightly positive expected value bet. Most people refuse. The researcher then asks: what amount would they need to win to accept the risk of losing $50? The average answer: $125. The pain of a $50 loss requires more than double the gain to feel like a fair trade.

**Highlights:** `refuse`, `double`, `pain of a $50 loss`

**Model:**
- **Name:** Loss Aversion
- **Short definition:** Losses feel roughly twice as powerful as equivalent gains — causing us to make risk-averse choices even when the math favors taking a risk.
- **What it is:** Loss aversion, a cornerstone of prospect theory (Kahneman & Tversky), describes the asymmetry in how humans experience gains and losses. Losing $100 hurts approximately twice as much as gaining $100 feels good. This drives risk aversion in gains (we prefer certainty over gambles with equivalent expected value) and risk-seeking in losses (we prefer a gamble to a certain loss of the same expected value).
- **Why it matters:** It explains why people hold losing investments too long (selling feels like making the loss real), why companies have trouble killing products (loss of investment vs. continued spend), and why framing policies as losses rather than foregone gains makes them more politically powerful.
- **Examples:** ["Investors holding losing stocks far longer than winning ones, even when fundamentals favor the reverse", "People working harder to avoid losing $100 than to earn $100", "Companies keeping zombie products alive because shutting them down feels like admitting a loss"]
- **Common misuse:** Treating loss aversion as always irrational. In contexts with asymmetric real-world consequences (your health, your family), erring toward caution is often rational. The bias matters most in symmetric, repeated decisions where the asymmetric weighting leads to systematically worse outcomes.

**Tags:** behavioral economics, decision-making, Kahneman, finance

---

### 22 — Emergence

**Type:** Thought experiment  
**Scenario:**
Each ant in a colony follows simple chemical rules: move toward pheromones, deposit pheromones when carrying food, follow stronger trails. No ant has a blueprint for the colony. No ant directs the others. And yet the colony builds intricate structures, maintains temperature, farms fungus, and routes foraging paths with a sophistication that stumps human engineers. Where does the intelligence come from?

**Highlights:** `simple chemical rules`, `no ant has a blueprint`, `stumps human engineers`

**Model:**
- **Name:** Emergence
- **Short definition:** Complex, organized behavior arises from simple rules interacting at scale — without any central coordinator planning the outcome.
- **What it is:** Emergence describes the appearance of higher-level properties or patterns that cannot be found in any individual component. The colony's intelligence isn't in any ant — it arises from the local interactions of many ants following simple rules. This is common across biology, physics, economics, and social systems: markets emerge from buyers and sellers, consciousness may emerge from neurons, traffic patterns emerge from individual drivers.
- **Why it matters:** It challenges reductionist thinking. You can't understand a colony by studying one ant. You can't understand a city by studying one person. It also changes how we design systems: instead of engineering top-down control, you can sometimes design rules that produce desirable emergent behavior.
- **Examples:** ["Flocking behavior in birds arising from three simple rules each bird follows (separation, alignment, cohesion)", "Language emerging from social interaction without anyone designing grammar", "Stock market crashes emerging from individual traders each acting on local information"]
- **Common misuse:** Treating emergence as magic or mysticism. It's a structural phenomenon with identifiable conditions. Not everything complex is emergent — some complex things have explicit designers. The test is whether the higher-level behavior is reducible to the rules of the components.

**Tags:** systems thinking, complexity, biology, philosophy

---

### 23 — Reciprocity

**Type:** Real-world case  
**Scenario:**
A charity mails donation requests to two groups. Group A receives a standard letter. Group B receives the same letter, along with a small pack of free personalized address labels — a gift with no strings attached, worth about $1. Group B's donation rate is nearly double Group A's. The people in Group B don't feel manipulated. They feel like they're returning a favor.

**Highlights:** `gift with no strings`, `donation rate is nearly double`, `returning a favor`

**Model:**
- **Name:** Reciprocity
- **Short definition:** We feel a strong obligation to return favors, gifts, and concessions — even unsolicited ones, and even when the gift is small.
- **What it is:** Reciprocity is one of the foundational principles of human social behavior (studied extensively by Robert Cialdini). When someone gives us something — a gift, a concession, a compliment — we experience an urge to give something back. This is deeply embedded: cultures across history have built norms around gift exchange, and violating reciprocity norms triggers strong social reactions.
- **Why it matters:** It's both a social glue (cooperation, trust-building) and a lever for influence. Salespeople use it (free samples), politicians use it (favors), and negotiators use it (making a concession to extract one). Understanding it helps you both use it ethically and recognize when it's being used on you.
- **Examples:** ["Free samples at grocery stores dramatically increasing purchase rates", "In negotiations, making a concession to create pressure for a counter-concession", "A colleague covering your shift making it hard to say no when they need a favor later"]
- **Common misuse:** Assuming reciprocity always requires conscious awareness to work. It operates automatically — you feel the pull even when you recognize it. Recognition reduces the effect but rarely eliminates it.

**Tags:** social psychology, influence, persuasion, Robert Cialdini

---

### 24 — Bottleneck / Theory of Constraints

**Type:** Real-world case  
**Scenario:**
A manufacturing plant wants to increase output. The VP of operations directs all departments to improve efficiency. Marketing improves lead conversion. Sales closes faster. Procurement shortens supplier timelines. Everyone hits their targets. Output barely moves. A consultant arrives and traces the entire production flow. One machine in station 4, old and prone to micro-stoppages, is running at 62% of the speed needed to match the rest of the line.

**Highlights:** `all departments`, `barely moves`, `one machine`

**Model:**
- **Name:** Theory of Constraints
- **Short definition:** Every system has at least one bottleneck that limits its overall throughput — and optimizing anything else is largely wasted effort until that constraint is addressed.
- **What it is:** Developed by Eliyahu Goldratt, the Theory of Constraints says that any system operating toward a goal has at least one constraint that limits its performance. Improving non-constraints doesn't improve the system — it just builds up inventory in front of the bottleneck. The five steps: identify the constraint, exploit it (get the most out of it as-is), subordinate everything else to it, elevate it (increase its capacity), then repeat.
- **Why it matters:** It's a powerful counterintuitive lesson: local optimization doesn't equal global optimization. Making every department 10% more efficient does nothing if the constraint is unchanged. It's also widely misapplied — companies invest in the wrong places because they optimize visible metrics rather than tracing systemic flow.
- **Examples:** ["In software delivery, having the fastest developers in the world doesn't help if code review is the bottleneck", "A hospital improving all departments except emergency triage doesn't reduce wait times", "A restaurant with a world-class kitchen limited by a single slow point-of-sale terminal"]
- **Common misuse:** Treating bottleneck identification as a one-time fix. After you elevate the constraint, the bottleneck moves somewhere else. The system always has a constraint — the work is ongoing.

**Tags:** systems thinking, operations, manufacturing, Eliyahu Goldratt

---

### 25 — Bayes' Theorem (Simplified)

**Type:** Thought experiment  
**Scenario:**
You meet someone at a tech conference who is quiet, wears glasses, and is carrying a laptop covered in programming stickers. What's more likely: they're a software engineer, or a sociologist? Almost everyone says engineer. But the conference has 10,000 attendees. 200 are sociologists. 400 engineers are shy with glasses. 180 sociologists fit the same description. More sociologists matching the profile attend than engineers do.

**Highlights:** `almost everyone says engineer`, `200 are sociologists`, `more sociologists`

**Model:**
- **Name:** Bayes' Theorem
- **Short definition:** Update your belief in a hypothesis based on new evidence, in proportion to how likely that evidence would appear given the hypothesis — and how likely the hypothesis was to begin with.
- **What it is:** Bayes' Theorem is a mathematical framework for updating beliefs. It says: your posterior probability (your belief after evidence) is proportional to your prior probability (your belief before evidence) multiplied by the likelihood (how probable the evidence is given the hypothesis). In the puzzle, the prior (base rate) of sociologists is high enough, and the evidence isn't specific enough to engineers, that the update doesn't confidently point to engineer.
- **Why it matters:** It formalizes good epistemic practice: start with a realistic prior, update it proportionally when you get evidence. It's used in spam filters, medical diagnosis, scientific inference, and intelligence analysis. The informal version is just being calibrated: rare hypotheses need stronger evidence; common ones less.
- **Examples:** ["Email spam filters updating the probability a message is spam based on words it contains", "A doctor updating the probability of a diagnosis based on a test result and the disease's prevalence", "A detective updating their theory of the crime as each piece of evidence comes in"]
- **Common misuse:** Treating Bayes' as a perfect algorithm for belief. In practice, assigning precise prior probabilities is itself uncertain and subjective. Bayesian reasoning is a framework and a discipline, not a computation you can run mechanically on vague priors.

**Tags:** probability, statistics, epistemology, reasoning

---

## Notes for JSON Conversion

When converting to `data/scenarios.json`:
- Assign each scenario a clean, hyphenated `id` (e.g. `"availability-heuristic"`)
- Escape all internal quotes properly
- Validate JSON before committing (`cat data/scenarios.json | python3 -m json.tool`)
- Highlights should be short exact phrases that appear verbatim in the scenario text — check for exact matches
