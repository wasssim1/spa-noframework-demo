import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Link1");
    }

    async getHtml() {
        return `
            <h3>Link1</h3>
        `
    }
}
