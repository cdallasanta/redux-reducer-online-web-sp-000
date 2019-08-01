export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]};
    case "REMOVE_FRIEND":
      let filtered = state.friends.filter(friend => friend.id != action.friend)
      return {friends: filtered}
    default:
      return state;
  }
}
