import { Segments } from '../../segments';
import { AdBlockerTestProvider, GeoTestProvider } from './TestProvider';

export const geoAdapter = new GeoTestProvider();
export const adAdapter = new AdBlockerTestProvider();
export const segments = new Segments('test', { geoAdapter });
export const adSegments = new Segments('test', { adAdapter });
