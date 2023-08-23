import { Segments } from '../segments';
import { GeoTestProvider } from './TestProvider';
import { AdBlockerTestProvider } from './AdTestProvider';

export const geoAdapter = new GeoTestProvider();
export const adAdapter = new AdBlockerTestProvider();
export const segments = new Segments('test', { geoAdapter });
export const adSegments = new Segments('test', { adAdapter });
