"use client";

import { Box, Globe, Search, Settings, Sparkles } from "lucide-react";
import Image from 'next/image';
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function About() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-neutral-50" />}
        title="Empowering Digital Experiences"
        description="Hi, I'm Vinit Khollam, a passionate Software Developer with a knack for building apps."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Search className="h-4 w-4 text-neutral-50" />}
        title="Always Evolving with New Tech"
        description="From open-source work to AI automation, I'm always chasing new challenges."
        // backgroundImage="/images/collaborative-transparent.jpg"
      />

      <GridItem
        area="md:[grid-area:3/1/2/7] xl:[grid-area:1/5/3/8]"
        icon={<Globe className="h-4 w-4 text-neutral-50" />}
        title="Mission Control: Code in Orbit"
        description="Backend development with Golang, system design mastery, and intuitive UX design.. (That’s me!)"
        extraContent={<div className="py-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ">
            <Image src="/avatar.png" alt="Extra Content" width={300} height={200} />
        </div>}
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-neutral-50" />}
        title="Crafting with Purpose"
        description="Whether it's a SaaS platform or a project, I build tools that solve problems and inspire new experiences."


      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Settings className="h-4 w-4 text-neutral-50" />}
        title="Collaborative and Transparent Workflows"
        description="I prioritize open communication and teamwork, ensuring every project reflects the vision of each client."
        // backgroundImage="/images/always-evolving.jpg"
      />
    </ul>
  );
}

// GridItem.tsx

import React from "react";

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    backgroundImage?: string;
    extraContent?: React.ReactNode;
  }
  
  export const GridItem = ({ area, icon, title, description, backgroundImage, extraContent }: GridItemProps) => {
    return (
      <li className={`list-none ${area}`}>
        <div
          className="relative bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-md h-full p-5"
          style={{
            ...(backgroundImage && {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }),
          }}
        >
          <GlowingEffect
            spread={100}
            glow={true}
            disabled={false}
            proximity={20}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 md:p-6">
            <div className="relative flex flex-1 flex-col gap-3">
              <div className="w-fit bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg p-5">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-white">
                  {title}
                </h3>
                <h2 className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-50">
                  {description}
                </h2>
                {extraContent && <div className="mt-4 md:hidden lg:flex">{extraContent}</div>}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
  
