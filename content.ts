
import { ServiceData, BlogPost, Testimonial, FAQ, GalleryImage } from './types';

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
  whatsapp: "78424 10995",
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
      { question: "What is RIRS?", answer: "RIRS (Retrograde Intrarenal Surgery) is a scareless laser procedure to remove kidney stones without cuts." },
      { question: "What is TURP?", answer: "TURP is an endoscopic procedure to treat enlarged prostate by removing blocking tissue." }
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
      { question: "Is laparoscopic surgery safe?", answer: "Yes, it is the standard of care for many urological conditions with excellent outcomes and less pain." }
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
      { question: "What is BMG Urethroplasty?", answer: "It is a surgery using inner cheek lining to repair narrowing in the urinary pipe (urethra)." }
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
      { question: "What is the success rate?", answer: "Renal transplantation has a high success rate and significantly improves quality of life." }
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
      { question: "Is it curable?", answer: "Early detection leads to excellent cure rates in urological cancers." }
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
      { question: "Can male infertility be treated?", answer: "Yes, many causes are treatable medically or surgically to improve fertility." }
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
      { question: "When should surgery be done?", answer: "Timing varies, but many are best corrected in early childhood (6-18 months)." }
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

export const FAQS: FAQ[] = [
  { question: "Where is the clinic located?", answer: "The clinic is located at Kalyani Clinic, Opp. Vishwabharathi Hospital, Gayathri Estates, Kurnool." },
  { question: "What are the clinic timings?", answer: "Mon-Sat: 10am to 2pm (Morning) and 5.30pm to 8.30pm (Evening)." },
  { question: "Do you perform Laser surgeries?", answer: "Yes, we specialize in RIRS and other laser procedures for stones (Endourology)." },
  { question: "What is 'No Cut, No Hole' surgery?", answer: "It refers to endoscopic procedures like RIRS where stones are removed through natural passages without any external incision." },
  { question: "Do you treat children?", answer: "Yes, Dr. Vishnu specializes in Paediatric Urology for conditions like Hypospadias and Undescended Testis." }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    alt: "Modern Operation Theatre",
    caption: "State-of-the-art Operation Theatre"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516549655169-df83a092fc96?auto=format&fit=crop&q=80&w=800",
    alt: "Patient Consultation",
    caption: "Private Consultation Rooms"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
    alt: "Advanced Laser Technology",
    caption: "Advanced Laser Technology"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800",
    alt: "Patient Waiting Area",
    caption: "Comfortable Waiting Lounge"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800",
    alt: "Clinic Exterior",
    caption: "Clinic Entrance & Parking"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    alt: "Diagnostics Lab",
    caption: "In-house Diagnostic Facilities"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    alt: "Friendly Nursing Staff",
    caption: "Dedicated Nursing Staff"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=800",
    alt: "Urology Equipment",
    caption: "Modern Urological Equipment"
  }
];
