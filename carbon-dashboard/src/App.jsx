import { useEffect, useState } from 'react';
import CarbonChart from './components/CarbonChart';
import JobStatusTable from './components/JobStatusTable';
import ClusterLoadChart from './components/ClusterLoadChart';
import ScheduleTable from './components/ScheduleTable';
import {
  fetchCarbonData,
  fetchJobData,
  fetchClusterLoad,
  fetchScheduleData
} from './services/api';

function App() {
  const [carbonData, setCarbonData] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [clusterLoad, setClusterLoad] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchCarbonData().then(setCarbonData);
    fetchJobData().then(setJobData);
    fetchClusterLoad().then(setClusterLoad);
    fetchScheduleData().then(setScheduleData);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-zinc-900 dark:text-gray-100 px-4 py-10 md:px-12 space-y-12">
      
      {/* 🌙 다크모드 토글 버튼 */}
      <div className="flex justify-end mb-6">
        <button
          className="px-4 py-2 rounded-lg border text-sm font-semibold transition-colors duration-300
          bg-white text-gray-800 border-gray-300 hover:bg-gray-100
          dark:bg-zinc-800 dark:text-gray-100 dark:border-zinc-600 dark:hover:bg-zinc-700"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* 헤더 */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">🌍 탄소 인지형 작업 스케줄러 대시보드</h1>
        <p className="text-md text-gray-500 dark:text-gray-400">Kubernetes 멀티 클러스터 기반 실험 시각화</p>
      </header>

      {/* 상단 차트 2개 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 min-h-[360px] flex flex-col">
          <h2 className="text-xl font-semibold mb-6">📈 1. 탄소 배출량</h2>
          <div className="flex-1">
            <CarbonChart data={carbonData} />
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 min-h-[360px] flex flex-col">
          <h2 className="text-xl font-semibold mb-6">📊 2. 클러스터별 작업 부하</h2>
          <div className="flex-1">
            <ClusterLoadChart data={clusterLoad} />
          </div>
        </div>
      </section>

      {/* 하단 테이블 2개 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 min-h-[280px]">
          <h2 className="text-xl font-semibold mb-6">⚡ 3. 작업 상태</h2>
          <JobStatusTable jobs={jobData} />
        </div>

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 min-h-[280px]">
          <h2 className="text-xl font-semibold mb-6">🛫 4. 작업 스케줄</h2>
          <ScheduleTable schedule={scheduleData} />
        </div>
      </section>
    </div>
  );
}

export default App;
