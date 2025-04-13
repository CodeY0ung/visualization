const JobStatusTable = ({ jobs }) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>클러스터</th>
          <th>상태</th>
          <th>소요 시간</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <tr key={job.id}>
            <td>{job.id}</td>
            <td>{job.cluster}</td>
            <td>
              <span style={{
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor:
                  job.status === 'success' ? '#c8f7c5' :
                  job.status === 'fail' ? '#f7c5c5' :
                  '#f7f3c5',
              }}>
                {job.status}
              </span>
            </td>
            <td>{job.duration ? `${job.duration}분` : '대기 중'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default JobStatusTable;
  