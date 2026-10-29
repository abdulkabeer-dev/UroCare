# Page-Specific FAQs & AI Bot Crawler Optimization Plan

Deliver specialized, medically accurate, and query-optimized FAQ accordion sections across every page of Dr. N. Vishnu Vardhan Reddy's urology practice, paired with Schema.org `FAQPage` and `MedicalWebPage` JSON-LD structured data for AI crawlers (Google SGE, Perplexity, ChatGPT, Bing).

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed in Phase 1 and govern the implementation:

- **Confirmed Decision 1 (Display Format)**: Responsive, accessible Accordion section placed near the bottom of each page, matching the brand theme (`#179ac4` primary, `#09265d` secondary) with subtle hairline dividers and smooth rotation micro-interactions.
- **Confirmed Decision 2 (AI Bot Schema)**: Dual `FAQPage` and `MedicalWebPage` JSON-LD structured data embedded via the enhanced `<SEO />` component, establishing semantic entity graphs linking Dr. Vishnu Vardhan Reddy, Kalyani Clinic Kurnool, and clinical specialties.
- **Confirmed Decision 3 (Coverage Scope)**: Full coverage across all 9 pages and 7 treatment sub-pages:
  1. **Home**: High-intent patient queries (emergency stone care, second opinions, insurance, Kurnool clinic location).
  2. **About**: Surgeon credentials, MCh training, NIMS Hyderabad background, APMC registration, hospital affiliations.
  3. **Services (Overview)**: Full scope of procedures, minimally invasive "No Cut, No Hole" benefits, pediatric & reconstructive care.
  4. **Treatment Details (7 distinct specialty pages)**:
     - *Endo Urology* (RIRS vs PCNL, stone sizes, recovery, anesthesia)
     - *Laparoscopic Procedures* (Keyhole advantages, hospital stay, post-op care)
     - *Reconstructive Urology* (BMG urethroplasty success rates, catheter duration)
     - *Renal Transplantation* (Donor criteria, HLA matching, long-term kidney graft care)
     - *Uro Oncology* (Bladder/prostate/kidney tumor screenings, organ preservation)
     - *Andrology* (Microscopic varicocelectomy, erectile dysfunction therapy, semen analysis)
     - *Paediatric Urology* (Hypospadias optimal timing, undescended testis surgery)
  5. **Appointment**: Consultation fees, walk-in vs. scheduled slots, reports needed (CT KUB, ultrasound), phone booking.
  6. **Contact**: Clinic directions near Vishwabharathi Hospital, parking, wheelchair access, emergency numbers.
  7. **Blog**: Educational content verification, when to consult a specialist vs GP, dietary stone prevention.
  8. **Gallery**: Operation theatre technology, laser equipment sterilization, clinic consultation room amenities.
  9. **Dedicated FAQ**: Categorized master knowledge base with search/filter for quick browsing.

---

## 1. Overview & Core Concept

- **What It Does**: Equips every page with tailor-made, high-conversion clinical and operational FAQs. Web search bots and LLM agents (Googlebot, Bingbot, GPTBot, PerplexityBot) can parse both semantic HTML and structured JSON-LD data to answer questions about treatments, doctor credentials, and clinic logistics.
- **Target Audience / Persona**: Patients and their families in Kurnool and Rayalaseema seeking trusted urological guidance, as well as AI crawlers extracting authoritative answers.
- **Key Value**: Direct visibility in AI Overviews and search rich snippets, improved organic rankings for Kurnool urology searches, and reduced pre-consultation friction for prospective patients.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. Patient scrolls through any page to research Dr. Vishnu's care.
  2. At the section immediately preceding the global footer, an editorial FAQ section titled "Frequently Asked Questions" provides 4–6 relevant, concise questions.
  3. Clicking any question smoothly animates the accordion open, highlighting the active item with a subtle brand tint (`bg-blue-50/50`) and rotating the chevron icon.
  4. Each FAQ accordion includes a quiet action bar: "Have a specific medical concern? Call the clinic or book an appointment."
- **Visual Identity & Theme**:
  - *Color Palette*: Brand primary (`#179ac4`), brand secondary (`#09265d`), slate neutral borders (`border-slate-200/80`), clean white card background.
  - *Typography*: Clean display headers, 15px high-legibility body prose, unboxed metadata (zero-pill discipline).
  - *Hairline Borders & Padding*: Single-elevation containers with `border border-slate-200/70` and spacious padding (`p-5 sm:p-6`).
- **Interactive Feedback & Accessibility**:
  - Full keyboard accessibility (`Tab`, `Enter`, `Space`) with `aria-expanded` and `aria-controls`.
  - Icon rotation transitions under 200ms (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Modular Reusable FAQ Component (`components/FAQAccordion.tsx`)**:
  - *Chosen Approach*: Create a dedicated `FAQAccordion` component accepting an array of `FAQ` items, optional title/subtitle, and category context.
  - *Why*: Eliminates boilerplate duplication across 9 page files while maintaining consistent layout, ARIA attributes, and analytics/click behaviors.
  - *Alternatives Considered*: Hardcoding accordion HTML inside each page (rejected for maintenance overhead and inconsistency).
- **Decision 2: Comprehensive FAQ Schema Integration in `components/SEO.tsx`**:
  - *Chosen Approach*: Extend `SEO.tsx` to automatically assemble a Schema.org `@graph` comprising `Physician`, `MedicalWebPage`, and `FAQPage` (with `Question` and `Answer` entities) whenever `faqs` are provided.
  - *Why*: AI crawlers prioritize valid `@graph` JSON-LD schemas linking doctor entity data with accepted answers on medical topics.
  - *Alternatives Considered*: Microdata inline attributes (rejected as harder to maintain and prone to parsing breaks).
- **Decision 3: Structured FAQ Content in `content.ts`**:
  - *Chosen Approach*: Group page-specific FAQs in a centralized, strongly typed structure `PAGE_FAQS` in `content.ts`, while maintaining backward-compatible `FAQS` for the main FAQ page.
  - *Why*: Keeps medical copy centralized for easy updates without touching component JSX.

---

## 4. Technical Architecture & Data Strategy

```
┌──────────────────────────────────────────────────────────────┐
│                        content.ts                            │
│  - DOCTOR_INFO                                               │
│  - SERVICES (with specialized 4-6 FAQs each)                 │
│  - PAGE_FAQS (Home, About, Services, Booking, Contact, etc.) │
└──────────────────────────────┬───────────────────────────────┘
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
┌───────────────────────┐             ┌────────────────────────┐
│   components/SEO.tsx  │             │ components/FAQAccordion│
│  - Document Title     │             │  - Accessible WAI-ARIA │
│  - Meta & Canonical   │             │  - Chevron transitions │
│  - JSON-LD @graph     │             │  - Direct CTA footer   │
│    * Physician        │             └───────────┬────────────┘
│    * MedicalWebPage   │                         │
│    * FAQPage (Schema) │                         │
└───────────┬───────────┘                         │
            │                                     │
            └──────────────────┬──────────────────┘
                               ▼
        ┌─────────────────────────────────────────────┐
        │                 Page Views                  │
        │  - Home, About, Services, TreatmentDetail   │
        │  - Appointment, Contact, Blog, Gallery, FAQ │
        └─────────────────────────────────────────────┘
```

### Component & State Mapping

1. **`components/FAQAccordion.tsx`**:
   - Accepts `title`, `subtitle`, `faqs: FAQ[]`, and optional `defaultOpenIndex?: number`.
   - Manages `openIndex` state with toggle behavior (`setOpenIndex(prev => prev === index ? null : index)`).
   - Renders semantic `<section>`, `<h3>`, `<button aria-expanded=...>`, and `<div role="region">`.
2. **`components/SEO.tsx`**:
   - Accepts `title`, `description`, `faqs?: FAQ[]`, and `pageType?: string`.
   - Generates structured JSON-LD including `@type: FAQPage` with mapped `mainEntity: [{ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } }]`.
   - Integrates `MedicalWebPage` declaring `aspect: "MedicalSpecialty"` and medical audience for search engines.
3. **Pages Integration**:
   - Replace or supplement existing static FAQ listings with `FAQAccordion` and pass `faqs` to `<SEO faqs={pageFaqs} ... />`.

---

## 5. Implementation Steps (To Execute Upon Approval)

1. **Update `content.ts`**:
   - Enrich `SERVICES` so all 7 treatments have 4–5 deep clinical questions (RIRS recovery, stent removal, TURP vs laser, BMG donor site healing, transplant criteria, etc.).
   - Add `PAGE_FAQS` object with rich Q&As for Home, About, Services, Appointment, Contact, Blog, and Gallery.
2. **Create `components/FAQAccordion.tsx`**:
   - Build accessible accordion with keyboard navigation, clean brand styling, and optional quick-contact trigger.
3. **Enhance `components/SEO.tsx`**:
   - Support `faqs` prop and auto-generate Schema.org `FAQPage` + `MedicalWebPage` structured data.
4. **Update All Pages**:
   - Connect `Home.tsx`, `About.tsx`, `Services.tsx`, `TreatmentDetail.tsx`, `Appointment.tsx`, `Contact.tsx`, `Blog.tsx`, `Gallery.tsx`, and `FAQ.tsx`.
5. **Verify Build**:
   - Run `compile_applet` to confirm zero TypeScript, lint, or Vite bundling issues.
