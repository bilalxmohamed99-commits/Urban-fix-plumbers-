import React from 'react';
import { Star, CheckCircle, MapPin, ExternalLink, Quote } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/plumbingData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            Verified Customer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            Trusted by Customers in Nairobi
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Read what homeowners, landlords, and commercial clients say about our plumbing response and craftsmanship.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="inline-flex items-center gap-4 bg-slate-800/80 border border-slate-700 px-6 py-3 rounded-2xl shadow-lg mt-4">
            <div className="text-3xl font-extrabold text-amber-400 font-heading">
              {BUSINESS_INFO.rating}
            </div>
            <div className="text-left">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-300 mt-0.5">
                {BUSINESS_INFO.reviewCount} Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 relative flex flex-col justify-between shadow-xl hover:border-sky-500/40 transition-colors"
            >
              <Quote className="w-8 h-8 text-sky-500/20 absolute top-4 right-4" />

              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-2 font-medium">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-200 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-700/60 mt-4 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white text-sm flex items-center gap-1.5">
                    <span>{review.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <div className="text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{review.location}</span>
                  </div>
                </div>

                <span className="bg-slate-900 px-2.5 py-1 rounded-md text-[11px] font-medium text-sky-300 border border-slate-700">
                  {review.serviceProvided}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sky-400 hover:text-sky-300 font-bold text-sm transition-colors cursor-pointer"
          >
            <span>See Our Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
