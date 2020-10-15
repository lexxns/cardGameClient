import { writable } from 'svelte/store';
import { cardData, HandData } from './Structs';
import type { FieldData } from './Structs';
import neffos from 'neffos.js';
const SERVER = "localhost:8080";
const ECHO = "/echo";


const handStore = writable<HandData>({hand:[]});
const fieldStore = writable<FieldData>({field:[]});

async function dial(endpoint:string) {
    const conn = await neffos.dial(SERVER + endpoint, { v1: {
        echo: function(nsConn, msg) {
            var hand = { hand: [
                cardData(msg.Body)
            ]}
            console.log(hand);
            handStore.set(hand)
        }
    }});

    const nsConn = await conn.connect("v1");
    nsConn.emit("echo", "Greetings!");
}

try {
    dial(ECHO);
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
    subscribe: handStore.subscribe,
    //sendMessage
}