import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Link2");
    }

    async getHtml() {
        return `
            <h3>Link2</h3>
        `
    }
}
