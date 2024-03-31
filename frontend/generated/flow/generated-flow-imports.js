import '@vaadin/tooltip/theme/lumo/vaadin-tooltip.js';
import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/app-layout/theme/lumo/vaadin-drawer-toggle.js';
import '@vaadin/side-nav/theme/lumo/vaadin-side-nav.js';
import '@vaadin/side-nav/theme/lumo/vaadin-side-nav-item.js';
import '@vaadin/button/theme/lumo/vaadin-button.js';
import 'Frontend/generated/jar-resources/buttonFunctions.js';
import '@vaadin/scroller/theme/lumo/vaadin-scroller.js';
import '@vaadin/app-layout/theme/lumo/vaadin-app-layout.js';
import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/vaadin-lumo-styles/color-global.js';
import '@vaadin/vaadin-lumo-styles/typography-global.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === '6d34581aa17639cc535643503bcbebec5372698ec0573a5f0b31f2097d93419b') {
    pending.push(import('./chunks/chunk-1ef7df8a4db8317846adeed6ce52ee522a5cbbe4cdef981c6c9486dc735a4b21.js'));
  }
  if (key === '13dc930edfe64fcfa9c9c4a1313b571288a456eddfcb6dec6f4f911b5ff782c0') {
    pending.push(import('./chunks/chunk-1ef7df8a4db8317846adeed6ce52ee522a5cbbe4cdef981c6c9486dc735a4b21.js'));
  }
  if (key === '8b6665bdc9c9d79109b9787f98c71e32310e8cb23243b8af24c308be9da8f0eb') {
    pending.push(import('./chunks/chunk-1ef7df8a4db8317846adeed6ce52ee522a5cbbe4cdef981c6c9486dc735a4b21.js'));
  }
  if (key === 'ccef688c586ef28062d6bee5e2fd50bebe6023e2ee6e4a570b2ccaea4a0368c3') {
    pending.push(import('./chunks/chunk-1ef7df8a4db8317846adeed6ce52ee522a5cbbe4cdef981c6c9486dc735a4b21.js'));
  }
  if (key === '5b267336d034ab040e8d350d8a38b190b3b7a8148212c100832d48f454004db5') {
    pending.push(import('./chunks/chunk-1ef7df8a4db8317846adeed6ce52ee522a5cbbe4cdef981c6c9486dc735a4b21.js'));
  }
  return Promise.all(pending);
}

window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow.loadOnDemand = loadOnDemand;
window.Vaadin.Flow.resetFocus = () => {
 let ae=document.activeElement;
 while(ae&&ae.shadowRoot) ae = ae.shadowRoot.activeElement;
 return !ae || ae.blur() || ae.focus() || true;
}