const JobStatusTable = ({ jobs }) => (
  <table className="w-full border-collapse text-sm">
    <thead className="bg-gray-200 dark:bg-zinc-700">
      <tr>
        <th className="text-left px-4 py-2">ID</th>
        <th className="text-left px-4 py-2">클러스터</th>
        <th className="text-left px-4 py-2">상태</th>
        <th className="text-left px-4 py-2">소요 시간</th>
      </tr>
    </thead>
    <tbody>
      {jobs.map((job) => (
        <tr key={job.id} className="border-b border-gray-200 dark:border-zinc-700">
          <td className="px-4 py-2">{job.id}</td>
          <td className="px-4 py-2">{job.cluster}</td>
          <td className="px-4 py-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold 
                ${job.status === 'success'
                  ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300'
                  : job.status === 'fail'
                  ? 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300'
                }`}
            >
              {job.status}
            </span>
          </td>
          <td className="px-4 py-2">{job.duration ? `${job.duration}분` : '대기 중'}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default JobStatusTable;
