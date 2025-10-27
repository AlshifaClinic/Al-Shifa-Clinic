import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useFadeIn } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    name: "Ahmed Hassan",
    text: "Excellent care and professional staff. The doctors are very knowledgeable and caring.",
    rating: 5,
  },
  {
    name: "Mariam Ali",
    text: "Best clinic in the area. They took great care of my family member during visit.",
    rating: 5,
  },
  {
    name: "Omar Khalid",
    text: "Clean facility, modern equipment, and friendly staff. Highly recommend Al-Shifa Clinic",
    rating: 5,
  },
];

export const ReviewsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useFadeIn(headerRef, "up");
  useFadeIn(cardsRef, "up", 0.1);

  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Patient Reviews
          </h2>
          <p className="text-lg text-muted-foreground">
            What our patients say about us
          </p>
        </div>

        {/* Review Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "{review.text}"
              </p>
              <p className="font-semibold text-primary">- {review.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
