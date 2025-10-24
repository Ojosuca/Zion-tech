"use client";

import { Button } from "@/react-app/components/ui/button";
import {
  FaReact, FaNodeJs, FaGithub,
  FaLinkedin, FaInstagram, FaGoogle
} from "react-icons/fa";
import {
  SiNextdotjs, SiVercel, SiTypescript, SiTailwindcss,
  SiCloudflare, SiFigma, SiFramer, SiVite
} from "react-icons/si";

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiVercel, color: "#000000" },
  { Icon: SiCloudflare, color: "#F38020" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiVite, color: "#646CFF" },
  { Icon: SiFigma, color: "#F24E1E" },
  { Icon: SiFramer, color: "#0055FF" },
  { Icon: FaGithub, color: "#181717" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaGoogle, color: "#DB4437" },
];

export default function StackFeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative max-w-6xl mx-auto my-32 pl-10 flex items-center justify-between h-[30rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-black overflow-hidden rounded-3xl">
      {/* Left side: Heading and Text */}
      <div className="w-1/2 z-10">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Construa sua <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ideia</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-300 mb-6 max-w-lg">
          ZionTech utiliza as tecnologias mais modernas para criar soluções web responsivas, 
          escaláveis e de alta performance que impressionam.
        </p>
        <div className="flex items-center gap-3">
          <Button variant="default" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Começar Projeto
          </Button>
          <Button variant="outline">Saiba Mais</Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-1/2 h-full flex items-center justify-start overflow-hidden">
        <div className="relative w-[50rem] h-[50rem] translate-x-[50%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-lg flex items-center justify-center border-2 border-blue-200 dark:border-blue-800">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ZT
            </div>
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-gray-300 dark:border-gray-600"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <cfg.Icon className="w-6 h-6" style={{ color: cfg.color }} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
