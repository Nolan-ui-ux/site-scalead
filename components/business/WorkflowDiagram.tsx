'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface WorkflowNode {
  id: string;
  label: string;
  description: string;
  metric?: string;
  icon: 'scraping' | 'enrichment' | 'filter' | 'email' | 'linkedin' | 'meeting';
  color: string;
}

const nodes: WorkflowNode[] = [
  {
    id: '1',
    label: 'Scraping Sales Nav',
    description: 'Extraction automatique depuis LinkedIn',
    metric: '4 500+ prospects',
    icon: 'scraping',
    color: 'blue'
  },
  {
    id: '2',
    label: 'Enrichissement',
    description: 'Ajout email, tél, données entreprise',
    metric: '95% enrichis',
    icon: 'enrichment',
    color: 'purple'
  },
  {
    id: '3',
    label: 'Filtre ICP',
    description: 'Scoring et qualification automatique',
    metric: '70% qualifiés',
    icon: 'filter',
    color: 'indigo'
  },
  {
    id: '4',
    label: 'Campagne Email',
    description: 'Séquences personnalisées par IA',
    metric: '8% réponse',
    icon: 'email',
    color: 'blue'
  },
  {
    id: '5',
    label: 'Campagne LinkedIn',
    description: 'Messages automatisés sécurisés',
    metric: '12% réponse',
    icon: 'linkedin',
    color: 'indigo'
  },
  {
    id: '6',
    label: 'Pipeline RDV',
    description: 'Prospects intéressés → calendrier',
    metric: '15+ RDV/mois',
    icon: 'meeting',
    color: 'green'
  },
];

export default function WorkflowDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getNodeColor = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      indigo: 'from-indigo-500 to-indigo-600',
      green: 'from-green-500 to-emerald-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getNodeBorderColor = (color: string) => {
    const colors = {
      blue: 'border-blue-200',
      purple: 'border-purple-200',
      indigo: 'border-indigo-200',
      green: 'border-green-200',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'scraping':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      case 'enrichment':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        );
      case 'filter':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
        );
      case 'email':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
          </svg>
        );
      case 'meeting':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1000px] p-8">
        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#9CA3AF" />
              </marker>
              {/* Animated gradient for connections */}
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3">
                  <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8">
                  <animate attributeName="stop-opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            {/* Connection lines with glow effect */}
            <g>
              <path d="M 180 80 Q 220 80 260 80" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" />
              <path d="M 380 80 Q 420 80 460 80" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" />
              <path d="M 580 80 Q 620 80 660 80" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" />
              <path d="M 580 80 Q 620 140 660 180" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" />
              <path d="M 780 80 Q 820 80 860 120" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" />
              <path d="M 780 180 Q 820 160 860 140" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" />
            </g>
          </svg>

          {/* Nodes */}
          <div className="relative grid grid-cols-4 gap-x-32 gap-y-20" style={{ zIndex: 1 }}>
            {/* Row 1 */}
            {nodes.slice(0, 4).map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="col-span-1"
              >
                <div className={`bg-gradient-to-br ${getNodeColor(node.color)} text-white rounded-xl p-5 shadow-lg border-3 ${getNodeBorderColor(node.color)} relative overflow-hidden transform transition-all duration-300 ${hoveredNode === node.id ? 'scale-105 shadow-2xl' : ''}`}>
                  {/* Animated background gradient */}
                  <motion.div
                    animate={{
                      opacity: hoveredNode === node.id ? 0.3 : 0,
                    }}
                    className="absolute inset-0 bg-white"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      {getIcon(node.icon)}
                      <span className="font-bold text-base">{node.label}</span>
                    </div>
                    <p className="text-xs text-white/90 mb-2">{node.description}</p>
                    {node.metric && (
                      <div className="mt-3 pt-3 border-t border-white/20">
                        <span className="text-sm font-bold">{node.metric}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Row 2 - Offset for branching */}
            <div className="col-span-2"></div>
            {nodes.slice(4).map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (i + 4) * 0.15 }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="col-span-1"
              >
                <div className={`bg-gradient-to-br ${getNodeColor(node.color)} text-white rounded-xl p-5 shadow-lg border-3 ${getNodeBorderColor(node.color)} relative overflow-hidden transform transition-all duration-300 ${hoveredNode === node.id ? 'scale-105 shadow-2xl' : ''}`}>
                  {node.id === '6' && (
                    <motion.div
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -inset-1 bg-green-400 rounded-xl blur-md"
                      style={{ zIndex: -1 }}
                    />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      {getIcon(node.icon)}
                      <span className="font-bold text-base">{node.label}</span>
                    </div>
                    <p className="text-xs text-white/90 mb-2">{node.description}</p>
                    {node.metric && (
                      <div className="mt-3 pt-3 border-t border-white/20">
                        <span className="text-sm font-bold">{node.metric}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="md:hidden space-y-6">
          {nodes.map((node, i) => (
            <div key={node.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`bg-gradient-to-br ${getNodeColor(node.color)} text-white rounded-xl p-5 shadow-lg`}>
                  <div className="flex items-center gap-3 mb-3">
                    {getIcon(node.icon)}
                    <span className="font-bold text-base">{node.label}</span>
                  </div>
                  <p className="text-xs text-white/90 mb-2">{node.description}</p>
                  {node.metric && (
                    <div className="mt-3 pt-3 border-t border-white/20">
                      <span className="text-sm font-bold">{node.metric}</span>
                    </div>
                  )}
                </div>
              </motion.div>
              {i < nodes.length - 1 && (
                <div className="flex justify-center py-3">
                  <motion.svg
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                  </motion.svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
