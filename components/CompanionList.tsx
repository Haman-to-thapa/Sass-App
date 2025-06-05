import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.jpg';

interface Companion {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
}

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  className?: string;
}

const CompanionList = ({ title, companions = [], className }: CompanionsListProps) => {
  return (
    <article className={cn('border-2 border-black rounded-sm p-4', className)}>
      <h2 className='font-bold text-3xl mb-4'>{title || 'Recent Sessions'}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions.map(({ id, subject, name, topic, duration }) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center gap-2">
                    <div
                      className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                      style={{ backgroundColor: subject }}
                    >
                      <Image
                        src={logo}
                        alt={subject}
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-2xl">{name}</p>
                      <p className="text-lg">{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="w-fit">{subject}</div>

                {/* Mobile device icon */}
                <div
                  className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                  style={{ background: subject }}
                >
                  <Image
                    src={logo}
                    alt="subject"
                    height={18}
                    width={18}
                  />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <p className="text-2xl">
                  {duration}
                  <span className="max-md:hidden"> mins</span>
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionList;
