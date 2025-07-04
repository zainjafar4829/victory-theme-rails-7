document.addEventListener('turbo:load', function() {
    (function ($) {
        'use strict';
        //Open submenu on hover in compact sidebar mode and horizontal menu mode
        $(document).on('mouseenter mouseleave', '.sidebar .nav-item', function (ev) {
            let body = $('body');
            let sidebarIconOnly = body.hasClass("sidebar-icon-only");
            let horizontalMenu = body.hasClass("horizontal-menu");
            let sidebarFixed = body.hasClass("sidebar-fixed");
            if (!('ontouchstart' in document.documentElement)) {
                if (sidebarIconOnly || horizontalMenu) {
                    if (sidebarFixed) {
                        if (ev.type === 'mouseenter') {
                            body.removeClass('sidebar-icon-only');
                        }
                    } else {
                        let $menuItem = $(this);
                        if (ev.type === 'mouseenter') {
                            $menuItem.addClass('hover-open')
                        } else {
                            $menuItem.removeClass('hover-open')
                        }
                    }
                }
            }
        });
    })(jQuery);
});

