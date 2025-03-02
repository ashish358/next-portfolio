"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import tpimg from "../../public/jigar-panchal-VamLqteS3uo-unsplash.jpg"


export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      tpimg,
      
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:tpimg,
    
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      tpimg,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
    tpimg,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
    tpimg,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
    tpimg,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
    tpimg,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      tpimg,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
    tpimg,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
    tpimg,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    tpimg,
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
    tpimg,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
    tpimg,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
    tpimg,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
    tpimg,
  },
];
