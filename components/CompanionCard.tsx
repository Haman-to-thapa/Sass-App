import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/logo.jpg'

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({ id, name, topic, subject, duration, color }: CompanionCardProps) => {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: color }}>
      <article className="p-4 space-y-4">
        {/* Header Row */}
        <div className="flex justify-between items-start">
          <div className="text-sm font-medium uppercase text-white">{subject}</div>
          <button>
            <Image src={logo} alt="bookmark" width={16} height={16} />
          </button>
        </div>

        {/* Title & Topic */}
        <div>
          <h2 className="text-xl font-bold text-white">{name}</h2>
          <p className="text-sm text-white opacity-90">{topic}</p>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-white opacity-90">
          <Image src={logo} alt="duration" width={14} height={14} />
          <p className="text-sm">{duration} minutes</p>
        </div>

        {/* CTA */}
        <Link href={`/companions/${id}`}>
          <button className="w-full py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
            Launch Lesson
          </button>
        </Link>
      </article>
    </div>
  );
};

export default CompanionCard;
