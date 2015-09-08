'use strict';
// Copyright (C) 2015 SignalFx, Inc. All rights reserved.

// Default Parameters
exports.DEFAULT_INGEST_ENDPOINT = 'https://ingest.signalfx.com';
exports.DEFAULT_API_ENDPOINT = 'https://api.signalfx.com';
exports.DEFAULT_BATCH_SIZE = 300;// Will wait for this many requests before posting
exports.DEFAULT_TIMEOUT = 1500; // Default timeout is 1s

// Global Parameters
exports.PROTOBUF_HEADER_CONTENT_TYPE = 'application/x-protobuf';
exports.JSON_HEADER_CONTENT_TYPE = 'application/json';