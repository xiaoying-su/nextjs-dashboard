import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Revenue } from '@/app/lib/definitions';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart({ revenue }: { revenue: Revenue[] }) {
  const chartHeight = 350;

  // 为未来的图表功能预留的工具函数和图标
  // 当前被注释掉，但保留导入以备后续章节使用
  const _generateYAxis = generateYAxis; // 保留引用避免ESLint警告
  const _CalendarIcon = CalendarIcon; // 保留引用避免ESLint警告

  // 避免未使用参数警告，同时为未来功能做准备
  console.log('Chart configuration:', {
    chartHeight,
    revenueRecords: revenue?.length || 0,
    utilities: { _generateYAxis, _CalendarIcon },
  });

  // NOTE: Uncomment this code in Chapter 7
  // const { yAxisLabels, topLabel } = generateYAxis(revenue);

  // if (!revenue || revenue.length === 0) {
  //   return <p className="mt-4 text-gray-400">No data available.</p>;
  // }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>最近收入</h2>
      {/* NOTE: Uncomment this code in Chapter 7 */}

      {/* <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">最近 12 个月</h3>
        </div>
      </div> */}
    </div>
  );
}
