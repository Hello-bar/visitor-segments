"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.segments = exports.geoAdapter = void 0;
const index_1 = require("../../index");
const TestProvider_1 = require("./TestProvider");
exports.geoAdapter = new TestProvider_1.TestProvider;
exports.segments = new index_1.Segments("test", { geoAdapter: exports.geoAdapter });
