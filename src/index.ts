/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));


WA.onInit().then(() => {
    let currentPopup: any = undefined;

    //
    // Room 1
    //

    //
    // Room 2
    //

    //
    // Room 3
    //

    //
    // Room 4
    //

    //
    // Room 5
    //
    WA.room.onEnterLayer('room5/Statement1-1').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }

        currentPopup = WA.ui.openPopup('room5Popup', "Statement1-1: Wrong", []);
        WA.state.saveVariable('state', false).then();
    });

    WA.room.onLeaveLayer('room5/Statement1-1').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    });

    WA.room.onEnterLayer('room5/Statement1-2').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
        }
        currentPopup = WA.ui.openPopup("room5Popup", "Statement1-2: Right", []);
        WA.state.saveVariable('state', true).then();
    });

    WA.room.onLeaveLayer('room5/Statement1-2').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    });

    WA.room.onEnterLayer('room5/Statement3-1').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
        }
        currentPopup = WA.ui.openPopup("room5Popup", "Statement3-1: Right", []);
        WA.state.saveVariable('state', true).then();
    });

    WA.room.onLeaveLayer('room5/Statement3-1').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    });

    WA.room.onEnterLayer('room5/Statement3-2').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
        }
        currentPopup = WA.ui.openPopup("room5Popup", "Statement3-2: Wrong", []);
        WA.state.saveVariable('state', false).then();
    });

    WA.room.onLeaveLayer('room5/Statement3-2').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    });


    WA.room.onEnterLayer('room5/Statement5-1').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
        }
        currentPopup = WA.ui.openPopup("room5Popup", "Statement5-1: Wrong", []);
        WA.state.saveVariable('state', false).then();
    });

    WA.room.onLeaveLayer('room5/Statement5-1').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    });

    WA.room.onEnterLayer('room5/Statement5-2').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
        }
        currentPopup = WA.ui.openPopup("room5Popup", "Statement5-2: Right", []);
        WA.state.saveVariable('state', true).then();
    });

    WA.room.onLeaveLayer('room5/Statement5-2').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    });

    WA.room.onEnterLayer('room5/Statement7-1').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
        }
        currentPopup = WA.ui.openPopup("room5Popup", "Statement7-1: Right", []);
        WA.state.saveVariable('state', true).then();
    });

    WA.room.onLeaveLayer('room5/Statement7-1').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    });

    WA.room.onEnterLayer('room5/Statement7-2').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
        }
        currentPopup = WA.ui.openPopup("room5Popup", "Statement7-2: Wrong", []);
        WA.state.saveVariable('state', false).then();
    });

    WA.room.onLeaveLayer('room5/Statement7-2').subscribe(() => {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    });


    WA.room.onEnterLayer('room5/submit').subscribe(() => {
        console.log("State: " + WA.state.loadVariable('state'));

        if (WA.state.loadVariable('state')) {
            WA.chat.sendChatMessage("Alle Anworten correkt!", 'Mr Robot');

            // ToDo open Door ...

        } else {
            WA.chat.sendChatMessage("Es sind nicht alle Anworten correkt!", 'Mr Robot');
        }
    });

    //
    // Room 6
    //

});


let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.room.onEnterZone('clock', () => {
    if (currentPopup !== undefined) {
        currentPopup.close();
    }
    currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
})

WA.room.onLeaveZone('clock', closePopUp)

function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        if (currentPopup !== undefined) {
            currentPopup.close();
        }
        currentPopup = undefined;
    }
}
