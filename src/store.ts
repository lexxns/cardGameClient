import { writable } from 'svelte/store';
import { cardData, HandData } from './Structs';
import type { FieldData } from './Structs';
import neffos from 'neffos.js';
const SERVER = "localhost:8080";
const GAME = "/game";


const handStore = writable<HandData>({hand:[]});
const fieldStore = writable<FieldData>({field:[]});

class RS {
    hand: CD[];
    field: CD[];
}

class CD {
    name: string
}

async function dial(endpoint:string) {
    const conn = await neffos.dial(SERVER + endpoint, { v1: {
        _OnNamespaceConnected: function (nsConn, msg) {
            console.log("Connected to namespace: " + msg.Namespace);
        },
        _OnNamespaceDisconnect: function (nsConn, msg) {
            console.log("Disconnected from namespace: " + msg.Namespace);
        },
        _OnRoomJoined: function (nsConn, msg) {
            console.log("Joined room: " + msg.Room);
        },
        room: function(nsConn, msg) {
            console.log(msg);
            nsConn.joinRoom(msg.Body);
        },
        state: function(nsConn, msg) {
            var rs: RS = JSON.parse(msg.Body);
            console.log(rs);
            var hand = { hand: rs.hand.map(it => cardData(it.name)) };
            var field = { field: rs.field.map(it => cardData(it.name)) };
            console.log(hand);
            handStore.set(hand);
            fieldStore.set(field);
        }
    }});

    const nsConn = await conn.connect("v1");
    nsConn.emit("echo", "Greetings!");
}

try {
    dial(GAME);
} catch (err) {
    console.log(err);
}

// socket.addEventListener('open', function (event) {
//     console.log('ws open');
// });

// socket.addEventListener('message', function (event) {
//     console.log('Message from server', event.data);
//     const gd: GameData = JSON.parse(event.data);
//     handStore.set(gd.hand);
//     fieldStore.set(gd.field);
// });

// const sendMessage = (message) => {
//     if (socket.readyState <= 1) {
//         socket.send(message);
//     }
// }

export default {
    subscribeHand: handStore.subscribe,
    subscribeField: fieldStore.subscribe,
    //sendMessage
}