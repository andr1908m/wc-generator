
import { applyPolyfill,ReflowStrategy } from 'custom-elements-hmr-polyfill';
// no auto-reflow (web components won't update)
applyPolyfill(ReflowStrategy.RERENDER_INNER_HTML,500, (elementName: string) => {
    console.log('[Web Component code change] ', elementName);
});