/* eslint-disable */

$(function () {
    /* mainLi mouseover시 subMenu 발생1 - 시작 */
        $("li.mainLi").mouseover(function () {
            $("ul.subMenu").css({
                "visibility": "visible"
            });
            $("div#headerGnbBG").css({
                "display": "block"
            });
        });

        $("li.mainLi").mouseout(function () {
                    $("ul.subMenu").css({
                        "visibility": "hidden"
                    });
                    $("div#headerGnbBG").css({
                        "display": "none"
                    });    });
    /* mainLi mouseover시 subMenu 발생1 - 끝 */
});
