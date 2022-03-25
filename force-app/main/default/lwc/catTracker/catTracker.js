import { LightningElement } from "lwc";
import { Redux } from "c/lwcRedux";
export default class CaTracker extends Redux(LightningElement) {
	connectedCallback() {
		super.connectedCallback();
	}
}
