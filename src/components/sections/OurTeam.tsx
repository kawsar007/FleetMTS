"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Sarah Johnson",
    designation: "CEO & Founder",
    description: "15+ years of experience in fleet management technology. Previously led product at FleetCorp.",
    image: "https://images.unsplash.com/photo-1494790108375-be9c8b7d0e6a?w=600&h=600&fit=crop&crop=face&auto=format",
  },
  {
    id: "member-2",
    name: "Michael Chen",
    designation: "CTO",
    description: "Architected real-time tracking systems for Fortune 500 logistics companies. PhD in Computer Science.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face&auto=format",
  },
  {
    id: "member-3",
    name: "Emily Rodriguez",
    designation: "Head of Product",
    description: "Passionate about building intuitive solutions. Previously led product teams at Uber Freight.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=face&auto=format",
  },
  {
    id: "member-4",
    name: "David Kim",
    designation: "Lead Engineer",
    description: "Full-stack developer with expertise in scalable distributed systems and real-time data processing.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face&auto=format",
  },
  {
    id: "member-5",
    name: "Jessica Williams",
    designation: "Head of Operations",
    description: "Optimized logistics operations for 500+ fleet vehicles. Focused on efficiency and driver satisfaction.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=face&auto=format",
  },
  {
    id: "member-6",
    name: "James Okafor",
    designation: "Data Scientist",
    description: "Specializes in predictive analytics and ML models for fleet optimization and fuel efficiency.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face&auto=format",
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <div className="group relative flex w-[280px] shrink-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl sm:w-[300px] md:w-[320px]">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 320px"
          unoptimized
        />
        {/* Gradient overlay for polish */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* Number badge */}
        <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xs font-medium text-white/80 backdrop-blur-sm transition-all duration-300 group-hover:border-white/40 group-hover:bg-black/60">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
          {member.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-blue-400/80">
          {member.designation}
        </p>

        {/* Description - hidden by default, revealed on hover */}
        <div className="mt-3 overflow-hidden">
          <div className="max-h-0 opacity-0 transition-all duration-500 ease-out group-hover:max-h-40 group-hover:opacity-100">
            <p className="text-sm leading-relaxed text-white/70">
              {member.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OurTeam() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth >= 1024 ? 340 : 320;
      const gap = window.innerWidth >= 1024 ? 32 : 24;
      const scrollAmount = cardWidth + gap;
      const targetScroll = scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="team" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-24 sm:py-28">
      <PageContainer>
        <AnimatedSection>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Results that speak for itself
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Real outcomes from production systems running at enterprise scale.
            </p>

            {/* Decorative line with "Our Team" label */}
            <div className="mt-8 flex items-center justify-center gap-4" aria-hidden="true">
              <span className="h-px w-16 bg-white/20 sm:w-24" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Our Team
              </span>
              <span className="h-px w-16 bg-white/20 sm:w-24" />
            </div>
          </div>
        </AnimatedSection>

        {/* Scrollable Cards Container */}
        <div className="mt-14 relative">
          {/* Navigation Arrows - Desktop only */}
          <div className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 lg:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-black/60 hover:text-white"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 lg:flex">
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-black/60 hover:text-white"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide lg:gap-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Show first 3 cards on desktop, all cards on mobile */}
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.08}>
                <TeamCard member={member} index={index} />
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="mt-6 flex justify-center gap-2 lg:hidden">
          <span className="text-xs text-white/40">Swipe to see more</span>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </PageContainer>
    </section>
  );
}