import { EventEmitter } from 'events';
import MainDispatcher from '../dispatcher/main-dispatcher';
import MenuConstants from '../constants/menu-constants';

class MenuStore extends EventEmitter {
  constructor() {
    super();
    this.menuData = {
      isVisible: false
    }
  }

  emitChange() {
    this.emit(MenuConstants.MENU_STATE_CHANGED);
  }

  addChangeListener(callback) {
    this.on(MenuConstants.MENU_STATE_CHANGED, callback);
  }

  removeChangeListener(callback) {
    this.removeChangeListener(MenuConstants.MENU_STATE_CHANGED, callback);
  }

  updateMenuState(data) {
    this.menuData.isVisible = data.isVisible;
    this.emitChange();
  }

  get isVisible() {
    return this.menuData.isVisible;
  }
}

const menuStore = new MenuStore();

menuStore.dispatchToken = MainDispatcher.register((action) => {
  if (action.actionType === MenuConstants.MENU_ON_SELECT) {
    menuStore.updateMenuState(action.data);
  }
});

export default menuStore;
