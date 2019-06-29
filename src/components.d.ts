/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AvatarColor {
    'nombre': string;
    'size': string;
  }
  interface AvatarColorAttributes extends StencilHTMLAttributes {
    'nombre'?: string;
    'size'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AvatarColor': Components.AvatarColor;
  }

  interface StencilIntrinsicElements {
    'avatar-color': Components.AvatarColorAttributes;
  }


  interface HTMLAvatarColorElement extends Components.AvatarColor, HTMLStencilElement {}
  var HTMLAvatarColorElement: {
    prototype: HTMLAvatarColorElement;
    new (): HTMLAvatarColorElement;
  };

  interface HTMLElementTagNameMap {
    'avatar-color': HTMLAvatarColorElement
  }

  interface ElementTagNameMap {
    'avatar-color': HTMLAvatarColorElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}