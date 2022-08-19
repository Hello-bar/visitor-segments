import {Segments} from "../../index";
import {LocalStorageAdapter} from "../../valueStorage/localStorageAdapter";
import {TestProvider} from "./TestProvider";

export const geoAdapter = new TestProvider
export const segments = new Segments("test", {geoAdapter})
