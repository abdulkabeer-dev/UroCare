
import { ServiceData, BlogPost, Testimonial, FAQ, GalleryImage, EmailConfig } from './types';

// =========================================================================
// EMAIL CONFIGURATION (Required for Contact Form ONLY)
// Follow the instructions in the chat to fill these 3 values.
// =========================================================================
export const EMAIL_CONFIG: EmailConfig = {
  serviceId: "YOUR_SERVICE_ID_HERE",  // e.g., "service_x93sk2"
  templateId: "YOUR_TEMPLATE_ID_HERE", // e.g., "template_8ds32"
  publicKey: "YOUR_PUBLIC_KEY_HERE",   // e.g., "user_823nsd..."
};

export const DOCTOR_INFO = {
  name: "Dr. N. Vishnu Vardhan Reddy",
  title: "Consultant Urologist, Andrologist & Renal Transplant Surgeon",
  qualifications: "MS (Gen Surg), MCh (Urology)",
  experience: "Ex- Consultant NIMS, Hyd",
  regNo: "APMC/FMR/ 88453",
  specializations: ["Endo Urology", "Renal Transplantation", "Laparoscopic Procedures", "Andrology", "Reconstructive Urology", "Paediatric Urology"],
  memberships: ["Indian Medical Association (IMA)", "SOGUS AP", "Urological Society of India (USI)"],
  achievements: [
    "Best paper award in endourology and kidney transplantation in state conference",
    "Best outgoing resident award during MCh training"
  ],
  philosophy: "Providing comprehensive urological care with advanced minimal invasive techniques for early recovery of patients. Specializing in 'No Cut, No Hole' procedures.",
  address: "Dr. Vishnu's Uro Andro Care, Kalyani Clinic, Opp. Vishwabharathi Hospital, Gayathri Estates, Kurnool",
  phone: "78424 10995, 90003 89927",
  email: "nvishnu44@gmail.com",
  whatsapp: "+91 90003 89927",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.069455380536!2d78.03265431484555!3d15.83069198902788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e74c82555555%3A0x6b7b7b7b7b7b7b7b!2sGayathri%20Estates%2C%20Kurnool%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1645524652456"
};

export const SERVICES: ServiceData[] = [
  {
    id: "endo-urology",
    title: "Endo Urology",
    shortDescription: "Minimally invasive endoscopic procedures: RIRS, URSL, PCNL, TURP, TURBT.",
    overview: "Endo Urology involves performing surgical procedures within the urinary tract using endoscopic cameras and instruments, avoiding external incisions. This covers treatments for Kidney Stones, Enlarged Prostate (BPH), and Bladder Tumors.",
    symptoms: ["Severe flank pain (Stones)", "Blood in urine", "Weak urine stream (Prostate)", "Frequent urination"],
    causes: ["Kidney Stones", "Benign Prostatic Hyperplasia (BPH)", "Bladder Tumors"],
    diagnosis: ["CT KUB", "Ultrasound", "Uroflowmetry"],
    treatment: ["RIRS (Laser Procedure, Scareless)", "URSL", "PCNL", "CLT", "TURP", "TURBT"],
    advancedTech: "Use of high-power Lasers for RIRS ('No Cut, No Hole') and Bipolar TURP.",
    whenToSee: "For kidney stone pain, urinary blockage, or blood in urine.",
    faqs: [
      { question: "What is RIRS and why is it called 'No Cut, No Hole' surgery?", answer: "RIRS (Retrograde Intrarenal Surgery) uses an ultra-thin, flexible endoscope navigated naturally through the urethra and ureter up into the kidney. A high-precision Holmium/Thulium laser pulverizes stones into fine dust without any cuts, holes, or external scars." },
      { question: "What size kidney stones can be treated with RIRS versus PCNL?", answer: "RIRS is ideal for kidney stones up to 2 cm, including multiple stones or stones in hard-to-reach lower calyces. For larger stones exceeding 2 to 2.5 cm or complex staghorn calculi, Mini-PCNL (a tiny 4-5mm keyhole entry in the back) is typically recommended." },
      { question: "How long is the recovery time after laser kidney stone surgery?", answer: "Because RIRS involves no incision or muscle trauma, most patients are discharged within 24 hours and can resume normal desk work and light daily activities within 2 to 3 days." },
      { question: "Will a DJ stent be placed, and when is it removed?", answer: "A temporary DJ (double-J) stent is often placed for 1 to 2 weeks post-surgery to maintain urinary drainage, prevent renal colic from stone fragments, and promote healing. Stent removal is a quick, outpatient, 2-minute endoscopic procedure." },
      { question: "What is TURP and how does it treat enlarged prostate (BPH)?", answer: "TURP (Transurethral Resection of the Prostate) is the gold standard endoscopic treatment for benign prostatic enlargement. Using a resectoscope through the natural urinary channel, excess blocking prostate tissue is precisely trimmed to restore strong, effortless urine flow." }
    ]
  },
  {
    id: "laparoscopic-procedures",
    title: "Laparoscopic Procedures",
    shortDescription: "Keyhole surgeries: Pyeloplasty, Nephrectomy, Adrenalectomy.",
    overview: "Laparoscopic procedures are minimally invasive 'keyhole' surgeries used to treat structural defects or remove organs with minimal scarring and faster recovery.",
    symptoms: ["Loin pain", "Abdominal masses", "Hypertension (Adrenal issues)"],
    causes: ["UPJ Obstruction", "Non-functioning kidneys", "Adrenal tumors"],
    diagnosis: ["CT Scan", "MRI", "Renal Scans"],
    treatment: ["Pyeloplasty", "Nephrectomy", "Adrenalectomy"],
    advancedTech: "Advanced 3D Laparoscopic systems for precise dissection and suturing.",
    whenToSee: "If diagnosed with conditions requiring kidney removal or reconstruction.",
    faqs: [
      { question: "What urological conditions require laparoscopic surgery?", answer: "Laparoscopic surgery is commonly performed for PUJ obstruction (Laparoscopic Pyeloplasty), non-functioning or chronically infected kidneys (Nephrectomy), kidney cancer, and adrenal gland tumors (Adrenalectomy)." },
      { question: "What are the advantages of 3D laparoscopic keyhole surgery over open surgery?", answer: "Laparoscopy replaces large 15-20cm muscle-cutting incisions with 3 to 4 tiny 5-10mm keyholes. This results in significantly less postoperative pain, reduced blood loss, minimal scarring, lower infection risk, and discharge in 2-3 days." },
      { question: "How many days of hospital stay are needed after laparoscopic nephrectomy or pyeloplasty?", answer: "Most patients stay in the hospital for 2 to 3 days post-operatively. Pain is managed easily with oral medications, and early walking is encouraged within 24 hours of surgery." },
      { question: "When can I resume work and strenuous physical exercise?", answer: "Desk work and routine domestic tasks can be resumed within 7 to 10 days. Heavy weightlifting, vigorous sports, and intense physical labor should be avoided for 4 to 6 weeks to allow internal tissues to strengthen." }
    ]
  },
  {
    id: "reconstructive-urology",
    title: "Reconstructive Urology",
    shortDescription: "Restoring function: Ureteric Reimplantation, VVF Repair, BMG Urethroplasty.",
    overview: "Reconstructive urology focuses on restoring the normal structure and function of the genitourinary tract resulting from trauma, disease, or congenital defects.",
    symptoms: ["Urinary leakage", "Strictures (narrowing)", "Trauma sequelae"],
    causes: ["Trauma", "Previous surgeries", "Infections"],
    diagnosis: ["RGU/MCU", "Cystoscopy"],
    treatment: ["Ureteric Reimplantation", "VVF Repair", "BMG Urethroplasty"],
    advancedTech: "Use of buccal mucosa graft (BMG) for durable uretheral reconstruction.",
    whenToSee: "If you have urethral strictures, urinary fistulas, or obstruction.",
    faqs: [
      { question: "What causes urethral stricture disease in men?", answer: "Urethral strictures—narrowing of the urinary passage—can be caused by pelvic trauma (straddle injuries, vehicular accidents), previous instrumentation, catheterization trauma, or chronic infections like lichen sclerosus." },
      { question: "What is BMG Urethroplasty and what is its success rate?", answer: "BMG (Buccal Mucosa Graft) Urethroplasty is the surgical benchmark for treating complex urethral strictures. A thin strip of inner cheek lining (buccal mucosa) is grafted onto the narrowed urethra, providing over 85-90% long-term freedom from recurrence." },
      { question: "How long does the inner cheek take to heal after graft harvesting?", answer: "The inside of the mouth has extraordinary regenerative capacity. The graft donor site typically heals within 3 to 5 days, and patients can consume soft foods immediately on postoperative day 1." },
      { question: "What is VVF Repair and can it cure involuntary urinary leakage?", answer: "Vesicovaginal Fistula (VVF) is an abnormal channel between the bladder and vagina often resulting from obstructed labor or pelvic surgery. Surgical repair closes the fistula completely, successfully restoring normal continence in over 90% of cases." }
    ]
  },
  {
    id: "renal-transplantation",
    title: "Renal Transplantation",
    shortDescription: "Expert surgical care for End-Stage Renal Disease.",
    overview: "Renal transplantation is the best treatment option for kidney failure. We provide comprehensive evaluation and surgical services for kidney transplants.",
    symptoms: ["Fatigue", "Swelling", "Reduced urine output", "High creatinine"],
    causes: ["Chronic Kidney Disease", "Diabetes", "Hypertension"],
    diagnosis: ["Blood tests", "HLA typing", "Cross-matching"],
    treatment: ["Renal Transplantation"],
    advancedTech: "Minimally invasive techniques for donor nephrectomy.",
    whenToSee: "When diagnosed with CKD Stage 5 or ESRD.",
    faqs: [
      { question: "Who is eligible for a kidney transplant at Dr. Vishnu's care?", answer: "Patients diagnosed with End-Stage Renal Disease (ESRD) or CKD Stage 5 who are medically fit for surgery and have a willing, medically matched living donor (or are registered on the state deceased donor registry) are candidates for evaluation." },
      { question: "What are the legal and medical requirements for living donor kidney donation?", answer: "In India, living donors must comply with the Transplantation of Human Organs Act (THOA). Near relatives (parents, spouse, siblings, children, grandparents) undergo medical fitness tests, blood group matching, HLA cross-matching, and formal committee clearance." },
      { question: "What is the success rate of renal transplantation compared to hemodialysis?", answer: "Kidney transplantation offers significantly superior long-term survival, freedom from dietary restrictions, and a substantially higher quality of life than lifelong hemodialysis, with 1-year graft survival rates exceeding 95%." },
      { question: "How frequently are follow-up visits and creatinine checks required after transplant?", answer: "In the first month, clinic visits occur weekly to monitor kidney function, adjust immunosuppressive medications, and prevent rejection. Visits taper to monthly and then quarterly as graft function stabilizes." }
    ]
  },
  {
    id: "uro-oncology",
    title: "Uro Oncology",
    shortDescription: "Cancer care for Kidney, Bladder, and Prostate.",
    overview: "Specialized care for malignancies of the urinary tract. We offer surgical and medical management for various urological cancers.",
    symptoms: ["Blood in urine", "Lump in abdomen", "Weight loss", "Bone pain"],
    causes: ["Smoking", "Genetics", "Chemical exposure"],
    diagnosis: ["CT/MRI", "Biopsy", "PET Scan"],
    treatment: ["Radical Nephrectomy", "Radical Cystectomy", "Prostate Cancer Surgery"],
    advancedTech: "Oncological clearance with organ preservation whenever possible.",
    whenToSee: "Visible blood in urine or unexplained weight loss.",
    faqs: [
      { question: "What are the common warning signs of urological cancers?", answer: "The most critical warning sign is painless visible blood in the urine (hematuria). Other symptoms include unexplained lower back/flank pain, palpable abdominal masses, persistent pelvic pain, or difficulty urinating in older men." },
      { question: "Can kidney cancer be cured while saving the healthy portion of the kidney?", answer: "Yes. For localized kidney tumors under 4-7 cm, Dr. Vishnu performs Partial Nephrectomy (Nephron-Sparing Surgery), surgically removing only the tumor with clear margins while preserving healthy kidney tissue to maintain long-term renal function." },
      { question: "What is a PSA test and when should men get screened for prostate cancer?", answer: "Prostate-Specific Antigen (PSA) is a simple blood test measuring a protein produced by the prostate. Men over 50 (or over 45 with a family history) should undergo annual PSA testing and digital rectal examinations for early prostate cancer detection." },
      { question: "What is TURBT and how is bladder cancer treated?", answer: "TURBT (Transurethral Resection of Bladder Tumor) is an endoscopic procedure where bladder tumors are resected through the natural urinary channel without any incision. It serves as both definitive treatment for superficial tumors and crucial staging for muscle-invasive cancer." }
    ]
  },
  {
    id: "andrology",
    title: "Andrology",
    shortDescription: "Male Infertility and Erectile Dysfunction care.",
    overview: "Andrology deals with male reproductive health. We offer specialized treatments for male infertility, erectile dysfunction, and sexual health issues.",
    symptoms: ["Inability to conceive", "Erectile difficulties", "Low libido"],
    causes: ["Varicocele", "Hormonal imbalance", "Vascular issues"],
    diagnosis: ["Semen Analysis", "Penile Doppler", "Hormone Profile"],
    treatment: ["Male Infertility Treatment", "Erectile Dysfunction Treatment"],
    advancedTech: "Micro-surgical techniques for varicocele repair.",
    whenToSee: "If facing fertility issues or sexual dysfunction.",
    faqs: [
      { question: "What are the most common treatable causes of male infertility?", answer: "Common causes include varicoceles (enlarged veins in the scrotum elevating testicular temperature), hormonal imbalances, ejaculatory duct obstructions, lifestyle factors, and infections. Over 60% of male infertility factors can be medically or surgically corrected." },
      { question: "How does microsurgical varicocelectomy improve sperm count and quality?", answer: "Using high-power surgical magnification, Dr. Vishnu ligates abnormal testicular veins while safeguarding the delicate testicular artery and lymphatic channels. This restores optimal testicular blood circulation and significantly improves sperm density and motility." },
      { question: "What modern treatments exist for Erectile Dysfunction (ED)?", answer: "ED is approached systematically starting with comprehensive vascular and hormone evaluations, lifestyle modifications, oral PDE-5 inhibitors, intracavernosal therapy, and advanced penile prosthesis implantation for refractory cases." },
      { question: "Are consultations for male reproductive and sexual health strictly confidential?", answer: "Yes, 100%. All discussions, physical examinations, and diagnostic evaluations at Dr. Vishnu's Uro Andro Care clinic are conducted with absolute privacy, clinical empathy, and strict patient confidentiality." }
    ]
  },
  {
    id: "paediatric-urology",
    title: "Paediatric Urology",
    shortDescription: "Hypospadias Repair, Herniotomy, Undescended Testis.",
    overview: "Specialized care for urological problems in children, addressing congenital abnormalities and other conditions.",
    symptoms: ["Abnormal urine stream", "Missing testis in scrotum", "Swelling"],
    causes: ["Congenital defects"],
    diagnosis: ["Ultrasound", "Clinical Examination"],
    treatment: ["Hypospadias Repair", "Herniotomy", "Undescended Testis"],
    advancedTech: "Magnification-assisted surgery for precision in small children.",
    whenToSee: "If you notice genital abnormalities in your child.",
    faqs: [
      { question: "What is Hypospadias and what is the optimal age for corrective surgery?", answer: "Hypospadias is a congenital condition where the urinary opening is located on the underside of the penis rather than at the tip. Corrective cosmetic and functional surgery is ideally performed between 6 and 18 months of age before the child begins toilet training." },
      { question: "Why is it crucial to treat an Undescended Testis (Orchiopexy) before age 1?", answer: "If a testicle fails to descend into the scrotum, higher abdominal temperatures can impair future fertility and increase tumor risk. An Orchiopexy repositioning the testis is recommended between 6 and 12 months for optimal preservation of testicular health." },
      { question: "How is pediatric hydronephrosis or pelvi-ureteric junction (PUJ) obstruction evaluated?", answer: "Antenatal or childhood hydronephrosis is assessed non-invasively through serial renal ultrasounds and dynamic nuclear renal scans (like EC or MAG3 scans) to differentiate non-obstructive dilation from true functional blockage requiring pyeloplasty." },
      { question: "Is surgery for infants and young children safe and pain-controlled?", answer: "Yes. Surgeries are performed in specialized pediatric surgical environments under gentle general anesthesia administered by pediatric anesthesiologists, with caudal regional blocks ensuring comfortable, pain-free recovery." }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "kidney-stone-prevention",
    title: "Preventing Kidney Stones: Tips from Dr. Vishnu",
    excerpt: "Kidney stones are painful but preventable. Learn about hydration and diet changes.",
    date: "October 15, 2023",
    category: "Kidney Health",
    content: "Kidney stones are often caused by dehydration and dietary habits. Drinking 3-4 liters of water a day is the best prevention..."
  },
  {
    id: "rirs-surgery",
    title: "RIRS: The No Cut, No Hole Surgery for Stones",
    excerpt: "Understanding Retrograde Intrarenal Surgery (RIRS) and its benefits.",
    date: "September 20, 2023",
    category: "Endourology",
    content: "RIRS is a revolutionary procedure where a flexible scope reaches the kidney through natural urinary passages to laser stones..."
  },
  {
    id: "male-infertility-awareness",
    title: "Addressing Male Infertility",
    excerpt: "Infertility is not just a female issue. Male factors contribute to 50% of cases.",
    date: "August 10, 2023",
    category: "Andrology",
    content: "Conditions like Varicocele can affect sperm production. Microsurgical repair can significantly improve fertility outcomes..."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Suresh Babu", condition: "Kidney Stone (RIRS)", text: "I underwent RIRS surgery by Dr. Vishnu. It was completely painless and I was discharged the next day. Excellent care!", rating: 5 },
  { id: 2, name: "Rama Rao", condition: "Prostate Surgery", text: "Dr. Vishnu Reddy is very patient and explained the TURP procedure well. My father is recovering very well.", rating: 5 },
  { id: 3, name: "Venkatesh", condition: "Male Infertility", text: "We consulted for fertility issues. Dr. Vishnu's treatment helped us. He is very knowledgeable in Andrology.", rating: 5 },
  { id: 4, name: "Anitha K.", condition: "Kidney Stone Treatment", text: "The 'No Cut, No Hole' surgery was a miracle. I had no pain after surgery and Dr. Vishnu's team took great care of me.", rating: 5 },
  { id: 5, name: "Ravi Kumar", condition: "Urinary Tract Infection", text: "Best urologist in Kurnool. I suffered for months before meeting Dr. Vishnu. His diagnosis was spot on.", rating: 5 },
  { id: 6, name: "Mohammed Ali", condition: "Paediatric Urology", text: "We visited for my son's surgery. Dr. Vishnu is excellent with children and explained everything clearly to us.", rating: 5 }
];

export const PAGE_FAQS = {
  home: [
    { question: "Who is Dr. N. Vishnu Vardhan Reddy and what are his clinical specialties in Kurnool?", answer: "Dr. N. Vishnu Vardhan Reddy is a Consultant Urologist, Andrologist, and Renal Transplant Surgeon in Kurnool holding MS (Gen Surg) and MCh (Urology) qualifications. Former consultant at NIMS Hyderabad, he specializes in 'No Cut, No Hole' laser stone surgeries (RIRS), prostate laser surgery (TURP), laparoscopic keyhole procedures, male infertility, and kidney transplantation." },
    { question: "Where is Dr. Vishnu's Uro Andro Care clinic located in Kurnool?", answer: "The clinic is located at Kalyani Clinic, situated directly Opposite Vishwabharathi Hospital in Gayathri Estates, Kurnool, Andhra Pradesh 518001. The location provides easy road connectivity, ample parking, and full wheelchair accessibility." },
    { question: "What are the clinic consultation timings and days of operation?", answer: "Dr. Vishnu consults Monday through Saturday during two daily shifts: Morning from 10:00 AM to 2:00 PM, and Evening from 5:30 PM to 8:30 PM. The clinic is closed on Sundays for planned elective procedures and emergency cases." },
    { question: "What is 'No Cut, No Hole' kidney stone laser surgery?", answer: "'No Cut, No Hole' refers to RIRS (Retrograde Intrarenal Surgery), where a flexible scope enters through natural urinary channels to disintegrate kidney stones using high-power holmium laser energy. Patients experience no incisions, negligible pain, and return home within 24 hours." },
    { question: "Can I consult for emergency severe kidney stone pain without a prior appointment?", answer: "Yes. Patients experiencing acute renal colic (severe back/flank pain radiating to the groin with vomiting) are prioritized for immediate diagnostic evaluation, emergency pain relief, and urgent intervention if a stone causes urinary obstruction." },
    { question: "Which hospitals in Kurnool does Dr. Vishnu perform inpatient surgeries at?", answer: "Dr. Vishnu performs advanced inpatient laser surgeries, laparoscopic reconstructions, and renal transplants at premier tertiary care hospitals in Kurnool equipped with advanced modular operation theatres and intensive care units." }
  ],
  about: [
    { question: "What medical qualifications and super-specialty training does Dr. Vishnu hold?", answer: "Dr. Vishnu Vardhan Reddy completed his MBBS, followed by MS in General Surgery, and super-specialty MCh in Urology from prestigious government medical institutions. He was recognized with the 'Best Outgoing Resident Award' during his MCh training." },
    { question: "What was Dr. Vishnu's experience at NIMS (Nizam's Institute of Medical Sciences) Hyderabad?", answer: "Dr. Vishnu served as a consultant at NIMS Hyderabad, one of South India's premier apex institutes. There, he managed complex endourology cases, performed living donor and cadaveric renal transplants, and handled complicated reconstructive urology referrals." },
    { question: "Is Dr. Vishnu registered with the Andhra Pradesh Medical Council?", answer: "Yes, Dr. N. Vishnu Vardhan Reddy is formally licensed and registered with the Andhra Pradesh Medical Council under Registration Number APMC/FMR/88453." },
    { question: "What professional medical associations is Dr. Vishnu a member of?", answer: "Dr. Vishnu is an active life member of the Urological Society of India (USI), the Society of Genitourinary Surgeons (SOGUS AP), and the Indian Medical Association (IMA)." },
    { question: "What is Dr. Vishnu's surgical philosophy?", answer: "Dr. Vishnu's care philosophy focuses on 'Minimum Intervention, Maximum Recovery'—prioritizing scarless endoscopic laser and 3D laparoscopic techniques to reduce patient discomfort, accelerate healing, and protect organ function." }
  ],
  services: [
    { question: "What range of urological services are offered at Dr. Vishnu's practice?", answer: "Comprehensive services include Endo Urology (RIRS, URSL, PCNL, TURP), Laparoscopic Reconstructive Surgery (Pyeloplasty, Nephrectomy), Renal Transplantation, Uro-Oncology (Bladder, Kidney, Prostate cancers), Andrology & Male Infertility (Varicocelectomy), and Paediatric Urology (Hypospadias, Undescended Testis)." },
    { question: "How does Dr. Vishnu determine if kidney stones require surgery versus medical therapy?", answer: "Small stones under 5mm without severe obstruction or infection can often be passed using medical expulsive therapy, hydration, and alkalizers. Stones larger than 6-7mm, causing severe pain, hydronephrosis, or recurrent infection, are managed with scarless laser RIRS or URSL." },
    { question: "Can I get a second opinion on surgical recommendations or transplant decisions?", answer: "Yes. Dr. Vishnu frequently provides thorough second opinions on CT scans, biopsy reports, and treatment recommendations for kidney stones, prostate surgeries, and renal transplants to help patients make informed decisions." },
    { question: "Are diagnostic facilities like Uroflowmetry available at the clinic?", answer: "Yes, the clinic offers computerized uroflowmetry, microscopic urine analysis, diagnostic ultrasound coordination, and comprehensive male fertility workups." }
  ],
  appointment: [
    { question: "How can I book an appointment with Dr. N. Vishnu Vardhan Reddy?", answer: "Appointments can be booked online through the website booking form, by calling the clinic directly at 78424 10995 or 90003 89927, or via WhatsApp at +91 90003 89927." },
    { question: "What documents and test reports should I bring to my appointment?", answer: "Please bring all prior medical records including ultrasound abdomen reports, CT KUB scans, X-rays, recent blood work (serum creatinine, blood urea, PSA), urine routine/culture reports, and a list of your current medications." },
    { question: "What is the consultation fee and what payment modes are accepted?", answer: "The consultation fee is transparent and affordable. The clinic accepts UPI payments (Google Pay, PhonePe, Paytm), credit/debit cards, and cash." },
    { question: "Are same-day walk-in appointments accommodated?", answer: "While scheduled appointments minimize waiting time, walk-in patients are always accommodated during daily OPD hours (10:00 AM - 2:00 PM and 5:30 PM - 8:30 PM)." },
    { question: "Can I reschedule or cancel my appointment if needed?", answer: "Yes, you can easily reschedule or cancel by calling or WhatsApping the clinic at least 2 hours before your scheduled consultation slot." }
  ],
  contact: [
    { question: "What is the exact landmark to reach Dr. Vishnu's Uro Andro Care?", answer: "The clinic is situated at Kalyani Clinic, directly opposite Vishwabharathi Hospital, in Gayathri Estates, Kurnool, Andhra Pradesh 518001." },
    { question: "Is parking and wheelchair accessibility available for elderly patients?", answer: "Yes, Kalyani Clinic has ground-floor accessibility with ramp access for wheelchairs, patient-friendly doorways, and parking space for two-wheelers and cars." },
    { question: "What are the direct helpline numbers for the clinic?", answer: "You can reach Dr. Vishnu's clinical desk at 78424 10995 or 90003 89927 for appointments, prescription queries, and surgical coordination." },
    { question: "Are evening consultation hours convenient for office-goers?", answer: "Yes, evening consultations run from 5:30 PM to 8:30 PM Monday through Saturday, allowing working professionals to visit without taking time off during the day." }
  ],
  blog: [
    { question: "Are the health articles on this blog medically reviewed by Dr. Vishnu?", answer: "Yes. Every educational article on kidney stones, prostate care, male fertility, and reconstructive surgery is authored or medically verified by Dr. N. Vishnu Vardhan Reddy according to international clinical guidelines." },
    { question: "How much water should I drink daily in Kurnool's climate to prevent kidney stones?", answer: "In Rayalaseema's warm climate, fluid losses through sweat are elevated. Urology guidelines recommend consuming 3 to 4 liters of clean water daily to achieve a urine output of at least 2.5 liters, which keeps stone-forming minerals diluted." },
    { question: "Can lifestyle and dietary changes permanently dissolve calcium oxalate stones?", answer: "Dietary adjustments prevent new stone crystallization and arrest growth, but established hard calcium stones cannot be dissolved by drinking water or taking herbs. Stones causing pain or obstruction require endoscopic removal." },
    { question: "When should someone with urinary burning see a urologist instead of taking over-the-counter antibiotics?", answer: "If urinary burning persists beyond 48 hours, is accompanied by fever, chills, blood in the urine, or occurs in men or children, specialist urological evaluation is crucial to identify root causes and avoid antibiotic resistance." }
  ],
  gallery: [
    { question: "What medical technology and facilities are depicted in the clinic gallery?", answer: "The gallery showcases our modern patient consultation chambers, sterile diagnostic equipment, digital uroflowmetry setup, and state-of-the-art modular laser operation suites utilized for minimally invasive procedures." },
    { question: "Where are inpatient surgeries and renal transplants conducted?", answer: "Inpatient surgical procedures, including RIRS, Laparoscopic Pyeloplasty, and Kidney Transplants, are performed at accredited super-specialty partner hospitals in Kurnool with 24/7 ICU backup and dedicated urology operating rooms." },
    { question: "What infection control and sterilization standards are practiced?", answer: "All endoscopic and reusable instruments undergo strict autoclave sterilization, plasma sterilization, and chemical disinfection compliant with international NABH and CDC healthcare infection control standards." }
  ]
};

export const FAQS: FAQ[] = [
  { category: "General", question: "Where is Dr. Vishnu's Uro Andro Care clinic located?", answer: "The clinic is located at Kalyani Clinic, Opp. Vishwabharathi Hospital, Gayathri Estates, Kurnool, Andhra Pradesh 518001." },
  { category: "General", question: "What are the daily OPD consultation timings?", answer: "Monday through Saturday: 10:00 AM to 2:00 PM (Morning OPD) and 5:30 PM to 8:30 PM (Evening OPD). Closed on Sundays." },
  { category: "Kidney Stones", question: "What is 'No Cut, No Hole' RIRS kidney stone surgery?", answer: "RIRS (Retrograde Intrarenal Surgery) reaches kidney stones through natural urinary channels using a flexible laser scope, vaporizing stones into fine dust with zero cuts, zero stitches, and fast 24-hour recovery." },
  { category: "Kidney Stones", question: "How can I prevent kidney stone recurrence?", answer: "Drink 3 to 4 liters of water daily, reduce dietary sodium/salt intake, consume moderate amounts of animal protein, and maintain adequate dietary calcium. Periodic metabolic evaluations help identify individual stone risks." },
  { category: "Prostate & Bladder", question: "What causes weak urine flow and frequent night urination in men?", answer: "In men over 50, benign enlargement of the prostate (BPH) commonly squeezes the urethra. Dr. Vishnu offers medical therapy as well as scarless endoscopic laser surgery (TURP/Bipolar) to restore smooth flow." },
  { category: "Prostate & Bladder", question: "What should I do if I notice blood in my urine (Hematuria)?", answer: "Blood in urine should never be ignored, even if painless and resolves on its own. It requires immediate urological evaluation via ultrasound or cystoscopy to rule out infections, urinary stones, or bladder tumors." },
  { category: "Transplant", question: "What is the success rate of kidney transplantation?", answer: "Renal transplantation provides over 95% one-year graft survival rate, dramatically improving quality of life, energy levels, and life expectancy compared to continuous maintenance hemodialysis." },
  { category: "Andrology", question: "Can male infertility and low sperm count be treated?", answer: "Yes. Over 60% of male infertility cases stem from treatable conditions like varicoceles, hormone deficiencies, or blockages. Microsurgical varicocelectomy and personalized hormonal therapies offer high success rates." },
  { category: "Andrology", question: "Are male sexual health and erectile dysfunction consults kept confidential?", answer: "Absolutely. All andrology and sexual wellness consultations are conducted in complete privacy with compassionate, evidence-based medical care." },
  { category: "Paediatrics", question: "Does Dr. Vishnu treat urological conditions in infants and children?", answer: "Yes, Dr. Vishnu specializes in Paediatric Urology, offering microsurgical correction for congenital conditions including Hypospadias, Undescended Testis, PUJ Obstruction, and Vesicoureteral Reflux (VUR)." },
  { category: "General", question: "How can I schedule an appointment?", answer: "You can book directly through our website booking form or call/WhatsApp the clinic at 78424 10995 or 90003 89927." },
  { category: "General", question: "Are health insurance and cashless claims supported?", answer: "Yes, surgical procedures performed at our affiliated partner hospitals in Kurnool support cashless insurance coverage and reimbursement across leading private health insurances and government schemes." }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://vexfore.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-17-at-1.40.42-PM.jpeg?auto=format&fit=crop&q=80&w=800",
    alt: "Clinic Gallery",
    caption: "Clinic Gallery"
  },
  {
    id: 2,
    src: "https://vexfore.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-17-at-1.40.43-PM-1.jpeg?auto=format&fit=crop&q=80&w=800",
    alt: "Clinic Gallery",
    caption: "Clinic Gallery"
  },
  {
    id: 3,
    src: "https://vexfore.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-17-at-1.40.43-PM.jpeg?auto=format&fit=crop&q=80&w=800",
    alt: "Clinic Gallery",
    caption: "Clinic Gallery"
  },
  {
    id: 4,
    src: "https://vexfore.com/wp-content/uploads/2025/12/gemini-3-pro-image-preview-2k-nano-banana-pro_a_adjust_the_image_lig-e1766060246402.png?auto=format&fit=crop&q=80&w=800",
    alt: "Doctor",
    caption: "Dr. Vishnu"
  },
];
