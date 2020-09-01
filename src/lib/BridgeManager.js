import ComponentManager from 'sn-components-api';

export default class BridgeManager {

  /* Singleton */
  static instance = null;
  static get() {
    if (this.instance == null) { this.instance = new BridgeManager(); }
    return this.instance;
  }

  constructor() {
    this.updateObservers = [];
    this.initiateBridge();
  }

  addUpdateObserver(callback) {
    let observer = { callback: callback };
    this.updateObservers.push(observer);
    return observer;
  }

  notifyObserversOfUpdate() {
    for (var observer of this.updateObservers) {
      observer.callback();
    }
  }

  getNote() {
    return this.note;
  }

  initiateBridge() {
    var permissions = [
      {
        name: "stream-context-item"
        // name: "stream-items"
      }
    ]

    this.componentManager = new ComponentManager(permissions, function () {
      // on ready
    });

    this.componentManager.streamContextItem((item) => {
      this.note = item;
      this.notifyObserversOfUpdate();
    })
  }

  save() {
    if (this.note) {
      // Be sure to capture this object as a variable, as this.note may be reassigned in `streamContextItem`, so by the time
      // you modify it in the presave block, it may not be the same object anymore, so the presave values will not be applied to
      // the right object, and it will save incorrectly.
      let note = this.note;
      if (note.content && note.content.text) {
        note.content.text = note.content.text.replace(/\n\\/g, '\n');
      }
      this.componentManager.saveItemWithPresave(note, () => {
        note = this.note ;
      });
    }
  }

}