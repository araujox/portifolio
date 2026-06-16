/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjetctItem {
  id: string;
  classNameLabel: string; // e.g. "CASE 01", "ARQUIVO DE PROJETO"
  title: string;
  category: string;
  summary: string;
  coverImage: string;
  backupImage?: string;
  galleryImages?: string[];
  technologies: string[];
  problemDescription: string;
  solutionDescription: string;
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'Completo' | 'Em Produção' | 'Análise de Escopo';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  forWhom: string;
  benefits: string[];
  featuresList: string[];
  exampleLabel: string;
  exampleImageCode: string; // visual code mockup snippet or description
}

export interface ProcessSectionItem {
  step: string; // e.g. "01"
  title: string;
  description: string;
  highlights: string[];
}

export interface TechItem {
  name: string;
  category: 'Front-end' | 'Back-end' | 'Ferramentas' | 'Habilidades';
}

export interface DifferentialItem {
  title: string;
  description: string;
}
