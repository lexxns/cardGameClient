import { writable } from 'svelte/store';
import neffos from 'neffos.js';
import type { CardData } from './Structs';
const SERVER = "localhost:8080";
const GAME = "/game";

export class RS {
    cards: Map<string,CardData>;
}

const store = writable<CardData[]>([]);

async function dial(endpoint:string) {
    const conn = await neffos.dial(SERVER + endpoint, { v1: {
        _OnNamespaceConnected: function (_, msg) {
            console.log("Connected to namespace: " + msg.Namespace);
        },
        _OnNamespaceDisconnect: function (_, msg) {
            console.log("Disconnected from namespace: " + msg.Namespace);
        },
        _OnRoomJoined: function (_, msg) {
            console.log("Joined room: " + msg.Room);
        },
        room: function(nConn, msg) {
            console.log(msg);
            nConn.joinRoom(msg.Body);
        },
        state: function(_, msg) {
            var rs: RS = JSON.parse(msg.Body);
            console.log(rs);
            var cards = Object.keys(rs.cards).map(function(key) {
                return rs.cards[key];
            });
            store.set(cards);
        }
    }});

    const nsConn = await conn.connect("v1");
    nsConn.emit("echo", "Greetings!");
}

dial(GAME).catch(err => console.log(err));

export default {
    subscribe: store.subscribe
}