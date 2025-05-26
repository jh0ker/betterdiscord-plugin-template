import React from 'react';
import type { Meta, Plugin, PluginClass } from 'betterdiscord';
import { BoundBdApi } from 'betterdiscord';

module.exports = class implements Plugin {
  private meta: Meta;
  private bdApi: BoundBdApi;

  constructor(meta: Meta) {
    this.meta = meta;
    this.bdApi = new BdApi('TemplatePlugin');
  }

  start(): void {
    this.bdApi.UI.alert('Hello World!', <div>Hello World!</div>);
  }

  stop(): void {
    this.bdApi.Patcher.unpatchAll();
  }
} satisfies PluginClass;  // Ensures BetterDiscord gets the expected constructor signature
