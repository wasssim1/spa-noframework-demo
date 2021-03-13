import Home from "./views/Home.js";
import Link1 from "./views/Link1.js";
import Link2 from "./views/Link2.js";
import NotFound404 from "./views/NotFound404.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path: "/", view: Home},
        {path: "/link1", view: Link1},
        {path: "/link2", view: Link2},
        {path: "/404", view: NotFound404},
    ];

    const matches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = matches.find(m => m.isMatch);

    if (!match) {
        match = {
            route: routes.find(r => r.path === "/404"),
            isMatch: true
        };
        navigateTo(match.route.path);
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    // console.log(match.route.view())
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })

    router();
});

