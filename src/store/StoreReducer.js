const initialStore={
    isBannerShown: false,
    isTopNavigationShown: true,
    isLeftPanelShown: false,
    isLeftSidebarShown: true,
    isMainShown: true,
    isRightSidebarShown: true,
    isRightPanelShown: false,
    isBannerFixed: false,
    isTopNavigationFixed: true,
    isLeftPanelFixed: false,
    isLeftPanelScrollable: false,
    isLeftSidebarFixed: true,
    isLeftSidebarScrollable: false,
    isMainScrollable: true,
    isMainExtraWide: false,
    isRightSidebarFixed: false,
    isRightSidebarScrollable: false,
    isRightPanelFixed: false,
    isRightPanelScrollable: false,
}

const StoreReducer = (state,action) =>{
    switch(action.type){
        default:
            return state;
    }
}

export {initialStore}
export default StoreReducer;