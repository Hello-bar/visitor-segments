import {Segments} from "../../src";
import {LocalStorageAdapter} from "../../src/valueStorage/localStorageAdapter";
import {TestProvider} from "./TestProvider";

export const geoAdapter = new TestProvider
export const segments = new Segments("test", LocalStorageAdapter, geoAdapter)
