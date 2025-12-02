import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SearchResult } from '../types';
import { ExternalLink, Info, CheckCircle, AlertCircle } from 'lucide-react';

interface ResultsViewProps {
  result: SearchResult;
  onReset: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ result, onReset }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Flight Results</h2>
        <button 
          onClick={onReset}
          className="text-primary-600 font-medium hover:text-primary-700 hover:underline"
        >
          New Search
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content - AI Summary & List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 overflow-hidden">
            <div className="flex items-center gap-3 mb-6 text-primary-600">
              <Info className="w-6 h-6" />
              <span className="font-semibold text-lg">AI Market Analysis</span>
            </div>
            
            <div className="prose prose-slate prose-lg max-w-none text-gray-700">
              <ReactMarkdown 
                components={{
                  h1: ({node, ...props}) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4" {...props} />,
                  h2: ({node, ...props}) => <h4 className="text-lg font-bold text-gray-800 mt-5 mb-3" {...props} />,
                  h3: ({node, ...props}) => <h5 className="text-base font-bold text-gray-800 mt-4 mb-2" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-2 mb-4" {...props} />,
                  li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-bold text-primary-700" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                }}
              >
                {result.text}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        {/* Sidebar - Booking Links & Trust */}
        <div className="space-y-6">
          
          {/* Booking Sources Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-primary-100 p-6 sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-500 w-5 h-5" />
              Verified Booking Sources
            </h3>
            
            {result.groundingChunks && result.groundingChunks.length > 0 ? (
              <div className="space-y-3">
                <p className="text-sm text-gray-500 mb-2">
                  Prices found via these providers. Click to view details and book directly.
                </p>
                {result.groundingChunks.map((chunk, idx) => (
                  chunk.web && (
                    <a 
                      key={idx}
                      href={chunk.web.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl border border-gray-200 hover:border-primary-500 hover:bg-primary-50 hover:shadow-md transition-all group"
                    >
                      <div className="flex justify-between items-center">
                        <div className="font-medium text-gray-900 truncate pr-2 group-hover:text-primary-700">
                          {chunk.web.title || "Book Flight"}
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-500 flex-shrink-0" />
                      </div>
                      <div className="text-xs text-gray-500 mt-1 truncate">
                        {new URL(chunk.web.uri).hostname}
                      </div>
                    </a>
                  )
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">No direct booking links generated.</p>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">
                Prices and availability are subject to change by the airlines.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};