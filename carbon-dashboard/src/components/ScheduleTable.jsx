const ScheduleTable = ({ schedule }) => (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
      <thead>
        <tr>
          <th>작업 ID</th>
          <th>배정된 클러스터</th>
          <th>배정 사유</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map(item => (
          <tr key={item.jobId}>
            <td>{item.jobId}</td>
            <td>{item.assignedCluster}</td>
            <td>{item.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default ScheduleTable;
  