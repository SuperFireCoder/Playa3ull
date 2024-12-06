import { Event } from '../../database/eventModel';

export class EventService {
  static async processEvent(event: { type: string; data: string }) {
    const newEvent = new Event();
    newEvent.type = event.type;
    newEvent.data = event.data;
    newEvent.created_at = new Date();

    await newEvent.save();
    return { id: newEvent.id, type: newEvent.type, data: newEvent.data };
  }
}
