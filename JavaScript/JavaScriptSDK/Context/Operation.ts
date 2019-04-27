// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/// <reference path="../Util.ts" />
/// <reference path="../../JavaScriptSDK.Interfaces/Context/IOperation.ts" />

module Microsoft.ApplicationInsights.Context {
  'use strict';

  export class Operation implements IOperation {
    public id: string;
    public name: string;
    public parentId: string;
    public rootId: string;
    public syntheticSource: string;
    private hasCustomId: boolean;

    constructor() {
      if (!this.hasCustomId) {
        this.id = Util.newId();
      }
      if (window && window.location && window.location.pathname) {
        this.name = window.location.pathname;
      }
    }

    /**
     * Override default id with custom id
     * @param id custom id string
     */
    setCustomId(id: string) {
      this.id = id;
      this.hasCustomId = true;
    }

    /**
     * Reset custom id, continue using default id
     */
    resetCustomId() {
      this.id = null;
      this.hasCustomId = false;
    }
  }
}
