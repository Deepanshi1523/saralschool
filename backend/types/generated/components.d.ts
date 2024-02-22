import type { Schema, Attribute } from '@strapi/strapi';

export interface HiCou extends Schema.Component {
  collectionName: 'components_hi_cous';
  info: {
    displayName: 'cou';
    icon: 'train';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hi.cou': HiCou;
    }
  }
}
