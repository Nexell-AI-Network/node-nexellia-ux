export * from './flow-ux.js';

import {NexelliaWalletDesktop} from './nexellia-wallet-desktop.js';
import {NexelliaWalletMobile, isMobile, dontInitiatedComponent} from './nexellia-wallet-mobile.js';

if(isMobile)
	document.body.classList.add('is-mobile');
export {isMobile}

export const NexelliaWallet = isMobile ? NexelliaWalletMobile : NexelliaWalletDesktop;

if(!dontInitiatedComponent)
	NexelliaWallet.define("nexellia-wallet");
