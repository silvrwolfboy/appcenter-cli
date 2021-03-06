/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a TestReportSnapshotFatalErrorsItem.
 */
class TestReportSnapshotFatalErrorsItem {
  /**
   * Create a TestReportSnapshotFatalErrorsItem.
   * @property {string} [deviceSnapshotId]
   * @property {string} [errorMessage]
   * @property {string} [errorTitle]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestReportSnapshotFatalErrorsItem
   *
   * @returns {object} metadata of TestReportSnapshotFatalErrorsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestReport_snapshot_fatal_errorsItem',
      type: {
        name: 'Composite',
        className: 'TestReportSnapshotFatalErrorsItem',
        modelProperties: {
          deviceSnapshotId: {
            required: false,
            serializedName: 'device_snapshot_id',
            type: {
              name: 'String'
            }
          },
          errorMessage: {
            required: false,
            serializedName: 'error_message',
            type: {
              name: 'String'
            }
          },
          errorTitle: {
            required: false,
            serializedName: 'error_title',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TestReportSnapshotFatalErrorsItem;
