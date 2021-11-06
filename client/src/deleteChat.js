// Delete chat

import { Chats } from './chats.js';

const deleteChat = (chatId) => {
  Meteor.call('chats.remove', chatId);
};

<div className="delete-chat">
  <button className="delete-chat__button" onClick={() => deleteChat(chat._id)}>
    <i className="fas fa-trash-alt"></i>
  </button>
</div>

void deleteChat;
export { deleteChat };
export default deleteChat;
