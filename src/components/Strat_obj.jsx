const ObjectivesTable = ({ objectives }) => {
  return (
    <section className="p-6 ml-4">
      <h2 className="text-2xl font-bold mb-4">3. Strategic Objectives</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Objective</th>
            <th className="p-2">Goal</th>
            <th className="p-2">Progress</th>
            <th className="p-2">Compliance</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {objectives.map((objective) => {
            let statusColor = "text-custom-green"; 
            if (objective.compliance <= 35) statusColor = "text-custom-red"; 
            else if (objective.compliance <= 75) statusColor = "text-custom-orange"; 

            return (
              <tr key={objective.id}>
                <td className="border p-2 text-center">{objective.id}</td>
                <td className="border p-2">{objective.goal}</td>
                <td className="border p-2">$ {objective.target.toLocaleString()}</td>
                <td className="border p-2">$ {objective.progress.toLocaleString()}</td>
                <td className="border p-2 text-center">{objective.compliance}%</td>
                <td className={`border p-2 ${statusColor} text-center`}>
   
                  {objective.compliance <= 35 ? "Critical": objective.compliance <= 75 ? "Acceptable": "Successful"} 
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ObjectivesTable;