import React from 'react';

interface ProgressProps {
      collected: number;
      target: number;
}

export default function Progress({ collected, target }: ProgressProps) {
      // Hitung persentase progress
      const percentage = Math.min((collected / target) * 100, 100).toFixed(2);

      return (
            <div className="w-full mb-4">
                  {/* Progress Bar */}
                  <div className="relative w-full lg:h-[10px] h-[6px] bg-[#D9D9D9] rounded-full">
                        {/* Filled Progress */}
                        <div
                              className="absolute top-0 left-0 h-full bg-[#E29123] rounded-full transition-all duration-500 ease-in-out"
                              style={{ width: `${percentage}%` }}
                        ></div>

                        {/* Circle at the end */}
                        {parseFloat(percentage) > 0 && (
                              <div
                                    className="absolute top-1/2 -translate-y-1/2 bg-[#E29123] rounded-full"
                                    style={{
                                          width: '14px', // Diameter bulatan
                                          height: '14px',
                                          left: `calc(${percentage}% - 8px)`, // Pastikan bulatan berada di tengah garis progress
                                    }}
                              ></div>
                        )}
                  </div>
            </div>
      );
}
