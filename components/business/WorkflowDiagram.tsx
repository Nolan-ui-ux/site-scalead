'use client';

import { motion } from 'framer-motion';

interface WorkflowNode {
  id: string;
  label: string;
  icon: 'scraping' | 'enrichment' | 'filter' | 'email' | 'linkedin' | 'meeting';
  color: string;
}

const nodes: WorkflowNode[] = [
  { id: '1', label: 'Scraping Sales Nav', icon: 'scraping', color: 'blue' },
  { id: '2', label: 'Enrichissement', icon: 'enrichment', color: 'purple' },
  { id: '3', label: 'Filtre ICP', icon: 'filter', color: 'indigo' },
  { id: '4', label: 'Campagne Email', icon: 'email', color: 'blue' },
  { id: '5', label: 'Campagne LinkedIn', icon: 'linkedin', color: 'indigo' },
  { id: '6', label: 'Pipeline RDV', icon: 'meeting', color: 'green' },
];

const connections = [
  { from: '1', to: '2' },
  { from: '2', to: '3' },
  { from: '3', to: '4' },
  { from: '3', to: '5' },
  { from: '4', to: '6' },
  { from: '5', to: '6' },
];

export default function WorkflowDiagram() {
  const getNodeColor = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      indigo: 'from-indigo-500 to-indigo-600',
      green: 'from-green-500 to-emerald-600',
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
      <div className="min-w-[800px] p-8">
        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#9CA3AF" />
              </marker>
            </defs>
            {/* Connection lines */}
            <path d="M 160 60 Q 200 60 240 60" stroke="#D1D5DB" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
            <path d="M 360 60 Q 400 60 440 60" stroke="#D1D5DB" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
            <path d="M 560 60 Q 600 60 640 60" stroke="#D1D5DB" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
            <path d="M 560 60 Q 600 120 640 160" stroke="#D1D5DB" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
            <path d="M 760 60 Q 800 60 840 100" stroke="#D1D5DB" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
            <path d="M 760 160 Q 800 140 840 120" stroke="#D1D5DB" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          </svg>

          {/* Nodes */}
          <div className="relative grid grid-cols-4 gap-x-32 gap-y-16" style={{ zIndex: 1 }}>
            {/* Row 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0 }}
              className="col-span-1"
            >
              <div className={`bg-gradient-to-br ${getNodeColor('blue')} text-white rounded-xl p-4 shadow-lg border-2 border-white`}>
                <div className="flex items-center gap-3">
                  {getIcon('scraping')}
                  <span className="font-semibold text-sm">Scraping Sales Nav</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="col-span-1"
            >
              <div className={`bg-gradient-to-br ${getNodeColor('purple')} text-white rounded-xl p-4 shadow-lg border-2 border-white`}>
                <div className="flex items-center gap-3">
                  {getIcon('enrichment')}
                  <span className="font-semibold text-sm">Enrichissement</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="col-span-1"
            >
              <div className={`bg-gradient-to-br ${getNodeColor('indigo')} text-white rounded-xl p-4 shadow-lg border-2 border-white`}>
                <div className="flex items-center gap-3">
                  {getIcon('filter')}
                  <span className="font-semibold text-sm">Filtre ICP</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="col-span-1"
            >
              <div className={`bg-gradient-to-br ${getNodeColor('blue')} text-white rounded-xl p-4 shadow-lg border-2 border-white`}>
                <div className="flex items-center gap-3">
                  {getIcon('email')}
                  <span className="font-semibold text-sm">Campagne Email</span>
                </div>
              </div>
            </motion.div>

            {/* Row 2 - Offset for branching */}
            <div className="col-span-2"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="col-span-1"
            >
              <div className={`bg-gradient-to-br ${getNodeColor('indigo')} text-white rounded-xl p-4 shadow-lg border-2 border-white`}>
                <div className="flex items-center gap-3">
                  {getIcon('linkedin')}
                  <span className="font-semibold text-sm">LinkedIn</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="col-span-1"
            >
              <div className={`bg-gradient-to-br ${getNodeColor('green')} text-white rounded-xl p-4 shadow-lg border-2 border-white relative`}>
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-1 bg-green-400 rounded-xl blur-sm"
                  style={{ zIndex: -1 }}
                />
                <div className="flex items-center gap-3 relative z-10">
                  {getIcon('meeting')}
                  <span className="font-semibold text-sm">Pipeline RDV</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="md:hidden space-y-4">
          {nodes.map((node, i) => (
            <motion.div key={node.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
              <div className={`bg-gradient-to-br ${getNodeColor(node.color)} text-white rounded-xl p-4 shadow-lg`}>
                <div className="flex items-center gap-3">
                  {getIcon(node.icon)}
                  <span className="font-semibold">{node.label}</span>
                </div>
              </div>
              {i < nodes.length - 1 && (
                <div className="flex justify-center py-2">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
