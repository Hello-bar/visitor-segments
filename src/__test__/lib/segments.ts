import { Segments } from '../../segments';
import { TestProvider } from './TestProvider';

export const geoAdapter = new TestProvider();
export const segments = new Segments('test', { geoAdapter });
