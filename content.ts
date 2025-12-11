import { ServiceData, BlogPost, Testimonial, FAQ } from './types';

export const DOCTOR_INFO = {
  name: "Dr. Ananya Sharma",
  title: "Senior Consultant Urologist & Andrologist",
  qualifications: "MBBS, MS (Gen Surgery), MCh (Urology)",
  experience: "15+ Years of Experience",
  specializations: ["Kidney Stones", "Laser Prostate Surgery", "Male Infertility", "Laparoscopic Urology"],
  memberships: ["Urological Society of India (USI)", "European Association of Urology (EAU)", "American Urological Association (AUA)"],
  philosophy: "Providing compassionate, evidence-based urological care using the most advanced minimally invasive technologies to ensure faster recovery and better outcomes.",
  address: "123 Medical Park, Wellness Avenue, Health City, HC 560001",
  phone: "+1 (555) 123-4567",
  email: "contact@drurologist.com",
  whatsapp: "+1 (555) 987-6543",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a75d5b128!2sMedical%20Center!5e0!3m2!1sen!2sin!4v1645524652456!5m2!1sen!2sin"
};

export const SERVICES: ServiceData[] = [
  {
    id: "kidney-stones",
    title: "Kidney Stone Treatment",
    shortDescription: "Advanced laser and shockwave therapies for painless stone removal.",
    overview: "Kidney stones are hard deposits made of minerals and salts that form inside your kidneys. We offer comprehensive care ranging from medical management to advanced surgical interventions like RIRS and ESWL.",
    symptoms: ["Severe, sharp pain in the side and back", "Pain that radiates to the lower abdomen and groin", "Pink, red or brown urine", "Nausea and vomiting", "Persistent need to urinate"],
    causes: ["Dehydration", "High-protein, high-salt, or high-sugar diet", "Obesity", "Digestive diseases and surgery", "Family history"],
    diagnosis: ["Blood testing", "Urine testing", "Imaging (CT scans, X-rays)", "Analysis of passed stones"],
    treatment: ["Medical Expulsive Therapy", "Extracorporeal Shock Wave Lithotripsy (ESWL)", "Ureteroscopy (URS)", "Percutaneous Nephrolithotomy (PCNL)"],
    advancedTech: "We use high-power Holmium Laser for precise stone fragmentation (RIRS) ensuring minimal damage to surrounding tissues.",
    whenToSee: "Seek immediate medical attention if you experience severe pain, blood in urine, or difficulty passing urine along with fever.",
    faqs: [
      { question: "Is kidney stone surgery painful?", answer: "Modern laser surgeries are minimally invasive and cause very little discomfort compared to traditional open surgeries." },
      { question: "How can I prevent kidney stones?", answer: "Staying hydrated, reducing salt intake, and maintaining a balanced diet are key prevention strategies." }
    ]
  },
  {
    id: "bph",
    title: "Prostate Enlargement (BPH)",
    shortDescription: "Minimally invasive treatments for urinary issues caused by enlarged prostate.",
    overview: "Benign Prostatic Hyperplasia (BPH) is a common condition in men as they age. An enlarged prostate gland can cause uncomfortable urinary symptoms, such as blocking the flow of urine out of the bladder.",
    symptoms: ["Frequent or urgent need to urinate", "Nocturia (increased frequency at night)", "Difficulty starting urination", "Weak urine stream", "Dribbling at the end of urination"],
    causes: ["Aging", "Hormonal changes", "Family history"],
    diagnosis: ["Digital Rectal Exam (DRE)", "Prostate-Specific Antigen (PSA) blood test", "Urine flow test", "Cystoscopy"],
    treatment: ["Alpha-blockers & 5-alpha reductase inhibitors", "Transurethral Resection of the Prostate (TURP)", "Holmium Laser Enucleation of the Prostate (HoLEP)", "Prostatic Urethral Lift (UroLift)"],
    advancedTech: "HoLEP (Holmium Laser Enucleation of the Prostate) allows for the removal of large prostates without open surgery, with minimal bleeding and faster recovery.",
    whenToSee: "Consult a urologist if you are facing difficulty urinating or if your sleep is frequently disturbed by the need to urinate.",
    faqs: [
      { question: "Does BPH lead to prostate cancer?", answer: "No, BPH is not cancer and does not increase your risk of developing prostate cancer, though symptoms can be similar." }
    ]
  },
  {
    id: "prostate-cancer",
    title: "Prostate Cancer Care",
    shortDescription: "Early detection and comprehensive oncological care for prostate health.",
    overview: "Prostate cancer is one of the most common types of cancer. Many prostate cancers grow slowly and are confined to the prostate gland, where they may not cause serious harm. However, while some types of prostate cancer grow slowly and may need minimal or even no treatment, other types are aggressive and can spread quickly.",
    symptoms: ["Trouble urinating", "Decreased force in the stream of urine", "Blood in the urine", "Blood in the semen", "Bone pain", "Losing weight without trying"],
    causes: ["Genetic mutations", "Age (risk increases after 50)", "Race", "Family history", "Obesity"],
    diagnosis: ["PSA Screening", "Digital Rectal Exam", "Ultrasound", "MRI Fusion Biopsy"],
    treatment: ["Active Surveillance", "Radical Prostatectomy (Robotic/Laparoscopic)", "Radiation Therapy", "Hormone Therapy"],
    advancedTech: "We utilize Robotic-Assisted Laparoscopic Radical Prostatectomy for precise removal of the prostate with nerve-sparing techniques to preserve urinary and sexual function.",
    whenToSee: "Men over 50 (or 45 with family history) should discuss screening with a urologist.",
    faqs: [
      { question: "Is prostate cancer curable?", answer: "Yes, when detected early and confined to the prostate, the cure rates are very high." }
    ]
  },
  {
    id: "incontinence",
    title: "Urinary Incontinence",
    shortDescription: "Restoring control and confidence with specialized therapies.",
    overview: "Urinary incontinence — the loss of bladder control — is a common and often embarrassing problem. The severity ranges from occasionally leaking urine when you cough or sneeze to having an urge to urinate that's so sudden and strong you don't get to a toilet in time.",
    symptoms: ["Leaking urine when coughing/sneezing (Stress Incontinence)", "Sudden intense urge to urinate (Urge Incontinence)", "Frequent dribbling (Overflow Incontinence)"],
    causes: ["Weak pelvic floor muscles", "Nerve damage", "Enlarged prostate", "Menopause", "Urinary Tract Infections"],
    diagnosis: ["Urinalysis", "Bladder diary", "Post-void residual measurement", "Urodynamic testing"],
    treatment: ["Pelvic floor exercises (Kegels)", "Bladder training", "Medications", "TVT/TOT Tape Surgeries", "Artificial Urinary Sphincter"],
    advancedTech: "Advanced Urodynamics lab for precise diagnosis of bladder function issues.",
    whenToSee: "If incontinence affects your daily activities or quality of life, seek help. It is often treatable.",
    faqs: [
      { question: "Is incontinence a normal part of aging?", answer: "No, while more common as we age, it is not inevitable and can be treated successfully." }
    ]
  },
  {
    id: "erectile-dysfunction",
    title: "Erectile Dysfunction (ED)",
    shortDescription: "Confidential and effective solutions for men's sexual health.",
    overview: "Erectile dysfunction (impotence) is the inability to get and keep an erection firm enough for sex. Having erection trouble from time to time isn't necessarily a cause for concern. If erectile dysfunction is an ongoing issue, however, it can cause stress, affect your self-confidence and contribute to relationship problems.",
    symptoms: ["Trouble getting an erection", "Trouble keeping an erection", "Reduced sexual desire"],
    causes: ["Heart disease", "Diabetes", "Obesity", "Low testosterone", "Psychological causes"],
    diagnosis: ["Physical exam", "Blood tests", "Penile Doppler Ultrasound", "Psychological exam"],
    treatment: ["Oral medications", "Penile Injections", "Vacuum Erection Devices", "Penile Implants (Prosthesis)"],
    advancedTech: "Low-intensity shockwave therapy (Li-ESWT) for vascular regeneration and penile implants for definitive management.",
    whenToSee: "If you have persistent trouble with erections, consult early as it can be a sign of underlying heart disease.",
    faqs: [
      { question: "Can ED be cured?", answer: "Many cases are reversible, and almost all cases can be successfully managed with treatment." }
    ]
  },
  {
    id: "male-infertility",
    title: "Male Infertility",
    shortDescription: "Evaluation and treatment to help you build your family.",
    overview: "Male infertility is any health issue in a man that lowers the chances of his female partner getting pregnant. About 13 out of 100 couples can't get pregnant with unprotected sex. In over a third of infertility cases, the problem is with the man.",
    symptoms: ["Problems with sexual function", "Pain, swelling or lump in the testicle area", "Recurrent respiratory infections", "Decreased facial or body hair"],
    causes: ["Varicocele", "Infection", "Ejaculation issues", "Hormone imbalances", "Defects of tubules"],
    diagnosis: ["Semen analysis", "Scrotal ultrasound", "Hormone testing", "Genetic tests"],
    treatment: ["Varicocele repair (Microscopic Varicocelectomy)", "Antibiotic treatment", "Hormone replacement", "Sperm retrieval techniques (TESA/PESA)"],
    advancedTech: "Microscopic Varicocelectomy allows for higher success rates in improving sperm quality compared to traditional surgery.",
    whenToSee: "If you have been trying to conceive for a year without success, both partners should be evaluated.",
    faqs: [
      { question: "Is male infertility common?", answer: "Yes, it contributes to approximately 40-50% of all infertility cases." }
    ]
  },
  {
    id: "uti",
    title: "UTI Treatment",
    shortDescription: "Rapid relief and prevention strategies for recurrent infections.",
    overview: "A urinary tract infection (UTI) is an infection in any part of your urinary system — your kidneys, ureters, bladder and urethra. Most infections involve the lower urinary tract — the bladder and the urethra.",
    symptoms: ["Strong urge to urinate", "Burning sensation when urinating", "Passing frequent, small amounts of urine", "Cloudy urine", "Pelvic pain"],
    causes: ["Bacteria entering the urinary tract", "Sexual activity", "Blockages like kidney stones", "Suppressed immune system"],
    diagnosis: ["Urine sample analysis", "Urine culture", "CT scan (for recurrent cases)"],
    treatment: ["Antibiotics", "Pain relievers", "Vaginal estrogen therapy (for postmenopausal women)"],
    advancedTech: "Culture-sensitive antibiotic therapy to prevent resistance.",
    whenToSee: "If you have symptoms of a UTI, especially if accompanied by fever or back pain.",
    faqs: [
      { question: "Why do I keep getting UTIs?", answer: "Recurrent UTIs can be due to incomplete emptying of the bladder, stones, or anatomical issues that need investigation." }
    ]
  },
   {
    id: "pediatric-urology",
    title: "Pediatric Urology",
    shortDescription: "Specialized care for urological conditions in children.",
    overview: "Pediatric urology focuses on congenital and acquired urological conditions in infants, children, and adolescents. We treat conditions like undescended testes, hypospadias, and bedwetting with utmost care.",
    symptoms: ["Bedwetting after age 5", "Swelling in the scrotum", "Abnormal urine stream", "Recurrent UTIs in children"],
    causes: ["Congenital birth defects", "Developmental delays", "Infections"],
    diagnosis: ["Ultrasound", "Voiding Cystourethrogram (VCUG)", "Nuclear scans"],
    treatment: ["Circumcision", "Orchidopexy (for undescended testis)", "Hypospadias repair", "Pyeloplasty"],
    advancedTech: "Minimally invasive laparoscopic techniques adapted for pediatric patients for faster healing.",
    whenToSee: "If your child has frequent urinary infections, pain, or visible abnormalities in the genital area.",
    faqs: [
      { question: "Is surgery safe for infants?", answer: "Yes, our specialized pediatric anesthesia and surgical teams ensure the highest safety standards for young patients." }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "symptoms-kidney-stones",
    title: "Early Symptoms of Kidney Stones You Should Never Ignore",
    excerpt: "Learn the warning signs of kidney stones and when to seek immediate medical help to avoid complications.",
    date: "October 15, 2023",
    category: "Kidney Health",
    content: "Kidney stones can be silent until they start moving. The classic presentation is sudden, severe pain in the flank that radiates to the groin. Other subtle signs include pinkish urine, nausea, and a persistent urge to urinate. Ignoring these can lead to kidney damage or severe infection. Hydration is your first line of defense..."
  },
  {
    id: "laser-prostate-surgery",
    title: "Laser Prostate Surgery: Benefits & Recovery Guide",
    excerpt: "Why HoLEP and GreenLight laser surgeries are becoming the gold standard for BPH treatment.",
    date: "September 22, 2023",
    category: "Prostate Health",
    content: "For men suffering from BPH, laser surgery offers a minimally invasive alternative to traditional TURP. Procedures like HoLEP result in less bleeding, shorter hospital stays (often 24 hours), and quicker return to normal activities. This guide covers what to expect before, during, and after the procedure..."
  },
  {
    id: "ed-causes-treatment",
    title: "Why Men Experience Erectile Dysfunction & How to Treat It",
    excerpt: "ED is often a vascular issue. Discover the modern treatments that are restoring confidence for men.",
    date: "August 10, 2023",
    category: "Men's Health",
    content: "Erectile dysfunction is not just a part of aging; it's a medical condition often linked to blood flow, diabetes, or heart health. Modern treatments range from PDE5 inhibitors to shockwave therapy and penile implants. Addressing ED early can also serve as a warning system for cardiovascular health..."
  },
  {
    id: "prevent-recurrent-utis",
    title: "How to Prevent Recurrent UTIs",
    excerpt: "Practical lifestyle changes and medical advice to stop urinary tract infections from coming back.",
    date: "July 05, 2023",
    category: "Urinary Health",
    content: "Recurrent UTIs can be frustrating. Prevention starts with hydration, proper hygiene, and sometimes prophylactic antibiotics. We also explore the role of cranberry supplements, probiotics, and voiding habits in maintaining a sterile urinary tract..."
  },
  {
    id: "consult-urologist-early",
    title: "Top Reasons to Consult a Urologist Early",
    excerpt: "From blood in urine to changes in voiding patterns, knowing when to see a specialist can save your life.",
    date: "June 18, 2023",
    category: "General Urology",
    content: "Many urological conditions, including cancers, are asymptomatic in early stages. Routine checkups for men over 50 (Prostate PSA) and immediate consultation for symptoms like hematuria (blood in urine) are critical. Early intervention in cases of stones or strictures prevents long-term kidney damage..."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Rajesh Kumar", condition: "Kidney Stone Surgery", text: "I was in excruciating pain due to a 12mm stone. Dr. Sharma performed RIRS laser surgery, and I was discharged the next day without any cuts. Amazing recovery!", rating: 5 },
  { id: 2, name: "Amit Patel", condition: "Prostate Treatment", text: "Excellent care for my father's prostate issue. The laser surgery was successful, and his urinary flow is back to normal after years of struggle.", rating: 5 },
  { id: 3, name: "Sarah Jenkins", condition: "UTI Treatment", text: "I struggled with recurrent UTIs for years. The doctor's diagnosis was spot on, and the treatment plan finally gave me relief. Highly recommended.", rating: 5 }
];

export const FAQS: FAQ[] = [
  { question: "When should I see a urologist?", answer: "You should see a urologist if you experience blood in urine, severe flank pain, trouble urinating, leakage, or pain in the pelvic region." },
  { question: "What causes kidney stones?", answer: "Dehydration, high salt intake, obesity, and family history are common causes. Certain medical conditions also contribute." },
  { question: "Is prostate enlargement dangerous?", answer: "BPH itself is not dangerous but can lead to kidney damage or bladder stones if untreated. It is not cancer." },
  { question: "What are the signs of urinary infection?", answer: "Burning sensation during urination, cloudy urine, strong odor, and pelvic pain are classic signs." },
  { question: "What tests does a urologist perform?", answer: "Common tests include Urinalysis, PSA blood test, Ultrasound, Uroflowmetry, and Cystoscopy." },
  { question: "Do you offer laser surgery?", answer: "Yes, we specialize in Holmium Laser for stones and prostate (HoLEP/ThuLEP)." },
  { question: "How long is the recovery for kidney stone surgery?", answer: "For laser surgery (RIRS/URS), recovery is rapid. Most patients return to work within 2-3 days." },
  { question: "Is male infertility treatable?", answer: "Yes, depending on the cause (like varicocele or hormonal imbalance), treatments can significantly improve fertility." },
  { question: "Do I need a referral to book an appointment?", answer: "No, you can book an appointment directly with us via our website or phone." },
  { question: "Do you accept insurance?", answer: "Yes, we accept all major insurance providers for surgical procedures." }
];