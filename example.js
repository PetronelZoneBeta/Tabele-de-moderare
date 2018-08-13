/**
 * Title         : Tabele Moderare Staff
 * Version       : 2.0.0
 * Author        : Lucifer | Update
 * Author URI    : http://help.forumgratuit.ro
 * License       : GNU - General Public License v3.0
 * Documentation : 
 * Last update   : May 28, 2017 at 16:03
 */

var zModConfig = [{
    icon: "https://i58.servimg.com/u/f58/11/80/17/98/chat-110.png",
    source : "",
    loadCss: true,
    fontAwesome: true
}];

var zModTabels = [{
        type: "Topic Inactiv",
        body_start: '[table    class="trame admin"][tr][td class="_l"].[img]https://i.imgur.com/uUqryIu.png[/img].[/td][td class="_m"]',
        body_end: "[/div][/td][/tr][/table]\n\n"
    },
    {
        type: "zsuccess",
        body_start: '[table class="zmod_box zsuccess"][tr][td style="padding-right: 10px;" width="60px;"][icon="fa fa-check"][/icon][div]',
        body_end: "[/div][/td][/tr][/table]\n\n"
    },
    {
        type: "zdefault",
        body_start: '[table class="zmod_box zdefault"][tr][td style="padding-right: 10px;" width="60px;"][icon="fa fa-rocket"][/icon][div]',
        body_end: "[/div][/td][/tr][/table]\n\n"
    },
    {
        type: "zwarning",
        body_start: '[table class="zmod_box zwarning"][tr][td style="padding-right: 10px;" width="60px;"][icon="fa fa-exclamation-triangle"][/icon][div]',
        body_end: "[/div][/td][/tr][/table]\n\n"
    },
    {
        type: "zinfo",
        body_start: '[table class="zmod_box zinfo"][tr][td style="padding-right: 10px;" width="60px;"][icon="fa fa-info"][/icon][div]',
        body_end: "[/div][/td][/tr][/table]\n\n"
    }
];

var zModMessages = [{
        name: "Topic Inactiv",
        message: 'Drag Membru,Avand in vedere ca in ultimele 2 saptamani nu ai mai aratat interes pentru acesta problema, topicul va fi inchis si trimis in cos. Daca problema nu a fost rezolvata, va invitam sa deschideti un nou topic, in sectiunea corespunzatoare si avind un titlu explicit.
Ne vedem pe [b][color=#3399CC]Forum[/color][color=#333333]gratuit[/color][/b]  :bye: [/td][/tr][tr][td class="_b" colspan="2"][/td][/tr][/table]',
        group_id: 0,
        type: "Topic Inactiv"
    },
    {
        name: "Success example",
        message: '[b]Success[/b] \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        group_id: 0,
        type: "zsuccess"
    },
    {
        name: "Default example",
        message: '[b]Default[/b] \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        group_id: 1,
        type: "zdefault"
    },
    {
        name: "Warning example",
        message: '[b]Warning[/b] \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        group_id: 1,
        type: "zwarning"
    },
    {
        name: "Info example",
        message: '[b]Info[/b] \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        group_id: 1,
        type: "zinfo"
    }
];

var zModGroups = [{
        id: 0,
        name: 'Administrators'
    },
    {
        id: 1,
        name: 'Moderators'
    }
];

$.getScript( zModConfig[0].source, function(textStatus) {
    console.log( "zModStatus:" + textStatus);
});
