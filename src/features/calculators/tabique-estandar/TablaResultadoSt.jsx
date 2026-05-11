import styles from './TablaResultadoSt.module.css';

const ROWS = [
  { key: 'Planchas', label: 'Planchas' },
  { key: 'Parante', label: 'Parante' },
  { key: 'Riel', label: 'Riel' },
  { key: 'tornillo', label: 'Tornillo' },
  { key: 'wafer', label: 'Wafer' },
  { key: 'clavo', label: 'Clavo' },
  { key: 'fulminante', label: 'Fulminante' },
  { key: 'cintapapel', label: 'Cinta papel' },
  { key: 'masilla', label: 'Masilla' },
  { key: 'lija', label: 'Lija' },
];

/** Props = salida de {@link calcTabiqueEstandar} */
export function TablaResultadoSt(props) {
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
              <td className={styles.unit}>uds / ref.</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.note}>
        Valores redondeados al alza según tu criterio de obra. Ajusta factores en{' '}
        <code className={styles.code}>calcTabiqueEstandar.js</code> si tu sistema usa otros coeficientes.
      </p>
    </div>
  );
}
