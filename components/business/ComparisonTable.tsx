'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

interface ComparisonItem {
  feature: string;
  scalead: string | boolean;
  competitor1: string | boolean;
  competitor2?: string | boolean;
}

interface ComparisonTableProps {
  title: string;
  headers: string[];
  items: ComparisonItem[];
}

export default function ComparisonTable({ title, headers, items }: ComparisonTableProps) {
  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </span>
      ) : (
        <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      );
    }
    return <span className="text-gray-700">{value}</span>;
  };

  return (
    <Card className="overflow-hidden">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-gray-900"></th>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`text-center py-4 px-4 font-semibold ${
                    index === 0 ? 'text-primary-600' : 'text-gray-700'
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border-b border-gray-100"
              >
                <td className="py-4 px-4 font-medium text-gray-900">{item.feature}</td>
                <td className="py-4 px-4 text-center bg-primary-50">{renderCell(item.scalead)}</td>
                <td className="py-4 px-4 text-center">{renderCell(item.competitor1)}</td>
                {item.competitor2 !== undefined && (
                  <td className="py-4 px-4 text-center">{renderCell(item.competitor2)}</td>
                )}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
