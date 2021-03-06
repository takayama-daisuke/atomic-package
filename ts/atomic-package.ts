/*
 * Author: Daisuke Takayama
 */
/// <reference path='_all.ts' />
/// <reference path='controller/atomic_package_controller.ts' />

'use strict';
var e = eval, global: NodeJS.Global = e('this');

declare namespace NodeJS {
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    AP: AtomicPackages.AtomicPackage;
  }
}


namespace AtomicPackages {
  /**
   * AtomicPackage Main Class
   * @public
  **/
  export class AtomicPackage {
    private static _instance: AtomicPackage = null;

    public modal: any;
    public btn: any;
    public tab: any;
    public switcher: any;
    public toggle: any;
    public sideMenu: any;
    public scroll: any;
    public dropdown: any;
    public scrollSpy: any;

    constructor(
      option?: any
      ) {
      if (AtomicPackage._instance) {
        return AtomicPackage._instance;

      } else {
        var controller = new AtomicPackages.Controller();

        this.modal     = controller.modal;
        this.btn       = controller.btn;
        this.tab       = controller.tab;
        this.switcher  = controller.switcher;
        this.toggle    = controller.toggle;
        this.sideMenu  = controller.sideMenu;
        this.scroll    = controller.smoothScroll;
        this.dropdown  = controller.dropdown;
        this.scrollSpy = controller.scrollSpy;

        AtomicPackage._instance = this;
      }
    }

    public getModel() {
      return AtomicPackages.Model;
    }

    public getController() {
      return AtomicPackages.Controller;
    }

    public getView() {
      return AtomicPackages.View;
    }
  }
}

if (typeof (module) !== 'undefined') {
  if (typeof (module).exports.AP === 'undefined') {
    (module).exports.AP = new AtomicPackages.AtomicPackage();
  }
}

if (typeof (global) !== 'undefined') {
  if (typeof global.AP === 'undefined') {
    global.AP = new AtomicPackages.AtomicPackage({});
  }
}
