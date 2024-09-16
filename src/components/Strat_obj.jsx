const ObjectivesTable = ({ objectives }) => {
  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4">Objetivos Estratégicos</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="p-2">Código</th>
            <th className="p-2">Objetivo</th>
            <th className="p-2">Meta</th>
            <th className="p-2">Avance</th>
            <th className="p-2">Cumplimiento</th>
            <th className="p-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {objectives.map((objective) => {
            let statusClass = "text-green-500"; // Exitoso
            if (objective.compliance <= 35) statusClass = "text-red-500"; // Crítico
            else if (objective.compliance <= 75) statusClass = "text-orange-500"; // Aceptable

            return (
              <tr key={objective.id}>
                <td className="border p-2">{objective.id}</td>
                <td className="border p-2">{objective.goal}</td>
                <td className="border p-2">{objective.target}</td>
                <td className="border p-2">{objective.progress}</td>
                <td className="border p-2">{objective.compliance}%</td>
                <td className={`border p-2 ${statusClass}`}>
                  {objective.compliance <= 35
                    ? "Crítico"
                    : objective.compliance <= 75
                    ? "Aceptable"
                    : "Exitoso"}
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