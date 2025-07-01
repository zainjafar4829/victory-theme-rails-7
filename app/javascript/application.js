// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import $ from "jquery"
window.$ = $
window.jQuery = $

import './styles/application-v2.css'
// node packages(features)
import "jquery-bar-rating/dist/jquery.barrating.min.js"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "chart.js/dist/Chart.min.js"
import psLib from "perfect-scrollbar";
window.PerfectScrollbar = psLib?.default || psLib;
document.addEventListener("turbo:load", async () => {
    await import("jquery-sparkline");
    const raphael = await import("./vendor/raphael");
    window.Raphael = raphael.default || raphael;
    await import("./vendor/morris.js");
});
// custom js files
import "./js/off-canvas.js"
import "./js/hoverable-collapse.js"
import "./js/misc.js"
import "./js/settings.js"
import "./js/todolist.js"
import "./js/dashboard.js"


// document.addEventListener("turbo:load", () => {
//     const el = document.querySelector("#scroll-container");
//     if (el && window.PerfectScrollbar) {
//         new window.PerfectScrollbar(el);
//         console.log("PerfectScrollbar initialized!");
//     } else {
//         console.warn("PerfectScrollbar not found or element missing.");
//     }
// });