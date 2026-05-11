import styles from './TablaResultadoTechoBaldosa60120.module.css';

const ROWS = [
  { key: 'baldosa', label: 'Baldosa' },
  { key: 'principales', label: 'Perfiles principales' },
  { key: 'secundario', label: 'Perfiles secundarios' },
  { key: 'angulos', label: 'Ángulos' },
  { key: 'alambre', label: 'Alambre' },
  { key: 'clavo', label: 'Clavo' },
  { key: 'fulminante', label: 'Fulminante' },
  { key: 'clavoAcero', label: 'Clavo acero' },
];

export function TablaResultadoTechoBaldosa60120(props) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col" className={styles.num}>
              Cantidad
            </th>
            <th scope="col">Unidad</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(({ key, label }) => (
            <tr key={key}>
              <td>{label}</td>
              <td className={styles.num}>{props[key]}</td>
              <td className={styles.unit}>uds</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.note}>
        Valores redondeados al alza según tu criterio de obra.
      </p>
    </div>
  );
}