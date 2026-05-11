/**
 * Registro de calculadoras — orden = orden en el menú.
 *
 * Estructura por carpeta (misma base que `id`):
 *   src/features/calculators/<id>/
 *     <Nombre>Vista.jsx   → pantalla montada en la ruta /c/<id>
 *
 * Compartido:
 *   shared/coming-soon/     plantilla para tipos aún sin lógica
 *   techo-baldosa-shared/   UI + hook reutilizado por techo 60×60 y 60×120
 */

import { TabiqueEstandarView } from './tabique-estandar/TabiqueEstandarView';
import { TabiqueSanitarioRhView } from './tabique-sanitario-rh/TabiqueSanitarioRhView';
import { TabiqueSuperboardView } from './tabique-superboard/TabiqueSuperboardView';
import { CieloRasoView } from './cielo-raso/CieloRasoView';
import { TechoBaldosa60View } from './techo-baldosa-60/TechoBaldosa60View';
import { TechoBaldosa60120View } from './techo-baldosa-60-120/TechoBaldosa60120View';

const createCalculatorRoute = ({ id, label, shortLabel, subtitle, Component }) => ({
  id,
  label,
  shortLabel,
  subtitle,
  Component,
});

export const calculatorRoutes = [
  createCalculatorRoute({
    id: 'tabique-estandar',
    label: 'Tabique estándar (interior)',
    shortLabel: 'Tab. estándar',
    subtitle: 'Interior',
    Component: TabiqueEstandarView,
  }),
  {
    id: 'tabique-sanitario-rh',
    label: 'Tabique sanitario RH (interior)',
    shortLabel: 'Sanitario RH',
    subtitle: 'Interior · húmedo',
    Component: TabiqueSanitarioRhView,
  },
  {
    id: 'tabique-superboard',
    label: 'Tabique Superboard (ext.–int.)',
    shortLabel: 'Superboard',
    subtitle: 'Exterior e interior',
    Component: TabiqueSuperboardView,
  },
  {
    id: 'cielo-raso',
    label: 'Cielo raso',
    shortLabel: 'Cielo raso',
    subtitle: 'Plafón / suspensión',
    Component: CieloRasoView,
  },
  {
    id: 'techo-baldosa-60',
    label: 'Techo baldosa 60×60',
    shortLabel: 'Techo 60×60',
    subtitle: 'Baldosa cuadrada',
    Component: TechoBaldosa60View,
  },
  {
    id: 'techo-baldosa-60-120',
    label: 'Techo baldosa 60×120',
    shortLabel: 'Techo 60×120',
    subtitle: 'Baldosa rectangular',
    Component: TechoBaldosa60120View,
  },
];
