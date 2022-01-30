/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
WA.onInit().then(() => {

    //
    // Room 1
    //
	WA.room.onEnterZone('room1_question', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("room1QuestionPopup", "Das Passwort ist die richtige Reihenfolge der Shader", []);
	})
	
	WA.room.onLeaveZone('room1_question', closePopUp);
	
	WA.room.onEnterZone('room1_answer1', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("room1_text", "Fragmentshader: 7", []);
	})
	
	WA.room.onLeaveZone('room1_answer1', closePopUp);
	
	WA.room.onEnterZone('room1_answer2', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("room1_text", "Vertexshader: 1", []);
	})
	
	WA.room.onLeaveZone('room1_answer2', closePopUp);
	
	WA.room.onEnterZone('room1_answer3', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("room1_text", "Geometryshader: 2", []);
	})
	
	WA.room.onLeaveZone('room1_answer3', closePopUp);

    //
    // Room 2
    //

	WA.room.onEnterZone('room2_questions', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("roomQuestionPopup", "Raum2! Die gesuchten Gegenstände sind: Prozessor, PSU, Motherboard", []);
	})
	
	WA.room.onLeaveZone('room2_questions', closePopUp);
	
	WA.room.onEnterZone('room2_questions2', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("room2AnswerPopup", "Die Aufgabe befindet sich im Spawn", []);
	})
	
	WA.room.onLeaveZone('room2_questions2', closePopUp);
	
	WA.room.onEnterZone('room2_zone1', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("room2AnswerPopup", "Prozessor: 5", []);
	})
	
	WA.room.onLeaveZone('room2_zone1', closePopUp);
	
	WA.room.onEnterZone('room2_zone2', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("room2AnswerPopup", "Motherboard: 2", []);
	})
	
	WA.room.onLeaveZone('room2_zone2', closePopUp);
	
	WA.room.onEnterZone('room2_zone3', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("room2AnswerPopup", "Graphicscard: 8", []);
	})
	
	WA.room.onLeaveZone('room2_zone3', closePopUp);
	
	WA.room.onEnterZone('room2_zone4', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("room2AnswerPopup", "PSU: 6", []);
	})
	
	WA.room.onLeaveZone('room2_zone4', closePopUp);
    //
    // Room 3
    //
	
	WA.room.onEnterZone('room3_questions', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("roomQuestionPopup", "Raum3! Das Passwort ist auf dem Bildschirm des sehr alten Monitors", []);
	})
	
	WA.room.onLeaveZone('room3_questions', closePopUp);
	
    //
    // Room 4
    //
	
	WA.room.onEnterZone('room4_questions', () => {
		if (currentPopup !== undefined) {
			currentPopup.close();
		}
		currentPopup = WA.ui.openPopup("room4QuestionPopup", "Das Passwort ist die Kombination an Inputs für das Logic gate welches 1 als Ausgabe hat", []);
	})
	
	WA.room.onLeaveZone('room4_questions', closePopUp);

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
		console.log("close");
        currentPopup.close();
        if (currentPopup !== undefined) {
            currentPopup.close();
        }
        currentPopup = undefined;
    }
}
