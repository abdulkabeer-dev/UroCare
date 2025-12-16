import React from 'react';
import SEO from '../components/SEO';
import { GALLERY_IMAGES, DOCTOR_INFO } from '../content';
import { Image as ImageIcon } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <>
      <SEO 
        title="Photo Gallery | Clinic Facilities & Infrastructure" 
        description={`View the modern facilities, operation theatres, and patient care areas at ${DOCTOR_INFO.name}'s clinic in Kurnool.`}
      />

      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
               <ImageIcon size={32} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Clinic Gallery</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A glimpse into our state-of-the-art facilities, advanced technology, and comfortable patient care environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl shadow-sm bg-white border border-slate-100 aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay with Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-lg">{image.caption}</p>
                    <p className="text-slate-300 text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 italic">
              Note: These images represent the quality of care and facilities we strive to provide.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Gallery;