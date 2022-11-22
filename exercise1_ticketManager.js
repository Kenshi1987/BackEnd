class TicketManager {

    #precioBaseDeGanancia
    constructor () {
        this.events= []
        this.#precioBaseDeGanancia= 0.15

    }

    getEvents =() => {return this.events}
    getNextID = () => {
        const count = this.events.length
        if (count ==0) return 1

        const lastEvent = this.events[count-1]
        const lastID = lastEvent.id

        const nextID = lastID + 1
        return nextID
    }

    addEvent = (name,place,price,capacity,date) => {

        const id = this.getNextID ()

        const event = {
            id,
            name,
            place,
            price: price * (1 + this.#precioBaseDeGanancia),
            capacity: capacity ?? 50,
            date: date ?? new Date ().toLocaleDateString(),
            participants: []
        }

        this.events.push (event)
    }

    addParticipant = (eventID, userID) => {
        const event = this.events.find(event => event.id == eventID)
        if (event == undefined) return -1
        if (!event.participants.includes (userID)){
            event.participants.push(userID)
            return 1
        }
        return -1
    }

    ponerEventoEnGira = (eventID, placeNew, dateNew) => {
        const event = this.events.find(event => event.id == eventID)
        const newEvent = {
            id: this.getNextID (),
            place: placeNew,
            date: dateNew,
            

        }

    }
}

const manager = new TicketManager ()
manager.addEvent ('Heroes del Silencio','BSAS', 1500, 0, 0)
manager.addEvent ('David Guetta','BSAS', 1500, 0, 0)

console.log(manager.addParticipant(1,123));
console.log(manager.addParticipant(1,124));
console.log(manager.addParticipant(1,125));
console.log(manager.addParticipant(1,126));
console.log(manager.addParticipant(1,123));
console.log(manager.events);