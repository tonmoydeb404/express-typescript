import generateUnique from "@/utils/generate-uniqe";
import generateUsername from "@/utils/generate-username";

class roomDB {
  private rooms: string[] = [];

  // Add a room
  addRoom() {
    const roomId = generateUnique(generateUsername, this.rooms);
    this.rooms.push(roomId);
    console.log(`New Room Created: ${roomId}`);

    return roomId;
  }

  // Remove a room
  removeRoom(id: string) {
    this.rooms = [...this.rooms].filter((r) => r !== id);
    console.log(`Room Removed: ${id}.`);
  }

  // Get rooms
  getRooms() {
    return this.rooms;
  }

  // Find room
  findRoom(id: string) {
    return this.rooms.find((r) => r === id);
  }
}

export default roomDB;
