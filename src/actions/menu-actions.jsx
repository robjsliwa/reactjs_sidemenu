import MenuConstants from '../constants/menu-constants';
import MainDispatcher from '../dispatcher/main-dispatcher';

class MenuActions {
  openMenu() {
    MainDispatcher.dispatch({
      actionType: MenuConstants.MENU_ON_SELECT,
      data: {
        isVisible: true,
      },
    });
  }

  closeMenu() {
    MainDispatcher.dispatch({
      actionType: MenuConstants.MENU_ON_SELECT,
      data: {
        isVisible: false,
      },
    });
  }
}

const menuActions = new MenuActions();

export default menuActions;
