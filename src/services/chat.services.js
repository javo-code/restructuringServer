import Services from "./class.services.js";
import ChatMongoDao from "../daos/mongodb/chat/chat.dao.js";
const chatDao = new ChatMongoDao();

export default class ChatService extends Services {
  constructor() {
    super(chatDao);
  }
}