const ObjectivesTable = ({ objectives }) => {
  return (
    <section className="p-6 ml-4">
      <h2 className="text-2xl font-bold mb-4">3. Strategic Objectives</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left font-semibold text-gray-600">ID</th>
              <th className="p-4 text-left font-semibold text-gray-600">Objective</th>
              <th className="p-4 text-left font-semibold text-gray-600">Goal</th>
              <th className="p-4 text-left font-semibold text-gray-600">Progress</th>
              <th className="p-4 text-left font-semibold text-gray-600">Compliance</th>
              <th className="p-4 text-left font-semibold text-gray-600 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {objectives.map((objective,index) => {
              let statusColor = "text-custom-green"; 
              if (objective.compliance <= 35) statusColor = "text-custom-red"; 
              else if (objective.compliance <= 75) statusColor = "text-custom-orange"; 

              return (
                <tr key={objective.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}>
                  <td className="border p-2 text-center">{objective.id}</td>
                  <td className="border p-2">{objective.goal}</td>
                  <td className="border p-2">${objective.target.toLocaleString()}</td>
                  <td className="border p-2">${objective.progress.toLocaleString()}</td>
                  <td className="border p-2 text-center">{objective.compliance}%</td>
                  <td className={`border p-2 ${statusColor} text-center`}>
                    {objective.compliance <= 35 ? "Critical" : objective.compliance <= 75 ? "Acceptable" : "Successful"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ObjectivesTable;
